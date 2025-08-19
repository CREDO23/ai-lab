import {  varchar, timestamp, json, integer } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { chats } from "./chat";
import { relations } from "drizzle-orm";

export const messages = createTable("message", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey().$defaultFn(() => crypto.randomUUID()),
  chatId: varchar("chat_id", { length: 255 })
    .notNull()
    .references(() => chats.id),
  role: varchar("role", { length: 255, enum: ["user" , "data" , "assistant" , "system"] }).notNull(),
  parts: json("parts").notNull(),
  annotations : json("annotations"),
  order : integer("order").notNull(),
  createdAt: timestamp("created_at", {
    mode: "date",
    withTimezone: true,
  }).notNull().defaultNow(),
});


export const messageRelations = relations(messages, ({ one }) => ({
  chat: one(chats, {
    fields: [messages.chatId],
    references: [chats.id],
  }),
}));