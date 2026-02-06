// app/projects/page.tsx
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/sections/ProjectCard';

export const metadata: Metadata = { title: 'Projets — Jade DOGO' };

export default function ProjetsPage() {
  return (
    <main className="container">
      <h1>Mes projets</h1>
      <p className="muted">Quelques réalisations récentes.</p>

      <div className="projects-grid projects-grid--featured" role="list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            featured={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
