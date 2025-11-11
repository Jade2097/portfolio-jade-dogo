// app/page.tsx
export default function Home() {
  return (
    <>
      <section className="section hero">
        <h1>Salut, je suis Jade DOGO</h1>
        <p>Développeuse web — je conçois des sites et applications modernes.</p>
        <p>
          <a className="btn" href="#contact">Me contacter</a>
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

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Envie de travailler ensemble ? Écrivez-moi :</p>
        <p>
          <a href="mailto:contact@jadedogo.dev" className="btn">contact@jadedogo.dev</a>
        </p>
      </section>
    </>
  );
}

