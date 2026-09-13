"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personal, techLine } from "@/data/portfolio";

// Floating particle component
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background:
              i % 3 === 0
                ? "rgba(99,102,241,0.6)"
                : i % 3 === 1
                ? "rgba(139,92,246,0.5)"
                : "rgba(6,182,212,0.4)",
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// Animated code grid decoration
function CodeGrid() {
  return (
    <div
      className="absolute right-0 top-0 w-1/2 h-full opacity-[0.04] pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        maskImage: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
        WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-base"
      aria-label="Hero section"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise" aria-hidden="true" />
      <CodeGrid />
      <Particles />

      {/* Ambient gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ---- LEFT: Content ---- */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Status badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-gray-400 border border-white/10 rounded-full px-3 py-1">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-white">{personal.name}</span>
              </h1>
              <div className="mt-2 flex items-center gap-3">
                <span
                  className="text-xl sm:text-2xl font-semibold gradient-text-accent"
                >
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg font-medium text-gray-300 leading-relaxed max-w-xl">
              {personal.tagline}
            </p>

            {/* Bio */}
            <p className="text-gray-400 leading-relaxed max-w-lg">
              {personal.bio}
            </p>

            {/* Tech line */}
            <div className="flex flex-wrap gap-2 py-2">
              {techLine.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                id="hero-view-projects"
                className="btn-primary"
              >
                View Projects
                <ExternalLink size={16} />
              </a>
              <a
                href="#contact"
                id="hero-lets-connect"
                className="btn-secondary"
              >
                Let&apos;s Connect
              </a>
              <a
                href={personal.resume}
                download
                id="hero-download-resume"
                className="btn-secondary"
                title="Download Resume"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github"
                aria-label="GitHub"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                <FiLinkedin size={20} />
              </a>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-gray-600 font-mono">
                React · Next.js · Node.js
              </span>
            </div>
          </div>

          {/* ---- RIGHT: Photo ---- */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="profile-photo-wrapper">
              {/* Animated gradient border */}
              <div className="profile-photo-border" aria-hidden="true" />

              <div className="profile-photo-frame w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px]">
                {/* Photo — replace /profile.jpg with your actual photo */}
                <div className="relative w-full h-full">
                  <Image
                    src={personal.photo}
                    alt={`${personal.name} — Full Stack Developer`}
                    fill
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover"
                    onError={(e) => {
                      // Fallback: show initials placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".photo-placeholder")) {
                        const placeholder = document.createElement("div");
                        placeholder.className =
                          "photo-placeholder absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900/60 to-violet-900/60";
                        placeholder.innerHTML = `
                          <div style="font-size:4rem;font-weight:800;color:rgba(165,180,252,0.4);letter-spacing:-2px;font-family:sans-serif">MUK</div>
                          <div style="font-size:0.75rem;color:rgba(165,180,252,0.4);margin-top:8px;font-family:sans-serif">Replace with your photo</div>
                        `;
                        parent.appendChild(placeholder);
                      }
                    }}
                  />
                </div>

                {/* Subtle overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,11,20,0.3), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating label badge */}
              <div
                className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2.5 shadow-xl"
                style={{ border: "1px solid rgba(99,102,241,0.3)" }}
              >
                <div className="text-xs text-gray-400">
                  Full Stack Developer
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  React · Node.js · Python
                </div>
              </div>

              {/* Floating experience badge */}
              <div
                className="absolute -top-4 -left-4 glass rounded-xl px-4 py-2.5 shadow-xl"
                style={{ border: "1px solid rgba(99,102,241,0.3)" }}
              >
                <div className="text-xs text-indigo-400 font-semibold">
                  MERN · Web3 · AI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
