// app/page.tsx
export default function Home() {
  return (
    <main className="container">
      <section id="home" className="section hero">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="kicker">Développeuse freelance</p>
            <h1>
              <span>Je crée des interfaces</span>
              <span>web exceptionnelles</span>
              <span>qui performent.</span>
            </h1>
            <p>
              Je conçois des expériences front-end rapides, élégantes et orientées conversion — avec une vraie exigence produit.
            </p>
            <p>
              Du cadrage au déploiement, je transforme vos idées en interfaces fiables et mémorables.
            </p>
            <ul className="muted hero__highlights">
              <li>Alternance Ifremer • Projets data & UX</li>
              <li>Élève ingénieure ISEN • Culture produit</li>
              <li>+5 projets livrés • Livraison rapide & soignée</li>
            </ul>
            <div className="hero__cta">
              <a className="btn" href="/#contact">Discutons de votre projet</a>
              <a className="btn btn--ghost" href="/projects">Voir mes projets</a>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__mockup">
              <div className="hero__mockup-bar" />
              <img
                src="/assets/acceuil_leadslight.png"
                alt="Aperçu projet"
                width={520}
                height={360}
                loading="lazy"
              />
              <div className="hero__mockup-meta">
                <span className="badge">Leadslight</span>
                <span className="badge">Next.js</span>
                <span className="badge">TypeScript</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <h2 id="projects-title">Projets</h2>
        <p className="muted">Une sélection de réalisations avec objectifs, résultats et stack.</p>
        <div className="projects-grid">
          <article className="project-card">
            <img
              src="/assets/acceuil_leadslight.png"
              alt="Leadslight - Mini CRM Next.js"
              width={400}
              height={300}
              loading="lazy"
            />
            <div className="project-content">
              <h3>Leadslight</h3>
              <p>Mini CRM pour qualifier et suivre les leads avec exports CSV fiables.</p>
              <p className="muted">Résultat : pipeline unifié, reporting immédiat.</p>
              <div className="project-tags">
                <span className="badge">Next.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Prisma</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <img
              src="/assets/page_d'acceuil_atelier-korrigan.png"
              alt="Atelier Korrigan - Site vitrine"
              width={400}
              height={300}
              loading="lazy"
            />
            <div className="project-content">
              <h3>Atelier Korrigan</h3>
              <p>Vitrine premium pour pièces sur mesure avec parcours simplifié.</p>
              <p className="muted">Résultat : CTA visibles, demandes entrantes en hausse.</p>
              <div className="project-tags">
                <span className="badge">Next.js</span>
                <span className="badge">Tailwind CSS</span>
              </div>
            </div>
          </article>
        </div>

        <p style={{ textAlign: 'center', marginTop: 48 }}>
          <a className="btn" href="/projects">Voir tous les projets</a>
          <a className="btn" href="https://github.com/Jade2097" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 16 }}>Voir sur GitHub</a>
        </p>
      </section>

      <section id="offers" className="section" aria-labelledby="offers-title">
        <p className="kicker">Offres / Services</p>
        <h2 id="offers-title">Ce que je fais, pour qui, et comment</h2>
        <p className="muted">
          Pour startups, PME, indépendants et équipes produit qui veulent aller vite sans sacrifier la qualité.
        </p>

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

        <div className="muted" style={{ marginTop: 16 }}>
          <p><strong>Méthode :</strong> cadrage express → maquettes rapides → build → itérations → livraison.</p>
          <p><strong>Format :</strong> forfait clair ou journée (selon scope).</p>
        </div>

        <p style={{ marginTop: 16 }}>
          <a className="btn" href="/#contact">Parler de votre besoin</a>
        </p>
      </section>

      <section id="skills" className="section" aria-labelledby="skills-title">
        <p className="kicker">Compétences techniques</p>
        <h2 id="skills-title">Stack & outils</h2>
        <div className="grid">
          <article className="card">
            <div className="content">
              <h3>Front-end</h3>
              <p className="muted">React, Next.js, TypeScript, Vite, Tailwind, GSAP.</p>
              <p className="muted">Design system, accessibilité, performance, SEO technique.</p>
            </div>
          </article>
          <article className="card">
            <div className="content">
              <h3>Back / Data</h3>
              <p className="muted">Prisma, PostgreSQL, Supabase, API REST.</p>
              <p className="muted">Auth, exports, dashboards, analytics.</p>
            </div>
          </article>
          <article className="card">
            <div className="content">
              <h3>Méthodo</h3>
              <p className="muted">Cadrage, priorisation, sprints courts, livraison itérative.</p>
              <p className="muted">Documentation, handoff propre, maintenance facile.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <p className="kicker">À propos</p>
        <h2 id="about-title">Humain, curiosité et sens du détail</h2>
        <p className="muted">
          Mon parcours allie rigueur d’ingénierie et culture design. J’aime les interfaces claires, le travail bien fait et les collaborations fluides.
        </p>
        <p className="muted">
          Je m’adapte vite, j’avance avec méthode et je garde l’objectif business en ligne de mire.
        </p>
      </section>

      <section className="section" aria-labelledby="bts-title">
        <p className="kicker">Behind the scenes</p>
        <h2 id="bts-title">Ce qui me recharge</h2>
        <details className="card" style={{ maxWidth: 760, margin: '0 auto' }}>
          <summary className="content" style={{ cursor: 'pointer' }}>Voir les coulisses</summary>
          <div className="content">
            <ul>
              <li>Crochet & artisanat</li>
              <li>Musculation & discipline</li>
              <li>Lectures (produit, design, entrepreneuriat)</li>
            </ul>
          </div>
        </details>
      </section>

      <section id="contact" className="section scroll-mt-24">
        <h2>Contact</h2>
        <p className="muted">
          Dispo pour vos projets front-end : landing pages, SaaS, intégrations, refontes…
        </p>
        <p className="muted">Réponse assurée sous 24 à 48h, avec un plan clair et une estimation.</p>
        <p className="muted">Décrivez votre besoin, je vous réponds rapidement et concrètement.</p>

        <p style={{ marginTop: 12 }}>
          <a href="mailto:jadedogo08@gmail.com">jadedogo08@gmail.com</a>
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
