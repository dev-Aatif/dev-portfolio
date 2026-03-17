"use client";

import { motion } from "framer-motion";

// ============================================================
// HERO — Clean entrance, no scroll indicator jank
// ============================================================

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 pt-40 pb-12 flex items-center justify-center px-6"
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
            Software Engineer
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span className="gradient-text">I build simple things </span>
            <span className="text-primary text-[0.8em]">for every screen.</span>
          </h1>         


          
          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-primary/80 max-w-xl leading-relaxed"
          >
           I fix problems by building simple, organized, and highly optimized solutions. 
           While the tech world rushes, I take a step back to research and plan.
           I build because I actually care about your experience. 
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
      </div>
    </section>
  );
}
