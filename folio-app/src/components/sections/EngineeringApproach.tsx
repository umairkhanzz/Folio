import { Search, GitBranch, Code2, Gauge } from "lucide-react";
import { engineeringApproach } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Search, GitBranch, Code2, Gauge,
};

export default function EngineeringApproach() {
  return (
    <section
      id="approach"
      className="relative py-24 bg-bg-base"
      aria-label="Engineering approach"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="section-label justify-center">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            How I Build
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            A disciplined approach from product understanding to a
            production-ready, optimized application.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector lines (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(25%+8px)] right-[calc(25%+8px)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(99,102,241,0.4) 20%, rgba(99,102,241,0.4) 80%, transparent)",
            }}
            aria-hidden="true"
          />

          {engineeringApproach.map((step, index) => {
            const Icon = iconMap[step.icon] ?? Code2;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-300 group"
              >
                {/* Step number */}
                <div className="mb-4 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                    <Icon size={22} className="text-indigo-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-600 border-2 border-bg-base flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (mobile/tablet) */}
                {index < engineeringApproach.length - 1 && (
                  <div className="lg:hidden mt-4 text-indigo-500/40 text-lg">
                    ↓
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
