# Observations · 05 From agent to workflow

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**An agent loop generalises; a workflow can do more in parallel.** In 04 every action waits for a model call, one step at a time, which adds a lot of latency. In 05 the steps are fixed, so the 3–5 searches run in parallel. Prefer a workflow when the task is known; keep the loop for open-ended ones.

**Summarise pages before the main model reads them.** Raw pages fill the context window, so each page is summarised for the question by a smaller model (`gemini-2.0-flash-lite`) and cached in Redis, at the cost of one extra call per page. RAG, sending only the relevant parts of a page, would be the next step; not built here.

**Plan before searching.** The query rewriter writes a plan and 3–5 queries up front, so each iteration's work is decided in one place.

**A workflow can still let the model decide when to stop.** Each iteration ends with a continue-or-answer call, so the number of iterations is still the model's choice. Only the steps inside an iteration are fixed.
