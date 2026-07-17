import { useState } from "react";
import QuizApi from "../api/quiz.api";
import QuizInput from "../components/QuizInput";
import QuizCards from "../components/Cards";

export default function Quiz() {
    const [view, setView] = useState("input"); // "input" | "loading" | "quiz" | "error"
    const [content, setContent] = useState("");
    const [quizData, setQuizData] = useState([]);
    const [qnIndex, setQnIndex] = useState(0);
    const [error, setError] = useState(null);

    const generateQuiz = async () => {
        if (!content.trim()) return;
        setView("loading");
        setError(null);
        try {
            const quizzes = await QuizApi(content);
            setQuizData(Array.isArray(quizzes) ? quizzes : [quizzes]);
            setQnIndex(0);
            setView("quiz");
        } catch (err) {
            setError(err.message);
            setView("error");
        }
    };

    const startOver = () => {
        setContent("");
        setQuizData([]);
        setQnIndex(0);
        setView("input");
    };

    return (
        <div className="min-h-screen w-full bg-[#EEF1F7] flex items-center justify-center p-6">
            {view === "input" && (
                <QuizInput
                    content={content}
                    setContent={setContent}
                    onSubmit={generateQuiz}
                />
            )}

            {view === "loading" && (
                <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 border-4 border-[#F2A93B] border-t-transparent rounded-full animate-spin" />
                    <p className="font-['Inter'] text-[#64748B] text-sm">
                        Building your quiz…
                    </p>
                </div>
            )}

            {view === "error" && (
                <div className="flex flex-col items-center gap-4 text-center max-w-sm">
                    <p className="font-['Inter'] text-[#E11D48] font-medium">
                        Couldn't generate the quiz
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

            {view === "quiz" && quizData.length > 0 && (
                <div className="flex flex-col items-center gap-6 w-full max-w-md">
                    <QuizCards
                        qnIndex={qnIndex}
                        quizData={quizData}
                        total={quizData.length}
                    />

                    <div className="flex items-center gap-4 w-full justify-center">
                        <button
                            disabled={qnIndex === 0}
                            onClick={() => setQnIndex((prev) => prev - 1)}
                            className="px-5 py-2 rounded-xl bg-white text-[#1F2A44] font-['Inter'] text-sm font-medium shadow-sm border border-[#E2E8F0] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            ← Prev
                        </button>

                        {qnIndex === quizData.length - 1 ? (
                            <button
                                onClick={startOver}
                                className="px-5 py-2 rounded-xl bg-[#F2A93B] text-[#1F2A44] font-['Inter'] text-sm font-semibold hover:bg-[#e0991f] transition-colors"
                            >
                                Start Over
                            </button>
                        ) : (
                            <button
                                onClick={() => setQnIndex((prev) => prev + 1)}
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