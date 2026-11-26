export default function Article() {
  return (
    <article className="section" style={{ maxWidth: 780, margin: '0 auto' }}>
      <a href="/blog" style={{ display: 'inline-block', marginBottom: 24, color: 'var(--accent)' }}>
        ← Retour au blog
      </a>
      
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 12, fontSize: 14, marginBottom: 16 }} className="muted">
          <time>5 février 2026</time>
          <span>•</span>
          <span>6 min</span>
        </div>
        <h1>Checklist d'un bon site pro</h1>
      </div>

      <div style={{ lineHeight: 1.8 }}>
        <p>
          Vous lancez votre site ou refondez l'existant ? Cette checklist regroupe les 10 critères essentiels d'un site professionnel qui inspire confiance et convertit.
        </p>

        <h2>1. Temps de chargement &lt; 2 secondes</h2>
        <p>
          <strong>Pourquoi :</strong> 53% des visiteurs quittent un site qui met plus de 3s à charger.<br />
          <strong>Comment vérifier :</strong> <a href="https://pagespeed.web.dev" target="_blank" rel="noopener">PageSpeed Insights</a> (score &gt; 90/100)<br />
          <strong>Solutions :</strong> Next.js, optimisation des images (WebP), lazy loading
        </p>

        <h2>2. Responsive design parfait</h2>
        <p>
          <strong>Pourquoi :</strong> 60% du trafic vient du mobile.<br />
          <strong>Comment vérifier :</strong> Testez sur votre téléphone et tablette<br />
          <strong>Solutions :</strong> Mobile-first design, breakpoints cohérents
        </p>

        <h2>3. Appels à l'action clairs</h2>
        <p>
          <strong>Pourquoi :</strong> Le visiteur doit savoir quoi faire en 5 secondes.<br />
          <strong>Comment vérifier :</strong> Boutons visibles, textes d'action explicites<br />
          <strong>Exemples :</strong> "Demander un devis", "Essai gratuit", "Nous contacter"
        </p>

        <h2>4. HTTPS activé</h2>
        <p>
          <strong>Pourquoi :</strong> Sécurité + confiance + meilleur SEO<br />
          <strong>Comment vérifier :</strong> Cadenas vert dans la barre d'adresse<br />
          <strong>Solutions :</strong> Let's Encrypt gratuit, inclus avec Vercel/Netlify
        </p>

        <h2>5. SEO technique en place</h2>
        <ul>
          <li>Balises title et meta description uniques par page</li>
          <li>Structure H1 → H2 → H3 cohérente</li>
          <li>Attributs alt sur toutes les images</li>
          <li>Sitemap.xml et robots.txt</li>
          <li>Schema.org (Organization, LocalBusiness)</li>
        </ul>

        <h2>6. Formulaire de contact fonctionnel</h2>
        <p>
          <strong>Pourquoi :</strong> 70% des prospects préfèrent le formulaire à l'email.<br />
          <strong>Comment vérifier :</strong> Testez l'envoi, vérifiez la réception<br />
          <strong>Solutions :</strong> Formspree, Web3Forms, API custom
        </p>

        <h2>7. Mentions légales complètes</h2>
        <p>
          <strong>Obligatoire :</strong> Nom/raison sociale, adresse, SIRET, hébergeur<br />
          <strong>+ Politique de confidentialité si formulaire</strong><br />
          <strong>+ CGV si e-commerce</strong>
        </p>

        <h2>8. Analytics et tracking</h2>
        <p>
          <strong>Pourquoi :</strong> Impossible d'améliorer ce qu'on ne mesure pas.<br />
          <strong>Solutions :</strong> Google Analytics 4, Plausible (RGPD-friendly), Vercel Analytics<br />
          <strong>À suivre :</strong> Pages vues, taux de rebond, conversions
        </p>

        <h2>9. Contenu de qualité</h2>
        <ul>
          <li>Pas de lorem ipsum ou textes génériques</li>
          <li>Photos professionnelles (pas de stock dépassé)</li>
          <li>Orthographe irréprochable</li>
          <li>Ton adapté à votre cible</li>
        </ul>

        <h2>10. Maintenabilité</h2>
        <p>
          <strong>Pourquoi :</strong> Un site doit évoluer facilement.<br />
          <strong>Critères :</strong>
        </p>
        <ul>
          <li>CMS ou fichiers Markdown pour le contenu</li>
          <li>Code propre et documenté</li>
          <li>Dépendances à jour</li>
          <li>Backup automatique</li>
        </ul>

        <h2>Bonus : Performance avancée</h2>
        <ul>
          <li>Cache navigateur configuré</li>
          <li>CDN pour les assets statiques</li>
          <li>Lazy loading des images</li>
          <li>Préchargement des pages critiques</li>
        </ul>

        <h2>Bonus : Design</h2>
        <ul>
          <li>Hiérarchie visuelle claire</li>
          <li>Contraste suffisant (accessibilité)</li>
          <li>Espaces aérés (breathing room)</li>
          <li>Police lisible (16px minimum)</li>
        </ul>

        <div style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
          <h3>Checklist PDF gratuite</h3>
          <p className="muted">
            Téléchargez cette checklist en PDF pour valider votre site point par point.
          </p>
          <button className="btn" style={{ marginTop: 12 }}>
            Télécharger la checklist (bientôt)
          </button>
        </div>

        <p style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-alt)' }}>
          <strong>Besoin d'un audit de votre site existant ?</strong><br />
          J'analyse votre site selon ces critères et vous propose un plan d'action concret.{' '}
          <a href="/contact">Me contacter</a>
        </p>
      </div>
    </article>
  );
}
