import type { Project } from "@/data/projects";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

// ============================================================
// PROJECT CARD — Detailed Section Version
// ============================================================

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons[project.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Code2;

  return (
    <article className="group glass-bordered rounded-3xl overflow-hidden transition-all duration-300 hover:border-glass-border-hover mb-8 flex flex-col bg-surface/5">
      {/* Project Hero Image - Interactive Trigger */}
      <a 
        href={project.liveUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative aspect-video w-full overflow-hidden bg-base-light cursor-zoom-in"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-secondary/40">
            <IconComponent size={64} strokeWidth={1} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent opacity-60" />
        
        {/* Play / Zoom Icon Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-base/20">
          <div className="p-4 rounded-full bg-interactive/90 text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
            {project.id === "landing-page" ? <LucideIcons.ExternalLink size={32} /> : <LucideIcons.Maximize2 size={32} />}
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-base/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-secondary border border-glass-border z-10">
          {project.category}
        </div>
      </a>

      {/* Content Container */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold text-primary tracking-tight leading-tight">
            {project.title}
          </h3>
          {/* Hover Revealed Actions */}
          <div className="flex gap-2 shrink-0 relative z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-glass-border bg-base-light/80 text-primary shadow-xl hover:text-interactive hover:scale-110 active:scale-95 transition-all backdrop-blur-sm"
                aria-label="View Github"
                onClick={(e) => e.stopPropagation()}
              >
                <LucideIcons.Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-interactive text-white shadow-xl hover:bg-interactive-hover hover:scale-110 active:scale-95 transition-all"
                aria-label="View Live/Demo"
                onClick={(e) => e.stopPropagation()}
              >
                {project.id === "landing-page" ? <LucideIcons.ExternalLink size={20} /> : <LucideIcons.Play size={20} />}
              </a>
            )}
          </div>
        </div>

        <p className="text-secondary leading-relaxed mb-6 italic">
          &quot;{project.description}&quot;
        </p>

        {/* Compact Detailed Sections */}
        <div className="space-y-4 pt-4 border-t border-glass-border/30">
          {[
            { label: "Problem", text: project.problem, icon: LucideIcons.AlertCircle },
            { label: "Solution", text: project.solution, icon: LucideIcons.Settings },
            { label: "Result", text: project.result, icon: LucideIcons.CheckCircle },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-interactive mb-1">
                <item.icon size={12} />
                <span>{item.label}</span>
              </div>
              <p className="text-[13px] text-primary/90 leading-snug line-clamp-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-mono rounded-lg bg-base-light/50 text-primary/80 border border-glass-border/40"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
