"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, MonitorDown, Plus, Smartphone, Terminal, Globe } from "lucide-react";

// ============================================================
// HERO — Asymmetric Stage + Interactive 4-Surface Engineering Console
// ============================================================

type SurfaceKey = "shell" | "android" | "desktop" | "web";

interface JotNote {
  id: number;
  tag: string;
  text: string;
}

interface PsxEvent {
  id: string;
  type: "BUY" | "DIV";
  symbol: string;
  shares: number;
  amountPkr: number;
}

const initialJotNotes: JotNote[] = [
  { id: 40, tag: "rust", text: "Replace regex scanner with byte-slice prefix lookup" },
  { id: 41, tag: "psx", text: "Verify FIFO cost basis replay on split holdings" },
  { id: 42, tag: "ui", text: "Strip glass blur layers and move palette to OKLCH" },
];

const initialPsxEvents: PsxEvent[] = [
  { id: "e1", type: "BUY", symbol: "SYS", shares: 100, amountPkr: 42000 },
  { id: "e2", type: "BUY", symbol: "MEBL", shares: 150, amountPkr: 32250 },
  { id: "e3", type: "DIV", symbol: "MEBL", shares: 0, amountPkr: 1800 },
];

const nebulaPresets = [
  {
    id: "mp4",
    label: "1080p MP4",
    flags: '-f "bv*[height<=1080][ext=mp4]+ba[ext=m4a]" --merge-output-format mp4',
    output: "nebula_video_1080p.mp4",
    container: "MP4 / H.264 + AAC",
  },
  {
    id: "m4a",
    label: "Audio M4A",
    flags: '-x --audio-format m4a --audio-quality 0',
    output: "nebula_track_256k.m4a",
    container: "M4A / 256 kbps",
  },
  {
    id: "mkv",
    label: "4K Source",
    flags: '-f "bv*+ba/b" --embed-subs --merge-output-format mkv',
    output: "nebula_master_2160p.mkv",
    container: "MKV / VP9 + Opus",
  },
] as const;

const surfaceOrder: SurfaceKey[] = ["shell", "android", "desktop", "web"];

export default function Hero() {
  const [activeSurface, setActiveSurface] = useState<SurfaceKey>("shell");

  // Interactive Jot shell state
  const [notes, setNotes] = useState<JotNote[]>(initialJotNotes);
  const [jotFilter, setJotFilter] = useState("");
  const [newNoteText, setNewNoteText] = useState("");

  // Interactive Sarmaya event-sourced ledger state
  const [psxEvents, setPsxEvents] = useState<PsxEvent[]>(initialPsxEvents);

  // Interactive Nebula preset state
  const [nebulaPresetId, setNebulaPresetId] = useState<"mp4" | "m4a" | "mkv">("mp4");
  const [embedMetadata, setEmbedMetadata] = useState(true);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "1") setActiveSurface("shell");
      if (e.key === "2") setActiveSurface("android");
      if (e.key === "3") setActiveSurface("desktop");
      if (e.key === "4") setActiveSurface("web");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filteredNotes = useMemo(() => {
    const q = jotFilter.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter(
      (n) => n.text.toLowerCase().includes(q) || n.tag.toLowerCase().includes(q)
    );
  }, [notes, jotFilter]);

  const sarmayaSummary = useMemo(() => {
    const invested = psxEvents
      .filter((e) => e.type === "BUY")
      .reduce((sum, e) => sum + e.amountPkr, 0);
    const dividends = psxEvents
      .filter((e) => e.type === "DIV")
      .reduce((sum, e) => sum + e.amountPkr, 0);
    const totalShares = psxEvents.reduce((sum, e) => sum + e.shares, 0);
    return { invested, dividends, totalShares };
  }, [psxEvents]);

  const activeNebula =
    nebulaPresets.find((p) => p.id === nebulaPresetId) ?? nebulaPresets[0];

  const handleAddJotNote = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = newNoteText.trim();
    if (!cleaned) return;
    const nextId = notes.length ? notes[notes.length - 1].id + 1 : 1;
    setNotes((prev) => [...prev, { id: nextId, tag: "note", text: cleaned }]);
    setNewNoteText("");
  };

  const appendSampleBuy = () => {
    setPsxEvents((prev) => [
      ...prev,
      {
        id: `e${prev.length + 1}`,
        type: "BUY",
        symbol: prev.length % 2 === 0 ? "LUCK" : "ENGRO",
        shares: 25,
        amountPkr: 18500,
      },
    ]);
  };

  const activeRepoMeta: Record<
    SurfaceKey,
    { repo: string; url: string; stack: string }
  > = {
    shell: {
      repo: "dev-Aatif/jot",
      url: "https://github.com/dev-Aatif/jot",
      stack: "Pure Rust CLI, zero runtime dependencies",
    },
    android: {
      repo: "dev-Aatif/sarmaya",
      url: "https://github.com/dev-Aatif/sarmaya",
      stack: "Kotlin, Jetpack Compose, event-sourced PSX ledger",
    },
    desktop: {
      repo: "dev-Aatif/nebula-downloader",
      url: "https://github.com/dev-Aatif/nebula-downloader",
      stack: "Electron dark UI powered by yt-dlp",
    },
    web: {
      repo: "dev-Aatif/landing-page",
      url: "/projects/landing-page",
      stack: "Next.js App Router, CSS Modules, interactive route",
    },
  };

  return (
    <section
      id="hero"
      className="relative z-[var(--z-base)] pt-24 pb-12 lg:pt-28 lg:pb-16 lg:min-h-[86dvh] flex items-center"
      aria-label="Introduction and interactive surface inspector"
    >
      <div className="instrument-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Thesis Column */}
          <div className="lg:col-span-5">
            <h1 className="text-[length:var(--text-display)] font-bold tracking-[var(--tracking-display)] leading-[0.98] text-ink max-w-[14ch]">
              Calm software built for every surface
            </h1>

            <p className="mt-5 text-[length:var(--text-lead)] text-ink-2 leading-relaxed max-w-[38ch]">
              Local-first Rust tools, offline Kotlin apps, and fast web systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                Explore builds
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet"
              >
                Read resume
              </a>
            </div>
          </div>

          {/* Right Signature Interactive Console */}
          <div className="lg:col-span-7 min-w-0">
            <div
              data-slot="hero"
              data-kind="product"
              className="rounded-[var(--radius-card)] border border-rule bg-paper-2 overflow-hidden"
            >
              {/* Surface Switcher Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-rule bg-paper">
                <div
                  role="tablist"
                  aria-label="Inspect builds by platform surface"
                  className="flex flex-wrap items-center gap-1.5"
                >
                  {(
                    [
                      { key: "shell", label: "Shell", Icon: Terminal },
                      { key: "android", label: "Android", Icon: Smartphone },
                      { key: "desktop", label: "Desktop", Icon: MonitorDown },
                      { key: "web", label: "Web", Icon: Globe },
                    ] as const
                  ).map(({ key, label, Icon }, idx) => {
                    const selected = activeSurface === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="tab"
                        id={`surface-tab-${key}`}
                        aria-selected={selected}
                        aria-controls={`surface-panel-${key}`}
                        onClick={() => setActiveSurface(key)}
                        onKeyDown={(e) => {
                          if (e.key === "ArrowRight") {
                            setActiveSurface(surfaceOrder[(idx + 1) % surfaceOrder.length]);
                          } else if (e.key === "ArrowLeft") {
                            setActiveSurface(
                              surfaceOrder[(idx - 1 + surfaceOrder.length) % surfaceOrder.length]
                            );
                          }
                        }}
                        className={`inline-flex items-center gap-2 min-h-[44px] px-3.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                          selected
                            ? "bg-paper-3 text-accent border border-rule"
                            : "text-ink-2 hover:text-ink hover:bg-paper-2 border border-transparent"
                        }`}
                      >
                        <Icon size={15} aria-hidden="true" />
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </div>
                <span className="hidden sm:inline text-xs text-muted">
                  Press 1 to 4 to switch
                </span>
              </div>

              {/* Panel 1: Shell (Jot in Rust) */}
              <div
                role="tabpanel"
                id="surface-panel-shell"
                aria-labelledby="surface-tab-shell"
                hidden={activeSurface !== "shell"}
                className="p-5 sm:p-6 space-y-4 min-h-[330px]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-ink font-[family-name:var(--font-display)]">
                      Jot interactive shell buffer
                    </h2>
                    <p className="text-sm text-ink-2">
                      Local-first Rust note log running in memory as a live preview.
                    </p>
                  </div>
                  <span className="text-xs text-accent font-[family-name:var(--font-outlier)]">
                    {filteredNotes.length} entries
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <label htmlFor="jot-filter" className="visually-hidden">
                    Filter shell notes
                  </label>
                  <input
                    id="jot-filter"
                    type="text"
                    value={jotFilter}
                    onChange={(e) => setJotFilter(e.target.value)}
                    placeholder="Filter by keyword or tag (rust, psx, ui)…"
                    className="flex-1 min-w-0 min-h-[44px] px-3 rounded-lg border border-rule bg-paper text-sm text-ink placeholder:text-muted"
                  />
                  {jotFilter && (
                    <button
                      type="button"
                      onClick={() => setJotFilter("")}
                      className="btn-quiet"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <ul className="space-y-2 rounded-lg border border-rule bg-paper p-3.5 font-[family-name:var(--font-outlier)] text-xs sm:text-sm">
                  {filteredNotes.map((note) => (
                    <li
                      key={note.id}
                      className="flex items-baseline gap-3 text-ink-2 leading-relaxed"
                    >
                      <span className="text-accent shrink-0 num">#{note.id}</span>
                      <span className="text-muted shrink-0">[{note.tag}]</span>
                      <span className="text-ink min-w-0 break-words">{note.text}</span>
                    </li>
                  ))}
                  {filteredNotes.length === 0 && (
                    <li className="text-muted">No entries matched &ldquo;{jotFilter}&rdquo;.</li>
                  )}
                </ul>

                <form onSubmit={handleAddJotNote} className="flex flex-col sm:flex-row gap-2">
                  <label htmlFor="jot-add-input" className="visually-hidden">
                    Add a preview note to the Jot buffer
                  </label>
                  <input
                    id="jot-add-input"
                    type="text"
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    placeholder="Try: jot add &quot;Ship event-sourced sync&quot;"
                    className="flex-1 min-w-0 min-h-[44px] px-3 rounded-lg border border-rule bg-paper text-sm text-ink placeholder:text-muted"
                  />
                  <button type="submit" className="btn-quiet">
                    <Plus size={15} aria-hidden="true" />
                    <span>Append note</span>
                  </button>
                </form>
              </div>

              {/* Panel 2: Android (Sarmaya PSX Ledger) */}
              <div
                role="tabpanel"
                id="surface-panel-android"
                aria-labelledby="surface-tab-android"
                hidden={activeSurface !== "android"}
                className="p-5 sm:p-6 space-y-4 min-h-[330px]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-ink font-[family-name:var(--font-display)]">
                      Sarmaya event-sourced PSX ledger
                    </h2>
                    <p className="text-sm text-ink-2">
                      Sample offline ledger demonstrating deterministic holdings math.
                    </p>
                  </div>
                  <button type="button" onClick={appendSampleBuy} className="btn-quiet">
                    <Plus size={15} aria-hidden="true" />
                    <span>Record sample buy</span>
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 rounded-lg border border-rule bg-paper p-4">
                  <div>
                    <p className="text-xs text-muted">Invested</p>
                    <p className="mt-1 text-lg sm:text-xl font-semibold text-ink num font-[family-name:var(--font-outlier)]">
                      {sarmayaSummary.invested.toLocaleString()} PKR
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Shares</p>
                    <p className="mt-1 text-lg sm:text-xl font-semibold text-ink num font-[family-name:var(--font-outlier)]">
                      {sarmayaSummary.totalShares}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted">Dividends</p>
                    <p className="mt-1 text-lg sm:text-xl font-semibold text-accent num font-[family-name:var(--font-outlier)]">
                      +{sarmayaSummary.dividends.toLocaleString()} PKR
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 rounded-lg border border-rule bg-paper p-3.5 text-xs sm:text-sm font-[family-name:var(--font-outlier)] max-h-36 overflow-y-auto">
                  {psxEvents.map((ev, i) => (
                    <li key={ev.id} className="flex items-center justify-between gap-3">
                      <span className="text-ink-2">
                        <span className="text-muted mr-2 num">0{i + 1}</span>
                        <span className={ev.type === "DIV" ? "text-accent" : "text-ink"}>
                          {ev.type}
                        </span>{" "}
                        {ev.symbol} {ev.shares > 0 ? `${ev.shares} sh` : "payout"}
                      </span>
                      <span className="text-ink num">{ev.amountPkr.toLocaleString()} PKR</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel 3: Desktop (Nebula Downloader) */}
              <div
                role="tabpanel"
                id="surface-panel-desktop"
                aria-labelledby="surface-tab-desktop"
                hidden={activeSurface !== "desktop"}
                className="p-5 sm:p-6 space-y-4 min-h-[330px]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-ink font-[family-name:var(--font-display)]">
                      Nebula Downloader pipeline builder
                    </h2>
                    <p className="text-sm text-ink-2">
                      Select a stream profile to inspect the underlying yt-dlp command.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {nebulaPresets.map((preset) => {
                    const active = preset.id === nebulaPresetId;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setNebulaPresetId(preset.id)}
                        className={`min-h-[44px] px-4 rounded-lg text-sm font-medium border transition-colors ${
                          active
                            ? "bg-paper-3 text-accent border-accent"
                            : "bg-paper text-ink-2 border-rule hover:text-ink"
                        }`}
                      >
                        {preset.label}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setEmbedMetadata((prev) => !prev)}
                    aria-pressed={embedMetadata}
                    className={`min-h-[44px] px-4 rounded-lg text-sm font-medium border transition-colors ${
                      embedMetadata
                        ? "bg-paper-3 text-ink border-muted"
                        : "bg-paper text-muted border-rule"
                    }`}
                  >
                    Embed metadata: {embedMetadata ? "On" : "Off"}
                  </button>
                </div>

                <div className="rounded-lg border border-rule bg-paper p-4 space-y-2 font-[family-name:var(--font-outlier)] text-xs sm:text-sm">
                  <p className="text-muted">Resolved yt-dlp invocation:</p>
                  <p className="text-accent break-all">
                    yt-dlp {activeNebula.flags}
                    {embedMetadata ? " --embed-metadata --embed-thumbnail" : ""} -o &quot;
                    {activeNebula.output}&quot; &lt;url&gt;
                  </p>
                  <p className="text-ink-2 pt-2 border-t border-rule">
                    Container target: {activeNebula.container}
                  </p>
                </div>
              </div>

              {/* Panel 4: Web (Modern Landing Page) */}
              <div
                role="tabpanel"
                id="surface-panel-web"
                aria-labelledby="surface-tab-web"
                hidden={activeSurface !== "web"}
                className="p-5 sm:p-6 space-y-4 min-h-[330px]"
              >
                <div>
                  <h2 className="text-lg font-semibold text-ink font-[family-name:var(--font-display)]">
                    Modern Landing Page live route
                  </h2>
                  <p className="text-sm text-ink-2">
                    Scoped Next.js App Router demo bundled directly inside this portfolio.
                  </p>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg border border-rule bg-paper p-4 text-sm">
                  <div>
                    <dt className="text-xs text-muted">Route</dt>
                    <dd className="mt-1 font-medium text-ink font-[family-name:var(--font-outlier)]">
                      /projects/landing-page
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Style isolation</dt>
                    <dd className="mt-1 font-medium text-ink">CSS Modules + scoped root</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Sections</dt>
                    <dd className="mt-1 font-medium text-ink">
                      Hero, Features, Pricing, FAQ, CTA
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Source</dt>
                    <dd className="mt-1 font-medium text-ink font-[family-name:var(--font-outlier)]">
                      dev-Aatif/landing-page
                    </dd>
                  </div>
                </dl>

                <div>
                  <a href="/projects/landing-page" className="btn-quiet">
                    <span>Open live route</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Console Footer Strip */}
              <div className="px-4 py-3 border-t border-rule bg-paper flex flex-wrap items-center justify-between gap-2 text-xs text-ink-2">
                <span>{activeRepoMeta[activeSurface].stack}</span>
                <a
                  href={activeRepoMeta[activeSurface].url}
                  target={activeSurface === "web" ? undefined : "_blank"}
                  rel={activeSurface === "web" ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-1 text-accent hover:underline font-[family-name:var(--font-outlier)]"
                >
                  <span>{activeRepoMeta[activeSurface].repo}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
