// data/projects.ts
export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  code?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Leadslight",
    description: "LeadsLight est un mini CRM Next.js/Prisma qui centralise les leads, permet de les mettre à jour et d’exporter en CSV, avec une base Postgres hébergée.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demo: "https://leadslight.vercel.app/",
    code: "https://github.com/Jade2097/leadslight",
    image: "/assets/acceuil_leadslight.png"
  },
  {
    title: "Atelier Korrigan",
    description: "Atelier Korrigan : vitrine élégante de pièces et projets sur mesure, mêlant savoir‑faire artisanal et design contemporain avec contact rapide.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://atelier-korrigan.vercel.app/",
    code: "https://github.com/Jade2097/atelier-korrigan",
    image: "/assets/page_d'acceuil_atelier-korrigan.png"
  }
];
