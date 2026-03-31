"use client";

import { Section } from "@/components/layout/Section";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-muted/30">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-mono tracking-tighter"
          >
            Projetos em <span className="text-emerald-500">Destaque</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl"
          >
            Desenvolvimento de arquiteturas complexas e interfaces de alta performance. O caso AchaAí demonstra minha capacidade de atuar em todo o fluxo de engenharia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
