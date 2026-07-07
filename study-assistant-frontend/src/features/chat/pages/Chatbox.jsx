import { useState, useRef, useEffect } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const autoGrow = (el) => {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    // Placeholder reply — swap this out for a real API call
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Got it! (this is a placeholder reply)" },
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-6"
      >
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
              className="flex-1 resize-none bg-transparent outline-none text-[15px] leading-relaxed py-1.5 max-h-40"
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