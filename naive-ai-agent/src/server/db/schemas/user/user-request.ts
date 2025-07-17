import { serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";
import { createTable } from "../utils";
import { relations } from "drizzle-orm";

export const userRequests = createTable("user_requests", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => users.id),
  sentAt: timestamp("sent_at", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
});


export const userRequestrelations = relations(userRequests, ({ one }) => ({
  user: one(users, { fields: [userRequests.userId], references: [users.id] }),
}));