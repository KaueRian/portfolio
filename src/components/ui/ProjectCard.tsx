"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-subtle hover:shadow-glow transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold font-mono tracking-tight text-foreground group-hover:text-emerald-500 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-sm font-medium text-emerald-500 mb-2">{project.subtitle}</p>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-sm bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.links.caseStudy && (
        <Link
          href={project.links.caseStudy}
          className="inline-flex items-center text-sm font-medium text-foreground hover:text-emerald-500 transition-colors"
        >
          Ler Case Study Completo
          <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      )}
    </motion.div>
  );
}
