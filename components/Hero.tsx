import VSL from "./VSL";

const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#pricing";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 px-5 sm:px-6 overflow-hidden"
    >
      {/* Single lavender halo — the one light source. The page-level
          body::after carries the rest of the atmosphere. Keeping this
          lean on purpose. */}
      <div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[760px] h-[760px] rounded-full pointer-events-none breathe-orb"
        style={{
          background:
            "radial-gradient(circle, rgba(194, 176, 237, 0.55) 0%, rgba(154, 122, 220, 0.25) 35%, transparent 72%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="fade-up text-[11px] sm:text-[12px] tracking-[0.28em] uppercase text-[var(--ink-soft)]/70 font-medium mb-8">
          A voice note · Not a course · $47
        </div>

        {/* Headline — Zach's actual voice, with lavender gradient accent */}
        <h1 className="display fade-up d1 text-[44px] sm:text-[72px] md:text-[88px] leading-[0.98] mb-7 max-w-[22ch] text-[var(--ink)]">
          A voice note to my younger self, <em>made public</em>.
        </h1>

        {/* Subhead */}
        <p className="fade-up d2 text-[16px] sm:text-[18px] text-[var(--muted)] max-w-[56ch] leading-[1.6] mb-10">
          Live monthly Q&amp;As with me. Ten short conversations. The
          Starting Line Playbook. A door into the room with everyone else
          figuring it out. That&apos;s the whole thing.
        </p>

        {/* CTA row — ghost icon + arrow glass pill */}
        <div className="fade-up d3 flex items-center gap-4 mb-14">
          <a
            href="#inside"
            aria-label="See what's inside"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border-strong)] bg-white/60 text-[var(--ink-soft)] hover:bg-white/90 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </a>
          <span className="text-[var(--muted-2)]">|</span>
          <a href={checkoutHref} className="btn-arrow lg">
            Get Zero to Six
            <span className="arrow-circle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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

        {/* VSL — floating glass panel lit by the lavender halo behind it */}
        <div className="fade-up d4 w-full max-w-3xl mx-auto">
          <div
            className="rounded-[22px] overflow-hidden relative"
            style={{
              boxShadow:
                "0 1px 0 rgba(255, 255, 255, 1) inset, 0 60px 140px -30px rgba(154, 122, 220, 0.45), 0 24px 60px -16px rgba(17, 24, 39, 0.2)",
            }}
          >
            <VSL />
          </div>
        </div>

        {/* Scroll affordance */}
        <div className="fade-up d5 mt-14 flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[var(--muted-2)]">
          <span className="w-6 h-6 rounded-full border border-[var(--border-strong)] grid place-items-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path d="M5 2v6M2 5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Scroll to Explore
        </div>
      </div>
    </section>
  );
}
