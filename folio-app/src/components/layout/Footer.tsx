import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal, techLine } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-bg-surface">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                MK
              </div>
              <div>
                <p className="font-bold text-white text-sm">{personal.name}</p>
                <p className="text-xs text-gray-500">{personal.role}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 max-w-xs">
              {techLine.slice(0, 5).join(" · ")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              id="footer-email"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with{" "}
            <span className="text-indigo-400">Next.js · TypeScript · TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
