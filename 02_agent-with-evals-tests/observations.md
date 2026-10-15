# Observations · 02 Agent with evals

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**To test an agent, take it out of the HTTP route.** The route and the eval both call `streamFromDeepSearch`, so evals run the same code users hit, without a request, auth or database.

**Consume a stream before reading its result.** `askDeepSearch` calls `result.consumeStream()` before `await result.text`; without it, the stream never finishes and the eval hangs.

**Start evals with cheap, deterministic checks.** The first scorer only checks for a Markdown link (the prompt requires sources). Fast and never flaky, but blind to whether the answer is right; the judges in 03 cover that.

**Decide what happens when the rate limiter's store is down.** Here the two halves disagree: `checkRateLimit` fails open if Redis errors, but `recordRateLimit` rethrows, so a Redis outage still breaks every request.
