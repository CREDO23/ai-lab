import type { Message } from "ai";
import { streamText, createDataStreamResponse } from "ai";
import { model } from "~/models";
import { auth } from "~/server/auth";
import { z } from "zod";
import { searchSerper } from "~/serper";
import { db } from "~/server/db";
import { users, userRequests } from "~/server/db/schema";
import { eq, and } from "drizzle-orm";
import type { DB } from "~/server/db/schema";

export const maxDuration = 60;

const REQUEST_LIMIT = 3;

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
  if (!user.isAdmin) {
    // Check today's date (UTC, no time)
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    const req = await db.query.userRequests.findFirst({
      where: and(eq(userRequests.userId, userId), eq(userRequests.date, today)),
    });
    const count = req?.count ?? 0;
    if (count >= REQUEST_LIMIT) {
      console.log("Too Many Requests");
      return new Response("Too Many Requests", { status: 429 });
    }
    // Increment or insert
    if (req) {
      await db.update(userRequests)
        .set({ count: count + 1 })
        .where(and(eq(userRequests.userId, userId), eq(userRequests.date, today)));
    } else {
      await db.insert(userRequests).values({ userId, date: today, count: 1 });
    }
  }

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
