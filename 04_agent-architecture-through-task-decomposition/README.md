# 04 · Agent architecture through task decomposition

**Goal:** replace the single tool-calling `streamText` call with an explicit loop that decides one action at a time and shows each step in the UI.

## What changed from [03](../03_evals-with-llm-as-a-judge-and-datasets/)

- `streamFromDeepSearch` now runs `runAgentLoop` (in [`src/app/api/services/system-prompt/`](src/app/api/services/system-prompt/)). The loop runs for up to 10 steps. At each step a model call (`generateObject`) chooses the next action (`search`, `scrape` or `answer`), the code runs it, and the result goes into a `SystemContext`.
- `SystemContext` keeps the message, search and scrape history. It renders them for the prompts as plain text, with Markdown headings and scraped pages wrapped in `<scrape_result>` tags, instead of JSON.
- `answerQuestion` streams the final answer from what was collected. If 10 steps pass without an `answer` action, it answers anyway and is told the information may be incomplete.
- The output is smoothed with `smoothStream` (word chunks), plus a custom transform that holds back Markdown links and bold text until they're complete.
- Each action is sent to the client as a message annotation and shown as a collapsible reasoning step above the answer.
- Each model call (next action, answer) has its own Langfuse function ID under the request's trace.
- Annotations are saved with the message (new `annotations` JSON column) and loaded back with the chat.
- New chats start with the title "Generating...". A model writes the title while the answer streams, and it's saved when the answer finishes.

## Key files

- [`src/app/api/services/system-prompt/run-agent-loop.ts`](src/app/api/services/system-prompt/run-agent-loop.ts): the loop
- [`src/app/api/services/system-prompt/get-next-action.ts`](src/app/api/services/system-prompt/get-next-action.ts): the action schema and the next-action call
- [`src/app/api/services/system-prompt/system-context.ts`](src/app/api/services/system-prompt/system-context.ts): loop state and prompt formatting
- [`src/app/api/services/system-prompt/answer-question.ts`](src/app/api/services/system-prompt/answer-question.ts): the streamed answer
- [`src/app/utils/markdown-joiner-transform.ts`](src/app/utils/markdown-joiner-transform.ts): the Markdown-aware stream transform
- [`src/components/reasoning-step.tsx`](src/components/reasoning-step.tsx): reasoning steps in the UI
- [`src/app/utils/generate-chat-title.tsx`](src/app/utils/generate-chat-title.tsx): chat title generation
- [`src/server/db/schemas/chat/message.ts`](src/server/db/schemas/chat/message.ts): the `annotations` column

## How to run

Follow [How to run a stage](../README.md#how-to-run-a-stage) in the root README, inside this folder. Use `pnpm db:push`, not `pnpm db:migrate`: the migration files in `drizzle/` are out of date (they don't include the `annotations` column, and `db:migrate` fails on a fresh database). `pnpm evals` works as in [03](../03_evals-with-llm-as-a-judge-and-datasets/).

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
