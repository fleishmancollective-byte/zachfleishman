"use client";

import { useState } from "react";

/**
 * Drop your Wistia / Vidalytics embed into this component.
 * Either:
 *   1. Set NEXT_PUBLIC_VSL_EMBED_URL to an <iframe> src (Wistia: https://fast.wistia.net/embed/iframe/xxxxx)
 *   2. Or replace the placeholder block below with your host's <script>/<div> snippet.
 */
export default function VSL() {
  const embedUrl = process.env.NEXT_PUBLIC_VSL_EMBED_URL;
  const [playing, setPlaying] = useState(false);

  if (embedUrl) {
    return (
      <div className="vsl-frame">
        <iframe
          src={embedUrl}
          title="Zero to Six Sales Video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="vsl-frame group">
      {/* Placeholder artwork: subtle gradient + filmy grain */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, #1a1f2b 0%, #0b0d12 60%), linear-gradient(135deg, #0b0d12 0%, #1a1f2b 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, rgba(48, 82, 130, 0.45) 0%, transparent 55%), radial-gradient(ellipse at 20% 90%, rgba(169, 197, 244, 0.3) 0%, transparent 60%)",
        }}
      />

      {/* Title ribbon */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-[3] pointer-events-none">
        <span className="text-[11px] tracking-[0.22em] uppercase text-white/60">
          A voice note
        </span>
        <span className="text-[11px] tracking-[0.22em] uppercase text-white/60">
          Zero · to · Six
        </span>
      </div>

      {/* Play button */}
      <button
        onClick={() => setPlaying(true)}
        aria-label="Play sales video"
        className="absolute inset-0 z-[3] grid place-items-center focus:outline-none"
      >
        <span className="relative">
          <span className="play-pulse block w-[84px] h-[84px] rounded-full bg-[var(--bg)] grid place-items-center shadow-2xl transition-transform group-hover:scale-105">
            <svg width="26" height="28" viewBox="0 0 26 28" fill="none" aria-hidden>
              <path
                d="M4 3.5v21c0 1.4 1.6 2.2 2.7 1.4l16-10.5a1.7 1.7 0 0 0 0-2.8l-16-10.5C5.6 1.3 4 2.1 4 3.5z"
                fill="#0b0d12"
              />
            </svg>
          </span>
          <span className="sr-only">Play</span>
        </span>
      </button>

      {/* Bottom caption */}
      <div className="absolute left-5 right-5 bottom-5 z-[3] flex items-end justify-between pointer-events-none">
        <div className="text-white/85">
          <div className="display text-[20px] leading-tight">
            A quick word before you scroll further.
          </div>
          <div className="text-[12px] text-white/55 mt-0.5">
            You and I are not that different. Let's get into it.
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          PREVIEW
        </div>
      </div>

      {/* When "playing" is toggled, render a full-frame iframe slot so you
          can swap your host's embed in here without layout shift. */}
      {playing && !embedUrl ? (
        <div className="absolute inset-0 z-[5] bg-[var(--ink)] text-white/80 grid place-items-center text-center p-6">
          <div>
            <div className="text-[13px] tracking-[0.2em] uppercase text-white/50 mb-2">
              Paste your embed
            </div>
            <div className="display text-[22px] leading-tight mb-3">
              Set NEXT_PUBLIC_VSL_EMBED_URL
            </div>
            <p className="text-[13px] text-white/55 max-w-[44ch] mx-auto">
              Wistia or Vidalytics iframe URL goes in <code>.env.local</code> and this
              frame auto-renders the embed. Or hard-code the host's script in{" "}
              <code>components/VSL.tsx</code>.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
