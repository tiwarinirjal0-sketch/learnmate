import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [historyMessages, setHistoryMessages] = useState([]); // was `false`, now an array
  const { user } = useAuth();

  const clickForChats = async () => {
    if (!user) return;
    try {
      return await getChats();
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const value = {
    clickForChats,
    setHistoryMessages,
    historyMessages,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);

  if (context === null) {
    throw new Error("useChat must be used inside an AuthProvider");
  }

  return context;
}