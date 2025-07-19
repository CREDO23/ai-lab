import type { Message } from "ai";

type MessagePart = NonNullable<Message["parts"]>[number];

export const ToolInvocation = ({
  part,
}: {
  part: Extract<MessagePart, { type: "tool-invocation" }>;
}) => {
  const { toolInvocation } = part;
  const { state, toolName } = toolInvocation;

  return (
    <div className="mb-4 rounded-lg border border-gray-700 bg-gray-800 p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-medium text-gray-400">Tool:</span>
        <span className="text-sm text-gray-300">{toolName}</span>
      </div>
      <div className="mb-2">
        <span className="text-sm font-medium text-gray-400">State:</span>
        <span className="ml-2 text-sm text-gray-300">{state}</span>
      </div>
      <div className="mb-2">
        <span className="text-sm font-medium text-gray-400">Arguments:</span>
        <pre className="mt-1 overflow-x-auto rounded bg-gray-900 p-2 text-sm text-gray-300">
          {JSON.stringify(toolInvocation.args, null, 2)}
        </pre>
      </div>
      {toolInvocation.state === "result" && toolInvocation.result && (
        <div>
          <span className="text-sm font-medium text-gray-400">Result:</span>
          <pre className="mt-1 overflow-x-auto rounded bg-gray-900 p-2 text-sm text-gray-300">
            {JSON.stringify(toolInvocation.result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};