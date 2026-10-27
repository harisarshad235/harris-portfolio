export const flagshipProjects = [
  {
    id: "hubito",
    title: "Hubito",
    category: "Precision Task Command Center & Flow Engine",
    badgeStyle: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25",
    tagline: "Workspace & Task Command Center, Pomodoro Cadence & Flow Engine",
    description: "Conceived, architected, and built by Haris as an executive workspace and task command center for structured project execution and daily workflow momentum. Combines tactile Kanban swimlanes, Pomodoro cadence time-blocking, 7-day calendar scheduling, and local-first edge sync.",
    image: "/images/showcase/hubito-mockup.webp",
    liveUrl: "https://hubito.harisarshad.site/tour",
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
    id: "pacio",
    title: "Pacio",
    category: "Next-Gen Agile Engine & Sprint Tracker",
    badgeStyle: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/25",
    tagline: "Sub-50ms Kanban Boards, Sprint Velocity Sparklines & Multi-Tenant Governance",
    description: "An edge-native Agile velocity and sprint tracking platform built for high-output engineering teams. Combines sub-50ms Kanban swimlanes, live sprint backlogs, velocity sparklines, integrated Markdown ADR/PRD specs, Git PR tracking, and multi-tenant corporate RBAC.",
    image: "/images/showcase/pacio-mockup.webp",
    liveUrl: "https://pacio.harisarshad.site/",
    dashboardUrl: "https://pacio.harisarshad.site/dashboard",
    keyFeatures: [
      "Sub-50ms Kanban swimlanes with optimistic state, sprint backlogs & velocity sparklines",
      "Multi-tenant corporate governance with isolated workspaces & granular RBAC",
      "Integrated Markdown tech specs (ADRs/PRDs) & first-class Git PR/branch tracking"
    ],
    techStack: ["Next.js", "TypeScript", "Cloudflare Workers", "Cloudflare D1 (SQLite)", "Tailwind CSS", "Git Integration"],
    glowClass: "group-hover:shadow-[0_0_45px_-12px_rgba(79,70,229,0.28)]",
    borderHoverClass: "group-hover:border-indigo-500/40"
  }
];
