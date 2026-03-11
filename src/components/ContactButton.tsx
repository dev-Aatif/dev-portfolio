"use client";

import { motion } from "framer-motion";

// ============================================================
// FLOATING CONTACT BUTTON — Fixed bottom-right CTA
// Replace [PLACEHOLDER] mailto with your email
// ============================================================

export default function ContactButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50" id="contact">
      {/* --- Pulse Ring --- */}
      <span className="absolute inset-0 rounded-full bg-interactive/30 animate-pulse-ring" aria-hidden="true" />

      <motion.a
        href="mailto:[your.email@example.com]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-interactive text-white font-medium text-sm shadow-xl shadow-interactive/30 hover:bg-interactive-hover transition-colors"
        aria-label="Send me an email"
      >
        {/* Mail icon */}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Say Hello</span>
      </motion.a>
    </div>
  );
}
