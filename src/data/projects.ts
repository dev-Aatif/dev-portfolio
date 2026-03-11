export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  tags: string[];
  category: "fullstack" | "mobile" | "web" | "desktop" | "automation" | "cross-platform";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Ergo",
    description:
      "A high-performance, offline-first learning platform featuring a custom quiz engine and streak-tracking analytics.",
    icon: "GraduationCap",
    tags: ["Flutter", "Riverpod", "SQLite", "GoRouter"],
    category: "mobile",
    githubUrl: "https://github.com/dev-Aatif/ergo",
  },
  {
    id: "project-2",
    title: "Sarmaya",
    description:
      "An event-sourced portfolio tracker built with Jetpack Compose, featuring precise realized P/L tracking and adversarial data resilience.",
    icon: "Wallet",
    tags: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    category: "mobile",
    githubUrl: "https://github.com/dev-Aatif/sarmaya",
  },
  {
    id: "project-3",
    title: "Nebula Downloader",
    description:
      "A sleek media extraction tool with a glassmorphic UI, supporting 8K downloads and intelligent clipboard detection.",
    icon: "Download",
    tags: ["Python", "yt-dlp", "SQLite", "CustomTkinter"],
    category: "desktop",
    githubUrl: "https://github.com/dev-Aatif/nebula-downloader",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "desktop", label: "Desktop" },
  { id: "fullstack", label: "Fullstack" },
  { id: "automation", label: "Automation" },
  { id: "cross-platform", label: "Cross-Platform" },
] as const;
