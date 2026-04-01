"use client";

import { EDUCATION_DATA } from "@/data/education";
import { EXPERIENCE_DATA } from "@/data/experience";
import { CERTIFICATIONS_DATA } from "@/data/certifications";

interface ResumeProps {
  isActive: boolean;
}

export function Resume({ isActive }: ResumeProps) {
  return (
    <article className={`resume ${isActive ? "active" : ""}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Currículo</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* @ts-expect-error ion-icon is a custom element */}
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Educação</h3>
        </div>

        <ol className="timeline-list">
          {EDUCATION_DATA.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.course}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">
                <strong>{item.institution}</strong> — {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* @ts-expect-error ion-icon is a custom element */}
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experiência</h3>
        </div>

        <ol className="timeline-list">
          {EXPERIENCE_DATA.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">
                <strong>{item.company}</strong> — {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* @ts-expect-error ion-icon is a custom element */}
            <ion-icon name="medal-outline"></ion-icon>
          </div>
          <h3 className="h3">Certificações</h3>
        </div>

        <ol className="timeline-list">
          {CERTIFICATIONS_DATA.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <p className="timeline-text">{item.issuer}</p>
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
}
