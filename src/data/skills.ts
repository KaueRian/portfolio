import { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "domínio", highlight: true },
      { name: "Next.js", level: "domínio", highlight: true },
      { name: "TypeScript", level: "domínio", highlight: true },
      { name: "Tailwind CSS", level: "domínio" },
      { name: "Framer Motion", level: "sólida" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "domínio", highlight: true },
      { name: "Express", level: "sólida" },
      { name: "REST APIs", level: "domínio", highlight: true },
      { name: "PostgreSQL", level: "sólida" },
      { name: "MongoDB", level: "sólida" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "sólida", highlight: true },
      { name: "Serverless", level: "sólida" },
      { name: "Docker", level: "sólida", highlight: true },
      { name: "CI/CD", level: "sólida" },
      { name: "Sentry", level: "intermediário" },
    ],
  },
];
