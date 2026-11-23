"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Terminal, X } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  detail: string;
  action: () => void;
  kind: "jump" | "external" | "copy";
}

interface CommandBarProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandBar({ open, onClose }: CommandBarProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "projects",
        label: "Jump to selected builds",
        detail: "#projects",
        kind: "jump",
        action: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "about",
        label: "Jump to engineering profile & stack",
        detail: "#about",
        kind: "jump",
        action: () => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "resume-section",
        label: "Jump to direct channels",
        detail: "#resume",
        kind: "jump",
        action: () => {
          document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "copy-email",
        label: copied ? "Copied Aatif.biz@protonmail.com" : "Copy email address",
        detail: "Aatif.biz@protonmail.com",
        kind: "copy",
        action: async () => {
          try {
            await navigator.clipboard.writeText("Aatif.biz@protonmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
          } catch {
            window.location.href = "mailto:Aatif.biz@protonmail.com";
          }
        },
      },
      {
        id: "jot",
        label: "Open Jot on GitHub",
        detail: "Rust CLI note utility",
        kind: "external",
        action: () => {
          window.open("https://github.com/dev-Aatif/jot", "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "sarmaya",
        label: "Open Sarmaya on GitHub",
        detail: "Kotlin PSX portfolio tracker",
        kind: "external",
        action: () => {
          window.open("https://github.com/dev-Aatif/sarmaya", "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "nebula",
        label: "Open Nebula Downloader on GitHub",
        detail: "Electron & yt-dlp desktop app",
        kind: "external",
        action: () => {
          window.open(
            "https://github.com/dev-Aatif/nebula-downloader",
            "_blank",
            "noopener,noreferrer"
          );
          onClose();
        },
      },
      {
        id: "landing-demo",
        label: "Open Modern Landing Page route",
        detail: "/projects/landing-page",
        kind: "external",
        action: () => {
          window.location.href = "/projects/landing-page";
          onClose();
        },
      },
      {
        id: "resume-pdf",
        label: "Open resume PDF",
        detail: "/resume.pdf",
        kind: "external",
        action: () => {
          window.open("/resume.pdf", "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ],
    [copied, onClose]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.detail.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0
        );
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].action();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-start justify-center px-4 pt-20 sm:pt-28 bg-paper/80"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation and actions"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-[var(--radius-card)] border border-rule bg-paper-2 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-rule">
          <Terminal size={16} className="text-accent shrink-0" aria-hidden="true" />
          <label htmlFor="command-palette-input" className="visually-hidden">
            Filter sections, repositories, and actions
          </label>
          <input
            ref={inputRef}
            id="command-palette-input"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder="Jump to a project, section, or copy email…"
            className="w-full min-h-[48px] bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md text-ink-2 hover:text-ink hover:bg-paper-3 transition-colors"
            aria-label="Close command menu"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        <ul className="max-h-80 overflow-y-auto py-2" role="listbox" aria-label="Available actions">
          {filtered.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <li key={item.id} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full min-h-[44px] px-4 py-2.5 flex items-center justify-between gap-4 text-left transition-colors ${
                    isSelected ? "bg-paper-3 text-ink" : "text-ink-2 hover:bg-paper-3"
                  }`}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    {item.kind === "copy" ? (
                      copied ? (
                        <Check size={16} className="text-accent shrink-0" aria-hidden="true" />
                      ) : (
                        <Copy size={16} className="text-muted shrink-0" aria-hidden="true" />
                      )
                    ) : item.kind === "jump" ? (
                      <FileText size={16} className="text-muted shrink-0" aria-hidden="true" />
                    ) : (
                      <ArrowUpRight size={16} className="text-muted shrink-0" aria-hidden="true" />
                    )}
                    <span className="text-sm font-medium truncate">{item.label}</span>
                  </span>
                  <span className="text-xs text-muted shrink-0 font-[family-name:var(--font-outlier)]">
                    {item.detail}
                  </span>
                </button>
              </li>
            );
          })}
          {filtered.length === 0 && (
            <li className="px-4 py-8 text-center text-sm text-muted">
              No matching build or action found for &ldquo;{query}&rdquo;.
            </li>
          )}
        </ul>

        <div className="px-4 py-2.5 border-t border-rule bg-paper flex items-center justify-between text-xs text-muted">
          <span>Use arrow keys and Enter to run</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
