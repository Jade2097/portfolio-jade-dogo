// app/page.tsx
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="container">
      <nav className="section" aria-label="Navigation principale">
        <strong>{'{Ton Nom}'}</strong>
        <div>
          <a href="#projets">Projets</a> · <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="section">
        <h1>Salut, je suis {'{Ton Nom}'}</h1>
        <p>Je conçois des sites/apps en {'{ta stack}'} — disponible pour missions.</p>
        <p style={{ marginTop: 12 }}>
          <a className="btn" href="#contact">Me contacter</a>
          {' '}<a href="https://github.com/{tonUser}" target="_blank" rel="noreferrer">GitHub</a>
          {' · '}<a href="https://linkedin.com/in/{tonLinkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </header>

      <section id="projets" className="section">
        <h2>Projets</h2>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:ton.email@exemple.com">ton.email@exemple.com</a></p>
        <p>Basé en France • Ouvert aux missions freelance</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {'{Ton Nom}'} — Portfolio
      </footer>
    </main>
  );
}

