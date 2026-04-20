const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#";

const includes = [
  "Live monthly Q&A with me, in the room",
  "Ten short conversations (plus a welcome video)",
  "The Starting Line Playbook · the moves to book your first paid gig",
  "A door into the room with everyone else figuring it out",
  "Lifetime access · watch on any device, rewatch whenever",
  "Anything new lands in your account, always",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-5 sm:px-6 py-20 sm:py-32 overflow-hidden">
      {/* Fluid accent */}
      <div
        className="orb"
        style={{
          width: 540,
          height: 540,
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(201, 160, 99, 0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 animate-on-scroll">
          <span className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-4">
            Get Instant Access
          </span>
          <h2 className="display text-[40px] sm:text-[56px] leading-[1.03] max-w-[24ch]">
            One payment. <em>The whole conversation.</em>
          </h2>
          <p className="mt-6 text-[17px] text-[var(--muted)] max-w-[54ch] leading-[1.6]">
            Priced so you'll actually buy it, and actually watch it. That's it.
          </p>
        </div>

        <div className="animate-on-scroll glass-bright rounded-[22px] p-6 sm:p-12 relative overflow-hidden">
          {/* Subtle mid accent */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, #305282 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <div className="relative">
            <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
              <div>
                <div className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted-2)] mb-2">
                  Zero to Six · A voice note, a playbook, and the room
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="display text-[72px] sm:text-[88px] leading-none">
                    $47
                  </span>
                  <span className="text-[15px] text-[var(--muted)] line-through">
                    $197
                  </span>
                </div>
                <div className="text-[13px] text-[var(--muted)] mt-2">
                  One-time payment · Instant access · Lifetime access
                </div>
              </div>

              <span
                className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, #f4cfa1 0%, #c9a063 100%)",
                  color: "#0b0d12",
                }}
              >
                Founders pricing
              </span>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-[14.5px] text-[var(--ink-soft)]">
                  <span
                    className="mt-[5px] w-4 h-4 rounded-full grid place-items-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #f4cfa1 0%, #c9a063 100%)",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path
                        d="M2 5.2L4 7.2L8.5 2.7"
                        stroke="#fbf9f6"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={checkoutHref}
              className="btn-primary w-full justify-center !py-4 !text-[16px]"
            >
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

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[var(--muted-2)]">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 22s8-5.3 8-12a8 8 0 1 0-16 0c0 6.7 8 12 8 12z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Secure checkout via Stripe
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M3 12l4 4L21 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Instant access, forever
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
