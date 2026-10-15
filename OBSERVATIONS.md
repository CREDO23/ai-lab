# Observations across all stages

Each stage folder has its own `observations.md` with what that stage taught. The note below is about the whole progression.

---

Possible flow:

1. Simple agent with tool calls (streamText)

- One `searchWeb` tool call which searches, crawls and summarizes, then creates a summary from there.
- Relatively low amount of code, but painful latency

1. Add RAG to the summaries to take the latency lower.

1. Raise complexity of agent using `<thinking>` tags, make it better at more complex and general questions.

1. Rewrite Query -> Crawl Sites -> Summarize -> streamText. Good, but simple and not great at complex questions.

1. Raise complexity of workflow by adding a planning step to the query rewriter.

1. Add a queue for the workflow to continue processing more complex questions.
