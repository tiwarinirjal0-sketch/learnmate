import { useState } from "react";
import FlashcardApi from "../api/FlashcardApi";
import FlashcardInput from "../components/FlashcardInput";
import FlashcardDeck from "../components/FlashcardDeck";

export default function Flashcards() {
    const [view, setView] = useState("input"); // "input" | "loading" | "deck" | "error"
    const [content, setContent] = useState("");
    const [cards, setCards] = useState([]);
    const [cardIndex, setCardIndex] = useState(0);
    const [error, setError] = useState(null);

    const generateCards = async () => {
        if (!content.trim()) return;
        setView("loading");
        setError(null);
        try {
            const data = await FlashcardApi(content);
            setCards(Array.isArray(data) ? data : [data]);
            setCardIndex(0);
            setView("deck");
        } catch (err) {
            setError(err.message);
            setView("error");
        }
    };

    const startOver = () => {
        setContent("");
        setCards([]);
        setCardIndex(0);
        setView("input");
    };

    return (
        <div className="min-h-screen w-full bg-[#EEF1F7] flex items-center justify-center p-6">
            {view === "input" && (
                <FlashcardInput
                    content={content}
                    setContent={setContent}
                    onSubmit={generateCards}
                />
            )}

            {view === "loading" && (
                <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 border-4 border-[#F2A93B] border-t-transparent rounded-full animate-spin" />
                    <p className="font-['Inter'] text-[#64748B] text-sm">
                        Building your flashcards…
                    </p>
                </div>
            )}

            {view === "error" && (
                <div className="flex flex-col items-center gap-4 text-center max-w-sm">
                    <p className="font-['Inter'] text-[#E11D48] font-medium">
                        Couldn't generate flashcards
                    </p>
                    <p className="font-['Inter'] text-[#64748B] text-sm">{error}</p>
                    <button
                        onClick={() => setView("input")}
                        className="px-5 py-2 rounded-xl bg-[#1F2A44] text-white font-['Inter'] text-sm hover:bg-[#2C3A5C] transition-colors"
                    >
                        Try again
                    </button>
                </div>
            )}

            {view === "deck" && cards.length > 0 && (
                <div className="flex flex-col items-center gap-6 w-full max-w-md">
                    <FlashcardDeck
                        cardIndex={cardIndex}
                        cards={cards}
                        total={cards.length}
                    />

                    <div className="flex items-center gap-4 w-full justify-center">
                        <button
                            disabled={cardIndex === 0}
                            onClick={() => setCardIndex((prev) => prev - 1)}
                            className="px-5 py-2 rounded-xl bg-white text-[#1F2A44] font-['Inter'] text-sm font-medium shadow-sm border border-[#E2E8F0] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            ← Prev
                        </button>

                        {cardIndex === cards.length - 1 ? (
                            <button
                                onClick={startOver}
                                className="px-5 py-2 rounded-xl bg-[#F2A93B] text-[#1F2A44] font-['Inter'] text-sm font-semibold hover:bg-[#e0991f] transition-colors"
                            >
                                Start Over
                            </button>
                        ) : (
                            <button
                                onClick={() => setCardIndex((prev) => prev + 1)}
                                className="px-5 py-2 rounded-xl bg-[#1F2A44] text-white font-['Inter'] text-sm font-medium hover:bg-[#2C3A5C] transition-colors"
                            >
                                Next →
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}