import type { Message } from "ai";
import { streamText, createDataStreamResponse } from "ai";
import { model } from "~/models";
import { auth } from "~/server/auth";
import { z } from "zod";
import { searchSerper } from "~/serper";
import { db } from "~/server/db";
import { eq, and } from "drizzle-orm";
import { userRequests, users } from "~/server/db/schemas";

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

    if (todayRequests?.length >= REQUEST_LIMIT ) {
      return new Response("Too Many Requests", { status: 429 });
    }
  }

  // Insert a new user request
  await db.insert(userRequests).values({ userId, sentAt: now });

  const body = (await request.json()) as {
    messages: Array<Message>;
  };

  return createDataStreamResponse({
    execute: async (dataStream) => {
      const { messages } = body;

      const result = streamText({
        model,
        messages,
        system: `You are an AI assistant with access to a web search tool. Always use the searchWeb tool to answer questions, and always cite your sources with inline markdown links.
        
        1. Always search the web for up-to-date information.
        2. ALWAYS format URLs as markdown links using the format [title](url)
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
      });

      result.mergeIntoDataStream(dataStream);
    },
    onError: (e) => {
      console.error(e);
      return "Oops, an error occured!";
    },
  });
}
