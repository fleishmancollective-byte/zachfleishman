const brands = [
  "Red Bull",
  "GoPro",
  "DJI",
  "Artlist",
  "Sesh+",
  "Yacht Week",
];

/**
 * Text-based wordmarks styled uniformly. When the user provides proper brand
 * logo assets, swap the <span> rendering for <Image> elements pointing at
 * /public/logos/*.svg and set all to the same height.
 */
export default function LogoStrip() {
  return (
    <section className="relative py-10 sm:py-14 px-6 border-y border-[var(--border)] bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6">
        <p className="text-[12px] tracking-[0.18em] uppercase text-[var(--muted)] shrink-0">
          As seen producing for
        </p>
        <div className="marquee-mask overflow-hidden flex-1">
          <div className="marquee gap-14 items-center">
            {[...brands, ...brands].map((label, i) => (
              <span
                key={i}
                className="shrink-0 text-[18px] text-[var(--ink-soft)] tracking-[-0.01em] font-semibold uppercase opacity-70 hover:opacity-100 transition-opacity"
                style={{ letterSpacing: "0.02em" }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
