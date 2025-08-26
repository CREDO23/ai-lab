"use client";

import { ChatMessage } from "~/components/chat-message";
import { SignInModal } from "~/components/sign-in-modal";
import { useChat } from "@ai-sdk/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isNewChatCreated } from "./utils";
import type { Message } from "ai";
import { StickToBottom } from "use-stick-to-bottom";
import type { OurMessageAnnotation } from "./api/services/deep-search.service";

interface ChatProps {
  userName: string;
  chatId: string;
  initialMessages?: Message[];
  isNewChat: boolean;
}

export const ChatPage = ({
  userName,
  chatId,
  initialMessages,
  isNewChat,
}: ChatProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    data, // data stream from the AI
  } = useChat({
    body: {
      chatId,
      isNewChat,
    },
    initialMessages,
  });

  const router = useRouter();

  useEffect(() => {
    const lastDataStream = data?.[data.length - 1];

    if (lastDataStream && isNewChatCreated(lastDataStream)) {
      router.push(`?chatId=${lastDataStream.chatId}`);
    }
  }, [data, router]);

  return (
    <>
      <div className="flex flex-1 flex-col">
        <StickToBottom
          className="mx-auto w-full max-w-[65ch] overflow-y-auto flex-1 [&>div]:scrollbar-thin [&>div]:scrollbar-track-gray-200 [&>div]:scrollbar-thumb-gray-600"
          resize="smooth"
          initial="smooth"
        >
          <StickToBottom.Content
            className="p-4"
            role="log"
            aria-label="Chat messages"
          >
            {messages.map((message, index) => {
              return (
                <ChatMessage
                  key={index}
                  parts={message.parts}
                  role={message.role}
                  userName={userName}
                   annotations={
                  (message.annotations ?? []) as OurMessageAnnotation[]
                }
                />
              );
            })}
          </StickToBottom.Content>
        </StickToBottom>

        <div className="border-t border-gray-700">
          <form onSubmit={handleSubmit} className="mx-auto max-w-[65ch] p-4">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Say something..."
                autoFocus
                aria-label="Chat input"
                className="flex-1 rounded border border-gray-700 bg-gray-800 p-2 text-gray-200 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-600 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:hover:bg-gray-700"
              >
                {isLoading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <SignInModal
        isOpen={false}
        onClose={() => {
          console.log("modal closed");
        }}
      />
    </>
  );
};
