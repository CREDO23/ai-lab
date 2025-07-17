import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import type { accounts } from "./user/account";
import type { sessions } from "./user/sessions";
import type { verificationTokens } from "./user/token-verification";
import type { users } from "./user/user";

export declare namespace DB {
  export type User = InferSelectModel<typeof users>;
  export type NewUser = InferInsertModel<typeof users>;

  export type Account = InferSelectModel<typeof accounts>;
  export type NewAccount = InferInsertModel<typeof accounts>;

  export type Session = InferSelectModel<typeof sessions>;
  export type NewSession = InferInsertModel<typeof sessions>;

  export type VerificationToken = InferSelectModel<typeof verificationTokens>;
  export type NewVerificationToken = InferInsertModel<
    typeof verificationTokens
  >;
}

export * from "./user/account";
export * from "./user/sessions";
export * from "./user/token-verification";
export * from "./user/user";
export * from "./user/user-request";
export * from "./chat/chat";
export * from "./chat/message";
