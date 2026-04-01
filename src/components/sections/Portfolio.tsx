import Image from "next/image";
import {
  MessageSquare,
  BrainCircuit,
  Server,
  Database,
  ArrowRight,
  ExternalLink,
  Globe
} from "lucide-react";

interface PortfolioProps {
  isActive: boolean;
}

export function Portfolio({ isActive }: PortfolioProps) {
  return (
    <article className={`portfolio ${isActive ? "active" : ""}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">AchaAí</h2>
      </header>

      <section className="portfolio-content" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 180px)', paddingBottom: '40px', scrollbarWidth: 'none' }}>
        {/* Topo: Imagem e Título */}
        <div className="case-header" style={{ marginBottom: '32px' }}>
          <figure className="project-img" style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', border: '1px solid var(--jet)' }}>
            <Image
              src="/images/AchaAi.png"
              alt="AchaAí Project"
              width={800}
              height={450}
              priority
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </figure>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <h3 className="h3" style={{ color: 'var(--white-2)', fontSize: '24px', fontWeight: 'bold', margin: '0' }}>
              Assistente de Compras com IA
            </h3>

            <a
              href="https://achaai.arikeme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="form-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content',
                padding: '10px 20px',
                fontSize: '14px',
                color: 'var(--orange-yellow-crayola)',
                background: 'var(--border-gradient-onyx)',
                border: '1px solid var(--jet)',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-1)'
              }}
            >
              <Globe size={18} />
              <span>Website Oficial</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <p style={{ color: 'var(--light-gray-70)', lineHeight: '1.6', fontSize: '15px' }}>
            Desenvolvimento de ponta a ponta de um ecossistema focado no usuário final,
            combinando Inteligência Artificial, integrações com WhatsApp e arquitetura de microsserviços.
          </p>
        </div>

        {/* Grid de Metadados */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {[
            { label: 'Cargo', value: 'Co-Fundador & Full Stack' },
            { label: 'Frontend', value: 'React.js, Tailwind' },
            { label: 'Backend', value: 'Node.js, Workers' },
            { label: 'Infraestrutura', value: 'Oracle OCI, Docker' }
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--eerie-black-1)', padding: '16px', borderRadius: '12px', border: '1px solid var(--jet)' }}>
              <p style={{ color: 'var(--light-gray-70)', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px', letterSpacing: '1px' }}>
                {item.label}
              </p>
              <p style={{ color: 'var(--white-2)', fontSize: '13px', fontWeight: '500' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Seção: O Desafio */}
        <div style={{ marginBottom: '48px' }}>
          <h4 className="h4" style={{ color: 'var(--white-2)', marginBottom: '16px', fontWeight: 'bold' }}>O Desafio</h4>
          <p style={{ color: 'var(--light-gray-70)', lineHeight: '1.6', fontSize: '15px' }}>
            O projeto nasceu como o vencedor do Hackathon 2025 do IFRO Campus Ariquemes. O problema proposto era: <i>&quot;Como encontrar um produto específico no comércio físico da cidade sem depender de buscas genéricas na internet?&quot;</i>. Nossa equipe inovou ao levar a solução para onde o usuário já está: o WhatsApp. Para transformar essa ideia premiada em um produto real, o desafio técnico passou a ser orquestrar sessões persistentes do whatsapp, integrar IA para processar linguagem natural em milissegundos e construir um painel administrativo robusto para os lojistas.
          </p>
        </div>

        {/* Diagrama Visual */}
        <div style={{ marginBottom: '48px', background: 'var(--smoky-black)', padding: '32px', borderRadius: '16px', border: '1px solid var(--jet)', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--light-gray-70)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '11px', fontWeight: 'bold', marginBottom: '32px' }}>
            Fluxo de Arquitetura
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', color: '#10b981' }}>
                <MessageSquare size={28} />
              </div>
              <span style={{ color: 'var(--white-2)', fontSize: '11px', fontWeight: '600' }}>WhatsApp</span>
            </div>

            <ArrowRight style={{ color: 'var(--jet)' }} size={20} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '12px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '50%', color: 'var(--orange-yellow-crayola)' }}>
                <BrainCircuit size={28} />
              </div>
              <span style={{ color: 'var(--white-2)', fontSize: '11px', fontWeight: '600' }}>Workers IA</span>
            </div>

            <ArrowRight style={{ color: 'var(--jet)' }} size={20} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '12px', background: 'rgba(244, 63, 94, 0.1)', borderRadius: '50%', color: '#f43f5e' }}>
                <Server size={28} />
              </div>
              <span style={{ color: 'var(--white-2)', fontSize: '11px', fontWeight: '600' }}>Oracle OCI</span>
            </div>

            <ArrowRight style={{ color: 'var(--jet)' }} size={20} />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', color: '#10b981' }}>
                <Database size={28} />
              </div>
              <span style={{ color: 'var(--white-2)', fontSize: '11px', fontWeight: '600' }}>Supabase</span>
            </div>
          </div>
        </div>

        {/* Seção: A Solução e Impacto */}
        <div>
          <h4 className="h4" style={{ color: 'var(--white-2)', marginBottom: '24px', fontWeight: 'bold' }}>A Solução e Impacto</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Computação de Borda & IA', desc: 'Utilização de Cloudflare Workers (Serverless) para processar a intenção do usuário via IA e consultar o catálogo de produtos do comércio local em milissegundos utilizando MeiliSearch.' },
              { title: 'Infraestrutura Resiliente & Docker', desc: 'Para manter a API do WhatsApp estável, desenvolvemos microsserviços em Node.js isolados em containers Docker na Oracle Cloud, garantindo disponibilidade e comunicação segura.' },
              { title: 'Painel React & Monitoramento', desc: 'Portal administrativo construído em React.js e Supabase para os lojistas gerenciarem seus catálogos. Todo o ecossistema possui monitoramento ativo de erros e performance em tempo real via Sentry.' }
            ].map((box, i) => (
              <div key={i} style={{ padding: '24px', background: 'var(--eerie-black-1)', borderRadius: '16px', border: '1px solid var(--jet)' }}>
                <h5 style={{ color: 'var(--white-2)', fontWeight: 'bold', marginBottom: '12px', fontSize: '16px' }}>{box.title}</h5>
                <p style={{ color: 'var(--light-gray-70)', fontSize: '14px', lineHeight: '1.6' }}>{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
