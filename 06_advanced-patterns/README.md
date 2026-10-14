# 06 · Advanced patterns

**Goal:** add an evaluator, so each iteration says what's still missing and the next one searches for it.

## What changed from [05](../05_agent-to-workflow/)

- `getNextAction` now acts as an evaluator. It compares the search results with what the question asks for, and when it chooses `continue` it returns `feedback` on what's missing.
- The feedback is stored in `SystemContext` and passed to the query rewriter in the next iteration.
- The reasoning steps show the feedback under "Continuing search…".
- Each query fetches 10 Serper results instead of 2.

**Planned, not built:** guardrails, a clarifying-question step and a token-usage display. They're named in the commit that created this stage, but they aren't implemented.

**Known issue:** `SEARCH_RESULTS_COUNT` is validated but not used; the number of results per query is hard-coded to 10 in `run-agent-loop.ts`.

## Key files

- [`src/app/api/services/system-prompt/get-next-action.ts`](src/app/api/services/system-prompt/get-next-action.ts): evaluator prompt and `feedback` field
- [`src/app/api/services/system-prompt/system-context.ts`](src/app/api/services/system-prompt/system-context.ts): stores the last feedback
- [`src/app/api/services/system-prompt/run-agent-loop.ts`](src/app/api/services/system-prompt/run-agent-loop.ts): passes feedback along
- [`src/app/utils/query-rewriter.ts`](src/app/utils/query-rewriter.ts): uses the feedback when it plans
- [`src/components/reasoning-step.tsx`](src/components/reasoning-step.tsx): shows the feedback

## How to run

Same as [04](../04_agent-architecture-through-task-decomposition/): follow [How to run a stage](../README.md#how-to-run-a-stage), and use `pnpm db:push`.

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
