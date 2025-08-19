CREATE TABLE IF NOT EXISTS "ai-app-template_user_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"date" timestamp NOT NULL,
	"count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DROP TABLE "ai-app-template_chat";--> statement-breakpoint
DROP TABLE "ai-app-template_message";--> statement-breakpoint
DROP TABLE "ai-app-template_request";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ai-app-template_user_requests" ADD CONSTRAINT "ai-app-template_user_requests_user_id_ai-app-template_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."ai-app-template_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
