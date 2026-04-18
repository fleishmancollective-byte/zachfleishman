import VSL from "./VSL";

const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#pricing";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 overflow-hidden">
      {/* Fluid orbs */}
      <div
        className="orb"
        style={{
          width: 520,
          height: 520,
          top: -180,
          left: -120,
          background: "radial-gradient(circle, #cab6f0 0%, transparent 70%)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 460,
          height: 460,
          top: -100,
          right: -160,
          background: "radial-gradient(circle, #f4cfa1 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 380,
          height: 380,
          bottom: -200,
          left: "30%",
          background: "radial-gradient(circle, #a9c5f4 0%, transparent 70%)",
          animationDelay: "4s",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-soft text-[12px] tracking-wide uppercase text-[var(--ink-soft)] font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          A voice note · Not a course · $47
        </div>

        {/* Headline */}
        <h1 className="display fade-up d1 text-[48px] sm:text-[68px] md:text-[80px] leading-[0.98] mb-6 max-w-[22ch]">
          A voice note to my younger self, <em>made public</em>.
        </h1>

        {/* Subhead */}
        <p className="fade-up d2 text-[17px] sm:text-[19px] text-[var(--muted)] max-w-[58ch] leading-[1.55] mb-10">
          Live monthly Q&As with me. Ten short conversations. The Starting Line Playbook.
          A door into the room with everyone else figuring it out. That's the whole thing.
        </p>

        {/* VSL */}
        <div className="fade-up d3 w-full max-w-3xl mx-auto mb-10">
          <VSL />
        </div>

        {/* CTA row */}
        <div className="fade-up d4 flex flex-col sm:flex-row items-center gap-3">
          <a href={checkoutHref} className="btn-primary">
            Get Zero to Six for $47
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#inside" className="btn-ghost">
            See what's inside
          </a>
        </div>

        {/* Micro-proof */}
        <div className="fade-up d5 mt-8 flex items-center gap-4 text-[13px] text-[var(--muted)]">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[var(--bg)]"
                style={{
                  background: `linear-gradient(135deg, ${
                    ["#f4cfa1", "#cab6f0", "#a9c5f4", "#b8e0c4"][i]
                  }, #ffffff)`,
                }}
              />
            ))}
          </div>
          <span>The room is full of other people figuring this out.</span>
        </div>
      </div>
    </section>
  );
}
