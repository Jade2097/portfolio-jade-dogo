// data/projects.ts
export type Project = {
  title: string;
  description: string;
  role: string;
  tech: string[];
  challenge: string;
  impact: string;
  demo?: string;
  code?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Leadslight — mini CRM pour équipes commerciales",
    description: "Projet personnel professionnel pour accélérer la qualification et le suivi des leads, avec exports CSV fiables.",
    role: "Développement front-end Next.js, intégration UI/UX, data-layer Prisma/PostgreSQL",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    challenge: "Concevoir une interface rapide pour créer/mettre à jour des leads et générer des exports CSV cohérents.",
    impact: "Pipeline unifié, suivi plus fluide et reporting immédiat pour les équipes commerciales.",
    demo: "https://leadslight.vercel.app/",
    code: "https://github.com/Jade2097/leadslight",
    image: "/assets/acceuil_leadslight.png"
  },
  {
    title: "Atelier Korrigan — vitrine premium pour atelier créatif",
    description: "Site vitrine professionnel pour présenter des pièces sur mesure et faciliter la prise de contact.",
    role: "Conception UI/UX, intégration Next.js/Tailwind et optimisation SEO",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenge: "Combiner un rendu élégant avec des temps de chargement courts sur mobile.",
    impact: "Parcours visiteur simplifié, CTA visibles et davantage de demandes entrantes.",
    demo: "https://atelier-korrigan.vercel.app/",
    code: "https://github.com/Jade2097/atelier-korrigan",
    image: "/assets/page_d'acceuil_atelier-korrigan.png"
  }
];
