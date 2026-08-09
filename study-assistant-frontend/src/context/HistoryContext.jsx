import { createContext, useContext, useState } from "react";

const HistoryContext = createContext(null);

export function HistoryContextProvider({ children }) {
    const [showChatHistory, setShowChatHistory] = useState(false);

    return (
        <HistoryContext.Provider
            value={{
                showChatHistory,
                setShowChatHistory,
            }}
        >
            {children}
        </HistoryContext.Provider>
    );
}

export function useHistoryContext() {
    const context = useContext(HistoryContext);

    if (!context) {
        throw new Error(
            "useHistoryContext must be used inside a HistoryContextProvider"
        );
    }

    return context;
}