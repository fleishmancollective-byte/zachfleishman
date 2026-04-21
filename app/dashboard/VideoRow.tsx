"use client";

import type { Video } from "./data";

type Props = {
  video: Video;
  isWatched: boolean;
  onPlay: () => void;
  onToggleWatched: () => void;
};

export default function VideoRow({
  video,
  isWatched,
  onPlay,
  onToggleWatched,
}: Props) {
  return (
    <div
      className={`group relative flex items-start gap-4 sm:gap-5 px-5 sm:px-6 py-4 sm:py-5 rounded-[var(--r2)] transition-all cursor-pointer border ${
        isWatched
          ? "bg-white/40 border-[var(--border)]"
          : "bg-white/60 border-[var(--border-strong)] hover:bg-white/80 hover:shadow-md"
      }`}
      onClick={onPlay}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlay();
        }
      }}
    >
      {/* Watched circle (click to manually toggle) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleWatched();
        }}
        aria-label={isWatched ? "Mark as unwatched" : "Mark as watched"}
        aria-pressed={isWatched}
        className="shrink-0 w-6 h-6 rounded-full grid place-items-center transition-all mt-1"
        style={
          isWatched
            ? {
                background:
                  "linear-gradient(135deg, #f4cfa1 0%, #c9a063 100%)",
              }
            : {
                background: "transparent",
                border: "1.5px solid var(--border-strong)",
              }
        }
      >
        {isWatched ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M2.5 6.2L5 8.5L9.5 3.5"
              stroke="#0b0d12"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>

      {/* Number */}
      <span className="display text-[26px] sm:text-[28px] text-[var(--gold)] leading-none shrink-0 w-[40px] mt-0.5">
        {video.num}
      </span>

      {/* Title + description */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h4
            className={`text-[15px] sm:text-[16px] font-semibold tracking-tight leading-snug ${
              isWatched ? "text-[var(--muted)]" : "text-[var(--ink)]"
            }`}
          >
            {video.title}
          </h4>
          <span className="shrink-0 text-[11px] tracking-[0.1em] uppercase text-[var(--muted-2)] mt-1 whitespace-nowrap">
            {video.duration}
          </span>
        </div>
        <p
          className={`text-[13.5px] leading-[1.55] ${
            isWatched ? "text-[var(--muted-2)]" : "text-[var(--muted)]"
          }`}
        >
          {video.description}
        </p>
      </div>

      {/* Play indicator (right side, appears on hover) */}
      <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--bg)] grid place-items-center">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden>
            <path d="M1 1v10l8-5-8-5z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
