# 00 · Naive agent

**Goal:** a chat agent that answers questions by calling a web-search tool, with sign-in, a request limit and saved chat history.

## What this stage builds

This is the first stage, built on the create-t3-app template (Next.js, NextAuth, Drizzle).

- Chat UI built on `useChat` from the AI SDK. Each message part (text or tool call) is rendered separately, and the chat stays scrolled to the bottom while the answer streams.
- A `searchWeb` tool backed by Serper. `streamText` runs with `maxSteps: 10`, so the model can search several times before answering. Search results are cached in Redis for 6 hours.
- Tool calls are shown in the chat with their arguments, state and result. The send button shows a spinner while the answer loads.
- Sign-in with Discord (NextAuth). The chat API rejects requests from users who aren't signed in.
- A per-user limit of 10 requests a day, counted in the Postgres `user_requests` table. Admins (`users.is_admin`) are exempt.
- Chats and messages are saved in Postgres with Drizzle; message parts are stored as JSON. A new chat's ID is sent back in the data stream and the page switches to `?chatId=…`.

## Key files

- [`src/app/api/chat/route.ts`](src/app/api/chat/route.ts): auth, request limit, chat persistence, and the `streamText` call with the `searchWeb` tool
- [`src/serper.ts`](src/serper.ts): Serper client, cached in Redis
- [`src/app/chat.tsx`](src/app/chat.tsx), [`src/components/chat-message.tsx`](src/components/chat-message.tsx), [`src/components/tool-invocation.tsx`](src/components/tool-invocation.tsx): chat UI
- [`src/server/db/schemas/chat/message.ts`](src/server/db/schemas/chat/message.ts), [`src/server/db/queries/upsert-chat.ts`](src/server/db/queries/upsert-chat.ts): message storage
- [`src/server/redis/redis.ts`](src/server/redis/redis.ts): Redis client and the `cacheWithRedis` helper
- [`src/models.ts`](src/models.ts): the model (`gemini-2.0-flash-001`)

## How to run

Follow [How to run a stage](../README.md#how-to-run-a-stage) in the root README, inside this folder. This stage doesn't need the Langfuse or eval variables.

## Notes

- What I learned at this stage: [observations.md](observations.md)
- Notes that apply to every stage: [OBSERVATIONS.md](../OBSERVATIONS.md)
