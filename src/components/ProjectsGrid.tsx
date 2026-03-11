"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

// ============================================================
// PROJECTS GRID — Single entrance animation, no per-card Framer
// ============================================================

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative z-10 py-24 px-6" aria-label="Projects">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header — one single fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-secondary max-w-lg">
            A curated selection of work that represents my skills and interests.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              role="tab"
              aria-selected={activeFilter === cat.id}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                activeFilter === cat.id
                  ? "bg-interactive text-white"
                  : "glass-bordered text-secondary hover:text-primary hover:bg-surface-hover"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid — no Framer on individual cards */}
        <div className="columns-1 md:columns-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-secondary">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
