const MIN_CHARS = 40;

export default function SummarizeInput({ content, setContent, onSubmit }) {
    const charCount = content.length;
    const isTooShort = charCount > 0 && charCount < MIN_CHARS;

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            onSubmit();
        }
    };

    return (
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h1 className="font-['Inter'] text-[#1F2A44] font-bold text-2xl">
                    Summarize anything
                </h1>
                <p className="font-['Inter'] text-[#64748B] text-sm">
                    Paste an article, transcript, or notes — get the key points back in seconds.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Paste your text here…"
                    rows={10}
                    className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 font-['Inter'] text-sm text-[#1F2A44] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F2A93B] focus:border-transparent transition-shadow"
                />
                <div className="flex items-center justify-between px-1">
                    <span
                        className={`font-['Inter'] text-xs ${
                            isTooShort ? "text-[#E11D48]" : "text-[#94A3B8]"
                        }`}
                    >
                        {isTooShort
                            ? `Add a bit more — ${MIN_CHARS - charCount} characters to go`
                            : `${charCount.toLocaleString()} characters`}
                    </span>
                    <span className="font-['Inter'] text-xs text-[#94A3B8]">⌘ + Enter to submit</span>
                </div>
            </div>

            <button
                onClick={onSubmit}
                disabled={!content.trim() || isTooShort}
                className="w-full px-5 py-3 rounded-xl bg-[#F2A93B] text-[#1F2A44] font-['Inter'] text-sm font-semibold hover:bg-[#e0991f] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
                Summarize
            </button>
        </div>
    );
}