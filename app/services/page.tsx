// app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services — Jade DOGO' };

const services = [
  {
    title: 'Développement d’interfaces modernes (React, Next.js)',
    description:
      'Interfaces rapides, accessibles et scalables pour vos produits ou espaces client. Architecture front solide, composants réutilisables et performances optimisées.',
    gets: [
      'Design system et composants sur mesure',
      'Gestion d’état propre (server/client), formulaires, auth',
      'Optimisations perfs et accessibilité'
    ],
    value: 'Lancement plus rapide, expérience fluide et support réduit grâce à une base front robuste.',
    subject: 'Devis — Interfaces modernes'
  },
  {
    title: 'Création de landing pages premium',
    description:
      'Landing pages orientées conversion : structure claire, argumentaire percutant, sections preuve sociale et CTA visibles. SEO technique et mesure des performances.',
    gets: [
      'Conception UX/structure, copy et CTA optimisés',
      'Intégration Next.js/Tailwind prête pour A/B test',
      'Tracking (analytics, events), SEO technique'
    ],
    value: 'Plus de leads qualifiés et un coût d’acquisition mieux maîtrisé grâce à des pages qui convertissent.',
    subject: 'Devis — Landing page'
  },
  {
    title: 'Développement front-end de SaaS',
    description:
      'Dashboards, modules métier et onboarding soignés. Auth, rôles, formulaires complexes, tableaux filtrables, graphiques, exports CSV/PDF.',
    gets: [
      'Architecture front modulaire (Next.js/React)',
      'UI de dashboards (tables, charts, filtres, exports)',
      'Flows d’onboarding, billing et notifications'
    ],
    value: 'Adoption et rétention accrues grâce à un SaaS clair, fiable et agréable à utiliser.',
    subject: 'Devis — Front SaaS'
  },
  {
    title: 'Refonte UX/UI + intégration',
    description:
      'Audit rapide, nouvelles maquettes légères puis intégration pixel-perfect. Parcours simplifiés, hiérarchie visuelle claire et performances préservées.',
    gets: [
      'Audit UX/UI et recommandations actionnables',
      'Prototypes/maquettes et design system cohérent',
      'Intégration Next.js/Tailwind optimisée'
    ],
    value: 'Meilleure conversion et réduction des frictions grâce à des parcours repensés et mesurables.',
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
    value: 'Livraison rapide sans dette technique front, pour un produit cohérent et maintenable.',
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
          J’aide les équipes marketing et produit à livrer des interfaces premium, rapides et orientées business,
          en apportant une exécution soignée et mesurable.
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
      </section>
    </main>
  );
}
