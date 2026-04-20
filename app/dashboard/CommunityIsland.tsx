"use client";

import { useState } from "react";

const COMMUNITY_URL = process.env.NEXT_PUBLIC_COMMUNITY_URL || "#";
const NEXT_QA_DATE = process.env.NEXT_PUBLIC_NEXT_QA_DATE || "Date TBA";

export default function CommunityIsland() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)]">
      {open ? (
        <div className="glass rounded-[18px] p-5 w-[300px] animate-[fadeUp_0.25s_ease-out]">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <div className="text-[10.5px] tracking-[0.22em] uppercase text-[var(--muted-2)] mb-1">
                The Room
              </div>
              <div className="display text-[18px] leading-tight">
                Come hang out.
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="w-7 h-7 rounded-full grid place-items-center border border-[var(--border-strong)] hover:bg-[var(--ink)] hover:text-[var(--bg)] hover:border-[var(--ink)] transition-colors"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <p className="text-[13px] text-[var(--muted)] leading-[1.55] mb-4">
            Real people figuring this out together. Next live Q&amp;A with me:
          </p>

          <div className="glass-soft rounded-[var(--r3)] px-3 py-2.5 mb-4 flex items-center gap-2.5">
            <span
              className="w-7 h-7 rounded-full grid place-items-center shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #bfd8ee 0%, #6fa8de 50%, #4685c4 100%)",
                color: "#0b0d12",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                <rect x="2" y="3" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
                <path d="M5 1.5v2M9 1.5v2M2 6h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--muted-2)]">
                Next Q&amp;A
              </div>
              <div className="text-[13px] font-semibold text-[var(--ink)]">
                {NEXT_QA_DATE}
              </div>
            </div>
          </div>

          <a
            href={COMMUNITY_URL}
            target={COMMUNITY_URL.startsWith("http") ? "_blank" : undefined}
            rel={COMMUNITY_URL.startsWith("http") ? "noopener noreferrer" : undefined}
            className="btn-primary w-full justify-center !py-2.5 !text-[13.5px]"
          >
            Open the room
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="glass rounded-full px-4 py-3 flex items-center gap-2.5 hover:shadow-lg transition-shadow group"
          aria-label="Open the room"
        >
          <span
            className="w-8 h-8 rounded-full grid place-items-center shrink-0"
            style={{
              background: "linear-gradient(135deg, #bfd8ee 0%, #6fa8de 50%, #4685c4 100%)",
              color: "#0b0d12",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 6.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM8 6.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM1.5 11.5c.5-1.5 1.75-2.5 3-2.5s2.5 1 3 2.5M8 9c1.25 0 2.5 1 3 2.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-[13.5px] font-semibold text-[var(--ink)] pr-1">
            The Room
          </span>
        </button>
      )}
    </div>
  );
}
