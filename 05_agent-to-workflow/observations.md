# Observations · 05 From agent to workflow

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

---

Using an agentic feedback loop is great for generalising your app and making it better at more things. But it's a massive latency trade-off.

If you want to specialise in one thing, you should probably use workflows. This means you can end up doing a lot more work in parallel.

---

There is a big context window trade-off between feeding the output of the crawler directly into the LLM or doing some kind of summary beforehand.

Ideally we would search the text of the page for the most relevant information and feed that into the LLM. That's the motivation behind the RAG approach.

---

The query rewriter was added to plan before searching: it writes a research plan and several queries up front, so what the model does in each iteration is more predictable.

---

The summariser runs on a smaller model (`gemini-2.0-flash-lite`, picked for speed and context size) to cut the tokens the main model has to read.

---

The model still decides when to stop: each iteration ends with a continue-or-answer decision. What became fixed are the steps inside an iteration.
