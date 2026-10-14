# Observations · 01 Improved agent with observability

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

---

Implementing your own crawler can be faster. Firecrawl does a lot of things for you, but you may not need all of them.

However, it's a major trade off. Owning the crawling logic means you're owning a lot more code.

---

The system prompt now includes today's date, so the model can say how recent the information it found is.

---

The prompt tells the model to scrape 4–6 pages and never rely on search snippets alone. That puts whole pages into the context window; stage 05 adds a summary step for this.

---

Spans wrap each database step (request-limit check, chat creation, saving the history), so a trace shows those steps next to the LLM call, not only the model's work.
