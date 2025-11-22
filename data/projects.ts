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
    title: "Project One",
    description: "Application web réactive avec UI claire.",
    tech: ["Next.js", "TypeScript", "CSS"],
    demo: "https://exemple-demo-1.com",
    code: "https://github.com/jade-dogo/project-one",
    image: "/assets/p1.jpg"
  },
  {
    title: "Project Two",
    description: "Intégration responsive et performances optimisées.",
    tech: ["React", "CSS"],
    demo: "https://exemple-demo-2.com",
    code: "https://github.com/jade-dogo/project-two",
    image: "/assets/p2.jpg"
  }
];
