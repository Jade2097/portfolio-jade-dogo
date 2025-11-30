// app/projects/page.tsx
import type { Metadata } from 'next';
import { projects } from '@/data/projects';

export const metadata: Metadata = { title: 'Projets — Jade DOGO' };

export default function ProjetsPage() {
  return (
    <main className="container">
      <h1>Mes projets</h1>
      <p className="muted">Quelques réalisations récentes.</p>

      <div className="grid" role="list">
        {projects.map((p) => (
          <article className="card" role="listitem" key={p.title}>
            <img
              src={p.image}
              alt={`Aperçu du projet « ${p.title} »`}
              width={1200}
              height={800}
              loading="lazy"
            />
            <div className="content">
              <h3>{p.title}</h3>
              <p className="muted" style={{ marginBottom: 8 }}>{p.description}</p>

              <p className="muted" style={{ marginBottom: 8 }}>
                <strong>Rôle :</strong> {p.role}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                {p.tech.map(t => <span className="badge" key={t}>{t}</span>)}
              </div>

              <p className="muted" style={{ marginBottom: 4 }}>
                <strong>Challenge :</strong> {p.challenge}
              </p>
              <p className="muted" style={{ marginBottom: 12 }}>
                <strong>Impact :</strong> {p.impact}
              </p>
              <p className="muted" style={{ marginBottom: 12 }}>
                Vous avez un projet similaire ?{' '}
                <a href="mailto:jadedogo08@gmail.com" className="muted" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  Contactez-moi
                </a>.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.demo && (
                  <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer">
                    Démo
                  </a>
                )}
                {p.code && (
                  <a className="btn" href={p.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
