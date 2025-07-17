import type { Message } from "ai";
import { db } from "../db";
import { chats, messages } from "../db/schemas";
import { eq } from "drizzle-orm";

export async function upsertChat({
  userId,
  chatId,
  chatMessages,
  chatTitle,
}: {
  userId: string;
  chatTitle: string;
  chatId: string;
  chatMessages: Message[];
}) {
  const existingChat = await db.query.chats.findFirst({
    where: eq(chats.id, chatId),
  });

  if (existingChat) {
    // If chat exixst / throw an eroror (probably belongs to another user)
    if (existingChat.userId !== userId) throw new Error("Chat not found");

    await db.delete(chats).where(eq(chats.id, chatId));
  } else {
    await db.insert(chats).values({
      id: chatId,
      userId,
      title: chatTitle,
    });
  }

  // insert messages

  await db.insert(messages).values(
    chatMessages.map((message) => ({
      id: message.id,
      chatId,
      role: message.role,
      parts: message.content,
      createdAt: message.createdAt,
    }))
  );
}
