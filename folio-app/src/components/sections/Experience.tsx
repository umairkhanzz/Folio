import { MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-bg-base"
      aria-label="Work experience"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Work Experience
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg">
            Production development experience across real products and teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" aria-hidden="true" />

          <div className="flex flex-col gap-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-12">
                {/* Timeline dot */}
                <div
                  className="absolute left-[10px] top-1.5 w-3 h-3 rounded-full border-2 border-bg-base"
                  style={{
                    background: exp.current
                      ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                      : "#374151",
                    boxShadow: exp.current
                      ? "0 0 12px rgba(99,102,241,0.5)"
                      : "none",
                  }}
                  aria-hidden="true"
                />

                <div className="glass-card p-6 group">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-sm font-medium text-gray-400 font-mono">
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-pill text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-3">Want to see more detail?</p>
          <a
            href="/resume.pdf"
            download
            id="experience-download-resume"
            className="btn-secondary text-sm"
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
