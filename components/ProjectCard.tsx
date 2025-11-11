// components/ProjectCard.tsx
type Props = {
  title: string;
  desc: string;
  tech: string[];
  url?: string;
  repo?: string;
  image?: string;
};

export default function ProjectCard(p: Props) {
  return (
    <article className="card">
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          style={{ width: '100%', borderRadius: 8, marginBottom: 12 }}
        />
      )}
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <div className="tags">
        {p.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <p>
        {p.url && (
          <a className="btn" href={p.url} target="_blank" rel="noreferrer">
            Démo
          </a>
        )}
        {p.repo && (
          <>
            {' '}
            <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
          </>
        )}
      </p>
    </article>
  );
}

