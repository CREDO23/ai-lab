import { generateObject } from "ai";
import { z } from "zod";
import type { SystemContext } from "./system-context";
import { model } from "~/models";

export const actionSchema = z.object({
  title: z
    .string()
    .describe(
      "The title of the action, to be displayed in the UI. Be extremely concise. 'Continuing search', 'Providing answer'",
    ),
  reasoning: z.string().describe("The reason you chose this step."),
  type: z.enum(["continue", "answer"]).describe(
    `The type of action to take.
      - 'continue': Continue searching for more information.
      - 'answer': Answer the user's question and complete the loop.`,
  ),
});

export type Action = z.infer<typeof actionSchema>;

export const getNextAction = async (
  context: SystemContext,
  opts: { langfuseTraceId?: string } = {},
) => {
  const result = await generateObject({
    model,
    schema: actionSchema,
    system: `
   You are a helpful AI assistant that can search the web and answer questions. Your goal is to determine the next best action to take based on the current context.
    `,
    prompt: `Message History:
${context.getMessageHistory()}

Based on this context, choose the next action:
1. If you need more information, use 'continue' and provide detailed feedback about what's missing
2. If you have enough information to answer the question, use 'answer'.

Remember:
- Only use 'continue' if you need more information, and provide detailed feedback.
- Use 'answer' when you have enough information to provide a complete answer.
- Feedback is only required when choosing 'continue'.

Here is the search history:

${context.getSearchHistory()}
`,
    experimental_telemetry: opts.langfuseTraceId
      ? {
          isEnabled: true,
          functionId: "get-next-action",
          metadata: {
            langfuseTraceId: opts.langfuseTraceId,
          },
        }
      : undefined,
  });

  return result.object;
};