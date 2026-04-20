"use client";

type Props = {
  watchedCount: number;
  totalCount: number;
};

export default function ProgressStrip({ watchedCount, totalCount }: Props) {
  const pct = totalCount > 0 ? Math.round((watchedCount / totalCount) * 100) : 0;
  const allDone = totalCount > 0 && watchedCount === totalCount;

  return (
    <div className="glass rounded-[var(--r)] px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
      <div className="flex-1 min-w-0">
        <div className="text-[11px] tracking-[0.22em] uppercase text-[var(--muted-2)] mb-1.5">
          Your progress
        </div>
        <div className="flex items-baseline gap-3 flex-wrap">
          <div className="display text-[28px] sm:text-[34px] leading-none text-[var(--ink)]">
            {watchedCount}
            <span className="text-[var(--muted-2)]"> / {totalCount}</span>
          </div>
          <div className="text-[13.5px] text-[var(--muted)]">
            {allDone
              ? "You finished the conversation. Nice."
              : watchedCount === 0
                ? "Start anywhere. Video 00 is a good place."
                : "Keep going. Short bursts work better than one marathon."}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full sm:w-[220px] shrink-0">
        <div className="h-2 w-full rounded-full bg-[rgba(17,24,39,0.08)] overflow-hidden">
          <div
            className="h-full transition-all duration-700 ease-out rounded-full"
            style={{
              width: `${pct}%`,
              background:
                "linear-gradient(90deg, #6fa8de 0%, #4685c4 100%)",
            }}
          />
        </div>
        <div className="mt-1.5 text-[11px] text-[var(--muted-2)] text-right">
          {pct}% watched
        </div>
      </div>
    </div>
  );
}
