import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "achaai",
    slug: "achaai",
    title: "AchaAí",
    subtitle: "Plataforma Escalonável em Nuvem",
    description:
      "Ecossistema de comércio local vencedor de Hackathon, integrado a um Assistente de Inteligência Artificial via WhatsApp. O projeto utiliza práticas avançadas de microsserviços, Serverless (Cloudflare Workers) e infraestrutura em nuvem (Oracle OCI, Docker) para garantir alta disponibilidade e baixa latência.",
    featured: true,
    techs: ["React", "Node.js", "Docker", "Cloudflare", "Oracle OCI"],
    links: {
      caseStudy: "/projects/achaai",
      github: "https://github.com/KauêRian/achaai-public", // Substitua se não houver repo publico
    },
    // image: "/images/projects/achaai/cover.jpg"
  },
  // Mais projetos podem ser adicionados aqui
];
