"use client";

import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    const focusTarget = drawerRef.current?.querySelector<HTMLElement>('a, button');
    focusTarget?.focus();
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="/#home" aria-label="Accueil">
          Jade.
        </a>

        <nav className="navbar__links" aria-label="Navigation principale">
          <a className="nav-link" href="/#home">Accueil</a>
          <a className="nav-link" href="/#projects">Projets</a>
          <a className="nav-link" href="/#offers">Services</a>
          <a className="nav-link" href="/#about">À propos</a>
          <a className="nav-link" href="/#contact">Contact</a>
        </nav>

        <div className="navbar__actions">
          <a className="btn nav-cta" href="/#contact">Me contacter</a>
          <button
            className={`nav-toggle${open ? ' is-open' : ''}`}
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`nav-overlay${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      />
      <aside
        id="mobile-menu"
        className={`nav-drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        aria-modal={open}
        role="dialog"
        ref={drawerRef}
      >
        <button
          className="nav-close"
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <nav className="nav-drawer__links" aria-label="Navigation mobile">
          <a onClick={() => setOpen(false)} href="/#home">Accueil</a>
          <a onClick={() => setOpen(false)} href="/#projects">Projets</a>
          <a onClick={() => setOpen(false)} href="/#offers">Services</a>
          <a onClick={() => setOpen(false)} href="/#about">À propos</a>
          <a onClick={() => setOpen(false)} href="/#contact">Contact</a>
        </nav>
        <a className="btn nav-cta" href="/#contact" onClick={() => setOpen(false)}>
          Me contacter
        </a>
      </aside>
    </header>
  );
}
