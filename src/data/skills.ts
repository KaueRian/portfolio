import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "avançado", highlight: true },
      { name: "Next.js", level: "avançado", highlight: true },
      { name: "TypeScript", level: "avançado", highlight: true },
      { name: "Tailwind CSS", level: "avançado", highlight: true },
      { name: "Framer Motion", level: "intermediário", highlight: false },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "avançado", highlight: true },
      { name: "Cloudflare Workers", level: "avançado", highlight: true },
      { name: "Hono", level: "intermediário", highlight: false },
      { name: "Supabase (PostgreSQL)", level: "avançado", highlight: true },
      { name: "Cloudflare D1", level: "intermediário", highlight: false },
      { name: "MeiliSearch", level: "intermediário", highlight: false },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (Amplify)", level: "intermediário", highlight: true },
      { name: "Oracle OCI", level: "avançado", highlight: true },
      { name: "Docker", level: "avançado", highlight: true },
      { name: "Sentry", level: "intermediário", highlight: true },
      { name: "GitHub Actions", level: "intermediário", highlight: false },
    ],
  },
];
