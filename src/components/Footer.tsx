import Link from "next/link";

// ============================================================
// FOOTER — Mast wordmark over channel links
// ============================================================

export default function Footer() {
  return (
    <footer className="relative z-[var(--z-base)] border-t border-rule bg-paper-2 py-12">
      <div className="container flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-xl font-bold text-ink font-[family-name:var(--font-display)] tracking-tight">
            dev-Aatif
          </p>
          <p className="mt-1 text-sm text-ink-2">
            Aatif P, building local-first systems, mobile apps, and web software.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 text-sm text-ink-2">
          <a
            href="https://github.com/dev-Aatif"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dev-aatif"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center hover:text-ink transition-colors"
          >
            Resume PDF
          </a>
          <Link
            href="/projects/landing-page"
            className="min-h-[44px] inline-flex items-center hover:text-ink transition-colors"
          >
            Landing demo
          </Link>
          <a
            href="mailto:Aatif.biz@protonmail.com"
            className="min-h-[44px] inline-flex items-center text-accent hover:underline"
          >
            Aatif.biz@protonmail.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
