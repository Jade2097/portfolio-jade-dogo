// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="section">
      <h1>À propos</h1>
      <p>
        Je suis <strong>Jade DOGO</strong>, développeuse web. J’aime créer des interfaces
        simples, accessibles et rapides. J’interviens sur la conception, l’intégration
        et l’optimisation de performances.
      </p>
      <ul>
        <li>Stack: Next.js, React, TypeScript, CSS</li>
        <li>Basée en France — ouverte aux missions à distance</li>
        <li>Contact: <a href="mailto:contact@jadedogo.dev">contact@jadedogo.dev</a></li>
      </ul>
    </section>
  );
}

