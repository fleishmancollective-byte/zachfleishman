export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] px-6 py-10 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[var(--muted)]">
        <div className="flex items-center gap-2.5">
          <span
            className="w-6 h-6 rounded-full grid place-items-center text-[10px] font-semibold"
            style={{
              background:
                "linear-gradient(135deg, #f4cfa1 0%, #c9a063 100%)",
              color: "#0b0d12",
            }}
          >
            Z
          </span>
          <span>
            © {new Date().getFullYear()} Fleishman Collective LLC
          </span>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <a
            href="https://instagram.com/zachfleishman"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--ink)] transition-colors"
          >
            @zachfleishman
          </a>
          <a href="#pricing" className="hover:text-[var(--ink)] transition-colors">
            Press play
          </a>
          <a href="mailto:hello@zachfleishman.com" className="hover:text-[var(--ink)] transition-colors">
            hello@zachfleishman.com
          </a>
        </div>
      </div>
    </footer>
  );
}
