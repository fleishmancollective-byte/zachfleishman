import VSL from "./VSL";

const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#pricing";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 px-5 sm:px-6 overflow-hidden"
    >
      {/* Atmospheric halos — breathing, not just drifting. The blue/violet
          is the primary light source; the peach warms the top-right. */}
      <div
        className="orb breathe-orb"
        style={{
          width: 720,
          height: 720,
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(154, 122, 220, 0.55) 0%, rgba(91, 117, 186, 0.28) 45%, transparent 72%)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 420,
          height: 420,
          top: 40,
          right: -120,
          background: "radial-gradient(circle, rgba(244, 207, 161, 0.5) 0%, transparent 70%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 380,
          height: 380,
          bottom: -160,
          left: -140,
          background: "radial-gradient(circle, rgba(169, 197, 244, 0.45) 0%, transparent 70%)",
          animationDelay: "5s",
        }}
      />

      {/* Floating glass decorative blobs — soft, dimensional, alive */}
      <div
        className="glass-blob float hidden sm:block"
        style={{ width: 110, height: 110, top: "18%", left: "6%" }}
      />
      <div
        className="glass-blob float float-delay hidden sm:block"
        style={{
          width: 78,
          height: 78,
          top: "14%",
          right: "8%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.15) 50%, transparent 80%), linear-gradient(135deg, rgba(244, 207, 161, 0.3) 0%, rgba(154, 122, 220, 0.18) 100%)",
        }}
      />
      <div
        className="glass-blob float-slow hidden md:block"
        style={{
          width: 64,
          height: 64,
          bottom: "20%",
          right: "12%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.15) 50%, transparent 80%), linear-gradient(135deg, rgba(169, 197, 244, 0.35) 0%, rgba(184, 224, 196, 0.22) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow — floating glass pill */}
        <div className="fade-up float mb-10">
          <span className="glass-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
            A voice note · Not a course · $47
          </span>
        </div>

        {/* Headline */}
        <h1 className="display fade-up d1 text-[44px] sm:text-[68px] md:text-[84px] leading-[0.98] mb-6 max-w-[22ch]">
          A voice note to my younger self, <em>made public</em>.
        </h1>

        {/* Subhead */}
        <p className="fade-up d2 text-[16px] sm:text-[19px] text-[var(--muted)] max-w-[56ch] leading-[1.6] mb-12">
          Live monthly Q&As with me. Ten short conversations. The Starting Line Playbook.
          A door into the room with everyone else figuring it out. That&apos;s the whole thing.
        </p>

        {/* VSL with floating badge accents around it */}
        <div className="fade-up d3 w-full max-w-3xl mx-auto mb-10 relative">
          {/* Floating "10 conversations" badge, top-left */}
          <div className="hidden sm:block absolute -left-6 -top-5 z-20 float">
            <span className="glass-pill">
              <span className="display text-[14px] text-[var(--blue)] leading-none">10</span>
              Short conversations
            </span>
          </div>
          {/* Floating "Under an hour" badge, bottom-right */}
          <div className="hidden sm:block absolute -right-4 -bottom-4 z-20 float float-delay">
            <span className="glass-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
              Under an hour, total
            </span>
          </div>
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
            See what&apos;s inside
          </a>
        </div>

        {/* Micro-proof */}
        <div className="fade-up d5 mt-10 flex items-center gap-4 text-[12.5px] text-[var(--muted)]">
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-[var(--bg)]"
                style={{
                  background: `linear-gradient(135deg, ${
                    ["#9a7adc", "#5b75ba", "#a9c5f4", "#b8e0c4"][i]
                  }, rgba(255,255,255,0.6))`,
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
