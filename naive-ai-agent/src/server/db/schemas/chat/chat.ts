import { serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { users } from "../user/user";
import { createTable } from "../utils";
import { relations } from "drizzle-orm";
import { messages } from "./message";

export const chats = createTable("chat", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
});

export const chatRelations = relations(chats, ({ one, many }) => ({
  user: one(users, {
    fields: [chats.userId],
    references: [users.id],
  }),

  messages: many(messages),
}));
