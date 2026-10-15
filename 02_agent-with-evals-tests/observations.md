# Observations · 02 Agent with evals

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

---

Moving the agent out of the route handler into `streamFromDeepSearch` lets the same code run from the API and from an eval (`askDeepSearch`).

---

`askDeepSearch` has to consume the stream before reading `result.text`. Without that, the stream never finishes.

---

The first scorer is deterministic: it only checks that the answer contains a Markdown link, which the system prompt requires for every source. It's cheap and stable, but it says nothing about whether the answer is right.

---

The rate-limit check fails open: if Redis can't be read, `checkRateLimit` allows the request. Recording it doesn't: `recordRateLimit` rethrows, so with Redis down the request still fails.
