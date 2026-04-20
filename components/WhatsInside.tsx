const lessons = [
  {
    n: "00",
    title: "Welcome · Before You Press Play",
    time: "1 min",
    hint: "A short welcome. What this is, what it isn't, and what I want you to know before the real conversation starts.",
  },
  {
    n: "01",
    title: "Where I Am Now",
    time: "3 min",
    hint: "The desk, the Tacoma, Idaho, the friends, and the days I still waste. The honest version.",
  },
  {
    n: "02",
    title: "Why I Left the Script",
    time: "3 min",
    hint: "The path I was supposed to take. Cybersecurity, safe, respectable. And the quiet moment I realized it wasn't for me.",
  },
  {
    n: "03",
    title: "Picking a Vehicle",
    time: "4 min",
    hint: "How I actually chose this, the trap of chasing the lifestyle instead of the skill, and two questions to find yours.",
  },
  {
    n: "04",
    title: "The First Move",
    time: "5 min",
    hint: "My first paid gig ($1k for a 50-min doc in Mexico), spec work, and why cheap early work is still worth it.",
  },
  {
    n: "05",
    title: "The Gap No One Warns You About",
    time: "4 min",
    hint: "Avoidance that looks like motion. The one I stayed stuck in for years, and the exercise that got me out.",
  },
  {
    n: "06",
    title: "The Hard Conversation",
    time: "3 min",
    hint: "Not the one with your parents. The one with yourself. Why breaking down your own ego is the real move.",
  },
  {
    n: "07",
    title: "What \"Working\" Actually Feels Like",
    time: "4 min",
    hint: "The part nobody posts about when things start clicking. Loneliness, normalization, and staying a student.",
  },
  {
    n: "08",
    title: "The Lifestyle You're Actually Buying",
    time: "3 min",
    hint: "Freedom is real. So is everything that comes with it. What this life actually looks like on the inside.",
  },
  {
    n: "09",
    title: "The Community",
    time: "4 min",
    hint: "Why the people around you matter more than the plan. Scenes vs. communities, and the difference between the two.",
  },
  {
    n: "10",
    title: "Your Move",
    time: "3 min",
    hint: "One thing to do this week. That's it.",
  },
];

const bonuses = [
  {
    title: "The Starting Line Playbook",
    desc: "The tactical companion for the skill-curious. The actual moves to book your first paid gig: the outreach, the rates I'd charge today, the first email I'd send.",
  },
  {
    title: "The Room · Live Monthly Q&A",
    desc: "A door into the room once you buy. Real people figuring this out together, and a live Q&A with me every month. So the conversation doesn't end when the videos do.",
  },
];

export default function WhatsInside() {
  return (
    <section id="inside" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <span className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-4">
            What's Inside
          </span>
          <h2 className="display text-[40px] sm:text-[56px] leading-[1.03] max-w-[26ch]">
            Ten short <em>conversations.</em> Under an hour.
          </h2>
          <p className="mt-6 text-[17px] text-[var(--muted)] max-w-[58ch] leading-[1.6]">
            A welcome and ten walk-throughs. Watch them like you'd listen
            to a voice memo from a friend. Walk away with clarity, not a
            PDF buried in your downloads.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 stagger mb-14">
          {lessons.map((l) => (
            <div
              key={l.n}
              className="animate-on-scroll liquid-border rounded-[var(--r2)] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="display text-[30px] text-[var(--ocean)] leading-none shrink-0 w-[42px]">
                  {l.n}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-[16.5px] font-semibold tracking-tight text-[var(--ink)] leading-snug">
                      {l.title}
                    </h3>
                    <span className="shrink-0 text-[11px] tracking-[0.1em] uppercase text-[var(--muted-2)] mt-1">
                      {l.time}
                    </span>
                  </div>
                  <p className="text-[14px] text-[var(--muted)] leading-[1.55]">
                    {l.hint}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <div className="hair flex-1" />
            <span className="text-[11px] tracking-[0.22em] uppercase text-[var(--muted-2)]">
              + Included
            </span>
            <div className="hair flex-1" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 stagger">
            {bonuses.map((b) => (
              <div
                key={b.title}
                className="animate-on-scroll liquid-border rounded-[var(--r2)] p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-6 h-6 rounded-full grid place-items-center text-[10px] font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, #bfd8ee 0%, #6fa8de 50%, #4685c4 100%)",
                      color: "#0b0d12",
                    }}
                  >
                    ✦
                  </span>
                  <h4 className="text-[15px] font-semibold tracking-tight">
                    {b.title}
                  </h4>
                </div>
                <p className="text-[14px] text-[var(--muted)] leading-[1.6]">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
