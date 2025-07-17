import { and, eq } from "drizzle-orm";
import { db } from "../db";
import { chats } from "../db/schemas";

export async function getChat(
  userId: string,
  chatId: string,
) {
  const chat = await db.query.chats.findFirst({
    where: and(eq(chats.id, chatId), eq(chats.userId, userId)),
    with: {
      messages: {
        orderBy: (messages, { desc }) => desc(messages.createdAt),
      },
    },
  });
  return chat;
}
