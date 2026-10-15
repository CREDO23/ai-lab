# Observations · 01 Improved agent with observability

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**A hand-written crawler is small, but you own its gaps.** `src/crawler/` handles `robots.txt`, retries, main-content extraction and caching. But it reads raw HTML (`fetch` + cheerio), so content rendered by JavaScript never reaches the model. A hosted crawler like Firecrawl covers more cases; owning yours means maintaining every fix.

**Give the model today's date.** It doesn't know it, so it can't tell whether a result is recent. Put the date in the system prompt for any time-sensitive task.

**Snippets are thin; full pages are expensive.** The prompt asks for 4–6 scraped pages instead of snippets, so every page lands in the context window. Stage 05 summarises pages to cut that.

**Trace the whole request, not only the LLM call.** Langfuse spans wrap the request-limit check, chat creation and history saving, so one trace shows where a slow or failed request spent its time.
