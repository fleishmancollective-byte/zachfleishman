"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const checkoutHref =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "#pricing";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 text-[15px] tracking-tight">
          <span className="w-7 h-7 rounded-full bg-[var(--ink)] text-[var(--bg)] grid place-items-center text-[11px] font-semibold">
            Z
          </span>
          <span className="font-medium">
            Zach <span className="text-[var(--muted)]">· Zero to Six</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-[var(--muted)]">
          <a className="hover:text-[var(--ink)] transition-colors" href="#story">
            The Story
          </a>
          <a className="hover:text-[var(--ink)] transition-colors" href="#inside">
            What's Inside
          </a>
          <a className="hover:text-[var(--ink)] transition-colors" href="#results">
            Preview
          </a>
          <a className="hover:text-[var(--ink)] transition-colors" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <Link
            href="/login"
            className="text-[13.5px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors hidden sm:inline"
          >
            Log in
          </Link>
          <a
            href={checkoutHref}
            className="btn-primary !py-2.5 !px-4 !text-[13.5px]"
          >
            Press play · $47
          </a>
        </div>
      </div>
    </header>
  );
}
