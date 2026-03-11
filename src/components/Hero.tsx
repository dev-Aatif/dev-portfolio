"use client";

import { motion } from "framer-motion";

// ============================================================
// HERO — Clean entrance, no scroll indicator jank
// ============================================================

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
      aria-label="Introduction"
    >
      <div className="max-w-[1200px] w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Tagline */}
          <p className="text-sm font-mono text-interactive mb-4 tracking-wider uppercase">
            [Software Engineer & Designer]
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span className="gradient-text">I build things </span>
            <br />
            <span className="text-primary">for the web.</span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-secondary max-w-xl leading-relaxed"
          >
            [A brief, compelling description of who you are and what you do.
            Focus on the value you bring and the problems you solve.]
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-interactive text-white font-medium text-sm hover:bg-interactive-hover transition-colors"
              aria-label="View my projects"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg glass-bordered text-primary font-medium text-sm hover:bg-surface-hover transition-colors"
              aria-label="Get in touch with me"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator — pure CSS, no Framer repeat animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
          <div className="w-5 h-8 rounded-full border border-secondary/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 rounded-full bg-secondary/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
