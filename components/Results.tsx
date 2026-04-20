const pulls = [
  {
    quote:
      "You can't become the person you want to be in the same environment that built the version of you you're trying to outgrow.",
    tag: "From Video 2 · Why I Left the Script",
    accent: "#305282", // Ocean Steel
  },
  {
    quote:
      "The vehicle is not the lifestyle. The vehicle is the thing that compounds when nobody's looking.",
    tag: "From Video 3 · Picking a Vehicle",
    accent: "#ffffff", // Cloud Mist
  },
  {
    quote:
      "I didn't need more information. I needed to stop lying to myself.",
    tag: "From Video 5 · The Gap No One Warns You About",
    accent: "#305282", // Ocean Steel
  },
  {
    quote:
      "You are allowed to be selfish about this. Not toxic. Not cruel. Just selfish enough to put your own becoming above other people's comfort with the old version of you.",
    tag: "From Video 6 · The Hard Conversation",
    accent: "#ffffff", // Cloud Mist
  },
];

export default function Results() {
  return (
    <section id="results" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <span className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-4">
            A Few Pieces
          </span>
          <h2 className="display text-[40px] sm:text-[56px] leading-[1.03] max-w-[22ch]">
            Lines from the videos, <em>in case you're still deciding</em>.
          </h2>
        </div>

        {/* Stat banner */}
        <div className="animate-on-scroll glass rounded-[var(--r)] py-8 px-6 sm:px-10 mb-12">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-10 text-center">
            {[
              { k: "Live", v: "Monthly Q&As with me, in the room" },
              { k: "10", v: "Short conversations" },
              { k: "1", v: "The Starting Line Playbook" },
            ].map((s) => (
              <div key={s.v}>
                <div className="display text-[44px] sm:text-[56px] flow-text leading-none mb-2">
                  {s.k}
                </div>
                <div className="text-[13px] text-[var(--muted)] max-w-[30ch] mx-auto">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 stagger">
          {pulls.map((p) => (
            <figure
              key={p.tag}
              className="animate-on-scroll glass-soft rounded-[var(--r2)] p-7 lift relative overflow-hidden"
            >
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-60"
                style={{
                  background: `radial-gradient(circle, ${p.accent} 0%, transparent 70%)`,
                  filter: "blur(30px)",
                }}
              />
              <blockquote className="display text-[20px] sm:text-[22px] leading-[1.35] text-[var(--ink)] mb-5 relative">
                "{p.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 relative">
                <span
                  className="w-8 h-8 rounded-full shrink-0 grid place-items-center text-[10px] font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}, #ffffff)`,
                    color: "#0b0d12",
                  }}
                >
                  ▶
                </span>
                <div className="text-[12.5px] tracking-[0.08em] uppercase text-[var(--muted)]">
                  {p.tag}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
