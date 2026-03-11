"use client";

import { motion } from "framer-motion";

// ============================================================
// FLOATING CONTACT BUTTON — Simple, no pulse ring jank
// ============================================================

export default function ContactButton() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 180, damping: 15 }}
    >
      <a
        href="mailto:Aatif.biz@protonmail.com"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-interactive text-white font-medium text-sm shadow-lg shadow-interactive/20 hover:bg-interactive-hover transition-colors"
        aria-label="Send me an email"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Say Hello</span>
      </a>
    </motion.div>
  );
}
