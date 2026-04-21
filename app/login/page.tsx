import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Log in · Zero to Six",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("zts_access")?.value === "granted") {
    redirect("/dashboard");
  }

  return (
    <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-20 min-h-screen">
      <div className="w-full max-w-[450px]">
        <div className="glass rounded-[18px] p-10 sm:p-12 text-center">
          <h1 className="display text-[38px] sm:text-[46px] leading-[1.05] mb-3">
            Welcome back.
          </h1>
          <p className="text-[15px] text-[var(--muted)] leading-[1.55] mb-8 max-w-[36ch] mx-auto">
            Enter the password from your welcome email.
          </p>

          <LoginForm />

          <p className="mt-6 text-[12.5px] text-[var(--muted-2)] leading-[1.55]">
            Didn&apos;t get your password? Email{" "}
            <a
              href="mailto:hello@zachfleishman.com"
              className="text-[var(--ink-soft)] hover:text-[var(--ink)] underline underline-offset-2 transition-colors"
            >
              hello@zachfleishman.com
            </a>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[13px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
