"use client";

import { motion } from "framer-motion";

// ============================================================
// HERO SECTION — Bold headline with value proposition
// Replace [PLACEHOLDERS] with your actual content
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
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          {/* --- Tagline --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm font-mono text-interactive mb-4 tracking-wider uppercase"
          >
            {/* [Your Role/Title] */}
            [Software Engineer & Designer]
          </motion.p>

          {/* --- Main Headline --- */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span className="gradient-text">
              {/* [Your Headline — Make it punchy] */}
              I build things{" "}
            </span>
            <br />
            <span className="text-primary">
              for the web.
            </span>
          </h1>

          {/* --- Sub-headline --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-secondary max-w-xl leading-relaxed"
          >
            {/* [Your value proposition — 2 sentences max] */}
            [A brief, compelling description of who you are and what you do.
            Focus on the value you bring and the problems you solve.]
          </motion.p>

          {/* --- CTA Buttons --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-interactive text-white font-medium text-sm hover:bg-interactive-hover transition-all duration-200 hover:shadow-lg hover:shadow-interactive/25 hover:-translate-y-0.5"
              aria-label="View my projects"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg glass glass-hover text-primary font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Get in touch with me"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* --- Scroll Indicator --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-secondary/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-secondary/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
