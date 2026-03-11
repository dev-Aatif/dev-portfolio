"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================
// NAVBAR — Sticky glassmorphism navigation
// Replace [Your Name] with your actual name/brand
// ============================================================

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
        {/* --- Logo / Name --- */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-primary hover:text-interactive transition-colors"
          aria-label="Go to homepage"
        >
          {/* [Your Name] — Replace with your name or logo */}
          [Your Name]
        </a>

        {/* --- Desktop Links --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-primary transition-colors duration-200 relative group"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-interactive transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-interactive text-white hover:bg-interactive-hover transition-all duration-200 hover:shadow-lg hover:shadow-interactive/25"
            aria-label="Get in touch"
          >
            Get in Touch
          </a>
        </div>

        {/* --- Mobile Burger --- */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-primary origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-primary"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-primary origin-center"
          />
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 glass-strong p-6 flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-lg text-secondary hover:text-primary transition-colors py-2 border-b border-glass-border"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center px-4 py-3 text-sm font-medium rounded-lg bg-interactive text-white hover:bg-interactive-hover transition-all"
              aria-label="Get in touch"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
