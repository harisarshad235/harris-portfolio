export const flagshipProjects = [
  {
    id: "takt",
    title: "Takt",
    category: "Precision Task Command Center & Flow Engine",
    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    tagline: "Precision Task Command Center, Pomodoro Cadence & Flow Workspace",
    description: "Conceived, architected, and built by Haris as a zero-friction personal execution engine. Combines tactile Kanban swimlanes, Pomodoro cadence time-blocking, day-wise calendar scheduling, and local-first edge sync.",
    image: "/images/showcase/takt-mockup.jpg",
    liveUrl: "https://takt.harisarshad.site/",
    keyFeatures: [
      "Tactile Kanban swimlanes with dynamic List, Board, and Calendar views",
      "Precision Pomodoro cadence, time-blocking & deep flow sessions",
      "Zero-latency local-first state with Cloudflare edge sync & karma analytics"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare", "Lucide Icons"],
    glowClass: "group-hover:shadow-[0_0_45px_-12px_rgba(16,185,129,0.28)]",
    borderHoverClass: "group-hover:border-emerald-500/40"
  },
  {
    id: "apextrack",
    title: "ApexTrack",
    category: "Enterprise Agile & Engineering Platform",
    badgeStyle: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    tagline: "Jira-Style Agile Sprints, Knowledge Base & Multi-Project RBAC",
    description: "An edge-native engineering workflow platform bridging code commits, GitHub PR lifecycles, real-time CI/CD pipeline statuses, automated sprint burndowns, and enterprise role-based governance on Cloudflare edge infrastructure.",
    image: "/images/showcase/apextrack-mockup.jpg",
    liveUrl: "https://apex.harisarshad.site/",
    dashboardUrl: "https://apex.harisarshad.site/dashboard",
    keyFeatures: [
      "Jira-parity sprints, column WIP limits, subtask checklists & burndowns",
      "Multi-project RBAC architecture with isolated workspace tenancy",
      "Bi-directional GitHub PR synchronization & real-time CI/CD build badges"
    ],
    techStack: ["Cloudflare Workers", "Cloudflare D1 (SQLite)", "Cloudflare R2", "TypeScript", "GitHub OAuth", "Tailwind CSS"],
    glowClass: "group-hover:shadow-[0_0_45px_-12px_rgba(59,130,246,0.28)]",
    borderHoverClass: "group-hover:border-blue-500/40"
  }
];
