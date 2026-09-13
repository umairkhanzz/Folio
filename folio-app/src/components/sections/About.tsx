"use client";

import { Target, Layers, GitBranch, Plug, Zap, Gauge, Monitor, Wrench } from "lucide-react";
import { whatIBring, personal } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Target, Layers, GitBranch, Plug, Zap, Gauge, Monitor, Wrench,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-bg-base" aria-label="About Muhammad Umair Khan">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Profile Text */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-label">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Building products that{" "}
                <span className="gradient-text">matter</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m a <strong className="text-gray-200">Full Stack Developer</strong> with
                strong expertise in the <strong className="text-gray-200">MERN Stack</strong>,
                React.js, Next.js, Node.js, TypeScript, Python, and Django. I focus on
                building complete, production-ready digital products — from pixel-perfect
                frontends to robust backend systems and real-time applications.
              </p>
              <p>
                My experience spans across{" "}
                <strong className="text-gray-200">FinTech</strong>,{" "}
                <strong className="text-gray-200">SaaS</strong>,{" "}
                <strong className="text-gray-200">Web3</strong>,{" "}
                <strong className="text-gray-200">Gaming</strong>, and{" "}
                <strong className="text-gray-200">AI-powered</strong> applications.
                I care deeply about code quality, developer experience, and delivering
                real business value — not just shipping features.
              </p>
              <p>
                I&apos;m fluent across the full stack: from architecting scalable REST and
                GraphQL APIs to integrating real-time systems with Socket.IO, implementing
                smart contract interactions in Web3 apps, and optimizing frontend performance
                for the best possible user experience.
              </p>
            </div>

            {/* Core Tech highlight */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "React.js", "Next.js", "TypeScript", "Node.js",
                "Python", "Django", "MongoDB", "PostgreSQL",
                "Socket.IO", "REST APIs", "GraphQL", "Web3",
              ].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* Right: What I Bring */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="section-label">What I Bring</span>
              <h3 className="text-2xl font-bold text-white mt-2">
                Engineering across the stack
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whatIBring.map((item, i) => {
                const Icon = iconMap[item.icon] ?? Target;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-200 group"
                  >
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={15} className="text-indigo-400" />
                    </div>
                    <span className="text-sm text-gray-300 leading-snug pt-1">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Domain expertise tags */}
            <div className="mt-2 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Domain Experience
              </p>
              <div className="flex flex-wrap gap-2">
                {["FinTech", "SaaS", "Web3", "Gaming", "AI / ML", "Real-Time Systems"].map(
                  (domain) => (
                    <span
                      key={domain}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                    >
                      {domain}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
