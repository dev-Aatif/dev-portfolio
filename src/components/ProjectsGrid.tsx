"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

// ============================================================
// PROJECTS GRID — Category Tabs + Zero-Orphan Asymmetric Grid
// ============================================================

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const hasOddCount = filtered.length % 2 === 1;

  return (
    <section
      id="projects"
      className="relative z-[var(--z-base)] py-20 lg:py-28 border-t border-rule"
      aria-label="Selected builds"
    >
      <div className="container">
        <div
          data-reveal=""
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-[length:var(--text-section)] font-bold tracking-[var(--tracking-display)] leading-[1.05] text-ink max-w-[22ch]">
              Selected builds across four surfaces
            </h2>
            <p className="mt-3 text-base text-ink-2 max-w-[54ch]">
              Open-source tools and production systems from github.com/dev-Aatif and client builds.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter builds by category"
          >
            {categories.map((cat) => {
              const selected = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveFilter(cat.id)}
                  role="tab"
                  aria-selected={selected}
                  className={`min-h-[44px] px-4 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                    selected
                      ? "bg-paper-3 text-accent border-accent"
                      : "bg-paper-2 text-ink-2 border-rule hover:text-ink hover:border-muted"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid — First item spans full width when count is odd to prevent orphan row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--gap-columns)]">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredSpan={hasOddCount && index === 0}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-ink-2 border border-rule rounded-[var(--radius-card)] bg-paper-2">
            <p>No builds matched this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
