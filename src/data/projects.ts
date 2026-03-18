export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  image?: string;
  icon: string; // Lucide icon name
  tags: string[];
  category: "fullstack" | "mobile" | "web" | "desktop" | "automation" | "cross-platform";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "automation",
    title: "Job Posting Monitor",
    description:
      "A robust Python-based automation tool that monitors job sites, detects new listings, and sends notifications via Discord/Slack webhooks.",
    problem:
      "Manually checking job sites for new listings is time-consuming and inefficient.",
    solution:
      "A Python-based automation tool that monitors job sites (like RemoteOK) using a modular scraper interface, state management to avoid duplicates, and Discord notifications.",
    result:
      "Automated job search orchestration with real-time notifications and zero duplicate alerts.",
    image: "/assets/auto.png",
    icon: "Cpu",
    tags: ["Python", "Web Scraping", "Discord API", "Docker"],
    category: "automation",
    githubUrl: "https://github.com/dev-Aatif/job-finder",
    liveUrl: "/assets/auto.png",
  },
  {
    id: "lead-scraper",
    title: "Professional Lead Scraper",
    description:
      "A high-performance, adaptive lead extraction tool built with Python and Playwright.",
    problem:
      "Static scrapers are easily blocked and fail to extract deep contact information like emails and founder names from complex startup directories.",
    solution:
      "An adaptive lead extraction tool using Playwright and heuristic analysis to identify profile links and perform deep scrapes for contact data.",
    result:
      "High-performance lead extraction with adaptive evasion and comprehensive data exports (CSV/JSON).",
    image: "/assets/lead.png",
    icon: "Search",
    tags: ["Python", "Playwright", "Heuristics", "Data Engineering"],
    category: "automation",
    githubUrl: "https://github.com/dev-Aatif/lead-scraper",
    liveUrl: "/assets/lead.png",
  },
  {
    id: "landing-page",
    title: "Modern Landing Page",
    description:
      "A high-performance, SEO-optimized landing page built with Next.js and Tailwind CSS.",
    problem:
      "Creating high-performance, SEO-optimized landing pages manually can be complex and slow.",
    solution:
      "A modern landing page built with Next.js, featuring optimized font loading, Geist typography, and a scalable component architecture.",
    result:
      "A fast, responsive, and developer-friendly landing page template ready for deployment.",
    image: "/assets/landing.png",
    icon: "Layout",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: "web",
    githubUrl: "https://github.com/dev-Aatif/landing-page",
    liveUrl: "/projects/landing-page",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "automation", label: "Automation" },
] as const;
