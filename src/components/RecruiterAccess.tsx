"use client";

import { motion } from "framer-motion";

// ============================================================
// RECRUITER QUICK ACCESS — Resume, LinkedIn, GitHub
// ============================================================

const links = [
  {
    id: "resume",
    title: "Resume / CV",
    description: "Download my latest resume in PDF format.",
    href: "/resume.pdf",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    cta: "Download PDF",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect with me and view my professional experience.",
    href: "https://linkedin.com/in/dev-aatif",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    cta: "View Profile",
  },
  {
    id: "github",
    title: "GitHub",
    description: "Explore my open-source projects and contributions.",
    href: "https://github.com/dev-Aatif",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    cta: "View Code",
  },
];

export default function RecruiterAccess() {
  return (
    <section id="resume" className="relative z-10 pt-6 pb-24 px-6" aria-label="Quick access links for recruiters">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="mt-3 text-secondary max-w-lg mx-auto">
              Quick access to my resume, professional profiles, and code.
            </p>
          </div>

          {/* Cards — pure CSS hover, no per-card Framer */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-bordered rounded-2xl p-6 text-center flex flex-col items-center gap-4 transition-colors duration-200 hover:border-interactive/30"
                aria-label={`${link.title} — ${link.description}`}
              >
                <div className="text-interactive">{link.icon}</div>
                <h3 className="text-lg font-semibold text-primary">{link.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{link.description}</p>
                <span className="mt-auto pt-2 text-sm font-medium text-interactive group-hover:underline underline-offset-4">
                  {link.cta} →
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
