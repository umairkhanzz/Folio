"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Gaming: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  SaaS: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  FinTech: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  Web3: "text-amber-300 bg-amber-500/10 border-amber-500/20",
  AI: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
  "Real-Time": "text-rose-300 bg-rose-500/10 border-rose-500/20",
};

// Project card image placeholder
function ProjectImagePlaceholder({
  gradient,
  name,
}: {
  gradient: string;
  name: string;
}) {
  return (
    <div
      className={`w-full aspect-video flex items-center justify-center bg-gradient-to-br ${gradient} relative overflow-hidden`}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />
      <span className="text-3xl font-bold text-white/20 relative z-10 font-mono tracking-wider">
        {name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()}
      </span>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative py-24 bg-bg-surface border-y border-white/5"
      aria-label="Featured projects"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">Work</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Featured Projects
              </h2>
              <p className="mt-3 text-gray-400 max-w-lg">
                A selection of products I&apos;ve built — from gaming platforms
                to FinTech, SaaS, and Web3 applications.
              </p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`skill-tab flex-shrink-0 ${
                filter === cat ? "active" : ""
              }`}
              id={`project-filter-${cat.toLowerCase()}`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const badgeClass =
              categoryColors[project.category] ??
              "text-gray-300 bg-white/5 border-white/10";
            return (
              <article
                key={project.id}
                className="project-card group flex flex-col"
                aria-label={`Project: ${project.name}`}
              >
                {/* Image / Placeholder */}
                <div className="overflow-hidden rounded-t-[19px]">
                  <ProjectImagePlaceholder
                    gradient={project.gradient}
                    name={project.name}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`category-badge border text-xs ${badgeClass}`}
                        >
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all"
                          aria-label={`GitHub for ${project.name}`}
                        >
                          <FiGithub size={14} />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all"
                          aria-label={`Live link for ${project.name}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* My Contribution */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1.5">
                      My Contribution
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {project.myContribution}
                    </p>
                  </div>

                  {/* Engineering Highlights */}
                  <ul className="flex flex-col gap-1.5">
                    {project.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-500"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500/60 flex-shrink-0" />
                        {hl}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-white/5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] text-gray-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            More projects on{" "}
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2"
              id="projects-github-link"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
