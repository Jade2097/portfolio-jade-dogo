// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="section">
      <h1>À propos</h1>

      <p>
        Je suis <strong>Jade DOGO</strong>, développeuse web freelance passionnée par les interfaces
        modernes et utiles. J’aime rendre les produits plus clairs, plus rapides et plus fiables, en
        gardant une vision à la fois design et technique.
      </p>

      <p>
        Ma vision : livrer des expériences digitales élégantes qui servent vraiment les objectifs
        business et les utilisateurs finaux.
      </p>

      <section aria-labelledby="what-i-do">
        <h2 id="what-i-do">Ma mission</h2>
        <ul>
          <li>Clarifier vos parcours pour que vos utilisateurs comprennent et agissent rapidement</li>
          <li>Concevoir des interfaces performantes qui chargent vite et restent fluides</li>
          <li>Livrer des produits modernes, fiables et faciles à faire évoluer</li>
          <li>Aligner le design, la tech et les objectifs business pour des résultats mesurables</li>
        </ul>
      </section>

      <section aria-labelledby="why-me">
        <h2 id="why-me">Pourquoi travailler avec moi ?</h2>
        <ul>
          <li><strong>Communication transparente</strong> — points réguliers, décisions partagées, visibilité claire.</li>
          <li><strong>Respect des délais</strong> — plan d’exécution précis et suivi des jalons.</li>
          <li><strong>Force de proposition</strong> — suggestions UX/UI et choix techniques pour maximiser la valeur.</li>
          <li><strong>Travail propre et documenté</strong> — code lisible, tests et consignes pour faciliter la maintenance.</li>
          <li><strong>Vision design + technique</strong> — cohérence visuelle, accessibilité et performances.</li>
          <li><strong>Adaptabilité et autonomie</strong> — je m’intègre vite à vos équipes et avance sans micro-gestion.</li>
        </ul>
      </section>

      <section aria-labelledby="skills">
        <h2 id="skills">Mes compétences</h2>
        <ul>
          <li><strong>React / Next.js</strong> — interfaces performantes, routing, server components, data-fetching.</li>
          <li><strong>TypeScript</strong> — code robuste, typé et maintenable.</li>
          <li><strong>Tailwind CSS</strong> — design systems légers, intégration pixel-perfect.</li>
          <li><strong>Prisma / SQL (PostgreSQL)</strong> — modèles de données propres, APIs fiables, exports.</li>
          <li><strong>Performance & accessibilité</strong> — optimisation Lighthouse, gestion des états de focus/ARIA.</li>
          <li><strong>SEO technique</strong> — balises structurées, vitesse de chargement, bonnes pratiques Next.js.</li>
        </ul>
      </section>

      <p style={{ marginTop: 16 }}>
        Si vous cherchez une développeuse réactive, créative et fiable, je serais ravie d’en discuter.
        <br />
        <a className="btn" href="mailto:jadedogo08@gmail.com" style={{ marginTop: 8, display: 'inline-block' }}>
          Me contacter
        </a>
      </p>
    </main>
  );
}
