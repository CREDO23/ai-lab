import React from "react";
import type { MessagePart } from "./chat-message";

interface ToolInvocationProps {
  part: MessagePart;
}

export const ToolInvocation: React.FC<ToolInvocationProps> = ({ part }) => {
  if (part.type !== "tool-invocation") return null;
  const { toolInvocation } = part;
  const isResult = toolInvocation.state === "result";
  const isPending = toolInvocation.state === "partial-call" || toolInvocation.state === "call";

  return (
    <div
      className="my-2 p-2 rounded bg-gray-700 text-gray-100 text-xs cursor-help"
      title={JSON.stringify(toolInvocation, null, 2)}
    >
      <div>
        <b>Tool Call:</b> <code>{toolInvocation.toolName}</code>
      </div>
      <div>
        <b>Args:</b> <code>{JSON.stringify(toolInvocation.args)}</code>
      </div>
      {isPending && (
        <div className="mt-1 text-yellow-400">Invoking tool…</div>
      )}
      {isResult && (
        <div>
          <b>Result:</b> <code>{JSON.stringify(toolInvocation.result)}</code>
        </div>
      )}
      <div className="mt-1 text-gray-400">
        (Hover to see full tool invocation object)
      </div>
    </div>
  );
}; 