# ai-lab

A learning lab where I build a deep-search AI agent step by step. It starts as a chat agent with one web-search tool and ends as an evaluated workflow that plans its searches, summarises its sources and checks what's still missing before it answers.

## How it's organised

Each numbered folder is a full, independent copy of the app at one stage. You can run any stage on its own, and compare two stages to see exactly what changed:

```bash
git diff --no-index --stat 03_evals-with-llm-as-a-judge-and-datasets/src 04_agent-architecture-through-task-decomposition/src
git diff --no-index        03_evals-with-llm-as-a-judge-and-datasets/src 04_agent-architecture-through-task-decomposition/src
```

Each stage has its own README (what changed and the key files) and `observations.md` (what that stage taught). Notes about the whole progression are in [OBSERVATIONS.md](OBSERVATIONS.md).

| Stage | What it adds |
|---|---|
| [00 · Naive agent](00_naive-agent/) | Chat agent with a Serper web-search tool; message parts and tool calls shown in the UI; Discord sign-in; a per-user daily request limit; chats and messages saved in Postgres |
| [01 · Observability](01_improved-agent-with-observability-tool/) | Langfuse tracing with spans around database steps; a hand-written crawler and `scrapePages` tool; today's date in the prompt |
| [02 · Evals](02_agent-with-evals-tests/) | Agent moved into a service so it can be tested; a first evalite eval (does the answer contain links?); a global Redis rate limiter |
| [03 · LLM-as-a-judge](03_evals-with-llm-as-a-judge-and-datasets/) | Factuality and answer-relevancy judges; DEV, CI and regression datasets; search result count from env |
| [04 · Task decomposition](04_agent-architecture-through-task-decomposition/) | An explicit agent loop (search, scrape or answer, one step at a time); smoothed streaming; reasoning steps in the UI, saved with the message; Langfuse tracing per step; model-generated chat titles |
| [05 · Agent to workflow](05_agent-to-workflow/) | A fixed workflow per iteration: query rewriter → parallel search → scrape → summarise with a smaller model → continue or answer |
| [06 · Advanced patterns](06_advanced-patterns/) | An evaluator that says what's missing and feeds it into the next search. Guardrails, a clarifying-question step and a usage display are planned but not built. |

**Stack:** Next.js 15, TypeScript, Vercel AI SDK 4 with Google Gemini (`@ai-sdk/google`), Serper for search, Postgres with Drizzle, Redis, NextAuth (Discord), Langfuse, and evalite with Vitest.

## How to run a stage

**Prerequisites**

- Node.js 22. On Node 24, `pnpm install` has to compile `better-sqlite3` (used by evalite) from source, which needs node-gyp build tools; Node 22 downloads a prebuilt binary.
- pnpm. Each `package.json` pins pnpm 9.12.3, and recent pnpm versions (and corepack) switch to it automatically.
- Docker, for Postgres and Redis.
- API keys and accounts:
  - a Google AI Studio key (Gemini)
  - a Serper key
  - a Discord OAuth app, with redirect URL `http://localhost:3000/api/auth/callback/discord`
  - Langfuse keys, from stage 01 on

**Steps**, inside the stage folder:

```bash
cp .env.example .env    # then fill in the empty values
./start-database.sh     # Postgres in Docker
./start-redis.sh        # Redis in Docker
pnpm install
pnpm db:push            # create or update the tables
pnpm dev                # http://localhost:3000
```

Use `pnpm db:push`, not `pnpm db:migrate`: the migration files in each `drizzle/` folder are out of date, and `db:migrate` fails on a fresh database.

From stage 02 on, `pnpm evals` runs the evals. From stage 03 on, set `EVAL_DATASET` to `DEV`, `CI` or `REGRESSION`. Evals call the real agent, so they need the same keys and services as the app.

All stages use the same Docker containers and database, so run one stage at a time. Each stage's README lists anything else specific to it.

## What I learned

- **Storing AI SDK messages as JSON is the easy path, but it ties the database to the SDK.** The schema then depends on what the AI SDK expects. ([00](00_naive-agent/observations.md), `message.ts`)
- **A hand-written crawler is lean but costly to own.** It does only what the app needs (robots.txt, retries, main-content extraction), but all that code is now mine to maintain. Firecrawl does more out of the box. ([01](01_improved-agent-with-observability-tool/observations.md), `src/crawler/`)
- **Evals start with making the agent callable outside the route.** The first scorer was a cheap deterministic link check. The LLM judges that followed are constrained: the factuality judge picks a category that maps to a fixed score, and relevancy is averaged statement by statement. ([02](02_agent-with-evals-tests/observations.md), [03](03_evals-with-llm-as-a-judge-and-datasets/observations.md), `src/evals/judges/`)
- **Context is the budget to manage.** Search results are passed to the model as Markdown text rather than JSON, which wastes tokens on braces and quotes. Scraped pages are summarised by a smaller model before the main model reads them. ([04](04_agent-architecture-through-task-decomposition/observations.md) `system-context.ts`, [05](05_agent-to-workflow/observations.md) `summarize-url.ts`)
- **An open agent loop generalises; a workflow is more predictable and runs more in parallel.** Moving to plan → parallel search → summarise made each iteration's steps fixed, though the model still decides when to stop. ([05](05_agent-to-workflow/observations.md), `run-agent-loop.ts`, `query-rewriter.ts`)
- **An evaluator gives the next search a target.** Instead of re-planning from the history alone, the next query rewrite gets explicit feedback on what's missing. ([06](06_advanced-patterns/observations.md), `get-next-action.ts`)
