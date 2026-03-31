# PLAN: Portfolio Next.js + AWS Amplify

> **Objetivo:** Portfólio pessoal como prova prática de habilidades Full Stack para vaga de estágio (React.js, Node.js, AWS, Sentry).

---

## Overview

Site portfólio single-page com rota dedicada para case study do projeto AchaAí. Hospedado no AWS Amplify com CI/CD automático via GitHub. Idioma: PT-BR. Dados estáticos em TypeScript (type-safe, zero dependências externas).

**Tipo de Projeto:** WEB (Next.js App Router)
**Agente Primário:** `frontend-specialist`

---

## Success Criteria

| # | Critério | Métrica |
|---|----------|---------|
| 1 | Lighthouse Performance | ≥ 90 em todas as categorias |
| 2 | Responsividade | Funcional em 320px → 1920px |
| 3 | Dark/Light mode | Toggle funcional com persistência |
| 4 | Tempo de carregamento | First Contentful Paint < 1.5s |
| 5 | Case Study AchaAí | Rota `/projects/achaai` com arquitetura completa |
| 6 | Deploy funcional | Build sem erros no AWS Amplify |
| 7 | CV download | Link direto para PDF sem fricção |
| 8 | Código limpo | Zero erros em `lint` + `tsc --noEmit` |

---

## Tech Stack

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework | **Next.js 15** (App Router) | SSG/SSR, Server Components, otimização de imagens |
| Linguagem | **TypeScript** (strict) | Type-safety, demonstra proficiência para a vaga |
| Estilização | **Tailwind CSS v4** | Utility-first, design tokens via CSS, builds pequenos |
| Animações | **Framer Motion** | Animações declarativas, scroll-triggered, spring physics |
| Ícones | **Lucide React** | Leve, tree-shakeable, consistente |
| Tema | **next-themes** | Dark/Light mode com zero flash, SSR-safe |
| Fontes | **Google Fonts** (next/font) | Self-hosted, zero CLS, performance |
| Deploy | **AWS Amplify** | CI/CD automático, compatível com Next.js SSG |
| Linting | **ESLint + Prettier** | Consistência de código |

---

## Decisões Arquiteturais

### Rendering Strategy
- **Página principal (`/`):** Static Generation (SSG) — conteúdo 100% estático
- **Case Study (`/projects/achaai`):** Static Generation — dados hardcoded
- **Resultado:** Zero servidor necessário → export estático compatível com Amplify

### Data Layer
- Dados em arquivos `.ts` no diretório `data/`
- Tipagem forte com interfaces/types exportados
- Sem API routes, sem CMS, sem fetch em runtime

### Componentes
- **Server Components por padrão** (Next.js App Router)
- **Client Components apenas** para: ThemeToggle, animações Framer Motion, scroll behavior
- Directive `'use client'` somente onde necessário

### i18n-readiness
- Todo conteúdo textual centralizado em `data/` ou constantes
- Estrutura pronta para futura adição de locale sem refactor

---

## File Structure

```
portfolio-nextjs/
├── public/
│   ├── cv.pdf                          # CV estático (RenderCV/ATS)
│   ├── og-image.png                    # Open Graph image para social sharing
│   └── images/
│       ├── projects/                   # Screenshots dos projetos
│       └── icons/                      # Favicons, apple-touch-icon
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (fonts, theme provider, metadata)
│   │   ├── page.tsx                    # Landing page (Hero + Skills + Projects + Contact)
│   │   ├── globals.css                 # Tailwind directives + CSS custom properties
│   │   ├── not-found.tsx               # 404 page customizada
│   │   └── projects/
│   │       └── achaai/
│   │           └── page.tsx            # Case Study completo do AchaAí
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Navbar fixa com links de scroll + theme toggle
│   │   │   ├── Footer.tsx              # Links sociais + copyright
│   │   │   └── Section.tsx             # Wrapper reutilizável para seções (id, padding, max-width)
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Título, subtítulo, CTAs (Ver Projetos + Baixar CV)
│   │   │   ├── SkillsSection.tsx       # Grid de categorias de skills com ícones
│   │   │   ├── ProjectsSection.tsx     # Cards dos 3 projetos com destaque para AchaAí
│   │   │   └── ContactSection.tsx      # Links para GitHub, LinkedIn, Email
│   │   │
│   │   ├── ui/
│   │   │   ├── ThemeToggle.tsx         # Switch Dark/Light mode (client component)
│   │   │   ├── Button.tsx              # Botão reutilizável (variantes: primary, outline, ghost)
│   │   │   ├── Badge.tsx               # Badge para tech tags
│   │   │   ├── ProjectCard.tsx         # Card de projeto (thumbnail, título, descrição, techs)
│   │   │   ├── SkillCard.tsx           # Card de categoria de skill
│   │   │   ├── SectionHeading.tsx      # Título de seção padronizado
│   │   │   └── AnimatedContainer.tsx   # Wrapper Framer Motion para scroll-triggered reveals
│   │   │
│   │   └── case-study/
│   │       ├── CaseStudyHero.tsx       # Hero do case study (título + meta)
│   │       ├── ArchitectureDiagram.tsx  # Diagrama visual da arquitetura (SVG/componente)
│   │       ├── TechStackList.tsx        # Lista detalhada de tecnologias usadas
│   │       ├── ChallengeBlock.tsx       # Bloco Desafio → Solução → Resultado
│   │       └── MetricsBar.tsx           # Métricas/resultados quantitativos
│   │
│   ├── data/
│   │   ├── projects.ts                 # Array tipado com dados dos 3 projetos
│   │   ├── skills.ts                   # Array tipado com categorias e skills individuais
│   │   ├── social.ts                   # URLs do GitHub, LinkedIn, Email
│   │   └── site.ts                     # Metadata do site (título, descrição, OG)
│   │
│   ├── types/
│   │   └── index.ts                    # Interfaces: Project, Skill, SkillCategory, SocialLink
│   │
│   ├── lib/
│   │   └── utils.ts                    # Helpers (cn() para classnames, etc.)
│   │
│   └── hooks/
│       └── useScrollTo.ts              # Hook para smooth scroll para seções por ID
│
├── .github/
│   └── workflows/
│       └── amplify-deploy.yml          # (Opcional) GitHub Actions para CI custom
│
├── next.config.ts                      # Config Next.js (output: 'export' para Amplify SSG)
├── tailwind.config.ts                  # Design tokens, extend theme
├── tsconfig.json                       # TypeScript strict mode
├── package.json
└── README.md                           # Documentação do projeto
```

---

## Task Breakdown

### PHASE 1: Foundation (Setup) — `frontend-specialist`

| # | Task | INPUT → OUTPUT → VERIFY |
|---|------|------------------------|
| 1.1 | Inicializar Next.js com TypeScript e Tailwind | `npx create-next-app@latest` → Projeto rodando → `npm run dev` mostra página default |
| 1.2 | Configurar `next.config.ts` com `output: 'export'` | Config file → Build estático → `npm run build` gera `/out` sem erros |
| 1.3 | Instalar dependências: `framer-motion`, `lucide-react`, `next-themes` | `npm install` → Imports funcionam → `tsc --noEmit` sem erros |
| 1.4 | Criar estrutura de diretórios (`components/`, `data/`, `types/`, `lib/`, `hooks/`) | Diretórios criados → Estrutura conforme File Structure acima |
| 1.5 | Configurar ESLint + Prettier | `.eslintrc`, `.prettierrc` → `npm run lint` sem erros |
| 1.6 | Configurar `tsconfig.json` com strict mode e path aliases (`@/`) | Config → Imports `@/components/...` funcionam |

**Dependências:** Nenhuma (primeira fase)
**Verify:** `npm run dev` + `npm run build` + `npm run lint` + `tsc --noEmit` — todos passam

---

### PHASE 2: Design System — `frontend-specialist` (skill: `frontend-design`, `tailwind-patterns`)

| # | Task | INPUT → OUTPUT → VERIFY |
|---|------|------------------------|
| 2.1 | Definir paleta de cores em `globals.css` (CSS custom properties) para Dark e Light mode | Variáveis CSS → `:root` e `[data-theme='dark']` definidos |
| 2.2 | Configurar tipografia com `next/font` (ex: JetBrains Mono para headings + Inter/Geist para body) | Font imports no `layout.tsx` → Zero CLS → Fonts renderizam corretamente |
| 2.3 | Definir spacing scale, border-radius tokens, e sombras no Tailwind config | `tailwind.config.ts` → Classes customizadas disponíveis |
| 2.4 | Criar `lib/utils.ts` com helper `cn()` (clsx + tailwind-merge) | Utility function → Usado em componentes sem conflito de classes |
| 2.5 | Configurar `next-themes` no `layout.tsx` (ThemeProvider) | Provider no root → Tema persiste no localStorage |

**Dependências:** Phase 1 completa
**Verify:** Dark/Light mode alternando sem flash, fontes carregadas, classes Tailwind customizadas funcionando

> **Direção Estética (para o frontend-specialist seguir):**
> - **Geometria:** Sharp/crisp (border-radius 0-2px para cards de destaque, elementos técnicos)
> - **Paleta:** Monochrome base (zinc/neutral) + accent color vibrante (Emerald ou Amber — NÃO purple, NÃO cyan genérico)
> - **Tipografia:** Monospace para headings (engenharia), sans-serif para body (legibilidade)
> - **Efeitos:** Grain texture sutil no background, borders de 1px com alto contraste
> - **Animações:** Spring physics no Framer Motion, staggered reveals no scroll, sem fade-in genéricos
> - **Inspiração final:** Linear.app meets terminal — clean engineering aesthetic

---

### PHASE 3: Layout & Navigation — `frontend-specialist`

| # | Task | INPUT → OUTPUT → VERIFY |
|---|------|------------------------|
| 3.1 | Criar `Header.tsx` — Navbar fixa, links de scroll suave, ThemeToggle, responsiva (hamburger mobile) | Componente → Navbar fixa no topo → Scroll suave funciona para cada seção |
| 3.2 | Criar `Footer.tsx` — Links sociais (GitHub, LinkedIn, Email), copyright | Componente → Renderiza no bottom de todas as páginas |
| 3.3 | Criar `Section.tsx` — Wrapper reutilizável com `id`, `className`, padding consistente | Componente → Usado por todas as seções da landing page |
| 3.4 | Criar `ThemeToggle.tsx` — ('use client') Switch com ícones Sun/Moon | Client component → Alterna tema → Persiste no refresh |
| 3.5 | Criar `useScrollTo.ts` hook — Smooth scroll para elemento por ID | Hook → `useScrollTo('skills')` rola suavemente para `#skills` |
| 3.6 | Setup `layout.tsx` — Root layout com fonts, ThemeProvider, Header, Footer, metadata SEO | Layout completo → Todas as páginas herdam layout |

**Dependências:** Phase 2 completa
**Verify:** Navegação funcional, responsividade testada em mobile (320px) e desktop (1920px), sem layout shift

---

### PHASE 4: Sections Implementation — `frontend-specialist` (skill: `frontend-design`)

| # | Task | INPUT → OUTPUT → VERIFY |
|---|------|------------------------|
| 4.1 | Criar `data/site.ts` — Metadata do site (título, descrição, OG tags) | Data file tipado → Usado no `layout.tsx` metadata |
| 4.2 | Criar `data/skills.ts` + `types/index.ts` — Categorias e skills individuais | Array tipado → Importável sem erros de tipo |
| 4.3 | Criar `data/projects.ts` — Dados dos 3 projetos (AchaAí, PromoAPI, Portfólio) | Array tipado → Cada projeto com título, descrição, techs, links, featured flag |
| 4.4 | Criar `data/social.ts` — URLs de GitHub, LinkedIn, Email | Data file → Usado no Header e ContactSection |
| 4.5 | Implementar `HeroSection.tsx` — Título principal, subtítulo engenharia, 2 CTAs | Seção → Hero renderiza com layout não-convencional, animação de entrada |
| 4.6 | Criar `Button.tsx` — Variantes (primary, outline, ghost), sizes, com/sem ícone | Componente → Usado nos CTAs do Hero e em todo o site |
| 4.7 | Criar `Badge.tsx` — Tags de tech com cores por categoria | Componente → Usado nos ProjectCards e SkillCards |
| 4.8 | Criar `AnimatedContainer.tsx` — Wrapper Framer Motion scroll-triggered (`whileInView`) | Client component → Elementos animam ao entrar na viewport |
| 4.9 | Criar `SectionHeading.tsx` — Título de seção padronizado com linha decorativa | Componente → Consistência visual entre seções |
| 4.10 | Implementar `SkillsSection.tsx` — Grid de categorias (Front, Back, Infra, DevOps) | Seção → Skills renderizam agrupadas com ícones Lucide |
| 4.11 | Criar `SkillCard.tsx` — Card de categoria com lista de tecnologias | Componente → Hover effect, destaque em tech principal |
| 4.12 | Criar `ProjectCard.tsx` — Card com thumbnail, título, descrição curta, badges de tech | Componente → Card clicável, link para case study ou repo |
| 4.13 | Implementar `ProjectsSection.tsx` — Grid com destaque visual para AchaAí | Seção → AchaAí tem card maior/diferente, outros 2 menores |
| 4.14 | Implementar `ContactSection.tsx` — Links sociais com ícones | Seção → GitHub, LinkedIn, Email com hover effects |
| 4.15 | Montar `page.tsx` — Composição final das seções na landing page | Página → Todas as seções renderizam em ordem, scroll smooth funciona |

**Dependências:** Phase 3 completa + data files (4.1-4.4)
**Verify:** Landing page completa, responsiva, animações funcionando, todos os links corretos, `npm run build` sem erros

---

### PHASE 5: Case Study — AchaAí — `frontend-specialist`

| # | Task | INPUT → OUTPUT → VERIFY |
|---|------|------------------------|
| 5.1 | Criar `CaseStudyHero.tsx` — Hero com título do projeto, descrição curta, badges | Componente → Header visual do case study |
| 5.2 | Criar `ArchitectureDiagram.tsx` — Diagrama visual da arquitetura (SVG ou componente React) | Componente → Mostra fluxo: WhatsApp → WAHA (Docker/OCI) → Cloudflare Workers (IA) → React Admin Panel → Sentry |
| 5.3 | Criar `ChallengeBlock.tsx` — Formato "Desafio → Solução → Resultado" | Componente → Blocos reutilizáveis de storytelling técnico |
| 5.4 | Criar `TechStackList.tsx` — Lista detalhada de cada tech com papel no sistema | Componente → Cada item: logo/ícone + nome + papel |
| 5.5 | Criar `MetricsBar.tsx` — Métricas visuais (ex: uptime, requests, economia) | Componente → Números destacados com animação de contagem |
| 5.6 | Implementar `/projects/achaai/page.tsx` — Página completa do case study | Página → Rota `/projects/achaai` renderiza completa com todas as seções |
| 5.7 | SEO: Metadata específica para a página do case study (OG, título, descrição) | Metadata do Next.js → Tags OG corretas ao compartilhar link |

**Dependências:** Phase 4 completa (componentes base como Button, Badge, AnimatedContainer)
**Verify:** Rota `/projects/achaai` acessível, diagrama legível, responsive, link direto compartilhável, SEO tags presentes

**Conteúdo do Case Study (referência para implementação):**

```
TÍTULO: "AchaAí — Ecossistema Vencedor de Hackathon"

CONTEXTO:
- Plataforma de comércio local com assistente IA via WhatsApp
- Vencedor de hackathon

ARQUITETURA:
- Oracle OCI + Docker: Instâncias WAHA (WhatsApp HTTP API)
- Cloudflare Workers: Serverless functions para IA/processamento
- Cloudflare D1: Database serverless
- Node.js: Backend de orquestração
- React.js: Painel administrativo
- Sentry: Monitoramento em tempo real e error tracking

DESAFIOS/SOLUÇÕES:
1. Escalabilidade do WhatsApp → Docker containers independentes no OCI
2. Latência da IA → Edge computing via Cloudflare Workers
3. Monitoramento → Sentry para rastreio de erros e performance

RESULTADO:
- Hackathon vencido
- Microsserviços funcionando em produção
```

---

### PHASE 6: AWS Amplify Deploy Prep — `frontend-specialist` (skill: `deployment-procedures`)

| # | Task | INPUT → OUTPUT → VERIFY |
|---|------|------------------------|
| 6.1 | Garantir `output: 'export'` no `next.config.ts` para static export | Config → `npm run build` gera pasta `out/` com HTML estático |
| 6.2 | Criar/verificar `amplify.yml` (build spec) compatível com Next.js static | Config file → Amplify consegue buildar e servir o site |
| 6.3 | Adicionar `public/cv.pdf` (placeholder ou real) | Arquivo → Acessível em `https://site.com/cv.pdf` |
| 6.4 | Otimizar imagens: favicons, OG image, screenshots de projetos | Imagens em `/public` → Formatos otimizados (WebP/PNG) |
| 6.5 | Verificar que todas as rotas funcionam como static export (sem SSR/ISR) | Build → Nenhum erro de dynamic rendering, todas as páginas geram HTML |
| 6.6 | README.md com instruções de setup, dev e deploy | Doc → Novo dev consegue rodar e deployar seguindo o README |

**Dependências:** Phase 5 completa
**Verify:** `npm run build` sem erros, pasta `out/` contém todas as páginas, deploy simulado funciona

**amplify.yml esperado:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

---

## Phase X: Verification Checklist

| # | Check | Command/Action | Status |
|---|-------|----------------|--------|
| X.1 | TypeScript strict | `npx tsc --noEmit` | `[ ]` |
| X.2 | Lint | `npm run lint` | `[ ]` |
| X.3 | Build | `npm run build` (static export) | `[ ]` |
| X.4 | Security scan | `python .agent/skills/vulnerability-scanner/scripts/security_scan.py .` | `[ ]` |
| X.5 | UX audit | `python .agent/skills/frontend-design/scripts/ux_audit.py .` | `[ ]` |
| X.6 | Lighthouse | `python .agent/skills/performance-profiling/scripts/lighthouse_audit.py http://localhost:3000` | `[ ]` |
| X.7 | Responsividade | Testar em 320px, 768px, 1024px, 1440px | `[ ]` |
| X.8 | Dark/Light mode | Toggle funcional sem flash, cores corretas em ambos | `[ ]` |
| X.9 | Links | Todos os links (CV, GitHub, LinkedIn, scroll) funcionam | `[ ]` |
| X.10 | SEO | OG tags, meta descriptions, canonical URLs corretas | `[ ]` |
| X.11 | Acessibilidade | Navegação por teclado, contraste WCAG AA | `[ ]` |
| X.12 | Deploy test | `npm run build` + servir `/out` localmente | `[ ]` |
| X.13 | Purple Ban | Zero purple/violet/indigo no código | `[ ]` |

---

## Agent Assignments Summary

| Phase | Agent | Skills |
|-------|-------|--------|
| 1 (Foundation) | `frontend-specialist` | `clean-code` |
| 2 (Design System) | `frontend-specialist` | `frontend-design`, `tailwind-patterns` |
| 3 (Layout) | `frontend-specialist` | `frontend-design`, `clean-code` |
| 4 (Sections) | `frontend-specialist` | `frontend-design`, `react-best-practices` |
| 5 (Case Study) | `frontend-specialist` | `frontend-design`, `seo-fundamentals` |
| 6 (Deploy) | `frontend-specialist` | `deployment-procedures` |
| X (Verify) | `security-auditor` + `frontend-specialist` | `vulnerability-scanner`, `performance-profiling` |

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Next.js `output: 'export'` incompatível com algum recurso | Média | Alto | Evitar features SSR-only (middleware, headers dinâmicos). Testar build logo na Phase 1 |
| Framer Motion bundle size grande | Baixa | Médio | Import seletivo (`from 'framer-motion'`), tree-shaking, lazy loading |
| Imagens pesadas impactam performance | Média | Médio | Otimizar com sharp/squoosh antes de colocar em `/public`, usar WebP |
| Amplify cache desatualizado após deploy | Baixa | Baixo | Configurar cache invalidation no `amplify.yml` |
| Dark/Light flash no carregamento | Média | Médio | `next-themes` com `attribute="class"` e script de blocking no `<head>` |

---

## Estimated Timeline

| Phase | Estimativa | Acumulado |
|-------|-----------|-----------|
| Phase 1: Foundation | ~30 min | 30 min |
| Phase 2: Design System | ~45 min | 1h15 |
| Phase 3: Layout & Nav | ~1h | 2h15 |
| Phase 4: Sections | ~2h30 | 4h45 |
| Phase 5: Case Study | ~1h30 | 6h15 |
| Phase 6: Deploy Prep | ~30 min | 6h45 |
| Phase X: Verification | ~30 min | 7h15 |

**Total estimado: ~7 horas de implementação**
