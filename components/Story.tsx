const beats = [
  {
    k: "01",
    title: "The script I was handed.",
    body:
      "I grew up the computer kid. The plan my family had in mind was cybersecurity: safe, predictable, respectable. I picked up a camera on the side, mostly because it was the one thing I actually wanted to do, and every conversation about it with my dad ended the same way. I stopped bringing it up and kept shooting anyway. School wasn't hard because I couldn't do it. It was hard because I wasn't moved by any of it. The more I tried to fit the normal path, the more obvious it got that I'd been handed the wrong version of a life.",
  },
  {
    k: "02",
    title: "The vehicle, confused with the view.",
    body:
      "I left Connecticut for San Diego and didn't put the camera down. For a couple of years, I mistook the output for the thing itself: the travel, the aesthetic, the look of the life rather than the life. I'd come home from month-long shoots still broke, and the closer I got to the version of it I thought I wanted, the clearer it became that I was building the wrong thing. The skill was real. The direction I was pointing it in wasn't.",
  },
  {
    k: "03",
    title: "The shift.",
    body:
      "The turn didn't come from a new framework or a better strategy. It came from one honest afternoon with myself, where I finally stopped performing the plan and looked at what the last two years had actually been. I didn't need more information. I needed to stop lying to myself about what I was doing. Everything that started working after came from that one shift in posture, not from anything I learned. This product is the conversation I wish I'd had with myself before I had to have it the hard way.",
  },
];

export default function Story() {
  return (
    <section id="story" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-on-scroll">
          <span className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-4">
            The Story
          </span>
          <h2 className="display text-[40px] sm:text-[56px] leading-[1.03] max-w-[22ch]">
            Not the polished version. <em>The real one.</em>
          </h2>
        </div>

        <div className="grid gap-8 md:gap-10 stagger">
          {beats.map((b) => (
            <div
              key={b.k}
              className="animate-on-scroll glass rounded-[var(--r)] p-8 sm:p-10 lift grid md:grid-cols-[110px_1fr] gap-6 md:gap-10 items-start"
            >
              <div className="flex items-center gap-3 md:block">
                <span className="display text-[54px] text-[var(--gold)] leading-none">
                  {b.k}
                </span>
              </div>
              <div>
                <h3 className="display text-[26px] sm:text-[30px] mb-3">
                  {b.title}
                </h3>
                <p className="text-[16px] text-[var(--ink-soft)] leading-[1.65] max-w-[62ch]">
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center animate-on-scroll">
          <p className="text-[17px] text-[var(--muted)] max-w-[54ch] mx-auto leading-[1.6]">
            Zero to Six is that conversation, recorded. Ten short videos of me
            walking you through how this actually happened, paired with the playbook
            and the people to do something with it.
          </p>
        </div>
      </div>
    </section>
  );
}
