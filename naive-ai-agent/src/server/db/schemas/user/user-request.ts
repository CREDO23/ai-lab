import { serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";
import { createTable } from "../utils";

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