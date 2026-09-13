// ============================================================
// PORTFOLIO DATA — Muhammad Umair Khan
// Update this file with your real information
// ============================================================

export const personal = {
  name: "Muhammad Umair Khan",
  shortName: "Umair Khan",
  initials: "MUK",
  role: "Full Stack Developer",
  tagline: "Building scalable, performant, and user-focused web applications.",
  bio: "I build modern web products across frontend, backend, real-time systems, and emerging technologies—turning complex ideas into fast, intuitive, production-ready applications.",
  location: "Pakistan",
  email: "your.email@example.com",       // TODO: Replace
  github: "https://github.com/yourusername", // TODO: Replace
  linkedin: "https://linkedin.com/in/yourusername", // TODO: Replace
  resume: "/resume.pdf",                  // TODO: Replace with actual resume path
  photo: "/profile.jpg",                  // TODO: Replace with your actual photo
};

export const techLine = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Django",
  "MongoDB",
  "PostgreSQL",
];

export const skills = [
  {
    category: "Frontend",
    icon: "Monitor",
    items: [
      "React.js",
      "Next.js 14",
      "Vue.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "UI & Styling",
    icon: "Palette",
    items: [
      "TailwindCSS",
      "SASS/SCSS",
      "Bootstrap",
      "shadcn/ui",
      "Responsive UI",
      "Figma",
    ],
  },
  {
    category: "State Management",
    icon: "GitBranch",
    items: ["Redux Toolkit", "Zustand", "Context API"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      "Node.js",
      "Express.js",
      "MERN Stack",
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    category: "Real-Time",
    icon: "Zap",
    items: ["Socket.IO", "WebSockets", "Ably", "Live Collaboration"],
  },
  {
    category: "Blockchain / Web3",
    icon: "Blocks",
    items: [
      "Solidity",
      "Smart Contract Integration",
      "Web3 Frontend",
      "DApp Development",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    items: ["Git", "GitHub", "Bitbucket", "CI/CD", "AWS", "Vercel", "Postman"],
  },
  {
    category: "Engineering Practices",
    icon: "Settings",
    items: [
      "SSR",
      "CSR",
      "ISR",
      "Lazy Loading",
      "Code Splitting",
      "Bundle Optimization",
      "Agile/Scrum",
    ],
  },
];

export const whatIBring = [
  { label: "Product-focused development", icon: "Target" },
  { label: "Pixel-perfect UI implementation", icon: "Layers" },
  { label: "Scalable architecture", icon: "GitBranch" },
  { label: "API & third-party integrations", icon: "Plug" },
  { label: "Real-time application development", icon: "Zap" },
  { label: "Performance optimization", icon: "Gauge" },
  { label: "Responsive interfaces", icon: "Monitor" },
  { label: "Full-stack problem solving", icon: "Wrench" },
];

export const experience = [
  // TODO: Replace with your actual experience
  {
    id: "exp-1",
    company: "Company Name",
    role: "Full Stack Developer",
    duration: "Jan 2023 – Present",
    location: "Remote",
    description:
      "Placeholder: Replace with your actual responsibilities, technologies used, and impact at this company.",
    technologies: ["React.js", "Node.js", "TypeScript", "MongoDB"],
    current: true,
  },
  {
    id: "exp-2",
    company: "Previous Company",
    role: "Frontend Developer",
    duration: "Jun 2021 – Dec 2022",
    location: "On-site",
    description:
      "Placeholder: Replace with your actual responsibilities, technologies used, and impact at this company.",
    technologies: ["React.js", "Next.js", "TailwindCSS", "REST APIs"],
    current: false,
  },
];

export const projects = [
  // TODO: Replace with your actual projects
  {
    id: "nohesi",
    name: "Nohesi",
    tagline: "Interactive gaming platform with real-time user engagement.",
    description:
      "Placeholder: Nohesi is a gaming platform where I worked on the user-facing experience and integrated backend/game functionality. Replace with actual project description.",
    category: "Gaming",
    technologies: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
    myContribution:
      "Placeholder: Built the user-facing frontend, implemented real-time game interactions, and integrated backend APIs.",
    highlights: [
      "Real-time game state management with Socket.IO",
      "Responsive and interactive UI components",
      "Backend API integration for game logic",
      "Performance-optimized rendering",
    ],
    liveUrl: "#", // TODO: Replace
    githubUrl: "#", // TODO: Replace
    featured: true,
    gradient: "from-violet-600/20 to-indigo-600/20",
  },
  {
    id: "project-2",
    name: "Project Two",
    tagline: "A SaaS platform for business productivity.",
    description:
      "Placeholder: Replace with your actual project description, what problem it solves, and who uses it.",
    category: "SaaS",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    myContribution:
      "Placeholder: Describe exactly what you built and your personal contribution.",
    highlights: [
      "Full-stack feature development",
      "Third-party API integration",
      "Responsive dashboard UI",
      "Database schema design",
    ],
    liveUrl: "#", // TODO: Replace
    githubUrl: "#", // TODO: Replace
    featured: true,
    gradient: "from-cyan-600/20 to-blue-600/20",
  },
  {
    id: "project-3",
    name: "Project Three",
    tagline: "DApp with smart contract integration.",
    description:
      "Placeholder: Replace with your actual Web3 project description.",
    category: "Web3",
    technologies: ["React.js", "Solidity", "Web3.js", "Ethers.js"],
    myContribution:
      "Placeholder: Describe your Web3 frontend work and smart contract integrations.",
    highlights: [
      "Smart contract integration",
      "Wallet connection flow",
      "On-chain data display",
      "Transaction management",
    ],
    liveUrl: "#", // TODO: Replace
    githubUrl: "#", // TODO: Replace
    featured: false,
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
];

export const engineeringApproach = [
  {
    step: "01",
    title: "Understand",
    description:
      "Understand the product, users, business requirements, and technical constraints before writing a single line of code.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Design maintainable frontend/backend architecture and choose the right technologies for the problem at hand.",
    icon: "GitBranch",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop responsive, scalable, production-ready features using clean, reusable, and well-structured code.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Improve performance, responsiveness, UX, reliability, and maintainability for long-term product health.",
    icon: "Gauge",
  },
];

export const qualityPillars = [
  {
    title: "Performance",
    icon: "Zap",
    items: [
      "Lazy loading",
      "Code splitting",
      "Bundle optimization",
      "SSR / ISR",
    ],
  },
  {
    title: "Architecture",
    icon: "GitBranch",
    items: [
      "Reusable components",
      "Modular architecture",
      "API-driven design",
      "Clean code",
    ],
  },
  {
    title: "Experience",
    icon: "Monitor",
    items: [
      "Responsive UI",
      "Pixel-perfect implementation",
      "Accessibility",
      "UX-first thinking",
    ],
  },
  {
    title: "Scalability",
    icon: "Server",
    items: [
      "Real-time systems",
      "REST / GraphQL APIs",
      "Database-driven apps",
      "Cloud deployment",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
