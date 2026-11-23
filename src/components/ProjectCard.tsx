import type { Project } from "@/data/projects";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layout,
  MonitorDown,
  Search,
  Smartphone,
  Terminal,
} from "lucide-react";

// ============================================================
// PROJECT CARD — Consistent Architectural Case Study Block
// ============================================================

interface ProjectCardProps {
  project: Project;
  featuredSpan?: boolean;
}

const iconMap = {
  Terminal,
  Smartphone,
  MonitorDown,
  Cpu,
  Search,
  Layout,
} as const;

function GitHubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectCard({ project, featuredSpan = false }: ProjectCardProps) {
  const IconComponent = iconMap[project.icon] ?? Code2;
  const isInternalRoute = Boolean(project.liveUrl?.startsWith("/projects/"));

  return (
    <article
      className={`group rounded-[var(--radius-card)] border border-rule bg-paper-2 hover:border-muted transition-colors overflow-hidden flex flex-col ${
        featuredSpan ? "lg:col-span-2 lg:grid lg:grid-cols-12" : ""
      }`}
    >
      {/* Unified Specification Header */}
      <div
        className={`p-6 bg-paper border-b border-rule flex flex-col justify-between gap-4 ${
          featuredSpan ? "lg:col-span-5 lg:border-b-0 lg:border-r" : "min-h-[156px]"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            <IconComponent size={18} aria-hidden="true" />
            <span>{project.surface}</span>
          </span>
          <span className="text-xs text-muted">{project.stackLead}</span>
        </div>

        <p className="text-base text-ink-2 leading-relaxed max-w-[48ch]">
          {project.description}
        </p>
      </div>

      {/* Details Column */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between gap-6 ${
          featuredSpan ? "lg:col-span-7" : "flex-1"
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-[length:var(--text-title)] font-bold text-ink tracking-tight leading-snug min-w-0">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full border border-rule bg-paper text-ink-2 hover:text-ink hover:border-muted transition-colors"
                  aria-label={`View ${project.title} source on GitHub`}
                >
                  <GitHubMark />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target={isInternalRoute ? undefined : "_blank"}
                  rel={isInternalRoute ? undefined : "noopener noreferrer"}
                  className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-full border border-rule bg-paper text-accent hover:border-accent transition-colors"
                  aria-label={`Open ${project.title} live route`}
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Engineering Breakdown */}
          <dl className="mt-5 space-y-3.5 pt-4 border-t border-rule text-sm">
            <div>
              <dt className="font-semibold text-ink">Problem</dt>
              <dd className="mt-0.5 text-ink-2 leading-relaxed">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Architecture</dt>
              <dd className="mt-0.5 text-ink-2 leading-relaxed">{project.solution}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Outcome</dt>
              <dd className="mt-0.5 text-ink-2 leading-relaxed">{project.result}</dd>
            </div>
          </dl>
        </div>

        {/* Stack Tags */}
        <ul className="flex flex-wrap gap-2 pt-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-xs font-medium text-ink-2 bg-paper border border-rule rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
