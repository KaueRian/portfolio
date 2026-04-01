"use client";

interface ContactProps {
  isActive: boolean;
}

export function Contact({ isActive }: ContactProps) {
  return (
    <article className={`contact ${isActive ? "active" : ""}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contato</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Formulário de Contato</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Nome completo"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Endereço de e-mail"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Sua mensagem"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            {/* @ts-expect-error ion-icon is a custom element */}
            <ion-icon name="paper-plane"></ion-icon>
            <span>Enviar Mensagem</span>
          </button>
        </form>
      </section>
    </article>
  );
}
