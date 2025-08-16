import { type Message, type streamText, type StreamTextResult, type TelemetrySettings } from "ai";
import { runAgentLoop } from "./system-promt/run-agent-loop";
import type { Action } from "./system-promt/get-next-action";

export type OurMessageAnnotation = {
  type: "NEW_ACTION";
  action: Action;
};

export const streamFromDeepSearch = async (opts: {
  messages: Message[];
  onFinish: Parameters<typeof streamText>[0]["onFinish"];
  telemetry: TelemetrySettings;
  writeMessageAnnotation?: (annotation: OurMessageAnnotation) => void;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
}) : Promise<StreamTextResult<{}, string>> => {

  const lastMessage = opts.messages[opts.messages.length - 1];

  if(!lastMessage){
    throw new Error("No messages provided");
  }

  return runAgentLoop(opts.messages, { writeMessageAnnotation: opts.writeMessageAnnotation,})
};

export async function askDeepSearch(messages: Message[]) {
  const result = await streamFromDeepSearch({
    messages,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFinish: async () => {},
    telemetry: {
      isEnabled: false,
    },
  });

  /**
   * Consume the stream ...
   * Without this , the stream will never finish
   */

  await result.consumeStream();

  return await result.text;
}
