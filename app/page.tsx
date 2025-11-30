// app/page.tsx
export default function Home() {
  return (
    <main className="container">
      <section className="section hero">
        <p className="kicker">Freelance React & Next.js</p>
        <h1>Salut, je suis Jade DOGO</h1>
        <p className="muted">
          Développeuse web spécialisée en React & Next.js — je conçois des interfaces modernes, performantes et pensées pour l’utilisateur.
        </p>
        <p className="muted" style={{ marginTop: 4 }}>
          J’aide les entreprises, startups et indépendants à transformer leurs idées en produits digitaux efficaces et élégants.
        </p>
        <ul className="muted" style={{ display: 'grid', gap: 4, margin: '12px 0' }}>
          <li>Performance & rapidité</li>
          <li>Design moderne et expérience utilisateur soignée</li>
          <li>Code propre, maintenable et évolutif</li>
        </ul>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a className="btn" href="/#contact">Discutons de votre projet</a>
          <a className="btn" href="/#contact">Réserver un appel gratuit</a>
          <a className="btn" href="/#contact">Demander un devis</a>
        </div>
        <p className="badge" style={{ marginTop: 12 }}>
          +5 projets réalisés • Expérience avec Next.js, React, TypeScript • Disponible pour missions freelance
        </p>
      </section>

      <section className="section" aria-label="Disponibilité freelance">
        <article className="card" style={{ borderStyle: 'dashed' }}>
          <div className="content" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <p className="kicker" style={{ marginBottom: 4 }}>Disponibilité freelance</p>
              <p className="muted" style={{ margin: 0 }}>
                Disponible dès maintenant • Missions front-end React/Next.js, landing pages, SaaS.
              </p>
            </div>
            <a className="btn" href="/#contact">Discutons de votre projet</a>
          </div>
        </article>
      </section>

      <section className="section" aria-labelledby="last-projects-title">
        <h2 id="last-projects-title">Derniers projets</h2>
        <div className="grid" role="list">
          <article className="card" role="listitem">
            <img
              src="/assets/acceuil_leadslight.png"
              alt="Capture de Leadslight : tableau de bord des leads"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="content">
              <h3>Leadslight</h3>
              <p className="muted">
                Mini CRM Next.js/Prisma pour qualifier et suivre les leads avec exports CSV fiables.
                Rôle : front-end, UX et data-layer. Impact : pipeline unifié et reporting immédiat.
              </p>
              <div>
                <span className="badge">Next.js</span>{' '}
                <span className="badge">TypeScript</span>{' '}
                <span className="badge">Tailwind CSS</span>{' '}
                <span className="badge">Prisma</span>{' '}
                <span className="badge">PostgreSQL</span>
              </div>
            </div>
          </article>

          <article className="card" role="listitem">
            <img
              src="/assets/page_d'acceuil_atelier-korrigan.png"
              alt="Aperçu Atelier Korrigan : site vitrine artisanal"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="content">
              <h3>Atelier Korrigan</h3>
              <p className="muted">
                Vitrine premium Next.js pour pièces sur mesure. Rôle : UI/UX, intégration et SEO.
                Impact : parcours simplifié, CTA visibles et davantage de demandes entrantes.
              </p>
              <div>
                <span className="badge">Next.js</span>{' '}
                <span className="badge">TypeScript</span>{' '}
                <span className="badge">Tailwind CSS</span>
              </div>
            </div>
          </article>
        </div>

        <p style={{ marginTop: 16 }}>
          <a className="btn" href="/projects">Voir tous les projets</a>
        </p>
      </section>

      {/* Offres & disponibilité */}
      <section className="section" aria-labelledby="offers-title">
        <p className="kicker">Offres</p>
        <h2 id="offers-title">Site vitrine & Mini‑SaaS</h2>

        <div className="grid">
          <article className="card">
            <div className="content">
              <h3>Site vitrine SEO + blog</h3>
              <p className="muted">Chargement &lt; 1 s mobile, base SEO prête, édition via CMS.</p>
              <ul>
                <li>Design léger, pages clés, blog CMS</li>
                <li>Déploiement Vercel, SEO technique</li>
              </ul>
              <p className="badge">Stack: Next.js, TypeScript, Tailwind, Sanity/Strapi, Vercel</p>
              <p className="price">Délai: 10–15 j • À partir de: 1 800 € HT</p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3>Mini‑SaaS (MVP)</h3>
              <p className="muted">Automatiser les tâches répétitives et clarifier le suivi des données.</p>
              <ul>
                <li>Auth, 2–3 modules CRUD, export CSV/PDF</li>
                <li>Stripe abonnements, admin, doc</li>
              </ul>
              <p className="badge">Stack: Next.js, Nest/Express, Prisma, PostgreSQL (Supabase), Stripe</p>
              <p className="price">Délai: 4–6 sem • À partir de: 4 000 € HT</p>
            </div>
          </article>
        </div>

        <p style={{ marginTop: 16 }}>
          <a className="btn" href="/#contact">Parler de votre besoin</a>
        </p>
      </section>

      <section id="contact" className="section scroll-mt-24">
        <h2>Contact</h2>
        <p className="muted">
          Je suis disponible pour vos projets freelance : landing pages, front-end, intégrations, applications Next.js, refontes…
        </p>
        <p className="muted">Réponse assurée sous 24 à 48h.</p>
        <p className="muted">Décrivez-moi votre projet, je reviens vers vous très vite.</p>

        <p style={{ marginTop: 12 }}>
          <a href="mailto:jadedogo08@gmail.com" className="btn">jadedogo08@gmail.com</a>
        </p>

        <div style={{ marginTop: 16 }} className="muted">
          <p style={{ marginBottom: 4 }}>Champs suggérés pour votre message :</p>
          <ul style={{ marginTop: 0 }}>
            <li>Nom</li>
            <li>Email</li>
            <li>Message / description du projet</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
