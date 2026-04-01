import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Server, Database, Cloud, Globe } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "AchaAí | Kauê Rian",
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
            AchaAí — Assistente de Compras com IA
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Desenvolvimento de um ecossistema focado no usuário final, combinando Inteligência Artificial, integrações com WhatsApp e arquitetura de microsserviços.
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
              Cargo
            </h4>
            <p className="text-sm font-medium text-foreground">
              Co-Fundador, Cloud Infra & Full Stack
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
              O projeto nasceu como o vencedor do Hackathon 2025 do IFRO Campus Ariquemes. O problema proposto era: <i>&quot;Como encontrar um produto específico no comércio físico da cidade sem depender de buscas genéricas na internet?&quot;</i>. Nossa equipe inovou ao levar a solução para onde o usuário já está: o WhatsApp. Para transformar essa ideia premiada em um produto real, o desafio técnico passou a ser orquestrar sessões persistentes do whatsapp, integrar IA para processar linguagem natural em milissegundos e construir um painel administrativo robusto para os lojistas.
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
              <h3 className="text-xl font-bold text-foreground">Computação de Borda & IA</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilização de Cloudflare Workers (Serverless) para processar a intenção do usuário via IA e consultar o catálogo de produtos do comércio local em milissegundos utilizando MeiliSearch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Infraestrutura Resiliente & Docker</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Para manter a API do WhatsApp estável, desenvolvemos microsserviços em Node.js isolados em containers Docker na Oracle Cloud, garantindo alta disponibilidade e comunicação segura.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Database className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Painel React & Monitoramento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Portal administrativo construído em React.js e Supabase para os lojistas gerenciarem seus catálogos. Todo o ecossistema possui monitoramento ativo de erros e performance em tempo real via Sentry.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </article>
  );
}
