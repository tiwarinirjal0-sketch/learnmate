import { useState } from "react";

// The API may return { summary }, { text }, a plain string, or something else —
// this normalizes it to a displayable string without assuming one exact shape.
function extractSummaryText(data) {
    if (typeof data === "string") return data;
    if (data && typeof data === "object") {
        return data.summary || data.text || data.result || JSON.stringify(data);
    }
    return String(data ?? "");
}

export default function SummarizeResult({ data, originalContent }) {
    const [copied, setCopied] = useState(false);
    const summaryText = extractSummaryText(data);

    const originalWords = originalContent.trim().split(/\s+/).filter(Boolean).length;
    const summaryWords = summaryText.trim().split(/\s+/).filter(Boolean).length;
    const reduction =
        originalWords > 0
            ? Math.round(((originalWords - summaryWords) / originalWords) * 100)
            : 0;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(summaryText);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // Clipboard access can fail silently (permissions, insecure context) — no-op.
        }
    };

    return (
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-8 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="font-['Inter'] text-[#1F2A44] font-bold text-2xl">
                        Your summary
                    </h1>
                    <p className="font-['Inter'] text-[#64748B] text-sm">
                        {summaryWords.toLocaleString()} words
                        {reduction > 0 && (
                            <>
                                {" "}
                                · <span className="text-[#F2A93B] font-medium">{reduction}% shorter</span>
                            </>
                        )}
                    </p>
                </div>
                <button
                    onClick={handleCopy}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] font-['Inter'] text-xs font-medium text-[#1F2A44] hover:bg-[#EEF1F7] transition-colors"
                >
                    {copied ? "Copied ✓" : "Copy"}
                </button>
            </div>

            <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-5 max-h-80 overflow-y-auto">
                <p className="font-['Inter'] text-sm text-[#1F2A44] leading-relaxed whitespace-pre-wrap">
                    {summaryText}
                </p>
            </div>
        </div>
    );
}