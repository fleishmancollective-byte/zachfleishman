"use client";

import { useState } from "react";

const items = [
  {
    q: "Is this a course?",
    a: "No. It's a voice note, not a course. Ten short conversations of me walking you through how this actually happened, paired with The Starting Line Playbook and a door into the room with everyone else figuring it out. There are no modules, no worksheets, no \"certifications.\" Just the conversation, the receipts, and the people.",
  },
  {
    q: "Do I need to be a freelancer already?",
    a: "No. A lot of people in the room haven't booked their first paid gig yet. Video 4 walks through how I booked mine ($1k for a 50-minute doc in Mexico). The Starting Line Playbook that comes with it is the tactical companion: the outreach, the rates I'd charge today, and the first email I'd send. You don't need a portfolio, a following, or a plan to begin.",
  },
  {
    q: "Why $47?",
    a: "Because I want you to actually buy it and actually watch it. The whole thing is under an hour. If I priced it like a course, half of you would tap out and the other half would feel too precious to finish it. $47 keeps it honest. If you want direct help after, there's coaching, but that's a separate thing and completely optional.",
  },
  {
    q: "What is \"the room\"?",
    a: "A small community for buyers, plus a live Q&A with me every month. It's the \"plus the people\" part of the offer. The videos give you the conversation, The Starting Line Playbook gives you the moves, and the room gives you other people doing the same thing alongside you. So the relationship doesn't end when the videos do.",
  },
  {
    q: "How fast will I see something change?",
    a: "Depends on you. The people who move fastest book their first paid gig within a couple of weeks of finishing Video 4. The first paid dollar is the unlock. Everything compounds from there. Fair warning: most of what matters in this isn't tactical, it's a shift in posture. Don't expect a framework. Expect to see yourself more clearly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 animate-on-scroll">
          <span className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-4">
            FAQ
          </span>
          <h2 className="display text-[40px] sm:text-[56px] leading-[1.03]">
            The <em>real</em> questions.
          </h2>
        </div>

        <div className="space-y-3 animate-on-scroll">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`glass-soft rounded-[var(--r2)] transition-all duration-300 ${
                  isOpen ? "shadow-lg" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold tracking-tight text-[var(--ink)]">
                    {item.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full grid place-items-center shrink-0 border border-[var(--border-strong)] transition-transform ${
                      isOpen ? "rotate-45 bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)]" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] text-[var(--muted)] leading-[1.65]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
