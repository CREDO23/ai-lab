import type { Message } from "ai";
import { db } from "..";
import { chats, messages } from "../schemas";
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

    await db.delete(messages).where(eq(messages.chatId, chatId));
  } else {
    await db.insert(chats).values({
      id: chatId,
      userId,
      title: chatTitle,
    });
  }

  // insert messages

  const x = await db.insert(messages).values(
    chatMessages.map((message, index) => ({
      id: message.id,
      chatId,
      role: message.role,
      parts: message.parts,
      annotations: message.annotations,
      order: index,
    }))
  );

  console.log(x);
}
