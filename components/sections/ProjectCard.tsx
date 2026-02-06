"use client";

import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card project-card--crz${featured ? ' project-card--featured' : ''}`}
      data-cursor="Projet"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay" aria-hidden="true" />
        {project.badge && (
          <span className="project-card__badge">{project.badge}</span>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="muted">{project.description}</p>
        <div className="project-card__stack">
          {project.tech.map((item) => (
            <span className="badge" key={item}>{item}</span>
          ))}
        </div>
        <div className="project-card__footer">
          <span className="project-card__arrow" aria-hidden="true">↗</span>
          <div className="project-card__links">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Démo</a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
