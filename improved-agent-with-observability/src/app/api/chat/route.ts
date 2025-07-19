import type { Message } from "ai";
import {
  streamText,
  createDataStreamResponse,
  appendResponseMessages,
} from "ai";
import { model } from "~/models";
import { auth } from "~/server/auth";
import { z } from "zod";
import { searchSerper } from "~/serper";
import { db } from "~/server/db";
import { eq, and } from "drizzle-orm";
import { chats, userRequests, users } from "~/server/db/schemas";
import { upsertChat } from "~/server/db/queries/upsert-chat";
import { Langfuse } from "langfuse";

export const maxDuration = 60;

const REQUEST_LIMIT = 10;

const langfuse = new Langfuse({
  environment: process.env.NODE_ENV,
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId = session.user.id;

  // Check if user is admin
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Check today's date (UTC, no time)
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);

  if (!user.isAdmin) {
    const todayRequests = await db.query.userRequests.findMany({
      where: and(eq(userRequests.userId, userId), eq(userRequests.sentAt, now)),
    });

    if (todayRequests?.length >= REQUEST_LIMIT) {
      return new Response("Too Many Requests", { status: 429 });
    }
  }

  const body = (await request.json()) as {
    messages: Array<Message>;
    chatId: string;
    isNewChat: boolean;
  };

  const { chatId, messages, isNewChat } = body;

  if (!messages.length) {
    return new Response("No messages provided", { status: 400 });
  }

  if (isNewChat) {
    await upsertChat({
      chatId,
      userId,
      chatTitle: messages[messages.length - 1]!.content.slice(0, 50) + "...",
      chatMessages: messages, // Only save the user's message initially
    });
  } else {
    // veriify if the chat belongs to the user
    const chat = await db.query.chats.findFirst({
      where: eq(chats.id, chatId),
    });

    if (!chat || chat.userId !== userId) {
      return new Response("chat not found or unauthorized", { status: 401 });
    }
  }

  const trace = langfuse.trace({
    sessionId: chatId,
    name: "chat",
    userId,
  });

  return createDataStreamResponse({
    execute: async (dataStream) => {
      const { messages } = body;

      if (isNewChat) {
        // If it is a new chat , we need to send the chat ID generated to the frontend

        dataStream.writeData({
          type: "NEW_CHAT_CREATED",
          chatId,
        });
      }

      const result = streamText({
        model,
        messages,
        system: `You are a helpful AI assistant with access to real-time web search capabilities. When answering questions:

1. Always search the web for up-to-date information when relevant
2. ALWAYS format URLs as markdown links using the format [title](url)
3. Be thorough but concise in your responses
4. If you're unsure about something, search the web to verify
5. When providing information, always include the source where you found it using markdown links
6. Never include raw URLs - always use markdown link format

Remember to use the searchWeb tool whenever you need to find current information.
        `,
        tools: {
          searchWeb: {
            parameters: z.object({
              query: z.string().describe("The query to search the web for"),
            }),
            execute: async ({ query }, { abortSignal }) => {
              const results = await searchSerper(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                { q: query, num: 10 },
                abortSignal,
              );
              return results.organic.map((result) => ({
                title: result.title,
                link: result.link,
                snippet: result.snippet,
              }));
            },
          },
        },
        maxSteps: 10,
        experimental_telemetry: {
          isEnabled: true,
          functionId: "agent-function",
          metadata: {
            langfuseTraceId: trace.id,
          },
        },
        onFinish: async ({ response }) => {
          //Merge the exixsting messages with the response messages
          const updatedmessages = appendResponseMessages({
            messages,
            responseMessages: response.messages,
          });

          const lastMessage = updatedmessages[updatedmessages.length - 1];

          if (!lastMessage) {
            return;
          }

          // Save complete chat history (user messages + AI. response messages)
          await upsertChat({
            chatId,
            userId,
            chatTitle: lastMessage.content.slice(0, 50) + "...",
            chatMessages: updatedmessages,
          });

          // Insert a new user request
          await db.insert(userRequests).values({ userId, sentAt: now });

          // Flush the trace with all data to langfuse platform
          await langfuse.flushAsync();
        },
      });

      result.mergeIntoDataStream(dataStream);
    },
    onError: (e) => {
      console.error(e);
      return "Oops, an error occured!";
    },
  });
}
