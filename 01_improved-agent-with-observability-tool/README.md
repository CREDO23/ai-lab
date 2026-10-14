# 01 · Improved agent with observability

**Goal:** see what the agent does on each request (Langfuse tracing), and let it read full pages instead of search snippets.

## What changed from [00](../00_naive-agent/)

- Langfuse tracing. [`src/instrumentation.ts`](src/instrumentation.ts) registers the Langfuse exporter for AI SDK telemetry. The chat route creates one trace per request, with spans around the request-limit check, chat creation or ownership check, saving the history and recording the request.
- A new `scrapePages` tool backed by a hand-written crawler in [`src/crawler/`](src/crawler/). It checks `robots.txt`, fetches with retries and exponential backoff, extracts the main content with cheerio and converts it to Markdown with turndown. Results are cached in Redis.
- The system prompt now includes the current date. It tells the model to search, pick 4–6 diverse URLs and scrape them, instead of relying on search snippets.
- Search results now include their publication date.
- The daily request is recorded in `onFinish`, after the answer is saved, instead of before streaming starts.

## Key files

- [`src/app/api/chat/route.ts`](src/app/api/chat/route.ts): trace and spans, the new prompt, and the `scrapePages` tool
- [`src/crawler/index.ts`](src/crawler/index.ts): `crawlWebsite` and `bulkCrawlWebsites`
- [`src/instrumentation.ts`](src/instrumentation.ts): OpenTelemetry setup with the Langfuse exporter

## How to run

Follow [How to run a stage](../README.md#how-to-run-a-stage) in the root README, inside this folder. From this stage on, `LANGFUSE_SECRET_KEY`, `LANGFUSE_PUBLIC_KEY` and `LANGFUSE_BASEURL` are required: the app won't start without them.

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
