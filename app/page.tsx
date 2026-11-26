export default function Home() {
  return (
    <>
    <section className="wrap hero editorial" aria-labelledby="titre">
    <p className="eyebrow">Développeuse web &amp; logiciel freelance · Brest / à distance</p>
    <h1 id="titre">Jade <em>Dogo</em></h1>
    <div className="hero-foot">
    <p className="intro">Je crée des interfaces React, j’automatise des tâches avec Python et j’aide à fiabiliser les logiciels existants.</p>
    <div className="actions"><a className="button" href="#projets">Voir mes projets</a><a className="button secondary" href="#contact">Discutons de votre projet</a></div>
    </div>
    </section>
    <section className="wrap projects" id="projets">
    <div className="section-head"><div><p className="eyebrow">Portfolio</p><h2>Projets choisis</h2></div><a className="textlink" href="https://github.com/Jade2097">Mon profil GitHub</a></div>
    <article className="feature">
    <div className="feature-copy">
    <p className="category">Ifremer · Euro-Argo · React</p>
    <h3>Software Evaluator</h3>
    <p>Une application web qui rassemble les indicateurs de qualité des logiciels Euro-Argo. J’ai développé l’interface React, intégré les badges et organisé les résultats pour faciliter leur consultation.</p>
    </div>
    <div className="feature-art">
    <p>Ce que l’outil rassemble</p>
    <ul><li><span>01</span> Résultats des tests</li><li><span>02</span> Couverture du code</li><li><span>03</span> Indicateurs par logiciel</li></ul>
    </div>
    </article>
    <article className="argopy">
    <div><p className="category">Open source · Python</p><h3>argopy</h3></div>
    <div><p>Je contribue à la maintenance d’une bibliothèque d’accès aux données océanographiques Argo. Mon travail porte sur la correction de tests, la résolution d’issues et la compatibilité multiplateforme.</p><a className="textlink" href="https://github.com/euroargodev/argopy">Voir le dépôt argopy</a></div>
    </article>
    <div className="grid">
    <article className="project">
    <a className="visual lead" href="https://leadslight.vercel.app/" aria-label="Voir la démo Leadslight"><img src="/assets/acceuil_leadslight.png" alt="Capture de l’interface Leadslight" width="1306" height="920" loading="lazy" /></a>
    <div className="card-body"><p className="category">Application web · CRM</p><h3>Leadslight</h3><p>Un mini CRM pour qualifier les prospects, suivre les échanges et exporter les données au format CSV.</p><ul className="tags" aria-label="Technologies"><li>Next.js</li><li>TypeScript</li><li>Prisma</li><li>PostgreSQL</li></ul><div className="links"><a href="https://leadslight.vercel.app/">Voir la démo <span className="sr">Leadslight</span></a><a href="https://github.com/Jade2097/leadslight">Code source <span className="sr">de Leadslight</span></a></div></div>
    </article>
    <article className="project">
    <a className="visual atelier" href="https://atelier-korrigan.vercel.app/" aria-label="Voir la démo Atelier Korrigan"><img src="/assets/page_d'acceuil_atelier-korrigan.png" alt="Capture du site Atelier Korrigan" width="1318" height="1056" loading="lazy" /></a>
    <div className="card-body"><p className="category">Site vitrine · Artisanat</p><h3>Atelier Korrigan</h3><p>Une vitrine pour présenter des pièces sur mesure et faciliter la prise de contact avec l’atelier.</p><ul className="tags" aria-label="Technologies"><li>Next.js</li><li>TypeScript</li><li>Tailwind CSS</li></ul><div className="links"><a href="https://atelier-korrigan.vercel.app/">Voir la démo <span className="sr">Atelier Korrigan</span></a><a href="https://github.com/Jade2097/atelier-korrigan">Code source <span className="sr">d’Atelier Korrigan</span></a></div></div>
    </article>
    </div>
    </section>
    <section className="services" id="services"><div className="wrap">
    <p className="eyebrow">Services freelance</p><h2>Ce que je peux créer pour vous</h2>
    <div className="grid service-grid">
    <article><h3>Créer ou refondre un site</h3><p>Sites vitrines, landing pages et composants React. J’intègre des interfaces adaptées aux mobiles et ordinateurs.</p></article>
    <article><h3>Automatiser une tâche</h3><p>Scripts Python pour traiter des fichiers, transformer des données ou simplifier une opération récurrente.</p></article>
    <article><h3>Améliorer un logiciel</h3><p>Correction de bugs, tests automatisés et workflows GitHub Actions pour vos projets existants.</p></article>
    </div>
    <p className="method">On définit ensemble les priorités, puis je passe des maquettes au développement. Vous pouvez tester et donner votre avis avant la mise en ligne.</p>
    <a className="textlink" href="#contact">Parler de votre besoin</a>
    </div></section>
    <section className="wrap about" id="a-propos">
    <div><p className="eyebrow">À propos</p><h2>Enchantée, moi c’est Jade.</h2><p>Je suis élève ingénieure à l’ISEN et alternante à l’Ifremer, où je contribue à des outils pour les données océanographiques. En freelance, j’applique la même attention à la qualité du code et aux détails qui rendent un site agréable à utiliser.</p></div>
    <div className="skills"><h3>Mes outils</h3><dl><dt>Front-end</dt><dd>React, Next.js, TypeScript, Tailwind CSS</dd><dt>Back-end &amp; données</dt><dd>API REST, Prisma, PostgreSQL, Supabase, Python</dd></dl></div>
    </section>
    <section className="wrap" id="contact"><div className="contact">
    <div><p className="eyebrow">Contact</p><h2>Parlons de votre projet.</h2><p>Vous avez une idée de site, une refonte ou une application à lancer ? Écrivez-moi quelques lignes sur votre besoin.</p></div>
    <a className="button" href="mailto:jadogo2097@gmail.com">M’écrire par e-mail</a>
    </div></section>
    </>
  );
}
