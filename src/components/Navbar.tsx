"use client";

import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";
import CommandBar from "./CommandBar";

// ============================================================
// NAVBAR — Single-row instrument rail + Command Palette trigger
// ============================================================

const navLinks = [
  { href: "#projects", label: "Builds" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[var(--z-sticky-nav)] bg-paper border-b border-rule">
        <nav
          className="container flex items-center justify-between h-16 gap-4"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <a
            href="#hero"
            className="inline-flex items-center gap-2.5 min-h-[44px] text-base font-bold tracking-tight text-ink hover:text-accent transition-colors whitespace-nowrap"
            aria-label="dev-Aatif home"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="text-accent shrink-0"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.75"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span className="font-[family-name:var(--font-display)]">dev-Aatif</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center min-h-[44px] px-1 text-sm font-medium text-ink-2 hover:text-ink transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="btn-quiet"
              aria-label="Open quick command menu"
            >
              <Command size={15} aria-hidden="true" />
              <span>Command</span>
              <kbd className="text-xs text-muted font-[family-name:var(--font-outlier)]">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full border border-rule bg-paper-2 text-ink hover:bg-paper-3 transition-colors"
              aria-label="Open quick command menu"
            >
              <Command size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full border border-rule bg-paper-2 text-ink hover:bg-paper-3 transition-colors"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-rule bg-paper-2">
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[44px] flex items-center text-base font-medium text-ink-2 hover:text-ink transition-colors border-b border-rule last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {paletteOpen && (
        <CommandBar open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      )}
    </>
  );
}
