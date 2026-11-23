export type ProjectCategory = "systems" | "apps" | "web" | "automation";

export interface Project {
  id: string;
  title: string;
  surface: string;
  stackLead: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  icon: "Terminal" | "Smartphone" | "MonitorDown" | "Cpu" | "Search" | "Layout";
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "jot",
    title: "Jot",
    surface: "Shell CLI",
    stackLead: "Pure Rust, zero dependencies",
    description:
      "Local-first command-line note utility written in pure Rust to save, search, and organize technical notes directly from the terminal.",
    problem:
      "Cloud note apps pull focus out of the terminal and bury quick engineering logs behind sync delays and Electron memory overhead.",
    solution:
      "A single static Rust binary with zero runtime dependencies, plain-file storage, and instant shell search built for daily terminal workflows.",
    result:
      "Sub-second capture and lookup directly inside any shell session without leaving the keyboard.",
    icon: "Terminal",
    tags: ["Rust", "CLI", "Local-first", "Zero-dependency"],
    category: "systems",
    featured: true,
    githubUrl: "https://github.com/dev-Aatif/jot",
  },
  {
    id: "sarmaya",
    title: "Sarmaya",
    surface: "Android App",
    stackLead: "Kotlin, Jetpack Compose",
    description:
      "Offline-first Android portfolio tracker built for the Pakistan Stock Exchange (PSX) with an event-sourced ledger for holdings and realized P/L.",
    problem:
      "Retail investors tracking PSX trades on mobile lack reliable offline accounting that preserves exact buy, sell, and dividend history.",
    solution:
      "An Android app built with Kotlin and Jetpack Compose around an append-only event-sourced engine that derives positions and P/L locally.",
    result:
      "Deterministic portfolio math, full offline availability, and transparent realized gain history on-device.",
    icon: "Smartphone",
    tags: ["Kotlin", "Jetpack Compose", "Event Sourcing", "Android"],
    category: "apps",
    featured: true,
    githubUrl: "https://github.com/dev-Aatif/sarmaya",
  },
  {
    id: "nebula-downloader",
    title: "Nebula Downloader",
    surface: "Desktop App",
    stackLead: "Electron, yt-dlp",
    description:
      "Cross-platform desktop media downloader pairing a dark-mode Electron interface with the yt-dlp extraction engine.",
    problem:
      "Command-line flags for selecting video streams, audio formats, and playlists slow down everyday desktop media downloads.",
    solution:
      "A focused Electron wrapper over yt-dlp that surfaces format selection, progress telemetry, and queue management in one desktop window.",
    result:
      "Cross-platform video and audio downloads across supported sites with predictable format control.",
    icon: "MonitorDown",
    tags: ["Electron", "yt-dlp", "TypeScript", "Desktop"],
    category: "apps",
    featured: true,
    githubUrl: "https://github.com/dev-Aatif/nebula-downloader",
  },
  {
    id: "automation",
    title: "Job Posting Monitor",
    surface: "Automation Worker",
    stackLead: "Python, Docker",
    description:
      "Modular Python scraper and state engine that watches job boards for new listings and dispatches alerts to Discord and Slack webhooks.",
    problem:
      "Checking remote engineering boards by hand wastes hours and misses early application windows.",
    solution:
      "A containerized Python worker with a modular scraper interface, persistent deduplication state, and webhook formatting.",
    result:
      "Automated listing discovery with real-time team alerts and zero duplicate notifications.",
    icon: "Cpu",
    tags: ["Python", "Web Scraping", "Discord API", "Docker"],
    category: "automation",
    githubUrl: "https://github.com/dev-Aatif/job-finder",
  },
  {
    id: "lead-scraper",
    title: "Professional Lead Scraper",
    surface: "Extraction Pipeline",
    stackLead: "Python, Playwright",
    description:
      "Adaptive lead extraction pipeline built with Python and Playwright to parse startup directories and export structured contact records.",
    problem:
      "Static HTML fetchers fail on client-rendered directories and miss nested founder and company contact fields.",
    solution:
      "A Playwright browser pipeline with heuristic link discovery and structured schema export to CSV and JSON.",
    result:
      "Reliable extraction across dynamic directories with clean tabular exports ready for analysis.",
    icon: "Search",
    tags: ["Python", "Playwright", "Heuristics", "Data Engineering"],
    category: "automation",
    githubUrl: "https://github.com/dev-Aatif/lead-scraper",
  },
  {
    id: "landing-page",
    title: "Modern Landing Page",
    surface: "Web Interface",
    stackLead: "Next.js, React",
    description:
      "Responsive product landing page built with Next.js, modular CSS isolation, and interactive pricing and FAQ sections.",
    problem:
      "Marketing sites often bundle heavy UI kits that slow first paint and tangle styles across routes.",
    solution:
      "A scoped Next.js route using CSS Modules, optimized font loading, and clean section composition.",
    result:
      "Fast initial render and a live interactive route hosted directly inside this portfolio.",
    icon: "Layout",
    tags: ["Next.js", "React", "CSS Modules", "TypeScript"],
    category: "web",
    githubUrl: "https://github.com/dev-Aatif/landing-page",
    liveUrl: "/projects/landing-page",
  },
];

export const categories = [
  { id: "all", label: "All builds" },
  { id: "systems", label: "Systems & CLI" },
  { id: "apps", label: "Mobile & Desktop" },
  { id: "automation", label: "Automation" },
  { id: "web", label: "Web" },
] as const;
