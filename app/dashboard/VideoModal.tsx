"use client";

import { useEffect } from "react";
import type { Video } from "./data";

type Props = {
  video: Video | null;
  alreadyWatched: boolean;
  onClose: () => void;
  onDoneWatching: (id: string) => void;
};

export default function VideoModal({
  video,
  alreadyWatched,
  onClose,
  onDoneWatching,
}: Props) {
  // Lock body scroll while open + support Esc to close.
  useEffect(() => {
    if (!video) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [video, onClose]);

  if (!video) return null;

  const embedUrl = video.wistiaId
    ? `https://fast.wistia.net/embed/iframe/${video.wistiaId}?videoFoam=true&playerColor=1a2b4a`
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} video player`}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:p-8"
      onClick={onClose}
    >
      {/* Scrim */}
      <div className="absolute inset-0 bg-[rgba(26,43,74,0.55)] backdrop-blur-md" />

      {/* Dialog */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl glass rounded-[18px] p-5 sm:p-7 animate-[fadeUp_0.25s_ease-out]"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[var(--muted-2)] mb-1.5">
              <span className="display text-[15px] text-[var(--ocean)] leading-none tracking-normal normal-case">
                {video.num}
              </span>
              <span>·</span>
              <span>{video.duration}</span>
            </div>
            <h3 className="display text-[22px] sm:text-[26px] leading-[1.15]">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video"
            className="shrink-0 w-9 h-9 rounded-full grid place-items-center border border-[var(--border-strong)] hover:bg-[var(--ink)] hover:text-[var(--bg)] hover:border-[var(--ink)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Player */}
        <div className="vsl-frame mb-5">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={video.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-center p-8 text-white/70">
              <div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-white/40 mb-2">
                  Uploading soon
                </div>
                <div className="display text-[22px] leading-tight">
                  This video isn&apos;t live yet.
                </div>
                <div className="text-[13px] text-white/40 mt-2">
                  You&apos;ll see it here as soon as I upload it.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Description + done button */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <p className="text-[14px] text-[var(--muted)] leading-[1.6] flex-1">
            {video.description}
          </p>
          {alreadyWatched ? (
            <div className="shrink-0 text-[12.5px] text-[var(--muted-2)] flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full grid place-items-center"
                style={{
                  background: "linear-gradient(135deg, #f4cfa1 0%, #c9a063 100%)",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path
                    d="M2 5.2L4 7.2L8.5 2.7"
                    stroke="#fbf9f6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Marked watched
            </div>
          ) : (
            <button
              onClick={() => {
                onDoneWatching(video.id);
                onClose();
              }}
              className="btn-primary shrink-0 !py-2.5 !px-5 !text-[13.5px]"
            >
              Mark as watched
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 7.2L5.5 10.5L12.5 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
