// app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Services — Jade DOGO' };

const services = [
  {
    title: 'Développement d’interfaces modernes (React, Next.js)',
    description:
      'Design and development of reactive interfaces for web products and client areas. Solid front-end architecture, reusable components and mastered performances on desktop and mobile.',
    gets: [
      'Custom design system and components',
      'Reliable state management (server/client), forms, auth',
      'Performance optimizations and accessibility'
    ],
    value: 'You launch faster, with a smooth experience and less support thanks to a robust front-end.',
    subject: 'Quote — Modern interfaces'
  },
  {
    title: 'Premium landing page creation',
    description:
      'Conversion-oriented landing pages with clear argumentation, social proof sections and visible CTAs. Fast integration and optimized for SEO and tracking.',
    gets: [
      'Optimized UX structure, copy and CTAs',
      'Next.js/Tailwind integration ready for A/B testing',
      'Analytics/events tracking and technical SEO'
    ],
    value: 'More qualified leads and controlled acquisition cost thanks to pages that convert and load fast.',
    subject: 'Quote — Landing page'
  },
  {
    title: 'SaaS front-end development',
    description:
      'Polished dashboards, business modules and onboarding: auth, roles, complex forms, filterable tables, charts and CSV/PDF exports.',
    gets: [
      'Modular front-end architecture (Next.js/React)',
      'Dashboard UI (tables, charts, filters, exports)',
      'Onboarding flows, billing and notifications'
    ],
    value: 'A clear, reliable and performant SaaS that improves user adoption and retention.',
    subject: 'Quote — SaaS front-end'
  },
  {
    title: 'UX/UI redesign + integration',
    description:
      'Targeted audit, light mockups then pixel-perfect integration. Simplified journeys, clear visual hierarchy and preserved performances.',
    gets: [
      'UX/UI audit and actionable recommendations',
      'Prototypes/mockups and consistent design system',
      'Optimized Next.js/Tailwind integration'
    ],
    value: 'Fewer frictions and more conversions thanks to redesigned and measurable journeys.',
    subject: 'Quote — UX/UI redesign'
  },
  {
    title: 'Design integration → clean, optimized, pixel-perfect code',
    description:
      'Faithful translation of mockups into performant components. Respect for grids, tokens, fine animations and included accessibility.',
    gets: [
      'Breakdown into reusable components',
      'Strict respect for design (typography, spacing, states)',
      'Perf & accessibility (lighthouse, aria, focus)'
    ],
    value: 'Fast delivery without front-end debt: consistent, maintainable product ready to evolve.',
    subject: 'Quote — Design integration'
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
