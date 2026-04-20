"use client";

import Link from "next/link";
import { useState } from "react";

const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#pricing";

export default function Nav() {
  const [active, setActive] = useState<string>("top");

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 px-4 flex justify-center pointer-events-none">
      <div
        className="pointer-events-auto flex items-center gap-1 pl-5 pr-1 py-1 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0.52) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          boxShadow:
            "0 1px 0 rgba(255, 255, 255, 1) inset, 0 16px 40px -12px rgba(154, 122, 220, 0.3), 0 4px 14px -4px rgba(17, 24, 39, 0.08)",
        }}
      >
        {/* Brand mark */}
        <a
          href="#top"
          onClick={() => setActive("top")}
          className="display text-[15px] sm:text-[16px] font-medium tracking-tight pr-3 sm:pr-4 pl-1 mr-1 border-r border-[var(--border)] whitespace-nowrap"
        >
          zach.
        </a>

        {/* Pill tabs — hidden on narrow mobile, shown from sm+ */}
        <nav className="hidden sm:flex items-center gap-0.5 text-[13px] text-[var(--muted)]">
          {[
            { id: "top", label: "Home" },
            { id: "inside", label: "Inside" },
            { id: "pricing", label: "Pricing" },
            { id: "faq", label: "FAQ" },
          ].map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`px-3.5 py-2 rounded-full transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[var(--ink)] bg-white/70 shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_4px_12px_-4px_rgba(17,24,39,0.08)]"
                    : "hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Log in — ghost */}
        <Link
          href="/login"
          className="hidden md:inline-flex items-center px-3 py-2 text-[13px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors ml-1"
        >
          Log in
        </Link>

        {/* Primary CTA — lavender arrow circle */}
        <a
          href={checkoutHref}
          className="flex items-center gap-2 pl-3 sm:pl-4 pr-1 py-1 ml-1 rounded-full text-[13px] text-[var(--ink)] font-medium hover:bg-white/60 transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">Get it · $47</span>
          <span className="sm:hidden">$47</span>
          <span
            className="w-8 h-8 rounded-full grid place-items-center"
            style={{
              background:
                "linear-gradient(135deg, #c2b0ed 0%, #9a7adc 45%, #7e5bc8 100%)",
              color: "#fbf9f6",
              boxShadow:
                "0 1px 0 rgba(255, 255, 255, 0.55) inset, 0 6px 16px -4px rgba(126, 91, 200, 0.55)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
}
