# Observations across all stages

Each stage folder has its own `observations.md`. Below are the ways to grow a deep-search agent that I listed early on, and which ones this repo built.

| Idea | Trade-off I noted | Status |
|---|---|---|
| Simple agent with tool calls (`streamText`) | Little code, painful latency | Built in 00–03 (separate search and scrape tools) |
| Rewrite query → crawl → summarise → stream the answer | Simple, but weaker on complex questions | Built in 05 |
| Planning step in the query rewriter | More deliberate searches | Built in 05 |
| RAG on the summaries | Lower latency | Not built |
| `<thinking>` tags | Better at complex, general questions | Not built (04 uses structured next actions instead) |
| Queue for long-running questions | Keeps working on complex questions | Not built |
