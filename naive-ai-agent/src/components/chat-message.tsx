import ReactMarkdown, { type Components } from "react-markdown";
import type { Message } from "ai";

export type MessagePart = NonNullable<Message["parts"]>[number];

interface ChatMessageProps {
  parts: MessagePart[];
  role: string;
  userName: string;
}

const components: Components = {
  // Override default elements with custom styling
  p: ({ children }) => <p className="mb-4 first:mt-0 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 list-disc pl-4">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 list-decimal pl-4">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  code: ({ className, children, ...props }) => (
    <code className={`${className ?? ""}`} {...props}>
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-700 p-4">
      {children}
    </pre>
  ),
  a: ({ children, ...props }) => (
    <a
      className="text-blue-400 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
};

const Markdown = ({ children }: { children: string }) => {
  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

// ChatMessage now renders messages using the `parts` array (MessagePart) only.
// This supersedes the old `text` prop approach. Each message can contain multiple parts, such as text, tool invocations, etc.
// Hover over tool invocation boxes to see the full tool call/result object.
// To see all possible part types, explore the MessagePart type (see ai-sdk docs or type definition in this file).
export const ChatMessage = ({ parts, role, userName }: ChatMessageProps) => {
  const isAI = role === "assistant";

  return (
    <div className="mb-6">
      <div
        className={`rounded-lg p-4 ${
          isAI ? "bg-gray-800 text-gray-300" : "bg-gray-900 text-gray-300"
        }`}
      >
        <p className="mb-2 text-sm font-semibold text-gray-400">
          {isAI ? "AI" : userName}
        </p>
        <div className="prose prose-invert max-w-none">
          {parts.map((part, i) => {
            if (part.type === "text") {
              return <Markdown key={i}>{part.text}</Markdown>;
            }
            if (part.type === "tool-invocation") {
              const { toolInvocation } = part;
              return (
                <div key={i} className="my-2 p-2 rounded bg-gray-700 text-gray-100 text-xs cursor-help" title={JSON.stringify(toolInvocation, null, 2)}>
                  <div><b>Tool Call:</b> <code>{toolInvocation.toolName}</code></div>
                  <div><b>Args:</b> <code>{JSON.stringify(toolInvocation.args)}</code></div>
                  {toolInvocation.state === "result" && (
                    <div><b>Result:</b> <code>{JSON.stringify(toolInvocation.result)}</code></div>
                  )}
                  <div className="mt-1 text-gray-400">(Hover to see full tool invocation object)</div>
                </div>
              );
            }
            // Optionally: handle other part types here
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
