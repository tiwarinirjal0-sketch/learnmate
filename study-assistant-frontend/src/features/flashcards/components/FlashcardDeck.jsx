import { useState, useEffect } from "react";

export default function FlashcardDeck({ cardIndex, cards, total }) {
    const [flipped, setFlipped] = useState(false);
    const card = cards[cardIndex];
    const remaining = total - cardIndex;

    useEffect(() => {
        setFlipped(false);
    }, [cardIndex]);

    return (
        <div className="relative w-full">
            {remaining > 2 && (
                <div className="absolute inset-0 translate-y-3 translate-x-3 rotate-2 bg-white rounded-2xl shadow-sm opacity-40" />
            )}
            {remaining > 1 && (
                <div className="absolute inset-0 translate-y-1.5 translate-x-1.5 rotate-1 bg-white rounded-2xl shadow-sm opacity-70" />
            )}

            <div className="relative flex items-center justify-between mb-3 px-1">
                <span className="font-['JetBrains_Mono'] text-xs text-[#94A3B8] tracking-wide">
                    {String(cardIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <div className="h-1.5 w-24 bg-white rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#F2A93B] transition-all duration-300"
                        style={{ width: `${((cardIndex + 1) / total) * 100}%` }}
                    />
                </div>
            </div>

            <div
                className="relative h-72 w-full cursor-pointer"
                style={{ perspective: "1200px" }}
                onClick={() => setFlipped((prev) => !prev)}
            >
                <div
                    className="relative h-full w-full transition-transform duration-500"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center gap-4"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <span className="font-['Inter'] text-xs uppercase tracking-widest text-[#94A3B8]">
                            Question
                        </span>
                        <p className="font-['Fraunces'] text-xl text-[#1F2A44] leading-snug">
                            {card.front}
                        </p>
                        <span className="font-['Inter'] text-xs text-[#94A3B8] mt-2">
                            Tap to reveal
                        </span>
                    </div>

                    <div
                        className="absolute inset-0 bg-[#1F2A44] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center gap-4"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        <span className="font-['Inter'] text-xs uppercase tracking-widest text-[#F2A93B]">
                            Answer
                        </span>
                        <p className="font-['Fraunces'] text-xl text-white leading-snug">
                            {card.back}
                        </p>
                        <span className="font-['Inter'] text-xs text-white/50 mt-2">
                            Tap to flip back
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}