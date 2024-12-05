"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Message } from "ai";

type TMessageContent = Message["content"];

interface ChatContextType {
  message: TMessageContent | null;
  setMessage: React.Dispatch<React.SetStateAction<TMessageContent | null>>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<TMessageContent | null>(null);

  useEffect(() => {
    const message = localStorage.getItem("message");
    if (message) {
      setMessage(JSON.parse(message));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("message", JSON.stringify(message));
  }, [message]);

  return (
    <ChatContext.Provider value={{ message, setMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
