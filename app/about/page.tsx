// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="section">
      <h1>À propos</h1>

      <p>
        Je suis <strong>Jade DOGO</strong>, développeuse web freelance spécialisée en React et Next.js.
        J’accompagne les équipes produit et marketing pour lancer ou améliorer des interfaces rapides,
        fiables et agréables à utiliser.
      </p>

      <section aria-labelledby="what-i-do">
        <h2 id="what-i-do">Ce que je peux faire pour vous</h2>
        <ul>
          <li>Concevoir et intégrer des pages marketing et produits performantes</li>
          <li>Créer des dashboards et mini SaaS avec authentification, rôles et export</li>
          <li>Optimiser les temps de chargement, l’accessibilité et le SEO technique</li>
          <li>Mettre en place un design système cohérent et évolutif</li>
        </ul>
      </section>

      <section aria-labelledby="why-me">
        <h2 id="why-me">Pourquoi travailler avec moi ?</h2>
        <ul>
          <li><strong>Communication claire</strong> — échanges structurés, points réguliers, visibilité sur l’avancement.</li>
          <li><strong>Autonomie</strong> — je prends en main le besoin, propose un plan et avance sans micro-gestion.</li>
          <li><strong>Code propre et documenté</strong> — architecture lisible, tests et guidelines pour faciliter la maintenance.</li>
          <li><strong>Force de proposition</strong> — suggestions UI/UX, choix techniques et optimisations pour livrer plus de valeur.</li>
        </ul>
      </section>

      <p style={{ marginTop: 16 }}>
        Prêt à discuter de votre projet ? <a className="btn" href="mailto:jadedogo08@gmail.com">Me contacter</a>
      </p>
    </main>
  );
}
