import Image from "next/image";

export default function Home() {
  return (
    <main style={{fontFamily:"system-ui, sans-serif", lineHeight:1.6, maxWidth:960, margin:"0 auto", padding:"40px 20px"}}>
      <section style={{padding:"40px 0"}}>
        <h1 style={{fontSize:42, margin:0}}>Automations pour PME • Sites Next.js rapides</h1>
        <p style={{fontSize:18, opacity:.85}}>
          Je livre en 7 jours: formulaires branchés à Sheets + e‑mails/SMS, amélioration de performance, widgets d’avis.
        </p>
        <a href="#contact" style={{display:"inline-block", padding:"12px 18px", background:"#111", color:"#fff", borderRadius:8, textDecoration:"none"}}>
          Demander un appel gratuit
        </a>
      </section>

      <section>
        <h2>Offres</h2>
        <ul>
          <li><strong>Formulaire → Google Sheets + e‑mail/SMS</strong> — installation unique + mini maintenance.</li>
          <li><strong>+10 pts Lighthouse</strong> sur un site existant (perf, images, cache).</li>
          <li><strong>Avis clients</strong> (QR code + widget sur le site).</li>
        </ul>
      </section>

      <section>
        <h2>Process</h2>
        <ol>
          <li>Appel 20 min et cible du résultat.</li>
          <li>Pilot de 14 jours avec métriques avant/après.</li>
          <li>Transfert et documentation.</li>
        </ol>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form method="post" action="/api/contact" style={{display:"grid", gap:12, maxWidth:520}}>
          <input name="name" placeholder="Votre nom" required />
          <input name="email" type="email" placeholder="Votre e‑mail" required />
          <textarea name="message" placeholder="Votre besoin en 2 lignes" rows={5} required />
          <button type="submit" style={{padding:"10px 14px"}}>Envoyer</button>
        </form>
        <p style={{fontSize:14, opacity:.7}}>Réponse sous 24 h.</p>
      </section>
    </main>
  );
}

