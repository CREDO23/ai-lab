import type { Message } from "ai";
import {
  createDataStreamResponse,
  appendResponseMessages,
} from "ai";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { eq, and } from "drizzle-orm";
import { chats, userRequests, users } from "~/server/db/schemas";
import { upsertChat } from "~/server/db/queries/upsert-chat";
import { Langfuse } from "langfuse";
import { streamFromDeepSearch } from "../services/deep-search.service";
import {
  checkRateLimit,
  globalRateLimitConfig,
  recordRateLimit,
} from "../services/rate-limit.service";

export const maxDuration = 60;

const REQUEST_LIMIT = 200;

const langfuse = new Langfuse({
  environment: process.env.NODE_ENV,
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId = session.user.id;

  // Check the rate limit
  const rateLimitCheck = await checkRateLimit(globalRateLimitConfig);

  if (!rateLimitCheck.allowed) {
    console.log("Rate limit exceeded, waiting...");
    const isAllowed = await rateLimitCheck.retry();
    // If the rate limit is still exceeded, return a 429
    if (!isAllowed) {
      return new Response("Rate limit exceeded", {
        status: 429,
      });
    }
  }

  // Record the request
  await recordRateLimit(globalRateLimitConfig);

  const trace = langfuse.trace({
    name: "chat",
    userId,
  });

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

    const checkUserLimitSpan = trace.span({
      name: "check-user-limit",
      input: {
        isAdmin: user.isAdmin,
        todayRequests: todayRequests?.length,
      },
    });

    checkUserLimitSpan.end({
      output: {
        isOverLimit: todayRequests?.length >= REQUEST_LIMIT,
      },
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
    const createChatSpan = trace.span({
      name: "create-chat",
      input: {
        chatId,
        userId,
        chatTitle: messages[messages.length - 1]!.content.slice(0, 50) + "...",
        chatMessages: messages,
      },
    });

    await upsertChat({
      chatId,
      userId,
      chatTitle: messages[messages.length - 1]!.content.slice(0, 50) + "...",
      chatMessages: messages, // Only save the user's message initially
    });

    createChatSpan.end({
      output: {
        chatId,
      },
    });
  } else {
    const verifyChatOwnershipSpan = trace.span({
      name: "verify-chat-ownership",
      input: {
        chatId,
        userId,
      },
    });

    // veriify if the chat belongs to the user
    const chat = await db.query.chats.findFirst({
      where: eq(chats.id, chatId),
    });

    verifyChatOwnershipSpan.end({
      output: {
        chatId,
        chatUserId: chat?.userId,
      },
    });

    if (!chat || chat.userId !== userId) {
      return new Response("chat not found or unauthorized", { status: 401 });
    }
  }

  trace.update({
    sessionId: chatId,
  });

  return createDataStreamResponse({
    execute: async (dataStream) => {
      const { messages } = body;

      if (isNewChat) {
        // If it is a new chat , we need to send the  generated chat ID to the frontend

        dataStream.writeData({
          type: "NEW_CHAT_CREATED",
          chatId,
        });
      }

      const result = await streamFromDeepSearch({
        messages,
        langfuseTraceId: trace.id,
        writeMessageAnnotation: (annotation) => {
          dataStream.writeMessageAnnotation(annotation);
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

          const saveChatHistorySpan = trace.span({
            name: "save-chat-history",
            input: {
              chatId,
              userId,
              chatTitle: lastMessage.content.slice(0, 50) + "...",
              chatMessages: updatedmessages,
              messageCount: updatedmessages.length,
            },
          });

          // Save complete chat history (user messages + AI. response messages)
          await upsertChat({
            chatId,
            userId,
            chatTitle: lastMessage.content.slice(0, 50) + "...",
            chatMessages: updatedmessages,
          });

          saveChatHistorySpan.end({
            output: {
              success: true,
            },
          });

          const insertUserRequestSpan = trace.span({
            name: "insert-new-user-request",
            input: {
              userId,
            },
          });
          // Insert a new user request
          await db.insert(userRequests).values({ userId, sentAt: now });

          insertUserRequestSpan.end({
            output: {
              success: true,
            },
          });
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
