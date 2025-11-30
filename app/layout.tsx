// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jade DOGO — Portfolio',
  description: 'Portfolio de Jade DOGO: projets web, compétences et contact.',
  metadataBase: new URL('https://portfolio-jade-dogo.vercel.app'),
  openGraph: {
    title: 'Jade DOGO — Portfolio',
    description: 'Projets web, compétences et contact.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jade DOGO — Portfolio',
    description: 'Projets web, compétences et contact.',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="header container">
          <strong>Jade DOGO</strong>
           <nav className="nav">
             <a href="/">Accueil</a>
             <a href="/projects">Projets</a>
             <a href="/services">Services</a>
             <a href="/about">À propos</a>
             <a href="/#contact">Contact</a>
           </nav>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="footer container">
          © {new Date().getFullYear()} Jade DOGO — Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
