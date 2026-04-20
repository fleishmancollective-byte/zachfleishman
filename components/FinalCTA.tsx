const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#pricing";

export default function FinalCTA() {
  return (
    <section className="relative px-5 sm:px-6 py-20 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll liquid-border rounded-[22px] p-8 sm:p-16 text-center relative overflow-hidden">
          <div
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-55"
            style={{
              background:
                "radial-gradient(circle, #305282 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-35"
            style={{
              background:
                "radial-gradient(circle, #ffffff 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          <div className="relative">
            <span className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-4 block">
              Last thing
            </span>
            <h2 className="display text-[42px] sm:text-[64px] leading-[1.02] max-w-[22ch] mx-auto mb-6">
              A year from now, this is either <em>the thing you pressed play on</em>, or a scroll you forgot.
            </h2>
            <p className="text-[17px] text-[var(--muted)] max-w-[54ch] mx-auto leading-[1.6] mb-10">
              $47. Ten short conversations, a live monthly Q&A,
              The Starting Line Playbook, and a door into the room.
              The voice note I wish someone had sent me at 19.
            </p>
            <a
              href={checkoutHref}
              className="btn-primary !py-4 !px-8 !text-[16px]"
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
            <div className="mt-4 text-[12.5px] text-[var(--muted-2)]">
              Instant access · Lifetime · Stripe secure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
