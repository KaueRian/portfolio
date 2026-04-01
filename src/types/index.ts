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

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  course: string;
  institution: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description?: string;
}
