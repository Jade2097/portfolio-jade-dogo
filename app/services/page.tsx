// app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services — Jade DOGO' };

const services = [
  {
    title: 'Développement d’interfaces modernes (React, Next.js)',
    description:
      'Conception et développement d’interfaces réactives pour produits web et espaces client. Architecture front solide, composants réutilisables et performances maîtrisées sur desktop et mobile.',
    gets: [
      'Design system et composants sur mesure',
      'Gestion d’état fiable (server/client), formulaires, auth',
      'Optimisations performances et accessibilité'
    ],
    value: 'Vous lancez plus vite, avec une expérience fluide et moins de support grâce à un front robuste.',
    subject: 'Devis — Interfaces modernes'
  },
  {
    title: 'Création de landing pages premium',
    description:
      'Landing pages orientées conversion avec argumentaire clair, sections preuve sociale et CTA visibles. Intégration rapide et optimisée pour le SEO et le tracking.',
    gets: [
      'Structure UX, copy et CTA optimisés',
      'Intégration Next.js/Tailwind prête pour A/B test',
      'Tracking analytics/events et SEO technique'
    ],
    value: 'Plus de leads qualifiés et un coût d’acquisition maîtrisé grâce à des pages qui convertissent et chargent vite.',
    subject: 'Devis — Landing page'
  },
  {
    title: 'Développement front-end de SaaS',
    description:
      'Dashboards, modules métier et onboarding soignés : auth, rôles, formulaires complexes, tableaux filtrables, graphiques et exports CSV/PDF.',
    gets: [
      'Architecture front modulaire (Next.js/React)',
      'UI de dashboards (tables, charts, filtres, exports)',
      'Flows d’onboarding, billing et notifications'
    ],
    value: 'Un SaaS clair, fiable et performant qui améliore l’adoption et la rétention des utilisateurs.',
    subject: 'Devis — Front SaaS'
  },
  {
    title: 'Refonte UX/UI + intégration',
    description:
      'Audit ciblé, maquettes légères puis intégration pixel-perfect. Parcours simplifiés, hiérarchie visuelle claire et performances préservées.',
    gets: [
      'Audit UX/UI et recommandations actionnables',
      'Prototypes/maquettes et design system cohérent',
      'Intégration Next.js/Tailwind optimisée'
    ],
    value: 'Moins de frictions et plus de conversions grâce à des parcours repensés et mesurables.',
    subject: 'Devis — Refonte UX/UI'
  },
  {
    title: 'Intégration design → code propre, optimisé, pixel-perfect',
    description:
      'Traduction fidèle des maquettes en composants performants. Respect des grilles, tokens, animations fines et accessibilité incluse.',
    gets: [
      'Découpage en composants réutilisables',
      'Respect strict du design (typographie, espacements, états)',
      'Perf & accessibilité (lighthouse, aria, focus)'
    ],
    value: 'Livraison rapide sans dette front : produit cohérent, maintenable et prêt à évoluer.',
    subject: 'Devis — Intégration design'
  }
] as const;

export default function ServicesPage() {
  return (
    <main className="container">
      <section className="section">
        <p className="kicker">Services</p>
        <h1>Prestations React / Next.js</h1>
        <p className="muted">
          J’aide les entreprises à concevoir des interfaces modernes, performantes et bien pensées, avec un focus business clair.
        </p>

        <div className="grid" role="list">
          {services.map((service) => (
            <article className="card" role="listitem" key={service.title}>
              <div className="content">
                <h3>{service.title}</h3>
                <p className="muted">{service.description}</p>

                <p className="kicker" style={{ marginTop: 8, marginBottom: 4 }}>Ce que vous obtenez</p>
                <ul>
                  {service.gets.map(item => <li key={item}>{item}</li>)}
                </ul>

                <p className="muted" style={{ marginTop: 8, marginBottom: 12 }}>
                  <strong>Valeur business :</strong> {service.value}
                </p>

                <a
                  className="btn"
                  href={`mailto:jadedogo08@gmail.com?subject=${encodeURIComponent(service.subject)}`}
                >
                  Demander un devis
                </a>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <p className="muted" style={{ marginBottom: 12 }}>
            Besoin d’un accompagnement front-end premium ? Discutons de votre projet.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn" href="mailto:jadedogo08@gmail.com?subject=Discuter%20de%20votre%20projet">
              Discutons de votre projet
            </a>
            <a className="btn" href="mailto:jadedogo08@gmail.com?subject=Demander%20un%20devis">
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
