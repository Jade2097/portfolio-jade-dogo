// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from './client-layout';
import Navbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/animations/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navbar />
        <CustomCursor />
        <div className="nav-spacer" aria-hidden="true" />
        <main className="container">
          <ClientLayout>{children}</ClientLayout>
        </main>
        <footer className="footer container">
          © {new Date().getFullYear()} Jade DOGO — Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
