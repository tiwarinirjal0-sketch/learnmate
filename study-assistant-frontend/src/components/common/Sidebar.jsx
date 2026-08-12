import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Replace with your own items — icon is optional
const sidebarItems = [
  { label: "Overview", to: "/", icon: null },
  { label: "Sources", to: "/sources", icon: null },
  { label: "Quizzes", to: "/quizzes", icon: null },
  { label: "Flashcards", to: "/flashcards", icon: null },
  { label: "Settings", to: "/settings", icon: null },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 fixed top-0 left-0 h-screen border-r border-gray-200 bg-white flex flex-col px-4 py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-8">
        <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-sm font-semibold tracking-[-0.01em]">Learn Mate</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5">
        {sidebarItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-gray-100 text-[#1A1A1A] font-medium"
                  : "text-gray-600 hover:text-[#1A1A1A] hover:bg-gray-50"
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[3px] rounded-r-full bg-[#1A1A1A]" />
              )}
              {item.icon && (
                <span className="w-4 h-4 shrink-0 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom slot — user profile, CTA, whatever you need */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <button className="w-full rounded-full bg-[#1A1A1A] text-white text-sm font-medium px-4 py-2.5 hover:bg-black transition-colors">
          Get the App
        </button>
      </div>
    </aside>
  );
}