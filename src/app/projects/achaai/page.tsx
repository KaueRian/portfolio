import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Server, Database, Cloud, Lock, Globe } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Case Study: AchaAí | Kauê Rian",
  description: "Arquitetura e desenvolvimento da plataforma escalonável AchaAí.",
};

export default function AchaAiCaseStudy() {
  return (
    <article className="w-full flex flex-col items-center">
      {/* Header / Intro */}
      <Section id="case-header" className="pt-32 pb-16 bg-muted/20">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Projetos
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-black font-mono tracking-tighter text-foreground">
            AchaAí — Assistente de Compras IA & E-commerce Local
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Desenvolvimento de ponta a ponta de um ecossistema focado no usuário final, combinando Inteligência Artificial, integrações complexas com WhatsApp e arquitetura de microsserviços.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="https://github.com/KauêRian/achaai-public"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <GithubIcon className="mr-2 h-4 w-4" /> Repositório (Mock)
            </a>
            {/* Opcional: Link para Live Preview */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors shadow-glow"
            >
              <Globe className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </div>
        </div>
      </Section>

      {/* Stack & Constraints */}
      <Section id="tech-stack" className="py-12 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 font-mono">
              Role
            </h4>
            <p className="text-sm font-medium text-foreground">
              Co-Fundador, Lead Full Stack & Cloud Infra
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 font-mono">
              Frontend
            </h4>
            <p className="text-sm font-medium text-foreground">
              React.js, Next.js, Tailwind CSS (Painel Admin)
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 font-mono">
              Backend
            </h4>
            <p className="text-sm font-medium text-foreground">
              Node.js, TypeScript, Cloudflare Workers (Serverless), Hono
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 font-mono">
              Infraestrutura
            </h4>
            <p className="text-sm font-medium text-foreground">
              Oracle OCI, Docker, Supabase (PostgreSQL), MeiliSearch e Sentry
            </p>
          </div>
        </div>
      </Section>

      {/* The Problem & Architecture */}
      <Section id="architecture" className="py-24 space-y-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-mono tracking-tight text-foreground">
              O Desafio
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O sistema demandava uma solução inovadora para o comércio local: permitir que os usuários buscassem produtos diretamente pelo WhatsApp usando linguagem natural (IA), sem a necessidade de baixar aplicativos. O grande desafio técnico era orquestrar a sessão persistente do WhatsApp, garantir tempo de resposta em milissegundos na busca de produtos e criar um painel administrativo robusto para os lojistas, tudo sob uma arquitetura escalável e de baixo custo.
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-lg shadow-subtle flex flex-col items-center justify-center gap-6 min-h-[300px]">
            <div className="flex flex-wrap gap-4 items-center justify-center text-emerald-500 font-mono text-sm max-w-full overflow-hidden text-center">
              <span>WhatsApp</span> ↔ <span>Cloudflare Workers (IA)</span> ↔ <span>Oracle OCI (Docker/WAHA)</span> ↔ <span>Supabase & Sentry</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-bold font-mono tracking-tight text-foreground">
            A Solução e Impacto (Arquitetura em 3 Pilares)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Cloud className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Edge Computing & IA (O Cérebro)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilização de Cloudflare Workers (Serverless) para receber os webhooks do WhatsApp, processar a intenção do usuário usando Modelos de Linguagem (Workers AI) e consultar o catálogo de produtos instantaneamente via MeiliSearch, garantindo latência zero na borda.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Infraestrutura Resiliente & Docker</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Como a API do WhatsApp (WAHA / whatsapp-web.js) exige um ambiente persistente com navegador (Chromium) rodando por trás, isolei esse serviço crítico em containers Docker hospedados em uma Máquina Virtual na Oracle Cloud (OCI), comunicando-se de forma segura com os Workers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Painel React & Monitoramento Ativo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Construção do portal do lojista utilizando React.js, integrado ao Supabase para autenticação e banco de dados. Para garantir a confiabilidade de todo esse ecossistema em produção, implementei o Sentry em todos os microsserviços, permitindo o rastreamento em tempo real de erros e gargalos de performance.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </article>
  );
}
