import { SystemContext } from "./system-context";
import { getNextAction } from "./get-next-action";
import { type StreamTextResult, type Message, type streamText } from "ai";
import { answerQuestion } from "./answer-question";
import { searchSerper } from "~/serper";
import { bulkCrawlWebsites } from "~/crawler";
import { env } from "~/env";
import type { OurMessageAnnotation } from "../deep-search.service";
import { summarizeURL } from "~/app/utils/summarize-url";

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
    // We choose the next action based on the state of our system
    const nextAction = await getNextAction(ctx, {
      langfuseTraceId: opts.langfuseTraceId,
    });

    console.log("Next action: ", nextAction.type);

    // Send the action as an annotation if writeMessageAnnotation is provided
    if (opts.writeMessageAnnotation) {
      opts.writeMessageAnnotation({
        type: "NEW_ACTION",
        action: nextAction,
      });
    }

    // We execute the action and update the state of our system
    if (nextAction.type === "search") {
      if (!nextAction.query) {
        throw new Error("Query is required for search action");
      }
      // 1. Search the web
      const searchResults = await searchSerper(
        { q: nextAction.query, num: env.SEARCH_RESULTS_COUNT },
        undefined,
      );

      const searchResultUrls = searchResults.organic.map(
        (result) => result.link,
      );

      // 2. Scrape the results
      const crawlResults = await bulkCrawlWebsites({ urls: searchResultUrls });

      // Summarize each scraped result in parallel
      const summaries = await Promise.all(
        searchResults.organic.map(async (result) => {
          const crawlData = crawlResults.success
            ? crawlResults.results.find((el) => el.url === result.link)
            : undefined;

          const scrapedContent = crawlData?.result.success
            ? crawlData.result.data
            : "Failed to scrape";

          if (scrapedContent === "Failed to scrape") {
            return {
              ...result,
              summary: "Failed to scrape",
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
            query: nextAction.query!,
            langfuseTraceId: opts.langfuseTraceId,
          });

          return {
            ...result,
            summary,
          };
        }),
      );

      //4. Report the combined results
      ctx.reportSearch({
        query: nextAction.query,
        results: summaries.map((result) => ({
          date: result.date ?? new Date().toISOString(),
          title: result.title,
          url: result.link,
          snippet: result.snippet,
          summary: result.summary,
        })),
      });
    } else if (nextAction.type === "answer") {
      return answerQuestion(ctx, { isFinal: false, ...opts });
    }

    // We increment the step counter
    ctx.incrementStep();
  }

  // If we've taken 10 actions and haven't answered yet,
  // we ask the LLM to give its best attempt at an answer
  return answerQuestion(ctx, { isFinal: true, ...opts });
}
