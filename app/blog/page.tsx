export default function BlogPage() {
  const articles = [
    {
      slug: 'choisir-developpeur-site-vitrine',
      title: 'Comment choisir un développeur pour votre site vitrine',
      excerpt: 'Les critères essentiels pour trouver le bon partenaire technique et éviter les pièges.',
      date: '10 février 2026',
      readTime: '5 min'
    },
    {
      slug: 'pourquoi-nextjs-pour-votre-projet',
      title: 'Pourquoi Next.js pour votre projet',
      excerpt: 'Performance, SEO, DX : pourquoi Next.js est devenu incontournable pour les sites modernes.',
      date: '8 février 2026',
      readTime: '4 min'
    },
    {
      slug: 'checklist-bon-site-pro',
      title: 'Checklist d\'un bon site pro',
      excerpt: 'Les 10 points non-négociables pour un site qui convertit et inspire confiance.',
      date: '5 février 2026',
      readTime: '6 min'
    },
    {
      slug: 'erreurs-courantes-site-vitrine',
      title: '5 erreurs courantes sur un site vitrine',
      excerpt: 'Les pièges à éviter pour ne pas perdre des clients potentiels.',
      date: '2 février 2026',
      readTime: '5 min'
    },
    {
      slug: 'optimiser-performances-web',
      title: 'Optimiser les performances de votre site',
      excerpt: 'Techniques concrètes pour un site rapide qui plaît à Google et à vos visiteurs.',
      date: '28 janvier 2026',
      readTime: '7 min'
    }
  ];

  return (
    <div className="section">
      <h1>Blog</h1>
      <p className="muted" style={{ maxWidth: 720, marginBottom: 48 }}>
        Conseils pratiques, retours d'expérience et guides pour créer des sites web qui performent.
      </p>

      <div style={{ display: 'grid', gap: 32, maxWidth: 840 }}>
        {articles.map((article) => (
          <article key={article.slug} className="card">
            <a href={`/blog/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="content">
                <div style={{ display: 'flex', gap: 12, fontSize: 14, marginBottom: 12 }} className="muted">
                  <time>{article.date}</time>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 style={{ marginBottom: 12, fontSize: 28 }}>{article.title}</h2>
                <p className="muted">{article.excerpt}</p>
                <span style={{ 
                  color: 'var(--accent)', 
                  fontWeight: 600, 
                  marginTop: 12, 
                  display: 'inline-block' 
                }}>
                  Lire l'article →
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
