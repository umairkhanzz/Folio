import { Zap, GitBranch, Monitor, Server } from "lucide-react";
import { qualityPillars } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Zap, GitBranch, Monitor, Server,
};

const pillarColors = [
  { border: "border-indigo-500/20", icon: "text-indigo-400 bg-indigo-500/10", dot: "bg-indigo-500" },
  { border: "border-violet-500/20", icon: "text-violet-400 bg-violet-500/10", dot: "bg-violet-500" },
  { border: "border-cyan-500/20", icon: "text-cyan-400 bg-cyan-500/10", dot: "bg-cyan-500" },
  { border: "border-emerald-500/20", icon: "text-emerald-400 bg-emerald-500/10", dot: "bg-emerald-500" },
];

export default function PerformanceQuality() {
  return (
    <section
      id="quality"
      className="relative py-24 bg-bg-surface border-y border-white/5"
      aria-label="Engineering quality pillars"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="section-label justify-center">Standards</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Engineering Quality
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            I don&apos;t just ship features — I build with reliability,
            maintainability, and performance in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualityPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] ?? Zap;
            const colors = pillarColors[index % pillarColors.length];
            return (
              <div
                key={pillar.title}
                className={`p-6 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group ${colors.border}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${colors.icon} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
