export default function FlashcardInput({ content, setContent, onSubmit }) {
    return (
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
            <div>
                <h1 className="font-['Fraunces'] text-2xl text-[#1F2A44] font-medium">
                    What do you want to memorize?
                </h1>
                <p className="font-['Inter'] text-sm text-[#64748B] mt-1">
                    Paste your notes and we'll turn them into flashcards.
                </p>
            </div>

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste your content here…"
                rows={10}
                className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 font-['Inter'] text-sm text-[#1F2A44] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#F2A93B] transition-shadow"
            />

            <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs text-[#94A3B8]">
                    {content.trim().length} chars
                </span>
                <button
                    onClick={onSubmit}
                    disabled={!content.trim()}
                    className="px-6 py-2.5 rounded-xl bg-[#1F2A44] text-white font-['Inter'] text-sm font-medium hover:bg-[#2C3A5C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    Generate Flashcards
                </button>
            </div>
        </div>
    );
}