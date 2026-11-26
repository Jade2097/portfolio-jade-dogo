export default function Article() {
  return (
    <article className="section" style={{ maxWidth: 780, margin: '0 auto' }}>
      <a href="/blog" style={{ display: 'inline-block', marginBottom: 24, color: 'var(--accent)' }}>
        ← Retour au blog
      </a>
      
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 12, fontSize: 14, marginBottom: 16 }} className="muted">
          <time>8 février 2026</time>
          <span>•</span>
          <span>4 min</span>
        </div>
        <h1>Pourquoi Next.js pour votre projet</h1>
      </div>

      <div style={{ lineHeight: 1.8 }}>
        <p>
          Next.js s'est imposé comme le framework de référence pour les sites web modernes. Mais pourquoi ce succès ? Décryptage des avantages concrets pour votre business.
        </p>

        <h2>Performance native</h2>
        <p>
          Next.js optimise automatiquement votre site : <strong>images lazy-loadées, code splitting, pré-rendu des pages</strong>. Résultat : un site qui charge en moins d'une seconde, même sur mobile 4G.
        </p>
        <p className="muted">
          💡 Un site qui charge en 1s convertit 2x plus qu'un site à 3s (source : Google)
        </p>

        <h2>SEO de premier ordre</h2>
        <p>
          Contrairement aux SPAs classiques, Next.js génère du <strong>HTML pur côté serveur</strong>. Les robots Google indexent votre contenu immédiatement. Pas besoin de bidouilles : ça marche out of the box.
        </p>

        <h2>Developer Experience</h2>
        <p>
          Hot reload instantané, TypeScript natif, routing automatique... Les développeurs sont plus productifs, donc moins d'heures facturées et moins de bugs.
        </p>

        <h2>Scalabilité</h2>
        <p>
          Vous commencez avec un site vitrine ? Parfait. Demain vous voulez ajouter un blog, un espace client, un système de réservation ? Next.js s'adapte sans refonte complète.
        </p>

        <h2>Écosystème riche</h2>
        <p>
          CMS headless (Sanity, Strapi), authentification (Auth.js), paiements (Stripe), analytics... Tout s'intègre facilement. Pas besoin de réinventer la roue.
        </p>

        <h2>Déploiement simplifié</h2>
        <p>
          <strong>Vercel</strong> (les créateurs de Next.js) offre un hébergement gratuit avec HTTPS, CDN mondial, et déploiement automatique via Git. Push to deploy, c'est tout.
        </p>

        <h2>Next.js vs alternatives</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--line)' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Critère</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Next.js</th>
                <th style={{ padding: 12, textAlign: 'left' }}>WordPress</th>
                <th style={{ padding: 12, textAlign: 'left' }}>SPA classique</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: 12 }}>Performance</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐⭐</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: 12 }}>SEO</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: 12 }}>Sécurité</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td style={{ padding: 12 }}>Évolutivité</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐⭐</td>
                <td style={{ padding: 12 }}>⭐⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Pour qui ?</h2>
        <ul>
          <li><strong>Startups</strong> : MVP rapide, pivots faciles</li>
          <li><strong>PME</strong> : site vitrine + blog performant</li>
          <li><strong>E-commerce</strong> : vitesse = conversions</li>
          <li><strong>SaaS</strong> : app complète avec landing pages intégrées</li>
        </ul>

        <p style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-alt)' }}>
          <strong>Prêt à passer à Next.js ?</strong><br />
          Je vous accompagne dans la conception et le développement de votre projet avec Next.js et TypeScript.{' '}
          <a href="/contact">Parlons-en</a>
        </p>
      </div>
    </article>
  );
}
