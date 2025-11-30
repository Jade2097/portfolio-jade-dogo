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
    description: "Mini CRM Next.js/Prisma qui centralise les leads, permet de les mettre à jour, de suivre les statuts et d’exporter en CSV. Interface rapide et responsive pensée pour les équipes terrain.",
    role: "Développement full-stack (Next.js, Prisma), UX et optimisation performance",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    challenge: "Simplifier la saisie et la mise à jour des leads tout en gardant des exports CSV fiables.",
    impact: "Pipeline unifié : suivi des leads plus rapide et exports immédiats pour le reporting.",
    demo: "https://leadslight.vercel.app/",
    code: "https://github.com/Jade2097/leadslight",
    image: "/assets/acceuil_leadslight.png"
  },
  {
    title: "Atelier Korrigan — vitrine premium pour atelier créatif",
    description: "Site vitrine Next.js qui présente les pièces artisanales, les prestations sur mesure et facilite la prise de contact. Identité sobre, navigation fluide et sections claires.",
    role: "Conception UI/UX, intégration Next.js/Tailwind et optimisation SEO",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenge: "Concilier un rendu élégant avec des temps de chargement très courts sur mobile.",
    impact: "Parcours visiteur simplifié et CTA mis en avant pour générer davantage de demandes.",
    demo: "https://atelier-korrigan.vercel.app/",
    code: "https://github.com/Jade2097/atelier-korrigan",
    image: "/assets/page_d'acceuil_atelier-korrigan.png"
  }
];
