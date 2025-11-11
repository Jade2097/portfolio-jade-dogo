// app/layout.tsx
export const metadata = {
  title: '{Ton Nom} — Portfolio',
  description: 'Projets, compétences et contact.',
  metadataBase: new URL('https://ton-domaine-ou-vercel.vercel.app'),
  openGraph: {
    title: '{Ton Nom} — Portfolio',
    description: 'Projets, compétences et contact.',
    url: '/',
    siteName: '{Ton Nom}',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}

