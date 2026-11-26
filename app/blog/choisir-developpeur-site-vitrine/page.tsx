export default function Article() {
  return (
    <article className="section" style={{ maxWidth: 780, margin: '0 auto' }}>
      <a href="/blog" style={{ display: 'inline-block', marginBottom: 24, color: 'var(--accent)' }}>
        ← Retour au blog
      </a>
      
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 12, fontSize: 14, marginBottom: 16 }} className="muted">
          <time>10 février 2026</time>
          <span>•</span>
          <span>5 min</span>
        </div>
        <h1>Comment choisir un développeur pour votre site vitrine</h1>
      </div>

      <div style={{ lineHeight: 1.8 }}>
        <p>
          Choisir le bon développeur pour votre site vitrine peut faire la différence entre un projet réussi et des mois de frustration. Voici les critères essentiels à considérer.
        </p>

        <h2>1. Portfolio et réalisations concrètes</h2>
        <p>
          Ne vous contentez pas de maquettes. Demandez des <strong>sites en production</strong>, testez-les sur mobile, vérifiez leur vitesse de chargement. Un bon développeur sera fier de montrer son travail.
        </p>

        <h2>2. Compréhension de vos objectifs</h2>
        <p>
          Un développeur qui pose des questions sur votre business, vos clients et vos objectifs vaut mieux que celui qui se lance directement dans la technique. Le site doit servir votre stratégie, pas l'inverse.
        </p>

        <h2>3. Communication claire</h2>
        <p>
          Évitez le jargon à outrance. Un bon développeur sait expliquer simplement les choix techniques et vous tenir informé régulièrement. La transparence sur les délais et le budget est cruciale.
        </p>

        <h2>4. Stack technique moderne</h2>
        <p>
          Privilégiez des technologies éprouvées et maintenues : <strong>Next.js, React, TypeScript</strong> pour le front-end. Évitez les solutions propriétaires qui vous enferment.
        </p>

        <h2>5. Performance et SEO</h2>
        <p>
          Un site lent ou mal référencé ne sert à rien. Vérifiez que le développeur maîtrise les bonnes pratiques : optimisation des images, temps de chargement &lt; 2s, structure HTML sémantique.
        </p>

        <h2>6. Livraison et maintenance</h2>
        <p>
          Demandez ce qui est inclus : formation à l'édition de contenu, documentation, période de garantie. Un site n'est jamais "terminé", il doit pouvoir évoluer facilement.
        </p>

        <h2>Questions à poser</h2>
        <ul>
          <li>Combien de sites vitrines avez-vous réalisés ?</li>
          <li>Quel est votre processus de travail ?</li>
          <li>Comment gérez-vous les retours et modifications ?</li>
          <li>Quelle est votre disponibilité après la livraison ?</li>
          <li>Proposez-vous un CMS pour l'édition du contenu ?</li>
        </ul>

        <h2>Red flags 🚩</h2>
        <ul>
          <li>Pas de portfolio ou uniquement des maquettes</li>
          <li>Devis approximatifs sans détail des livrables</li>
          <li>Promesses irréalistes ("site en 2 jours")</li>
          <li>Manque de réactivité dès les premiers échanges</li>
          <li>Refus de vous former à l'utilisation du site</li>
        </ul>

        <p style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)', backgroundColor: 'var(--bg-alt)' }}>
          <strong>Besoin d'un site vitrine performant ?</strong><br />
          Je vous accompagne du cadrage à la livraison, avec un processus transparent et des technologies modernes.{' '}
          <a href="/contact">Discutons de votre projet</a>
        </p>
      </div>
    </article>
  );
}
