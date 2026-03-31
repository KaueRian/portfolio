"use client";

import { motion } from "framer-motion";
import { Cloud, Layout, Server } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SKILL_CATEGORIES } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
};

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-background">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-mono tracking-tighter"
          >
            Habilidades <span className="text-emerald-500">&</span> Stack.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl"
          >
            O conjunto de tecnologias que emprego diariamente para planejar, construir e entregar ecossistemas resilientes em nuvem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col border border-border rounded-lg p-6 bg-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-muted text-emerald-500">
                  {iconMap[category.icon]}
                </div>
                <h3 className="font-mono font-bold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center rounded-sm px-3 py-1 text-sm font-medium transition-colors ${
                      skill.highlight
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
