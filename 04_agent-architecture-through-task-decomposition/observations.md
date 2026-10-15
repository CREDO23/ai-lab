# Observations · 04 Agent architecture through task decomposition

Notes that apply to every stage are in [OBSERVATIONS.md](../OBSERVATIONS.md).

**Annotations stream metadata alongside a message.** Each loop step is sent as one and shown as a reasoning step. To keep them, I save the latest ones with the final message; they come back when the chat loads. AI SDK 4 only: version 5 replaced them with custom data parts.

**JSON wastes tokens in a prompt.** `SystemContext` renders search results as Markdown; JSON would spend tokens on `{`, `"` and `}`.

**Scraped content needs a fence.** Scraped pages can contain Markdown themselves, so they go inside `<scrape_result>` tags to stay apart from the prompt's own headings.

**An agent loop needs a cap.** After 10 steps the model must answer with what it has, and is told it may be incomplete. Without a cap, a model that keeps choosing "search" runs up cost and never answers.

**Smooth streaming can split Markdown.** Word-by-word streaming can show half a link before its URL arrives; `markdown-joiner-transform.ts` holds back links and bold text until they're complete.
