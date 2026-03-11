export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Path to project screenshot in /public/projects/
  tags: string[];
  category: "frontend" | "fullstack" | "uiux" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "[Project Title One]",
    description:
      "[A concise one-liner describing this project, its purpose, and what makes it unique.]",
    image: "/projects/placeholder-1.svg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "[https://your-live-url.com]",
    githubUrl: "[https://github.com/you/repo]",
  },
  {
    id: "project-2",
    title: "[Project Title Two]",
    description:
      "[A concise one-liner describing this project, its purpose, and what makes it unique.]",
    image: "/projects/placeholder-2.svg",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    category: "fullstack",
    liveUrl: "[https://your-live-url.com]",
    githubUrl: "[https://github.com/you/repo]",
  },
  {
    id: "project-3",
    title: "[Project Title Three]",
    description:
      "[A concise one-liner describing this project, its purpose, and what makes it unique.]",
    image: "/projects/placeholder-3.svg",
    tags: ["Figma", "Prototyping", "User Research"],
    category: "uiux",
    liveUrl: "[https://your-live-url.com]",
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
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Fullstack" },
  { id: "uiux", label: "UI/UX" },
  { id: "mobile", label: "Mobile" },
] as const;
