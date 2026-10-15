# Observations · 05 From agent to workflow

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**An agent loop generalises; a workflow can do more in parallel.** In 04 every action waits for a model call, one step at a time, which adds a lot of latency. In 05 the steps are fixed, so the 3–5 searches run in parallel. I'd pick a workflow when the task is known, and keep the loop for open-ended ones.

**Summarising pages first keeps the main model's context small.** Raw pages fill the context window, so each page is summarised for the question by a smaller model (`gemini-2.0-flash-lite`) and cached in Redis, at the cost of one extra call per page. RAG, sending only the relevant parts of a page, would be the next step; not built here.

**I added a planning step before searching.** The query rewriter writes a plan and 3–5 queries up front, so each iteration's work is decided in one place.

**A workflow can still let the model decide when to stop.** Each iteration ends with a continue-or-answer call, so the number of iterations is still the model's choice. Only the steps inside an iteration are fixed.
