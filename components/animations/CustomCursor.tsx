"use client";

import { useEffect, useRef, useState } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, .btn, .card, .project-card, [data-cursor]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReduced || !hasFinePointer) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const update = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      rafId = requestAnimationFrame(update);
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;
      if (!target) return;
      document.documentElement.classList.add('cursor-hover');
      const dataLabel = target.getAttribute('data-cursor');
      setLabel(dataLabel || (target.tagName === 'A' || target.tagName === 'BUTTON' ? 'Voir' : ''));
    };

    const onOut = () => {
      document.documentElement.classList.remove('cursor-hover');
      setLabel('');
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    rafId = requestAnimationFrame(update);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      document.documentElement.classList.remove('cursor-hover');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={haloRef} className="cursor-halo" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true">
        {label ? <span className="cursor-label">{label}</span> : null}
      </div>
    </>
  );
}
