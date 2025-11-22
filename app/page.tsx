// app/page.tsx
export default function Home() {
  return (
    <>
      <section className="section hero">
        <h1>Salut, je suis Jade DOGO</h1>
        <p>Développeuse web — je conçois des sites et applications modernes.</p>
        <p>
          <a className="btn" href="/#contact">Me contacter</a>
        </p>
      </section>

      <section className="section">
        <h2>Derniers projets</h2>
        <div className="grid">
          <article className="card">
            <img src="/assets/p1.jpg" alt="Projet 1" width={1200} height={800} />
            <h3>Project One</h3>
            <p>Une application web réactive avec une interface claire.</p>
            <div>
              <span className="badge">Next.js</span>{' '}
              <span className="badge">TypeScript</span>
            </div>
            <p>
              <a className="btn" href="/projects">Voir tous les projets</a>
            </p>
          </article>

          <article className="card">
            <img src="/assets/p2.jpg" alt="Projet 2" width={1200} height={800} />
            <h3>Project Two</h3>
            <p>Intégration responsive et performances optimisées.</p>
            <div>
              <span className="badge">React</span>{' '}
              <span className="badge">CSS</span>
            </div>
          </article>
        </div>
      </section>

       {/* Offres & disponibilité */}
       <section className="section" aria-labelledby="offers-title">
         <p className="kicker">Offres & disponibilité</p>
         <h2 id="offers-title">Interventions courtes, au forfait</h2>
         <p className="muted">
           Soirs et week‑end sur planification. Facturation au forfait par mission.
         </p>
         <div className="grid">
           <article className="card">
             <div className="content">
               <h3>Ticket — 4 à 6 h</h3>
                <p className="muted">Bugfix, petit composant UI, script d’import/export.</p>
               <ul>
                 <li>1 aller‑retour de retouches</li>
                 <li>Livrable testé + mini note de changelog</li>
               </ul>
               <p className="price">Sur devis</p>
             </div>
           </article>
           <article className="card">
             <div className="content">
               <h3>Micro‑feature — 1 à 2 jours</h3>
               <p className="muted">Formulaire/page responsive, intégration API simple.</p>
               <ul>
                 <li>2 aller‑retours</li>
                 <li>Docs rapides d’installation/usage</li>
               </ul>
               <p className="price">Sur devis</p>
             </div>
           </article>
           <article className="card">
             <div className="content">
               <h3>Docs & Nettoyage — 1 jour</h3>
               <p className="muted">README, scripts, accessibilité de base, petits refactors.</p>
               <ul>
                 <li>Checklist et PR propre</li>
                 <li>Conseils de suivi</li>
               </ul>
               <p className="price">Sur devis</p>
             </div>
           </article>
         </div>
         <p style={{ marginTop: 16 }}>
           <a className="btn" href="/#contact">Parler de votre besoin</a>
         </p>
       </section>
      <section id="contact" className="section scroll-mt-24">
        <h2>Contact</h2>
        <p>Envie de travailler ensemble ? Écrivez-moi :</p>
        <p>
          <a href="mailto:jadedogo08@gmail.com" className="btn">jadedogo08@gmail.com</a>
        </p>
      </section>
    </>
  );
}

