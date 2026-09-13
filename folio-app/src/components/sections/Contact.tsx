import { Download, ExternalLink } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-bg-base overflow-hidden"
      aria-label="Contact"
    >
      {/* Background ambient glows */}
      <div
        className="contact-orb w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="contact-orb w-64 h-64 top-1/4 right-1/4"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Label */}
        <span className="section-label justify-center">Get in Touch</span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
          Have a product to build?
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
          Let&apos;s turn the idea into a fast, scalable, and polished digital
          product. I&apos;m available for full-time roles, contract work, and
          freelance projects.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            href={`mailto:${personal.email}`}
            id="contact-email-cta"
            className="btn-primary text-base px-8 py-3.5"
          >
            <FiMail size={18} />
            Get in Touch
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin-cta"
            className="btn-secondary text-base px-8 py-3.5"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-xs text-gray-600 px-2">or connect via</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Secondary links */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-github"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200"
          >
            <FiGithub size={16} />
            GitHub
            <ExternalLink size={12} className="text-gray-600" />
          </a>
          <a
            href={personal.resume}
            download
            id="contact-resume"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Email display */}
        <div className="mt-8 text-sm text-gray-600">
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-gray-400 transition-colors font-mono"
          >
            {personal.email}
          </a>
        </div>
      </div>
    </section>
  );
}
