// app/page.tsx
export default function Home() {
  return (
    <main className="container">
      <section className="section hero">
        <p className="kicker">Freelance React & Next.js</p>
        <h1>Salut, je suis Jade DOGO</h1>
        <p className="muted">
          Développeuse Web spécialisée en React & Next.js — j’aide les entreprises à créer des
          applications modernes, rapides et scalables.
        </p>
        <ul className="muted" style={{ display: 'grid', gap: 4, margin: '12px 0' }}>
          <li>Interfaces rapides et optimisées</li>
          <li>Expérience utilisateur moderne</li>
          <li>Code propre, maintenable et sécurisé</li>
        </ul>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a className="btn" href="/#contact">Réserver un appel gratuit</a>
          <span className="badge">+5 projets réalisés — collaborations avec écoles, startups et PME</span>
        </div>
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
                Mini CRM Next.js/Prisma pour centraliser les leads, suivre les statuts et exporter en CSV.
                Rôle : dev full-stack & UX. Impact : pipeline unifié et reporting immédiat.
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
                Vitrine premium Next.js pour pièces sur mesure. Rôle : conception UI/UX, intégration et SEO.
                Impact : parcours simplifié et CTA mis en avant pour générer plus de demandes.
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
        <p className="muted">Envie de travailler ensemble ? Écrivez‑moi :</p>
        <p>
          <a href="mailto:jadedogo08@gmail.com" className="btn">jadedogo08@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
