"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { useScrollTo } from "@/hooks/useScrollTo";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <Section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 pb-12"
    >
      <div className="flex flex-col items-start gap-8 max-w-3xl">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground bg-muted/50 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
          Disponível para oportunidades globais
        </motion.div>

        {/* Headlines */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-mono tracking-tighter text-foreground"
          >
            Kauê Rian — Full Stack Developer & Cloud Infrastructure
            <br />
            <span className="text-emerald-500 text-3xl md:text-5xl lg:text-6xl block mt-2">Engenharia escalável para produtos globais.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mt-4"
          >
            Sou <strong className="text-foreground">Kauê Rian</strong>, um Desenvolvedor Full Stack focado na construção de sistemas performáticos. De arquiteturas Serverless e Cloud a UIs robustas nascidas no ecossistema React/Next.js.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors shadow-glow"
          >
            Ver Case: AchaAí <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {/* O CV fica no public/cv.pdf como definido na Fase de plano */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <FileText className="mr-2 h-4 w-4" /> Baixar Resume
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
