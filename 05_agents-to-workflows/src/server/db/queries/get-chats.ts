import { eq } from "drizzle-orm";
import { db } from "..";
import { chats } from "../schemas";

export async function getChats({ userId }: { userId: string }) {
  return await db.query.chats.findMany({
    where: eq(chats.userId, userId),
  });
}
