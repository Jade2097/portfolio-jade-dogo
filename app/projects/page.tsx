// app/projects/page.tsx
type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  code?: string;
  image?: string;
};

async function getProjects(): Promise<Project[]> {
  // Le fichier est servi statiquement depuis /public
  const res = await fetch('/projects.json', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="section">
      <h1>Projets</h1>
      <div className="grid">
        {projects.map((p, i) => (
          <article className="card" key={i}>
            {p.image && <img src={p.image} alt={p.title} width={1200} height={800} />}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.tech.map((t) => <span className="badge" key={t}>{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer">Démo</a>}
              {p.code && <a className="btn" href={p.code} target="_blank" rel="noreferrer">Code</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

