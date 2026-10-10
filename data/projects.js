export const flagshipProjects = [
  {
    id: "auratask",
    title: "AuraTask",
    category: "Productivity & Focus Workspace",
    badgeStyle: "bg-rose-500/10 text-rose-400 border-rose-500/25",
    tagline: "Tactile Kanban Planner, Focus Engine & Flow Workspace",
    description: "Designed for high-velocity personal and team execution without cognitive overload. Combines collapsible Kanban swimlanes, Day-Wise 1-click postponement, meeting scratchpads, built-in Pomodoro flow sessions, and automated daily backup sync.",
    image: "/images/showcase/auratask-mockup.jpg",
    liveUrl: "https://auratask.harisarshad.site/",
    keyFeatures: [
      "Tactile Kanban swimlanes with dynamic List, Board, and Calendar views",
      "Daily Shutdown Ritual with persistent streak & karma mechanics",
      "Obsidian dark mode theme with zero-latency local-first state"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare", "Lucide Icons"],
    glowClass: "group-hover:shadow-[0_0_45px_-12px_rgba(244,63,94,0.28)]",
    borderHoverClass: "group-hover:border-rose-500/40"
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
