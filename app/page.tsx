// app/page.tsx
export default function Home() {
  return (
    <main className="container">
      <section className="section hero">
        <h1>Salut, je suis Jade DOGO</h1>
        <p className="muted">Développeuse web — je conçois des sites et applications modernes.</p>
        <p>
          <a className="btn" href="/#contact">Me contacter</a>
        </p>
      </section>

      <section className="section" aria-labelledby="last-projects-title">
        <h2 id="last-projects-title">Derniers projets</h2>
        <div className="grid" role="list">
          <article className="card" role="listitem">
            <img
              src="/assets/p1.jpg"
              alt="Capture de l’app Project One : interface claire et tableau de bord"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="content">
              <h3>Project One</h3>
              <p className="muted">Une application web réactive avec une interface claire.</p>
              <div>
                <span className="badge">Next.js</span>{' '}
                <span className="badge">TypeScript</span>
              </div>
            </div>
          </article>

          <article className="card" role="listitem">
            <img
              src="/assets/p2.jpg"
              alt="Aperçu Project Two : interface responsive optimisée pour mobile"
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="content">
              <h3>Project Two</h3>
              <p className="muted">Intégration responsive et performances optimisées.</p>
              <div>
                <span className="badge">React</span>{' '}
                <span className="badge">CSS</span>
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
