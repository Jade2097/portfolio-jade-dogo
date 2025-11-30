# Portfolio — Jade DOGO

Portfolio personnel construit avec Next.js (App Router) pour présenter mes services et deux réalisations récentes : **Leadslight** (mini CRM) et **Atelier Korrigan** (site vitrine).

## Stack
- Next.js 16 · React 19 · TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Hébergement cible : Vercel

## Installation
```bash
npm install
npm run dev
# puis ouvrir http://localhost:3000
```

## Scripts
- `npm run dev` : démarre le serveur de dev
- `npm run build` : build production
- `npm start` : lance le serveur en mode production
- `npm run lint` : vérifie le linting

## Contenu principal
- `app/page.tsx` : page d’accueil (hero, derniers projets, offres, contact)
- `app/projects/page.tsx` : page listant tous les projets
- `data/projects.ts` : source de vérité des projets (titre, description, stack, liens, image)
- `public/assets` : captures et visuels utilisés sur les cartes projets

## Mettre à jour les projets
1) Ajouter/mettre à jour les captures dans `public/assets`.
2) Éditer `data/projects.ts` :
   - `title`, `description`
   - `tech` (liste courte de tags)
   - `demo` et/ou `code` (URLs)
   - `image` (chemin vers le fichier dans `public/assets`)
3) Vérifier le rendu : `npm run dev`.

## Déploiement
Déployé sur Vercel (framework détecté automatiquement). Variables d’environnement non nécessaires pour ce portfolio statique.

## Contact
`jadedogo08@gmail.com`
