import { relations, sql } from "drizzle-orm";
import { varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { accounts } from "./account";

export const users = createTable("user", {
  id: varchar("id", { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("email_verified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
  isAdmin: boolean("is_admin").notNull().default(false),
});


// Relations

export const userRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));