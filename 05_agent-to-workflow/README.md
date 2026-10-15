# 05 · From agent to workflow

**Goal:** turn the agent loop into a fixed workflow, where each iteration always plans, searches, scrapes and summarises, then decides whether to continue.

## What changed from [04](../04_agent-architecture-through-task-decomposition/)

- Every iteration runs the same steps: query rewriter → parallel searches → scrape → summarise → decide.
- **Query rewriter** ([`query-rewriter.ts`](src/app/utils/query-rewriter.ts)): writes a research plan and 3–5 search queries from the conversation and the search history so far.
- The queries run in parallel. Each one fetches 2 Serper results, which are scraped and summarised.
- **Summariser** ([`summarize-url.ts`](src/app/utils/summarize-url.ts)): condenses each scraped page for the query and conversation, using `gemini-2.0-flash-lite`. Summaries are cached in Redis, and the context now keeps summaries instead of full pages.
- The next-action step only chooses between `continue` and `answer`, because searching and scraping are no longer separate actions. The reasoning steps show "Continuing search..." or "Answering".
- `SystemContext` merges the query and scrape history into one search history: each query with its results, snippets and summaries.

**Known issues**

- `SEARCH_RESULTS_COUNT` is still validated but no longer used: the number of results per query is hard-coded to 2 in `run-agent-loop.ts`.
- The next-action prompt asks for "detailed feedback about what's missing", but the schema has no field for it yet. That field arrives in [06](../06_advanced-patterns/).

## Key files

- [`src/app/api/services/system-prompt/run-agent-loop.ts`](src/app/api/services/system-prompt/run-agent-loop.ts): the workflow
- [`src/app/utils/query-rewriter.ts`](src/app/utils/query-rewriter.ts): plan and queries
- [`src/app/utils/summarize-url.ts`](src/app/utils/summarize-url.ts): per-page summaries
- [`src/app/api/services/system-prompt/get-next-action.ts`](src/app/api/services/system-prompt/get-next-action.ts): continue or answer
- [`src/app/api/services/system-prompt/system-context.ts`](src/app/api/services/system-prompt/system-context.ts): search history
- [`src/models/index.ts`](src/models/index.ts): adds the summariser model

## How to run

Same as [04](../04_agent-architecture-through-task-decomposition/): follow [How to run a stage](../README.md#how-to-run-a-stage), and use `pnpm db:push`.

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
