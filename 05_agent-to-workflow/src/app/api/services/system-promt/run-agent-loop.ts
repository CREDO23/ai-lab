import { SystemContext } from "./system-context";
import { getNextAction } from "./get-next-action";
import { type StreamTextResult, type Message, type streamText } from "ai";
import { answerQuestion } from "./answer-question";
import { searchSerper } from "~/serper";
import { bulkCrawlWebsites } from "~/crawler";
import type { OurMessageAnnotation } from "../deep-search.service";
import { summarizeURL } from "~/app/utils/summarize-url";
import { queryRewriter } from "~/app/utils/query-rerwiter";
import { env } from "~/env";

export async function runAgentLoop(
  messages: Message[],
  opts: {
    writeMessageAnnotation?: (annotation: OurMessageAnnotation) => void;
    langfuseTraceId?: string;
    onFinish: Parameters<typeof streamText>[0]["onFinish"];
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
): Promise<StreamTextResult<{}, string>> {
  // A persistent container for the state of our system
  const ctx = new SystemContext(messages);

  // A loop that continues until we have an answer
  // or we've taken 10 actions
  while (!ctx.shouldStop()) {
    // 1. Get the plan and queries
    const { queries } = await queryRewriter(ctx, opts);

    // 2. Execute all queries in parallel
    const searchResultsPromises = queries.map(async (query) => {
      const searchResults = await searchSerper(
        { q: query, num: 2 },
        undefined,
      );

      return {
        query,
        results: searchResults.organic,
      };
    });

    // 3. Wait for all search results
    const allSearchResults = await Promise.all(searchResultsPromises);

    // 4. Process each query's results
    const processPromises = allSearchResults.map(async ({ query, results }) => {
      const searchResultUrls = results.map((r) => r.link);

      // Scrape the results
      const crawlResults = await bulkCrawlWebsites({ urls: searchResultUrls });

      // Summarize each scraped result in parallel
      const summaries = await Promise.all(
        results.map(async (result) => {
          const crawlData = crawlResults.success
            ? crawlResults.results.find((cr) => cr.url === result.link)
            : undefined;

          const scrapedContent = crawlData?.result.success
            ? crawlData.result.data
            : "Failed to scrape.";

          if (scrapedContent === "Failed to scrape.") {
            return {
              ...result,
              summary: "Failed to scrape, so no summary could be generated.",
            };
          }

          const summary = await summarizeURL({
            conversation: ctx.getMessageHistory(),
            scrapedContent,
            searchMetadata: {
              date: result.date ?? new Date().toISOString(),
              title: result.title,
              url: result.link,
            },
            query,
            langfuseTraceId: opts.langfuseTraceId,
          });

          return {
            ...result,
            summary,
          };
        }),
      );

      // Report the summaries to the system context
      ctx.reportSearch({
        query,
        results: summaries.map((summaryResult) => ({
          date: summaryResult.date ?? new Date().toISOString(),
          title: summaryResult.title,
          url: summaryResult.link,
          snippet: summaryResult.snippet,
          summary: summaryResult.summary,
        })),
      });
    });

    // 5. Wait for all processing to complete
    await Promise.all(processPromises);

    // 6. Decide the next action based on the state of our system
    const nextAction = await getNextAction(ctx,opts);

    // Send the action as an annotation if writeMessageAnnotation is provided
    if (opts.writeMessageAnnotation) {
      opts.writeMessageAnnotation({
        type: "NEW_ACTION",
        action: nextAction,
      });
    }

    if (nextAction.type === "answer") {
      return answerQuestion(ctx, { isFinal: false, ...opts });
    }

    // We increment the step counter
    ctx.incrementStep();
  }

  // If we've taken 10 actions and haven't answered yet,
  // we ask the LLM to give its best attempt at an answer
  return answerQuestion(ctx, { isFinal: true, ...opts });
}
