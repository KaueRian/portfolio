"use client";

import Image from "next/image";

interface AboutProps {
  isActive: boolean;
}

export function About({ isActive }: AboutProps) {
  return (
    <article className={`about ${isActive ? "active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">Sobre mim</h2>
      </header>

      <section className="about-text">
        <p>
          Me chamo <strong>Kauê Rian</strong>, Desenvolvedor Full Stack com uma trajetória que une infraestrutura de redes e engenharia de software. Minha base como Sysadmin me ajuda não apenas escrever código, mas entender como hospedar e monitorar.
        </p>
        <p>
          Atualmente, utilizo essa visão para hospedar software em nuvem (<strong>Oracle Cloud Infrastructure</strong>, <strong>Sentry</strong>, <strong>Portainer</strong>, <strong>Cloudflare</strong>) e construir aplicações utilizando <strong>React.js</strong> e <strong>Node.js</strong>.
        </p>
      </section>
      <section className="clients">
        <h3 className="h3 clients-title">Clientes</h3>
        <ul className="clients-list">
          <li className="clients-item">
            <a href="#">
              <Image src="/images/nortech.png" alt="Nortech" width={300} height={120} style={{ width: 'auto', height: '120px' }} />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <Image src="/images/prefeitura-municipal-ariquemes.png" alt="Prefeitura Municipal de Ariquemes" width={300} height={120} style={{ width: 'auto', height: '120px' }} />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
