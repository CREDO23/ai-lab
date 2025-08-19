ALTER TABLE "ai-app-template_user_requests" ADD COLUMN "sent_at" timestamp with time zone NOT NULL;--> statement-breakpoint
ALTER TABLE "ai-app-template_user_requests" DROP COLUMN IF EXISTS "date";--> statement-breakpoint
ALTER TABLE "ai-app-template_user_requests" DROP COLUMN IF EXISTS "count";