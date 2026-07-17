import { useState, useEffect } from "react";

export default function QuizCards({ qnIndex, quizData, total }) {
    const [selected, setSelected] = useState(null);
    const item = quizData[qnIndex];

    // Reset selection whenever the question changes
    useEffect(() => {
        setSelected(null);
    }, [qnIndex]);

    // --- Hardcoded options for now ---
    // Swap this block once your backend returns item.options directly:
    // const options = item.options;
    const options = [item.ans, "Sample option B", "Sample option C", "Sample option D"];

    const remaining = total - qnIndex; // used for the depleting stack effect

    return (
        <div className="relative w-full">
            {/* Ghost cards behind — the depleting stack */}
            {remaining > 2 && (
                <div className="absolute inset-0 translate-y-3 translate-x-3 rotate-2 bg-white rounded-2xl shadow-sm opacity-40" />
            )}
            {remaining > 1 && (
                <div className="absolute inset-0 translate-y-1.5 translate-x-1.5 rotate-1 bg-white rounded-2xl shadow-sm opacity-70" />
            )}

            {/* Active card */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 transition-all duration-300">
                <div className="flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#94A3B8] tracking-wide">
                        {String(qnIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                    <div className="h-1.5 w-24 bg-[#EEF1F7] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#F2A93B] transition-all duration-300"
                            style={{ width: `${((qnIndex + 1) / total) * 100}%` }}
                        />
                    </div>
                </div>

                <p className="font-['Fraunces'] text-xl text-[#1F2A44] leading-snug">
                    {item.qn}
                </p>

                <div className="flex flex-col gap-2.5">
                    {options.map((opt, i) => {
                        const isSelected = selected === opt;
                        const isCorrect = opt === item.ans;
                        const showResult = selected !== null;

                        let stateClasses = "border-[#E2E8F0] hover:border-[#F2A93B] hover:bg-[#FFF8EC]";
                        if (showResult && isCorrect) {
                            stateClasses = "border-[#16A34A] bg-[#F0FDF4] text-[#16A34A]";
                        } else if (showResult && isSelected && !isCorrect) {
                            stateClasses = "border-[#E11D48] bg-[#FFF1F2] text-[#E11D48]";
                        }

                        return (
                            <button
                                key={i}
                                onClick={() => !showResult && setSelected(opt)}
                                disabled={showResult}
                                className={`text-left px-4 py-3 rounded-xl border font-['Inter'] text-sm text-[#1F2A44] transition-colors ${stateClasses}`}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}