import { serial, varchar, timestamp, json, integer } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { chats } from "./chat";
import { relations } from "drizzle-orm";

export const messages = createTable("message", {
  id: serial("id").primaryKey(),
  chatId: varchar("chat_id", { length: 255 })
    .notNull()
    .references(() => chats.id),
  role: varchar("role", { length: 255, enum: ["user", "assistant"] }).notNull(),
  order: integer("order").notNull(),
  parts: json("parts").notNull(),
  createdAt: timestamp("created_at", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
});


export const messageRelations = relations(messages, ({ one }) => ({
  chat: one(chats, {
    fields: [messages.chatId],
    references: [chats.id],
  }),
}));