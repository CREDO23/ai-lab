# Observations · 04 Agent architecture through task decomposition

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

---

Message annotations are cool because they let you stream in metadata about the message.

To persist them, you just save the most up-to-date ones in memory when you save the final message. Then, they'll be hydrated when you load the message back into the AI SDK.

---

JSON is not a good format for passing search results to the model: it spends tokens on `{`, `"` and `}`. `SystemContext` renders them as Markdown text instead.

---

Scraped pages can themselves be Markdown, so they're wrapped in `<scrape_result>` tags to keep them apart from the prompt's own headings.

---

The loop is capped at 10 steps. Past that, the model answers with what it has and is told the information may be incomplete.

---

Streaming word by word can show half-written Markdown, like a link without its URL yet. The joiner transform holds back links and emphasis until they're complete.
