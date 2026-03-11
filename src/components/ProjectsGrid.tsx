"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

// ============================================================
// PROJECTS GRID — Masonry layout with category filters
// This is the HERO section of the portfolio
// ============================================================

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-secondary max-w-lg">
            A curated selection of work that represents my skills and interests.
          </p>
        </motion.div>

        {/* --- Filter Tabs --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              role="tab"
              aria-selected={activeFilter === cat.id}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-interactive text-white shadow-lg shadow-interactive/20"
                  : "glass text-secondary hover:text-primary hover:bg-surface-hover"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* --- Masonry Grid --- */}
        <div className="columns-1 md:columns-2 lg:columns-2 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* --- Empty State --- */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-secondary">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
