import { useState } from "react";
import SummarizeApi from "../api/SummarizeApi";
import SummarizeInput from "../components/SummarizeInput";
import SummarizeResult from "../components/Summarizeresult";
export default function Summarize() {
    const [view, setView] = useState("input"); // "input" | "loading" | "summary" | "error"
    const [content, setContent] = useState("");
    const [summaryData, setSummaryData] = useState(null);
    const [error, setError] = useState(null);

    const generateSummary = async () => {
        if (!content.trim()) return;
        setView("loading");
        setError(null);
        try {
            const result = await SummarizeApi(content);
            setSummaryData(result);
            setView("summary");
        } catch (err) {
            setError(err.message);
            setView("error");
        }
    };

    const startOver = () => {
        setContent("");
        setSummaryData(null);
        setView("input");
    };

    return (
        <div className="min-h-screen w-full bg-[#EEF1F7] flex items-center justify-center p-6">
            {view === "input" && (
                <SummarizeInput
                    content={content}
                    setContent={setContent}
                    onSubmit={generateSummary}
                />
            )}

            {view === "loading" && (
                <div className="flex flex-col items-center gap-4">
                    <div className="h-10 w-10 border-4 border-[#F2A93B] border-t-transparent rounded-full animate-spin" />
                    <p className="font-['Inter'] text-[#64748B] text-sm">
                        Summarizing your text…
                    </p>
                </div>
            )}

            {view === "error" && (
                <div className="flex flex-col items-center gap-4 text-center max-w-sm">
                    <p className="font-['Inter'] text-[#E11D48] font-medium">
                        Couldn't generate the summary
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

            {view === "summary" && summaryData && (
                <div className="flex flex-col items-center gap-6 w-full max-w-lg">
                    <SummarizeResult data={summaryData} originalContent={content} />

                    <button
                        onClick={startOver}
                        className="px-5 py-2 rounded-xl bg-[#1F2A44] text-white font-['Inter'] text-sm font-medium hover:bg-[#2C3A5C] transition-colors"
                    >
                        Summarize something else
                    </button>
                </div>
            )}
        </div>
    );
}