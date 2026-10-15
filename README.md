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

`pnpm db:migrate` also works on a new, empty database. Use one or the other: `db:migrate` on a database created with `db:push` fails and changes nothing.

From stage 02 on, `pnpm evals` runs the evals. From stage 03 on, set `EVAL_DATASET` to `DEV`, `CI` or `REGRESSION`. Evals call the real agent, so they need the same keys and services as the app.

All stages use the same Docker containers and database, so run one stage at a time. Each stage's README lists anything else specific to it.

## What I learned

- **Storing AI SDK messages as JSON is quick, but it ties your data to the SDK version.** ([00](00_naive-agent/observations.md))
- **A hand-written crawler is small, but you own its gaps**, such as pages rendered by JavaScript. ([01](01_improved-agent-with-observability-tool/observations.md))
- **To test an agent, take it out of the HTTP route.** Start with cheap deterministic checks, then add LLM judges that pick a category rather than a number. ([02](02_agent-with-evals-tests/observations.md), [03](03_evals-with-llm-as-a-judge-and-datasets/observations.md))
- **Context is the budget.** Pass text instead of JSON, and summarise pages with a smaller model before the main model reads them. ([04](04_agent-architecture-through-task-decomposition/observations.md), [05](05_agent-to-workflow/observations.md))
- **An agent loop generalises; a workflow can do more in parallel**, though the model can still decide when to stop. ([05](05_agent-to-workflow/observations.md))
- **Make "not done yet" say what's missing**, so the next search has a target. ([06](06_advanced-patterns/observations.md))
