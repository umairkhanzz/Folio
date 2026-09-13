"use client";

import { useState } from "react";
import {
  Monitor, Palette, GitBranch, Server, Database,
  Zap, Blocks, Cloud, Settings,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Palette, GitBranch, Server, Database,
  Zap, Blocks, Cloud, Settings,
};

// Category color accents
const categoryColors: Record<string, string> = {
  Frontend: "indigo",
  "UI & Styling": "violet",
  "State Management": "purple",
  Backend: "blue",
  Databases: "cyan",
  "Real-Time": "emerald",
  "Blockchain / Web3": "amber",
  "DevOps & Cloud": "rose",
  "Engineering Practices": "slate",
};

const colorMap: Record<string, { pill: string; tab: string; icon: string }> = {
  indigo: {
    pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/20",
    tab: "bg-indigo-500/15 border-indigo-500/40 text-white",
    icon: "text-indigo-400 bg-indigo-500/10",
  },
  violet: {
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20",
    tab: "bg-violet-500/15 border-violet-500/40 text-white",
    icon: "text-violet-400 bg-violet-500/10",
  },
  purple: {
    pill: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20",
    tab: "bg-purple-500/15 border-purple-500/40 text-white",
    icon: "text-purple-400 bg-purple-500/10",
  },
  blue: {
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20",
    tab: "bg-blue-500/15 border-blue-500/40 text-white",
    icon: "text-blue-400 bg-blue-500/10",
  },
  cyan: {
    pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20",
    tab: "bg-cyan-500/15 border-cyan-500/40 text-white",
    icon: "text-cyan-400 bg-cyan-500/10",
  },
  emerald: {
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20",
    tab: "bg-emerald-500/15 border-emerald-500/40 text-white",
    icon: "text-emerald-400 bg-emerald-500/10",
  },
  amber: {
    pill: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20",
    tab: "bg-amber-500/15 border-amber-500/40 text-white",
    icon: "text-amber-400 bg-amber-500/10",
  },
  rose: {
    pill: "bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20",
    tab: "bg-rose-500/15 border-rose-500/40 text-white",
    icon: "text-rose-400 bg-rose-500/10",
  },
  slate: {
    pill: "bg-slate-500/10 text-slate-300 border-slate-500/20 hover:bg-slate-500/20",
    tab: "bg-slate-500/15 border-slate-500/40 text-white",
    icon: "text-slate-400 bg-slate-500/10",
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  const activeSkill = skills.find((s) => s.category === activeCategory)!;
  const color = categoryColors[activeCategory] ?? "indigo";
  const colors = colorMap[color];

  return (
    <section
      id="skills"
      className="relative py-24 bg-bg-surface border-y border-white/5"
      aria-label="Technical skills"
    >
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="section-label justify-center">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Technical Expertise
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            Full-spectrum JavaScript development — from pixel-perfect UIs to
            production-grade backend systems.
          </p>
        </div>

        {/* Category Tabs — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide justify-start lg:justify-center">
          {skills.map((s) => {
            const Icon = iconMap[s.icon] ?? Settings;
            const isActive = s.category === activeCategory;
            const c = colorMap[categoryColors[s.category] ?? "indigo"];
            return (
              <button
                key={s.category}
                onClick={() => setActiveCategory(s.category)}
                className={`skill-tab flex items-center gap-2 flex-shrink-0 ${
                  isActive ? `active ${c.tab} border` : ""
                }`}
                aria-pressed={isActive}
                id={`skill-tab-${s.category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon size={14} className={isActive ? c.icon.split(" ")[0] : "text-gray-500"} />
                {s.category}
              </button>
            );
          })}
        </div>

        {/* Active category display */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-4 mb-6">
            {(() => {
              const Icon = iconMap[activeSkill.icon] ?? Settings;
              return (
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.icon}`}>
                  <Icon size={20} />
                </div>
              );
            })()}
            <div>
              <h3 className="text-xl font-bold text-white">{activeSkill.category}</h3>
              <p className="text-sm text-gray-500">
                {activeSkill.items.length} technologies
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {activeSkill.items.map((item) => (
              <span
                key={item}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${colors.pill}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* All categories mini overview */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {skills.slice(0, 5).map((s) => {
            const Icon = iconMap[s.icon] ?? Settings;
            const c = colorMap[categoryColors[s.category] ?? "indigo"];
            return (
              <button
                key={s.category}
                onClick={() => setActiveCategory(s.category)}
                className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-200 text-left group"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 ${c.icon}`}>
                  <Icon size={15} />
                </div>
                <p className="text-xs font-semibold text-gray-300">{s.category}</p>
                <p className="text-xs text-gray-600 mt-0.5">{s.items.length} skills</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
