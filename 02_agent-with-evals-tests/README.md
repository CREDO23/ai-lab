# 02 · Agent with evals

**Goal:** make the agent callable outside the HTTP route so it can be tested, and add a first eval.

## What changed from [01](../01_improved-agent-with-observability-tool/)

- The `streamText` call (prompt plus the `searchWeb` and `scrapePages` tools) moved out of the route into `streamFromDeepSearch` in [`deep-search.service.ts`](src/app/api/services/deep-search.service.ts). `askDeepSearch` runs it without the HTTP layer and returns the final text.
- A first evalite eval, [`initial.eval.ts`](initial.eval.ts), with two questions. Its only scorer is deterministic: it checks that the answer contains at least one Markdown link. `pnpm evals` runs `evalite watch`.
- A Redis rate limiter in [`rate-limit.service.ts`](src/app/api/services/rate-limit.service.ts): one global fixed window of 1 request per 20 seconds. When the limit is hit, the route waits for the window to reset and retries up to 3 times before returning 429. If Redis fails, requests are allowed.
- The per-user daily limit goes from 10 to 200 requests.

## Key files

- [`src/app/api/services/deep-search.service.ts`](src/app/api/services/deep-search.service.ts): `streamFromDeepSearch` and `askDeepSearch`
- [`initial.eval.ts`](initial.eval.ts): the eval and its link-check scorer
- [`src/app/api/services/rate-limit.service.ts`](src/app/api/services/rate-limit.service.ts): the global rate limiter
- [`vitest.config.ts`](vitest.config.ts): loads `.env` for evals

## How to run

Follow [How to run a stage](../README.md#how-to-run-a-stage) in the root README, inside this folder. Then:

```bash
pnpm evals
```

The eval calls the real agent, so it needs the Gemini and Serper keys and Redis running.

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
