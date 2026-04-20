"use client";

import { useState } from "react";
import type { Product, Resource, Video } from "./data";
import VideoRow from "./VideoRow";

type Props = {
  product: Product;
  watched: Set<string>;
  onPlayVideo: (video: Video) => void;
  onToggleWatched: (id: string) => void;
  defaultOpen?: boolean;
};

export default function ProductSection({
  product,
  watched,
  onPlayVideo,
  onToggleWatched,
  defaultOpen = true,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  const totalTrackable = product.videos.length;
  const watchedCount = product.videos.filter((v) => watched.has(v.id)).length;
  const complete = totalTrackable > 0 && watchedCount === totalTrackable;

  return (
    <section className="liquid-border rounded-[18px] overflow-hidden">
      {/* Accordion header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[var(--muted-2)] mb-2">
            Product
            {complete ? (
              <span
                className="ml-2 px-2 py-0.5 rounded-full text-[10px] tracking-[0.14em] font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, #bfd8ee 0%, #6fa8de 50%, #4685c4 100%)",
                  color: "#0b0d12",
                }}
              >
                Complete
              </span>
            ) : null}
          </div>
          <h2 className="display text-[30px] sm:text-[36px] leading-[1.1] mb-1">
            {product.name}
          </h2>
          <p className="text-[14px] text-[var(--muted)]">{product.tagline}</p>
        </div>

        <div className="flex items-center gap-5 shrink-0">
          <div className="hidden sm:flex flex-col items-end">
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--muted-2)]">
              Progress
            </div>
            <div className="display text-[20px] text-[var(--ink)] leading-none mt-1">
              {watchedCount} / {totalTrackable}
            </div>
          </div>

          <div
            className={`w-9 h-9 rounded-full grid place-items-center border border-[var(--border-strong)] transition-transform ${
              open ? "rotate-180 bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]" : ""
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Accordion body */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col gap-2.5">
            {/* Divider */}
            <div className="hair mt-1 mb-4 mx-2" />

            {/* Videos */}
            {product.videos.map((v) => (
              <VideoRow
                key={v.id}
                video={v}
                isWatched={watched.has(v.id)}
                onPlay={() => onPlayVideo(v)}
                onToggleWatched={() => onToggleWatched(v.id)}
              />
            ))}

            {/* Resources */}
            {product.resources.length > 0 ? (
              <>
                <div className="flex items-center gap-3 mt-6 mb-3 px-1">
                  <div className="hair flex-1" />
                  <span className="text-[10.5px] tracking-[0.22em] uppercase text-[var(--muted-2)]">
                    Included
                  </span>
                  <div className="hair flex-1" />
                </div>
                {product.resources.map((r) => (
                  <ResourceRow key={r.id} resource={r} />
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceRow({ resource }: { resource: Resource }) {
  const ready = Boolean(resource.href);
  return (
    <div
      className={`flex items-start gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-[var(--r2)] liquid-border ${
        ready ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        if (resource.href) window.open(resource.href, "_blank", "noopener,noreferrer");
      }}
    >
      <span
        className="shrink-0 mt-0.5 w-8 h-8 rounded-full grid place-items-center"
        style={{
          background: "linear-gradient(135deg, #bfd8ee 0%, #6fa8de 50%, #4685c4 100%)",
          color: "#0b0d12",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M3 1h5l3 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM8 1v3h3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h4 className="text-[15px] sm:text-[16px] font-semibold tracking-tight leading-snug text-[var(--ink)]">
            {resource.title}
          </h4>
          <span className="shrink-0 text-[11px] tracking-[0.1em] uppercase text-[var(--muted-2)] mt-1">
            {ready ? "Download" : "Soon"}
          </span>
        </div>
        <p className="text-[13.5px] text-[var(--muted)] leading-[1.55]">
          {resource.description}
        </p>
      </div>
    </div>
  );
}
