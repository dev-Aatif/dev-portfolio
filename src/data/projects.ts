export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Path to project screenshot in /public/projects/
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
    image: "/projects/ergo-preview.svg",
    tags: ["Flutter", "Riverpod", "SQLite", "GoRouter"],
    category: "mobile",
    githubUrl: "https://github.com/dev-Aatif/ergo",
  },
  {
    id: "project-2",
    title: "Sarmaya",
    description:
      "An event-sourced portfolio tracker built with Jetpack Compose, featuring precise realized P/L tracking and adversarial data resilience.",
    image: "/projects/sarmaya-preview.svg",
    tags: ["Kotlin", "Jetpack Compose", "Room", "MVVM"],
    category: "mobile",
    githubUrl: "https://github.com/dev-Aatif/sarmaya",
  },
  {
    id: "project-3",
    title: "Nebula Downloader",
    description:
      "A sleek media extraction tool with a glassmorphic UI, supporting 8K downloads and intelligent clipboard detection.",
    image: "/projects/nebula-preview.svg",
    tags: ["Python", "yt-dlp", "SQLite", "CustomTkinter"],
    category: "desktop",
    githubUrl: "https://github.com/dev-Aatif/nebula-downloader",
  },
  // {
  //   id: "project-4",
  //   title: "[Project Title Four]",
  //   description:
  //     "[A concise one-liner describing this project, its purpose, and what makes it unique.]",
  //   image: "/projects/placeholder-4.svg",
  //   tags: ["Node.js", "Express", "MongoDB", "Docker"],
  //   category: "fullstack",
  //   githubUrl: "[https://github.com/you/repo]",
  // },
  // {
  //   id: "project-5",
  //   title: "[Project Title Five]",
  //   description:
  //     "[A concise one-liner describing this project, its purpose, and what makes it unique.]",
  //   image: "/projects/placeholder-5.svg",
  //   tags: ["React Native", "Expo", "Firebase"],
  //   category: "mobile",
  //   liveUrl: "[https://your-live-url.com]",
  //   githubUrl: "[https://github.com/you/repo]",
  // },
  // {
  //   id: "project-6",
  //   title: "[Project Title Six]",
  //   description:
  //     "[A concise one-liner describing this project, its purpose, and what makes it unique.]",
  //   image: "/projects/placeholder-6.svg",
  //   tags: ["Vue.js", "GSAP", "Three.js"],
  //   category: "frontend",
  //   liveUrl: "[https://your-live-url.com]",
  //   githubUrl: "[https://github.com/you/repo]",
  // },
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
