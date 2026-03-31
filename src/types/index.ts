export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "domínio" | "avançado" | "sólida" | "intermediário" | "básico";
  highlight?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  techs: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
}
