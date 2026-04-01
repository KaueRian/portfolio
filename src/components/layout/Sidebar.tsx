"use client";

import { useState } from "react";

export function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Kauê Rian
          </h1>

          <p className="title">Desenvolvedor Full Stack</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
           <span>Mostrar Contatos</span>

          {/* @ts-expect-error ion-icon is a custom element */}
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-expect-error ion-icon is a custom element */}
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:kauerian342@gmail.com" className="contact-link">
                kauerian342@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-expect-error ion-icon is a custom element */}
              <ion-icon name="logo-github"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">GitHub</p>

              <a href="https://github.com/KaueRian" className="contact-link" target="_blank" rel="noopener noreferrer">
                KaueRian
              </a>
            </div>
          </li>
        </ul>


      </div>
    </aside>
  );
}
