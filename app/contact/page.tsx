"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgeyllp";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStatus('Merci pour votre message ! Je reviens vers vous très vite.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Une erreur est survenue. Merci de réessayer ou d'écrire à jadedogo08@gmail.com");
      }
    } catch (err) {
      setStatus("Erreur réseau. Merci de réessayer ou d'écrire à jadedogo08@gmail.com");
    }
  };

  return (
    <>
      <div className="contact-hero">
        <div className="contact-hero__content">
          <h1>Discutons de votre vision.</h1>
          <p>Chaque grande réalisation commence par une conversation.</p>
        </div>
        <div className="contact-hero__image">
          {/* Ajoutez votre photo ici */}
        </div>
      </div>

      <div className="section contact-form-section">
        <div className="contact-intro">
          <p>
            Un projet en tête ? Des questions sur mes services ? N'hésitez pas à me contacter.
            Je prends le temps d'écouter vos besoins pour vous proposer la meilleure solution.
          </p>
          <a 
            href="mailto:jadedogo08@gmail.com" 
            className="btn btn--ghost"
            style={{ display: 'inline-block', marginTop: 16 }}
          >
            Réserver un appel →
          </a>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {/* Champ caché anti-spam (honeypot) */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div className="form-group">
            <label htmlFor="name">
              Nom complet <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span style={{ color: 'var(--accent)' }}>*</span>
            </label>
            <textarea
              id="message"
              required
              rows={8}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input"
              placeholder="Décrivez votre projet en quelques lignes..."
            />
          </div>

          <button type="submit" className="btn">
            Envoyer le message
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}
        </form>

        <div className="contact-direct">
          <h3>Préférez l'email direct ?</h3>
          <p className="muted">
            <a href="mailto:jadedogo08@gmail.com">jadedogo08@gmail.com</a>
          </p>
          <p className="muted" style={{ marginTop: 8 }}>
            Je réponds habituellement dans les 24-48 heures.
          </p>
        </div>
      </div>
    </>
  );
}
