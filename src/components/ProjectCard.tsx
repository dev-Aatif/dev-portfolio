"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

// ============================================================
// PROJECT CARD — Individual project display with hover effects
// ============================================================

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-glass-border-hover hover:shadow-xl hover:shadow-interactive/5 break-inside-avoid mb-6"
    >
      {/* --- Project Image --- */}
      <div className="relative aspect-video overflow-hidden bg-base-light">
        {/* Placeholder gradient — replace with <Image> when you have screenshots */}
        <div
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, 
              hsl(${(index * 60) % 360}, 50%, 20%) 0%, 
              hsl(${(index * 60 + 40) % 360}, 40%, 15%) 100%)`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-secondary/40 text-sm font-mono">
            {project.image}
          </span>
        </div>

        {/* --- Hover Overlay with Links --- */}
        <div className="absolute inset-0 bg-base/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-interactive text-white text-sm font-medium hover:bg-interactive-hover transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg glass text-primary text-sm font-medium hover:bg-surface-hover transition-colors"
              aria-label={`View source code of ${project.title}`}
            >
              Source ↗
            </a>
          )}
        </div>
      </div>

      {/* --- Card Content --- */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-interactive transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* --- Tech Tags --- */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-base-light/50 text-secondary border border-glass-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
