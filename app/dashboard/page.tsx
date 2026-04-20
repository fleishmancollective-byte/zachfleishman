import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard · Zero to Six",
  robots: { index: false, follow: false },
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("zts_access")?.value !== "granted") {
    redirect("/login");
  }

  return (
    <main className="relative z-10 flex-1 w-full max-w-5xl mx-auto px-6 py-14 sm:py-20 min-h-screen">
      <header className="flex items-start justify-between gap-6 mb-14">
        <div>
          <div className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] mb-3">
            Zero to Six · The Room
          </div>
          <h1 className="display text-[40px] sm:text-[52px] leading-[1.03]">
            Welcome to the <em>room</em>.
          </h1>
        </div>

        <form action="/api/logout" method="POST">
          <button
            type="submit"
            className="text-[13px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors underline-offset-2 hover:underline whitespace-nowrap mt-2"
          >
            Log out →
          </button>
        </form>
      </header>

      <section className="glass rounded-[18px] p-10 sm:p-14 text-center">
        <div className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted-2)] mb-4">
          Placeholder
        </div>
        <p className="display text-[24px] sm:text-[28px] leading-[1.35] max-w-[48ch] mx-auto text-[var(--ink-soft)]">
          Dashboard · Tab 1 (My Story) and Tab 2 (The Framework) coming here.
        </p>
        <p className="mt-6 text-[14px] text-[var(--muted)] max-w-[48ch] mx-auto">
          You&apos;re logged in. The full dashboard lands in the next pass.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 text-[13px] text-[var(--muted-2)]">
          <Link
            href="/"
            className="hover:text-[var(--ink)] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
