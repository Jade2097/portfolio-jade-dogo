// data/projects.ts
export type Project = {
  title: string;
  desc: string;
  tech: string[];
  url?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'Projet 1',
    desc: 'Brève description de ce que fait le projet et la valeur pour le client.',
    tech: ['Next.js','TypeScript','CSS'],
    url: 'https://demo1.exemple.com',
    repo: 'https://github.com/tonuser/projet1',
    image: '/assets/p1.jpg'
  },
  {
    title: 'Projet 2',
    desc: 'Brève description…',
    tech: ['React','API'],
    url: 'https://demo2.exemple.com',
    repo: 'https://github.com/tonuser/projet2',
    image: '/assets/p2.jpg'
  }
];

