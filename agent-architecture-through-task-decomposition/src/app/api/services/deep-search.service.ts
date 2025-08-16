import { type Message, type streamText, type StreamTextResult } from "ai";
import type { Action } from "./system-promt/get-next-action";
import { runAgentLoop } from "./system-promt/run-agent-loop";

export type OurMessageAnnotation = {
  type: "NEW_ACTION";
  action: Action;
};

export const streamFromDeepSearch = async (opts: {
  messages: Message[];
  onFinish: Parameters<typeof streamText>[0]["onFinish"];
  writeMessageAnnotation?: (annotation: OurMessageAnnotation) => void;
  langfuseTraceId?: string;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
}) : Promise<StreamTextResult<{}, string>> => {

  const lastMessage = opts.messages[opts.messages.length - 1];

  if(!lastMessage){
    throw new Error("No messages provided");
  }

  return runAgentLoop(opts.messages, { writeMessageAnnotation: opts.writeMessageAnnotation, langfuseTraceId: opts.langfuseTraceId,})
};

export async function askDeepSearch(messages: Message[]) {
  const result = await streamFromDeepSearch({
    messages,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFinish: async () => {},
  });

  /**
   * Consume the stream ...
   * Without this , the stream will never finish
   */

  await result.consumeStream();

  return await result.text;
}
