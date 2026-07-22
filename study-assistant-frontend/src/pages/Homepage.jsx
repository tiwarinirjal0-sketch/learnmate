import ChatBox from "../features/chat/pages/Chatbox";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    label: "Quiz",
    path: "/quiz",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 2.5-3 4.5M12 17.5h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
    ),
  },
  {
    label: "Flashcards",
    path: "/flashcards",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zM8 3h8a2 2 0 012 2v10" />
    ),
  },
  {
    label: "Notes",
    path: "/notes",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" />
    ),
  },
  {
    label: "Summarizer",
    path: "/summarizer",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7m9-6l-3-3m3 3l-3 3" />
    ),
  },
  {
    label: "Settings",
    path: "/settings",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    ),
  },
];

const suggestions = [
  "Summarize my last upload",
  "Quiz me on chapter 4",
  "Explain this like I'm new",
  "Make flashcards from this",
];

export default function Home() {
  const nav = useNavigate();

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(14px, -18px); }
        }
        @keyframes borderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .reveal { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .reveal-1 { animation-delay: 0.05s; }
        .reveal-2 { animation-delay: 0.12s; }
        .reveal-3 { animation-delay: 0.19s; }
        .reveal-4 { animation-delay: 0.26s; }
        .float-blob { animation: floatSlow 10s ease-in-out infinite; }
        .spin-slow { animation: borderSpin 7s linear infinite; }
        .live-dot { animation: pulseDot 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .reveal, .float-blob, .spin-slow, .live-dot { animation: none !important; }
        }
      `}</style>

      <div className="relative min-h-screen w-full bg-[#0A0C12] text-[#E7E9EE] font-['Inter'] overflow-hidden">
        {/* Background layer */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#151827_0%,_#0A0C12_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:46px_46px]" />
          <div className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-[#F2A93B]/10 blur-[110px] float-blob" />
          <div
            className="absolute top-1/3 -right-28 w-[460px] h-[460px] rounded-full bg-[#7C5CFC]/15 blur-[120px] float-blob"
            style={{ animationDelay: "2.5s" }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#2FD5C8]/10 blur-[110px] float-blob"
            style={{ animationDelay: "5s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[272px_minmax(0,1fr)_320px] gap-5 p-4 sm:p-6 lg:p-8 min-h-screen">
          {/* ---------------- LEFT SIDEBAR ---------------- */}
          <aside className="reveal reveal-1 order-2 lg:order-1 flex flex-col gap-6">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#F2A93B] to-[#7C5CFC] flex items-center justify-center shadow-lg shadow-[#7C5CFC]/20 shrink-0">
                  <svg className="w-5 h-5 text-[#0A0C12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[15px] leading-none tracking-tight">Studyloop</p>
                  <p className="text-[11px] text-white/40 mt-1">AI Study Assistant</p>
                </div>
              </div>
              <p className="text-sm text-white/60 mt-4 leading-relaxed">
                Welcome back — pick up where you left off, or start something new.
              </p>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <button
                  key={item.path}
                  onClick={() => nav(item.path)}
                  className="group relative flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:shadow-lg hover:shadow-black/20"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] rounded-r-full bg-[#F2A93B] transition-all duration-300 group-hover:h-6" />
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] text-[#F2A93B] shrink-0 transition-colors duration-300 group-hover:bg-[#F2A93B]/15">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      {item.icon}
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white/85 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                  <svg
                    className="w-4 h-4 ml-auto text-white/20 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </nav>
          </aside>

          {/* ---------------- CENTER: CHAT ---------------- */}
          <main className="reveal reveal-2 order-1 lg:order-2 flex flex-col gap-4 min-h-[520px]">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-[#2FD5C8]" />
                </span>
                <h1 className="text-lg font-semibold tracking-tight text-white/90">AI Assistant</h1>
                <span className="text-xs text-white/35">— ready when you are</span>
              </div>
            </div>

            {/* Suggestion chips */}
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
              {suggestions.map((s) => (
                <button
                  key={s}
                  className="shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 px-4 py-2 text-xs text-white/70 hover:text-white transition-all duration-200"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Chat card with animated gradient border */}
            <div className="relative flex-1 rounded-3xl p-[1.5px] overflow-hidden">
              <div className="absolute -inset-[60%] bg-[conic-gradient(from_0deg,#F2A93B,transparent_25%,#7C5CFC,transparent_55%,#2FD5C8,transparent_85%,#F2A93B)] spin-slow" />
              <div className="relative h-full rounded-3xl bg-[#0C0F17]/95 backdrop-blur-2xl shadow-2xl shadow-black/40 overflow-hidden">
                <ChatBox />
              </div>
            </div>
          </main>

          {/* ---------------- RIGHT SIDEBAR ---------------- */}
          <aside className="reveal reveal-3 order-3 flex flex-col gap-4">
            {/* Streak ring */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-5 flex items-center gap-4">
              <div className="relative w-16 h-16 shrink-0">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                  <circle
                    cx="32" cy="32" r="27" fill="none" stroke="#F2A93B" strokeWidth="6"
                    strokeLinecap="round" strokeDasharray={2 * Math.PI * 27} strokeDashoffset={2 * Math.PI * 27 * (1 - 4 / 7)}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">4/7</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/90">Study streak</p>
                <p className="text-xs text-white/45 mt-1">3 more days to a full week</p>
              </div>
            </div>

            {/* Today's progress */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-5">
              <p className="text-sm font-semibold text-white/90 mb-3">Today's progress</p>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
                  <div key={d} className={`h-1.5 flex-1 rounded-full ${d <= 5 ? "bg-[#2FD5C8]" : "bg-white/10"}`} />
                ))}
              </div>
              <p className="text-xs text-white/40 mt-2.5">5 of 8 tasks done</p>
            </div>

            {/* Recent activity */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-5">
              <p className="text-sm font-semibold text-white/90 mb-3">Recent activity</p>
              <ul className="flex flex-col gap-3">
                {[
                  { text: "Finished Biology quiz", time: "2h ago" },
                  { text: "Reviewed 12 flashcards", time: "5h ago" },
                  { text: "Summarized Chapter 3", time: "yesterday" },
                ].map((a, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC] shrink-0" />
                    <span className="text-white/65 flex-1">{a.text}</span>
                    <span className="text-white/30">{a.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming quizzes */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-5">
              <p className="text-sm font-semibold text-white/90 mb-3">Upcoming quizzes</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { name: "Chemistry: Bonds", date: "Mon" },
                  { name: "History: WWI", date: "Wed" },
                ].map((q) => (
                  <div key={q.name} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wide bg-[#F2A93B]/15 text-[#F2A93B] rounded-md px-2 py-1">
                      {q.date}
                    </span>
                    <span className="text-xs text-white/70">{q.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}                       
            <div className="reveal reveal-4 grid grid-cols-2 gap-3">
              {[
                { label: "Cards mastered", value: "128" },
                { label: "Quizzes taken", value: "34" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-xl p-4">
                  <p className="text-xl font-semibold text-white/90">{s.value}</p>
                  <p className="text-[11px] text-white/40 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Motivational quote */}
            <div className="relative rounded-2xl border border-white/8 bg-gradient-to-br from-[#7C5CFC]/10 to-transparent backdrop-blur-xl p-5 overflow-hidden">
              <span className="absolute top-3 left-4 text-3xl text-[#7C5CFC]/30 font-serif leading-none">"</span>
              <p className="text-sm italic text-white/70 leading-relaxed pl-3">
                Small, consistent effort beats last-minute cramming — every time.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}