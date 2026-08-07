import { useState, useRef, useEffect } from "react";
import { AddChats, chatApi, ChatCreate } from "../api/chatapi";
import { SettingsIcon } from "lucide-react";
import { useChat } from "../../../context/ChatContext";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const { historyMessages } = useChat();
  const [displayChatBox, setDisplayChatBox] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const textareaRef = useRef(null);
  const [error, setError] = useState("");
  const isInitialLoad = useRef(true); // tracks whether the next `messages` change is a history load

  useEffect(() => {
    isInitialLoad.current = true; // mark that this update came from history, not a new send
    setMessages(historyMessages || []);
    console.log(historyMessages)
  }, [historyMessages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });

    if (isInitialLoad.current) {
      // this update was just loading past history — don't re-POST it
      isInitialLoad.current = false;
      return;
    }

    const chatAdd = async () => {
      try {
        await AddChats(messages);
      } catch (error) {
        console.error(error.message);
      }
    };

    chatAdd();
  }, [messages]);

  const handleChatCreation = async () => {
    try {
      await ChatCreate();
      setDisplayChatBox(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const autoGrow = (el) => {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: "user", text: input }];

    setMessages(updatedMessages);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    const { reply } = await chatApi(updatedMessages);

    setMessages((prev) => [...prev, { role: "model", text: reply }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!displayChatBox && !error) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div
          onClick={async () => {
            await handleChatCreation();
          }}
          className="w-10 h-10 border-2 border-gray-500 hover:border-gray-400 rounded-xl flex items-center justify-center hover:cursor-pointer"
        >
          <div className="text-2xl">+</div>
        </div>
        <button className="text-amber-200 hover:text-amber-50 hover:cursor-pointer">
          Start New Chat
        </button>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col w-full h-full justify-center items-center">
        {error}
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {messages.map((msg, i) =>
            msg.role === "user" ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[75%] bg-gray-100 text-gray-900 px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div key={i} className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-900 flex items-center justify-center text-white text-xs font-medium mt-0.5">
                  AI
                </div>
                <div className="text-[15px] leading-relaxed text-gray-800 pt-1">
                  {msg.text}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-6 pt-2">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-end gap-2 border border-gray-300 rounded-3xl px-4 py-2 shadow-sm focus-within:border-gray-400 transition">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                autoGrow(e.target);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Message the assistant..."
              rows={1}
              className="flex-1 resize-none bg-transparent outline-none text-[15px] leading-relaxed py-1.5 max-h-40 text-gray-900 placeholder:text-gray-400"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-900 disabled:bg-gray-300 text-white flex items-center justify-center transition"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}