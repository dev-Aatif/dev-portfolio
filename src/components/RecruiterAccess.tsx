"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, FileDown, Mail } from "lucide-react";

// ============================================================
// RECRUITER QUICK ACCESS — Resume, LinkedIn, GitHub, Direct Email
// ============================================================

export default function RecruiterAccess() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Aatif.biz@protonmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:Aatif.biz@protonmail.com";
    }
  };

  return (
    <section
      id="resume"
      className="relative z-[var(--z-base)] py-20 lg:py-28 border-t border-rule"
      aria-label="Resume and direct channels"
    >
      <div className="container">
        <div data-reveal="">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[length:var(--text-section)] font-bold tracking-[var(--tracking-display)] leading-[1.05] text-ink max-w-[20ch]">
                Direct channels and resume
              </h2>
              <p className="mt-3 text-base text-ink-2 max-w-[52ch]">
                Inspect source repositories, review my CV, or reach out directly for engineering
                roles and collaborations.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-quiet self-start"
              aria-label="Copy email address Aatif.biz@protonmail.com"
            >
              {copied ? (
                <Check size={16} className="text-accent" aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              <span>{copied ? "Copied Aatif.biz@protonmail.com" : "Copy Aatif.biz@protonmail.com"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[var(--radius-card)] border border-rule bg-paper-2 p-6 flex flex-col justify-between gap-6 hover:border-accent transition-colors"
              aria-label="Resume PDF: Download my latest resume"
            >
              <div className="space-y-2">
                <FileDown size={22} className="text-accent" aria-hidden="true" />
                <h3 className="text-lg font-bold text-ink">Resume / CV</h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  Download my latest resume in PDF format.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <span>Download PDF</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>

            <a
              href="https://github.com/dev-Aatif"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[var(--radius-card)] border border-rule bg-paper-2 p-6 flex flex-col justify-between gap-6 hover:border-accent transition-colors"
              aria-label="GitHub: Explore open-source repositories"
            >
              <div className="space-y-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-lg font-bold text-ink">GitHub</h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  Explore Jot, Sarmaya, Nebula Downloader, and other builds.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <span>Browse repositories</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>

            <a
              href="https://linkedin.com/in/dev-aatif"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[var(--radius-card)] border border-rule bg-paper-2 p-6 flex flex-col justify-between gap-6 hover:border-accent transition-colors"
              aria-label="LinkedIn: Connect professionally"
            >
              <div className="space-y-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <h3 className="text-lg font-bold text-ink">LinkedIn</h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  Connect and view my engineering background.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <span>View profile</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>

            <a
              href="mailto:Aatif.biz@protonmail.com"
              className="group rounded-[var(--radius-card)] border border-rule bg-paper-2 p-6 flex flex-col justify-between gap-6 hover:border-accent transition-colors"
              aria-label="Send an email to Aatif.biz@protonmail.com"
            >
              <div className="space-y-2">
                <Mail size={22} className="text-accent" aria-hidden="true" />
                <h3 className="text-lg font-bold text-ink">Direct email</h3>
                <p className="text-sm text-ink-2 leading-relaxed">
                  Open your mail client to message Aatif.biz@protonmail.com.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                <span>Send message</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
