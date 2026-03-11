import type { Project } from "@/data/projects";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============================================================
// PROJECT CARD — Clean Scalable Icon Version
// ============================================================

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons[project.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Code2;

  // Safe ID parsing for generated background color
  const idNumber = parseInt(project.id.replace(/\D/g, "")) || 0;
  const hue = (idNumber * 60) % 360;

  return (
    <article
      className="group glass-bordered rounded-2xl overflow-hidden transition-colors duration-200 hover:border-glass-border-hover break-inside-avoid mb-6"
    >
      {/* Project Icon Hero Section */}
      <div className="relative aspect-video overflow-hidden bg-base-light flex items-center justify-center">
        {/* Dynamic Glowing Background */}
        <div
          className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{
            background: `radial-gradient(circle at center, 
              hsl(${hue}, 70%, 50%), 
              transparent 70%)`,
          }}
          aria-hidden="true"
        />
        
        {/* The Icon */}
        <div className="relative z-10 text-secondary/40 transition-all duration-300 group-hover:text-interactive group-hover:scale-110">
          <IconComponent size={64} strokeWidth={1.2} />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-base/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 z-20">
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
              className="px-4 py-2 rounded-lg glass-bordered text-primary text-sm font-medium hover:bg-surface-hover transition-colors"
              aria-label={`View source code of ${project.title}`}
            >
              Source ↗
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-interactive transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed mb-4">
          {project.description}
        </p>
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
    </article>
  );
}
