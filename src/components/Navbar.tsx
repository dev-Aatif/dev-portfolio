"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ============================================================
// NAVBAR — Clean sticky nav, glass only on scroll
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled || mobileOpen
          ? "glass border-b border-glass-border"
          : "bg-transparent border-b border-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-primary hover:text-interactive transition-colors"
          aria-label="Go to homepage"
        >
          dev-Aatif
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-primary transition-colors relative group"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-interactive transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-lg bg-interactive text-white hover:bg-interactive-hover transition-colors"
            aria-label="Get in touch"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Burger — Thicker lines and better contrast */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10 rounded-lg bg-surface/20 hover:bg-surface/40 border border-glass-border transition-colors active:scale-95"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 bg-primary transition-all duration-200 origin-center ${mobileOpen ? "rotate-45 translate-y-[4px] w-5" : "w-6"}`} />
          <span className={`block h-0.5 bg-primary transition-all duration-200 ${mobileOpen ? "opacity-0 w-0" : "w-4 opacity-100"}`} />
          <span className={`block h-0.5 bg-primary transition-all duration-200 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[4px] w-5" : "w-6"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-base/98 backdrop-blur-xl border-t border-glass-border"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-secondary hover:text-primary transition-colors py-2 border-b border-glass-border/10 last:border-0"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-4 py-4 text-sm font-bold rounded-xl bg-interactive text-white hover:bg-interactive-hover transition-all active:scale-95 shadow-lg shadow-interactive/20"
                aria-label="Get in touch"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
