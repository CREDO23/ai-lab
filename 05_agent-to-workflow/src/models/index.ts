import { google } from "@ai-sdk/google";

export const model = google("gemini-2.0-flash-001");

export const summarizerModel = google("gemini-2.0-flash-lite"); // prioritize speed / large context window 

export const factualityJudgeModel = google("gemini-2.0-flash-001");

export const answerRelevancyJudgeModel = google("gemini-2.0-flash-001");
