export default function Navbar() {
  return (
    <header className="top">
      <div className="wrap bar">
        <a className="brand" href="/#accueil"><span aria-hidden="true">jd.</span> Jade Dogo</a>
        <nav aria-label="Navigation principale">
          <a href="/#projets">Projets</a>
          <a href="/#services">Services</a>
          <a href="/#a-propos">À propos</a>
          <a className="button small" href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
