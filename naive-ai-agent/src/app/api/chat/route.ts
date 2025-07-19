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

export const maxDuration = 60;

const REQUEST_LIMIT = 10;

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

  // Insert a new user request
  await db.insert(userRequests).values({ userId, sentAt: now });

  const body = (await request.json()) as {
    messages: Array<Message>;
    chatId?: string;
  };

  const { chatId, messages } = body;

  if (!messages.length) {
    return new Response("No messages provided", { status: 400 });
  }

  let currentChatId = chatId;

  if (!currentChatId) {
    const newChatId = crypto.randomUUID();

    await upsertChat({
      chatId: newChatId,
      userId,
      chatTitle: messages[messages.length - 1]!.content.slice(0, 50) + "...",
      chatMessages: messages,  // Only save the user's message initially
    });

    currentChatId = newChatId;
  } else {
    // veriify if the chat belongs to the user
    const chat = await db.query.chats.findFirst({
      where: eq(chats.id, currentChatId),
    });

    if (!chat || chat.userId !== userId) {
      return new Response("chat not found or unauthorized", { status: 401 });
    }
  }

  return createDataStreamResponse({
    execute: async (dataStream) => {
      const { messages } = body;

      console.log(chatId, currentChatId);


      if(!chatId){
        // If it is a new chat , we need to send the chat ID generated to the frontend

        dataStream.writeData({
          type : 'NEW_CHAT_CREATED',
          chatId : currentChatId,
        })
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

        onFinish : async ({ response }) => {
          //Merge the exixsting messages with the response messages
          const updatedmessages = appendResponseMessages({
            messages,
            responseMessages: response.messages,
          });

          const lastMessage = updatedmessages[updatedmessages.length - 1];

        

          if(!lastMessage){
            return
          }

          // Save complete chat history (user messages + AI. response messages)
          await upsertChat({
            chatId: currentChatId,
            userId,
            chatTitle: lastMessage.content.slice(0, 50) + "...",
            chatMessages: updatedmessages,
          });


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
