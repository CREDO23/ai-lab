# Observations · 02 Agent with evals

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**Testing the agent meant taking it out of the HTTP route.** The route and the eval both call `streamFromDeepSearch`, so evals run the same code users hit, without a request, auth or database.

**A stream has to be consumed before its result is ready.** `askDeepSearch` calls `result.consumeStream()` before `await result.text`; without it, the stream never finishes and the eval hangs.

**A cheap, deterministic check made a good first eval.** The first scorer only checks for a Markdown link (the prompt requires sources). Fast and never flaky, but blind to whether the answer is right; the judges in 03 cover that.

**The rate limiter never decided what happens when Redis is down.** Its two halves disagree: `checkRateLimit` fails open if Redis errors, but `recordRateLimit` rethrows, so a Redis outage still breaks every request.
