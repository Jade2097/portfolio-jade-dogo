import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from './client-layout';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Jade Dogo — Développeuse web freelance',
  description: 'Développeuse web et logiciel freelance à Brest : interfaces React, automatisation Python et qualité logicielle.',
  metadataBase: new URL('https://portfolio-jade-dogo.vercel.app'),
  openGraph: {
    title: 'Jade Dogo — Développeuse web freelance',
    description: 'Interfaces React, automatisation Python et qualité logicielle. Découvrez mes projets et parlons du vôtre.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jade Dogo — Développeuse web freelance',
    description: 'Interfaces React, automatisation Python et qualité logicielle.',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body id="accueil">
        <a className="skip" href="#contenu">Aller au contenu</a>
        <Navbar />
        <main id="contenu">
          <ClientLayout>{children}</ClientLayout>
        </main>
        <footer className="wrap footer">
          <span>© {new Date().getFullYear()} Jade Dogo</span>
          <a href="https://github.com/Jade2097">GitHub</a>
          <a href="https://www.linkedin.com/in/jade-dogo/">LinkedIn</a>
          <a href="#accueil">Retour en haut</a>
        </footer>
      </body>
    </html>
  );
}
