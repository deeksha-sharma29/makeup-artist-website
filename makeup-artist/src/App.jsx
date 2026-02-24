import { useState, useEffect, useRef } from "react";

// ─── Google Fonts ───────────────────────────────────────────────────────────
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Poppins:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --nude: #F5E6E0;
      --soft-pink: #E8B4B8;
      --rose: #C06C84;
      --deep-rose: #9B4D6A;
      --beige: #FAF3F0;
      --text-dark: #3D2B2B;
      --text-mid: #7A5C5C;
      --text-light: #A88B8B;
      --white: #FFFFFF;
      --glass: rgba(255,255,255,0.55);
      --shadow-soft: 0 8px 32px rgba(192,108,132,0.12);
      --shadow-hover: 0 20px 60px rgba(192,108,132,0.22);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Poppins', sans-serif;
      background: var(--beige);
      color: var(--text-dark);
      overflow-x: hidden;
    }

    h1,h2,h3,h4,h5 { font-family: 'Playfair Display', serif; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--nude); }
    ::-webkit-scrollbar-thumb { background: var(--soft-pink); border-radius: 3px; }

    /* Animations */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(-12px); }
    }
    @keyframes pulse-rose {
      0%,100% { box-shadow: 0 0 0 0 rgba(192,108,132,0.5); }
      50%      { box-shadow: 0 0 0 14px rgba(192,108,132,0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes rotateSlow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes pageIn {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-up   { animation: fadeUp 0.65s ease-out both; }
    .animate-fade-in   { animation: fadeIn 0.5s ease-out both; }
    .animate-slide-r   { animation: slideRight 0.65s ease-out both; }
    .animate-slide-l   { animation: slideLeft 0.65s ease-out both; }
    .animate-float     { animation: float 4s ease-in-out infinite; }
    .animate-page-in   { animation: pageIn 0.5s ease-out both; }

    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }
    .delay-6 { animation-delay: 0.6s; }
    .delay-7 { animation-delay: 0.7s; }
    .delay-8 { animation-delay: 0.8s; }

    /* Reveal on scroll */
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    html, body, #root {
  width: 100%;
  margin: 0;
  padding: 0;
}

    /* Navbar */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      transition: all 0.4s ease;
      padding: 20px 0;
    }
    .navbar.scrolled {
      background: rgba(250,243,240,0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      box-shadow: 0 2px 30px rgba(192,108,132,0.1);
      padding: 12px 0;
    }

    /* Buttons */
    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      background: linear-gradient(135deg, var(--rose), var(--deep-rose));
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem; font-weight: 500; letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 14px 36px; border-radius: 50px;
      border: none; cursor: pointer;
      transition: all 0.35s ease;
      box-shadow: 0 8px 25px rgba(192,108,132,0.35);
    }
    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(192,108,132,0.45);
    }
    .btn-outline {
      display: inline-flex; align-items: center; gap: 8px;
      background: transparent;
      color: var(--rose);
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem; font-weight: 500; letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 13px 34px; border-radius: 50px;
      border: 1.5px solid var(--rose); cursor: pointer;
      transition: all 0.35s ease;
    }
    .btn-outline:hover {
      background: var(--rose);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(192,108,132,0.3);
    }

    /* Cards */
    .card-glass {
      background: var(--glass);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255,255,255,0.7);
      border-radius: 20px;
      box-shadow: var(--shadow-soft);
      transition: all 0.4s ease;
    }
    .card-glass:hover {
      box-shadow: var(--shadow-hover);
      transform: translateY(-6px);
    }

    /* Section headers */
    .section-tag {
      display: inline-block;
      font-size: 0.72rem; font-weight: 500; letter-spacing: 3px;
      text-transform: uppercase; color: var(--rose);
      margin-bottom: 12px;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--text-dark);
      line-height: 1.2;
    }
    .section-divider {
      width: 60px; height: 2px;
      background: linear-gradient(to right, var(--soft-pink), var(--rose));
      border-radius: 2px; margin: 18px auto 0;
    }

    /* Hero */
    .hero-section {
      min-height: 100vh;
  display: flex;
  align-items: center;
      width: 100%;
      background: linear-gradient(135deg, #FAF3F0 0%, #F5E6E0 40%, #EDD0D8 100%);
      position: relative; overflow: hidden;
      display: flex; align-items: center;
    }
    .hero-blob-1 {
      position: absolute; width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(232,180,184,0.35) 0%, transparent 70%);
      top: -100px; right: -100px; border-radius: 50%;
    }
    .hero-blob-2 {
      position: absolute; width: 350px; height: 350px;
      background: radial-gradient(circle, rgba(192,108,132,0.15) 0%, transparent 70%);
      bottom: -50px; left: 100px; border-radius: 50%;
    }
    .hero-image-frame {
      position: relative;
      width: 420px; max-width: 100%;
    }
    .hero-image-frame::before {
      content: '';
      position: absolute; top: -20px; right: -20px;
      width: 100%; height: 100%;
      border: 2px solid var(--soft-pink);
      border-radius: 24px; z-index: 0;
    }
    .hero-img {
      width: 100%; aspect-ratio: 3/4;
      object-fit: cover; border-radius: 20px;
      position: relative; z-index: 1;
      box-shadow: var(--shadow-hover);
    }
    .hero-badge {
      position: absolute; bottom: 30px; left: -30px; z-index: 2;
      background: white; border-radius: 16px;
      padding: 16px 20px;
      box-shadow: 0 10px 40px rgba(192,108,132,0.2);
      animation: float 4s ease-in-out infinite;
    }
 .container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
}

.hero-section .container {
  max-width: 100%;
  padding: 0 100px;
}

    /* Service cards */
    .service-icon {
      width: 64px; height: 64px; border-radius: 18px;
      background: linear-gradient(135deg, var(--nude), var(--soft-pink));
      display: flex; align-items: center; justify-content: center;
      font-size: 1.6rem; margin-bottom: 18px;
      transition: transform 0.3s ease;
    }
    .service-card:hover .service-icon { transform: scale(1.1) rotate(-5deg); }

    /* Pricing */
    .pricing-card {
      border-radius: 24px; padding: 40px 32px;
      transition: all 0.4s ease; cursor: default;
      position: relative; overflow: hidden;
    }
    .pricing-card::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(to right, var(--soft-pink), var(--rose));
      opacity: 0; transition: opacity 0.3s;
    }
    .pricing-card:hover::before { opacity: 1; }
    .pricing-card.featured {
      background: linear-gradient(145deg, var(--rose), var(--deep-rose));
      color: white;
    }
    .pricing-card.featured::before { opacity: 1; background: linear-gradient(to right, rgba(255,255,255,0.5), white); }
    .price-number {
      font-family: 'Playfair Display', serif;
      font-size: 3rem; font-weight: 700;
    }

    /* Testimonials */
    .testimonial-card {
      padding: 36px 32px; border-radius: 24px;
      background: white;
      box-shadow: 0 4px 24px rgba(192,108,132,0.08);
      transition: all 0.4s ease;
      position: relative;
    }
    .testimonial-card::before {
      content: '"';
      position: absolute; top: 16px; left: 24px;
      font-family: 'Playfair Display', serif;
      font-size: 5rem; color: var(--soft-pink); opacity: 0.4;
      line-height: 1;
    }
    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 48px rgba(192,108,132,0.15);
    }

    /* Form */
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-label {
      font-size: 0.78rem; font-weight: 500; letter-spacing: 1px;
      text-transform: uppercase; color: var(--text-mid);
    }
    .form-input {
      padding: 14px 18px;
      border: 1.5px solid rgba(232,180,184,0.5);
      border-radius: 12px;
      background: white;
      font-family: 'Poppins', sans-serif;
      font-size: 0.9rem; color: var(--text-dark);
      transition: all 0.3s ease;
      outline: none;
    }
    .form-input:focus {
      border-color: var(--rose);
      box-shadow: 0 0 0 4px rgba(192,108,132,0.1);
    }
    .form-input.error { border-color: #e74c3c; }
    .error-msg { font-size: 0.75rem; color: #e74c3c; }

    /* WhatsApp */
    .whatsapp-fab {
      position: fixed; bottom: 30px; right: 30px; z-index: 999;
      width: 58px; height: 58px; border-radius: 50%;
      background: #25D366;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 25px rgba(37,211,102,0.4);
      cursor: pointer;
      animation: pulse-rose 2.5s infinite;
      transition: transform 0.3s ease;
    }
    .whatsapp-fab:hover { transform: scale(1.12); }

    /* Footer */
    .footer {
      background: var(--text-dark);
      color: rgba(255,255,255,0.7);
      padding: 60px 0 30px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-image-frame { width: 280px; margin: 0 auto; }
      .hero-badge { left: 0; }
      .nav-links { display: none; }
      .mobile-menu-open .nav-links {
        display: flex; flex-direction: column;
        position: absolute; top: 100%; left: 0; right: 0;
        background: rgba(250,243,240,0.97);
        backdrop-filter: blur(20px);
        padding: 24px; gap: 16px;
        box-shadow: 0 10px 30px rgba(192,108,132,0.15);
      }
    }

    /* Stars */
    .stars { color: #F4A261; letter-spacing: 2px; }

    /* About page */
    .about-stat {
      text-align: center; padding: 28px 20px;
      border-radius: 18px;
      background: white;
      box-shadow: 0 4px 20px rgba(192,108,132,0.08);
      transition: all 0.3s ease;
    }
    .about-stat:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); }

    /* Map placeholder */
    .map-frame {
      width: 100%; height: 350px; border-radius: 20px;
      overflow: hidden; border: none;
      box-shadow: var(--shadow-soft);
    }

    /* Social links */
    .social-link {
      width: 44px; height: 44px; border-radius: 50%;
      background: var(--nude);
      display: flex; align-items: center; justify-content: center;
      color: var(--rose); font-size: 1.1rem;
      transition: all 0.3s ease; text-decoration: none;
      border: 1.5px solid var(--soft-pink);
    }
    .social-link:hover {
      background: var(--rose); color: white;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(192,108,132,0.3);
    }

    /* Page wrapper */
    .page-wrap { padding-top: 90px; min-height: 100vh; }

    /* CTA section */
    .cta-section {
      background: linear-gradient(135deg, var(--rose) 0%, var(--deep-rose) 100%);
      color: white; text-align: center; padding: 100px 24px;
      position: relative; overflow: hidden;
    }
    .cta-section::before {
      content: '';
      position: absolute; inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    /* Nav link */
    .nav-link {
      font-size: 0.82rem; font-weight: 500; letter-spacing: 1px;
      text-transform: uppercase; color: var(--text-mid);
      text-decoration: none; padding: 8px 0;
      position: relative; transition: color 0.3s;
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: 0; left: 0;
      width: 0; height: 1.5px;
      background: var(--rose);
      transition: width 0.3s ease;
    }
    .nav-link:hover, .nav-link.active { color: var(--rose); }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }

    .container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
    .section { padding: 100px 0; }

    /* Grid helpers */
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
    .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    @media(max-width:900px) {
      .grid-3 { grid-template-columns: repeat(2,1fr); }
      .grid-4 { grid-template-columns: repeat(2,1fr); }
      .grid-2 { grid-template-columns: 1fr; }
    }
    @media(max-width:580px) {
      .grid-3,.grid-4 { grid-template-columns: 1fr; }
    }

    .text-center { text-align: center; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-4 { gap: 16px; }
    .gap-6 { gap: 24px; }
    .gap-8 { gap: 32px; }
    .mt-2 { margin-top: 8px; }
    .mt-4 { margin-top: 16px; }
    .mt-6 { margin-top: 24px; }
    .mt-8 { margin-top: 32px; }
    .mb-2 { margin-bottom: 8px; }
    .mb-4 { margin-bottom: 16px; }
    .mb-6 { margin-bottom: 24px; }
    .mb-8 { margin-bottom: 32px; }
    .w-full { width: 100%; }
  `}</style>
);

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home","About","Services","Pricing","Booking","Contact"];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}${menuOpen ? " mobile-menu-open" : ""}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div
          style={{ cursor:"pointer" }}
          onClick={() => { setPage("Home"); setMenuOpen(false); window.scrollTo(0,0); }}
        >
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", color:"var(--rose)", fontStyle:"italic" }}>
            Amara Beauty
          </div>
          <div style={{ fontSize:"0.6rem", letterSpacing:"3px", textTransform:"uppercase", color:"var(--text-light)", marginTop:"-2px" }}>
            Luxury Makeup Artistry
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-links flex gap-6" style={{ gap:"32px" }}>
          {links.map(l => (
            <a
              key={l}
              className={`nav-link${currentPage === l ? " active" : ""}`}
              href="#"
              onClick={e => { e.preventDefault(); setPage(l); window.scrollTo(0,0); setMenuOpen(false); }}
            >{l}</a>
          ))}
        </div>

        {/* Book CTA */}
        <div className="flex items-center gap-4" style={{ gap:"16px" }}>
          <button
            className="btn-primary"
            style={{ padding:"10px 24px", fontSize:"0.75rem" }}
            onClick={() => { setPage("Booking"); window.scrollTo(0,0); setMenuOpen(false); }}
          >
            Book Now
          </button>
          {/* Hamburger */}
          <button
            style={{ background:"none", border:"none", cursor:"pointer", display:"none", flexDirection:"column", gap:"5px" }}
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{ width:24, height:2, background:"var(--rose)", display:"block", borderRadius:2 }}/>
            <span style={{ width:18, height:2, background:"var(--rose)", display:"block", borderRadius:2 }}/>
            <span style={{ width:24, height:2, background:"var(--rose)", display:"block", borderRadius:2 }}/>
          </button>
        </div>
      </div>
      <style>{`
        @media(max-width:768px) {
          .hamburger { display: flex !important; }
          .btn-primary { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

// ─── WhatsApp FAB ─────────────────────────────────────────────────────────────
function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:48, marginBottom:48 }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", color:"white", fontStyle:"italic", marginBottom:12 }}>
              Amara Beauty
            </div>
            <p style={{ fontSize:"0.88rem", lineHeight:1.8, maxWidth:280 }}>
              Luxury makeup artistry for the modern woman. Transforming faces, elevating confidence, and creating timeless beauty memories.
            </p>
            <div className="flex gap-4 mt-6" style={{ gap:12, marginTop:24 }}>
              {["📷","📘","🐦","▶"].map((icon, i) => (
                <div key={i} className="social-link" style={{ background:"rgba(255,255,255,0.08)", borderColor:"rgba(255,255,255,0.15)", color:"rgba(255,255,255,0.7)" }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color:"white", fontWeight:600, marginBottom:20, letterSpacing:"1px", textTransform:"uppercase", fontSize:"0.78rem" }}>Quick Links</div>
            {["Home","About","Services","Pricing","Booking","Contact"].map(l => (
              <div key={l} style={{ marginBottom:10 }}>
                <a href="#" onClick={e => { e.preventDefault(); setPage(l); window.scrollTo(0,0); }}
                  style={{ color:"rgba(255,255,255,0.6)", textDecoration:"none", fontSize:"0.88rem", transition:"color 0.3s" }}
                  onMouseEnter={e => e.target.style.color="var(--soft-pink)"}
                  onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.6)"}
                >{l}</a>
              </div>
            ))}
          </div>
          <div>
            <div style={{ color:"white", fontWeight:600, marginBottom:20, letterSpacing:"1px", textTransform:"uppercase", fontSize:"0.78rem" }}>Contact</div>
            {[
              ["📍","Mumbai, Maharashtra, India"],
              ["📞","+91 98765 43210"],
              ["✉️","hello@amarabeauty.com"],
              ["🕐","Mon–Sat: 9am – 7pm"],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display:"flex", gap:10, marginBottom:14, fontSize:"0.85rem", alignItems:"flex-start" }}>
                <span>{icon}</span>
                <span style={{ color:"rgba(255,255,255,0.6)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:24, textAlign:"center", fontSize:"0.8rem", color:"rgba(255,255,255,0.4)" }}>
          © 2025 Amara Beauty. All rights reserved. Crafted with 💗 for luxury brides.
        </div>
      </div>
      <style>{`
        @media(max-width:768px) {
          .footer > .container > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  useReveal();

  const services = [
    { icon:"💍", title:"Bridal Makeup", desc:"Timeless bridal looks that last through every moment of your perfect day." },
    { icon:"✨", title:"Party Glam", desc:"Dazzling party looks that turn heads and light up any celebration." },
    { icon:"📸", title:"Editorial", desc:"High-fashion editorial makeup for shoots, campaigns & creative projects." },
    { icon:"💄", title:"HD Makeup", desc:"Flawless high-definition finish that looks stunning on camera and in life." },
  ];

  const testimonials = [
    { name:"Priya Sharma", role:"Bride, Dec 2024", stars:5, text:"Amara made me feel like an absolute goddess on my wedding day. The makeup lasted the entire 16-hour day without touch-ups!" },
    { name:"Kavya Mehta", role:"Fashion Blogger", stars:5, text:"I've worked with many artists, but Amara's editorial work is in a different league. Precision, creativity, and pure artistry." },
    { name:"Riya Patel", role:"Birthday Girl", stars:5, text:"My birthday glam was perfection. She understood my vision instantly and delivered something even more beautiful than I imagined." },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-blob-1"/>
        <div className="hero-blob-2"/>
        <div className="container" style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "100px",
  alignItems: "center",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "120px 80px"
}}>
          {/* Left */}
          <div>
            <div className="animate-fade-up" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(232,180,184,0.25)", border:"1px solid rgba(232,180,184,0.5)", borderRadius:50, padding:"8px 18px", marginBottom:28 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--rose)", display:"inline-block" }}/>
              <span style={{ fontSize:"0.72rem", fontWeight:500, letterSpacing:"2px", textTransform:"uppercase", color:"var(--rose)" }}>Mumbai's Luxury Makeup Artist</span>
            </div>
            <h1 className="animate-fade-up delay-1" style={{ fontSize:"clamp(2.8rem,5vw,4.2rem)", lineHeight:1.15, color:"var(--text-dark)" }}>
              Where Beauty<br/>
              <em style={{ color:"var(--rose)" }}>Becomes Art</em>
            </h1>
            <p className="animate-fade-up delay-2" style={{ marginTop:24, fontSize:"1.05rem", lineHeight:1.8, color:"var(--text-mid)", maxWidth:440 }}>
              Award-winning makeup artistry for brides, editorials & events. 
              Over 800 clients transformed with the magic touch of Amara.
            </p>
            <div className="animate-fade-up delay-3 flex gap-4" style={{ marginTop:40, gap:16, flexWrap:"wrap" }}>
              <button className="btn-primary" onClick={() => { setPage("Booking"); window.scrollTo(0,0); }}>
                ✨ Book a Session
              </button>
              <button className="btn-outline" onClick={() => { setPage("Services"); window.scrollTo(0,0); }}>
                View Services
              </button>
            </div>
            <div className="animate-fade-up delay-4 flex gap-6" style={{ marginTop:48, gap:32, flexWrap:"wrap" }}>
              {[["800+","Happy Clients"],["6+","Years Experience"],["150+","Bridal Looks"]].map(([num,label]) => (
                <div key={label}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2rem", color:"var(--rose)", fontWeight:700 }}>{num}</div>
                  <div style={{ fontSize:"0.78rem", color:"var(--text-light)", letterSpacing:"1px", textTransform:"uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="animate-slide-l delay-2" style={{ display:"flex", justifyContent:"center", paddingTop:40 }}>
            <div className="hero-image-frame">
              <div className="hero-img" style={{
                background:"linear-gradient(135deg, #E8B4B8 0%, #C06C84 40%, #9B4D6A 100%)",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexDirection:"column", gap:16
              }}>
                <div style={{ fontSize:"5rem" }}>💄</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", color:"white", fontStyle:"italic" }}>Amara Beauty</div>
                <div style={{ fontSize:"0.7rem", letterSpacing:"3px", color:"rgba(255,255,255,0.8)", textTransform:"uppercase" }}>Luxury Artistry</div>
              </div>
              <div className="hero-badge animate-float">
                <div style={{ fontSize:"0.65rem", color:"var(--text-light)", letterSpacing:"1px", textTransform:"uppercase" }}>Top Rated</div>
                <div className="flex items-center gap-4" style={{ gap:6, marginTop:4 }}>
                  <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", fontWeight:700, color:"var(--rose)" }}>4.9</span>
                  <span className="stars">★★★★★</span>
                </div>
                <div style={{ fontSize:"0.7rem", color:"var(--text-light)", marginTop:2 }}>Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px) {
            .hero-section > .container { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; padding-top: 40px !important; }
            .hero-section .animate-fade-up.flex { justify-content: center; }
            .hero-section .animate-fade-up.flex.gap-6 { justify-content: center; }
          }
        `}</style>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="text-center mb-8 reveal" style={{ marginBottom:60 }}>
            <span className="section-tag">What I Offer</span>
            <h2 className="section-title">Signature Services</h2>
            <div className="section-divider"/>
            <p style={{ marginTop:20, color:"var(--text-mid)", maxWidth:500, margin:"20px auto 0", lineHeight:1.8 }}>
              From ethereal bridal looks to bold editorial statements — tailored exclusively for you.
            </p>
          </div>
          <div className="grid-4">
            {services.map((s, i) => (
              <div key={i} className={`card-glass service-card reveal`} style={{ padding:"32px 24px", animationDelay:`${i*0.1}s` }}>
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ fontSize:"1.1rem", marginBottom:10, color:"var(--text-dark)" }}>{s.title}</h3>
                <p style={{ fontSize:"0.87rem", color:"var(--text-mid)", lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal" style={{ marginTop:48 }}>
            <button className="btn-outline" onClick={() => { setPage("Services"); window.scrollTo(0,0); }}>
              Explore All Services →
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="section" style={{ background:"var(--beige)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
            <div className="reveal">
              <div style={{
                width:"100%", aspectRatio:"4/5", borderRadius:28,
                background:"linear-gradient(145deg, var(--soft-pink), var(--rose))",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexDirection:"column", gap:12, position:"relative", overflow:"hidden"
              }}>
                <div style={{ fontSize:"6rem" }}>🎨</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.3rem", color:"white", fontStyle:"italic" }}>The Artist</div>
                <div style={{
                  position:"absolute", top:20, right:20,
                  background:"white", borderRadius:14, padding:"12px 18px",
                  boxShadow:"0 8px 30px rgba(0,0,0,0.1)"
                }}>
                  <div style={{ fontSize:"0.65rem", color:"var(--text-light)", letterSpacing:"1px", textTransform:"uppercase" }}>Est.</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", color:"var(--rose)", fontWeight:700 }}>2018</div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <span className="section-tag">My Story</span>
              <h2 className="section-title" style={{ textAlign:"left", marginBottom:20 }}>
                Crafting Beauty,<br/><em style={{ color:"var(--rose)" }}>One Brushstroke</em><br/>at a Time
              </h2>
              <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:20 }}>
                Hi, I'm Amara — a luxury makeup artist based in Mumbai with over 6 years of experience in bridal, editorial, and event makeup. My philosophy is simple: every face tells a story, and makeup is just the ink.
              </p>
              <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:32 }}>
                Trained at CIDESCO and certified by MAC Cosmetics, I combine technical precision with artistic intuition to create looks that feel authentically you — only elevated.
              </p>
              <button className="btn-primary" onClick={() => { setPage("About"); window.scrollTo(0,0); }}>
                Read My Story
              </button>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:900px) {
            .section > .container > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:60 }}>
            <span className="section-tag">Packages</span>
            <h2 className="section-title">Investment in Beauty</h2>
            <div className="section-divider"/>
          </div>
          <div className="grid-3">
            {[
              { name:"Glow", price:"₹4,999", features:["1 makeup look","Trial session","2hr appointment","Premium products"], featured:false },
              { name:"Luxe Bride", price:"₹18,999", features:["Bridal + trials","Pre-bridal skin prep","6-8hr coverage","Touch-up kit included","Assistant MUA"], featured:true },
              { name:"Editorial", price:"₹9,999", features:["Creative concept","HD finish","4hr session","2 complete looks"], featured:false },
            ].map((p, i) => (
              <div
                key={i}
                className={`pricing-card reveal ${p.featured ? "featured" : "card-glass"}`}
                style={!p.featured ? { background:"white", border:"1.5px solid rgba(232,180,184,0.3)" } : {}}
              >
                {p.featured && <div style={{ position:"absolute", top:20, right:20, background:"rgba(255,255,255,0.2)", borderRadius:20, padding:"4px 12px", fontSize:"0.7rem", letterSpacing:"1px", textTransform:"uppercase" }}>Most Popular</div>}
                <div style={{ fontSize:"0.75rem", letterSpacing:"2px", textTransform:"uppercase", marginBottom:12, opacity:p.featured?0.8:1, color:p.featured?"rgba(255,255,255,0.8)":"var(--text-light)" }}>{p.name}</div>
                <div className="price-number" style={{ color:p.featured?"white":"var(--rose)" }}>{p.price}</div>
                <div style={{ fontSize:"0.8rem", opacity:0.6, marginBottom:28, color:p.featured?"white":"var(--text-light)" }}>Starting from</div>
                <div style={{ borderTop:`1px solid ${p.featured?"rgba(255,255,255,0.2)":"rgba(232,180,184,0.3)"}`, paddingTop:24, marginBottom:28 }}>
                  {p.features.map((f,j) => (
                    <div key={j} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, fontSize:"0.87rem", color:p.featured?"rgba(255,255,255,0.9)":"var(--text-mid)" }}>
                      <span style={{ color:p.featured?"rgba(255,255,255,0.8)":"var(--rose)" }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <button
                  className={p.featured ? "btn-outline" : "btn-primary"}
                  style={p.featured ? { color:"white", borderColor:"rgba(255,255,255,0.6)", width:"100%", justifyContent:"center" } : { width:"100%", justifyContent:"center" }}
                  onClick={() => { setPage("Booking"); window.scrollTo(0,0); }}
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background:"var(--nude)" }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:60 }}>
            <span className="section-tag">Kind Words</span>
            <h2 className="section-title">What My Brides Say</h2>
            <div className="section-divider"/>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card reveal`}>
                <div style={{ paddingTop:24 }}>
                  <div className="stars" style={{ marginBottom:14 }}>{"★".repeat(t.stars)}</div>
                  <p style={{ fontSize:"0.92rem", color:"var(--text-mid)", lineHeight:1.8, fontStyle:"italic" }}>"{t.text}"</p>
                  <div style={{ marginTop:24, display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg, var(--soft-pink), var(--rose))", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontWeight:600, fontSize:"1.1rem" }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:"0.9rem", color:"var(--text-dark)" }}>{t.name}</div>
                      <div style={{ fontSize:"0.75rem", color:"var(--text-light)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div style={{ position:"relative", zIndex:1 }}>
          <div className="reveal" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3.2rem)", marginBottom:16, lineHeight:1.3 }}>
            Ready to Look & Feel<br/><em>Absolutely Stunning?</em>
          </div>
          <p className="reveal" style={{ opacity:0.85, marginBottom:40, fontSize:"1.05rem", maxWidth:480, margin:"0 auto 40px" }}>
            Limited bookings available each month. Secure your date with Amara today.
          </p>
          <div className="reveal flex gap-4" style={{ justifyContent:"center", gap:16, flexWrap:"wrap" }}>
            <button
              style={{ background:"white", color:"var(--rose)", fontFamily:"'Poppins',sans-serif", fontSize:"0.85rem", fontWeight:600, letterSpacing:"1.5px", textTransform:"uppercase", padding:"14px 36px", borderRadius:50, border:"none", cursor:"pointer", transition:"all 0.3s", boxShadow:"0 8px 25px rgba(0,0,0,0.15)" }}
              onMouseEnter={e => { e.target.style.transform="translateY(-3px)"; e.target.style.boxShadow="0 16px 40px rgba(0,0,0,0.2)"; }}
              onMouseLeave={e => { e.target.style.transform=""; e.target.style.boxShadow="0 8px 25px rgba(0,0,0,0.15)"; }}
              onClick={() => { setPage("Booking"); window.scrollTo(0,0); }}
            >
              ✨ Book Your Session
            </button>
            <button
              style={{ background:"transparent", color:"white", fontFamily:"'Poppins',sans-serif", fontSize:"0.85rem", fontWeight:500, letterSpacing:"1.5px", textTransform:"uppercase", padding:"13px 34px", borderRadius:50, border:"1.5px solid rgba(255,255,255,0.6)", cursor:"pointer", transition:"all 0.3s" }}
              onMouseEnter={e => { e.target.style.background="rgba(255,255,255,0.15)"; e.target.style.transform="translateY(-3px)"; }}
              onMouseLeave={e => { e.target.style.background="transparent"; e.target.style.transform=""; }}
              onClick={() => { setPage("Contact"); window.scrollTo(0,0); }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage() {
  useReveal();

  const stats = [
    { num:"800+", label:"Happy Clients" },
    { num:"6+", label:"Years of Artistry" },
    { num:"150+", label:"Bridal Looks" },
    { num:"12+", label:"Awards Won" },
  ];

  const timeline = [
    { year:"2018", title:"The Beginning", desc:"Graduated from CIDESCO International and started my journey in Mumbai's beauty scene." },
    { year:"2019", title:"MAC Certified", desc:"Completed advanced certification with MAC Cosmetics in NYC. Specialized in HD and airbrush techniques." },
    { year:"2021", title:"Editorial Breakthrough", desc:"Featured in Vogue India's bridal issue. Worked with top-tier fashion photographers across India." },
    { year:"2023", title:"500 Brides Milestone", desc:"Celebrated the milestone of transforming 500 brides. Launched signature skincare-first approach." },
    { year:"2025", title:"Today", desc:"Mumbai's most sought-after luxury makeup artist. Amara Beauty Studio opens its doors." },
  ];

  return (
    <div className="page-wrap animate-page-in">
      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg, var(--nude) 0%, var(--soft-pink) 100%)", padding:"80px 0 60px", textAlign:"center" }}>
        <div className="container">
          <span className="section-tag reveal">My Journey</span>
          <h1 className="section-title reveal" style={{ marginTop:8 }}>Behind the Brush</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{ marginTop:24, color:"var(--text-mid)", maxWidth:560, margin:"24px auto 0", lineHeight:1.8 }}>
            I'm Amara Singh — an artist who believes that true beauty is about authenticity, confidence, and feeling like the best version of yourself.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
            <div className="reveal">
              <div style={{ position:"relative" }}>
                <div style={{
                  width:"100%", aspectRatio:"3/4", borderRadius:28,
                  background:"linear-gradient(145deg, #E8B4B8, #C06C84, #9B4D6A)",
                  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16
                }}>
                  <div style={{ fontSize:"7rem" }}>💋</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", color:"white", fontSize:"1.4rem", fontStyle:"italic" }}>Amara Singh</div>
                  <div style={{ color:"rgba(255,255,255,0.8)", fontSize:"0.8rem", letterSpacing:"2px", textTransform:"uppercase" }}>Lead Makeup Artist</div>
                </div>
                <div style={{ position:"absolute", bottom:-20, right:-20, background:"white", borderRadius:20, padding:"20px 24px", boxShadow:"0 10px 40px rgba(192,108,132,0.2)" }}>
                  <div style={{ fontSize:"2rem", fontFamily:"'Playfair Display',serif", color:"var(--rose)", fontWeight:700 }}>6+</div>
                  <div style={{ fontSize:"0.72rem", color:"var(--text-light)", letterSpacing:"1px", textTransform:"uppercase" }}>Years of Magic</div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <span className="section-tag">The Artist</span>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.4rem", marginBottom:24, lineHeight:1.3 }}>
                Passion Meets<br/><em style={{ color:"var(--rose)" }}>Precision</em>
              </h2>
              <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:20 }}>
                Growing up surrounded by art in a family of painters, I discovered my canvas wasn't walls or paper — it was faces. My first kit was borrowed from my mother's vanity, and somehow, that's where my story began.
              </p>
              <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:20 }}>
                Today, I lead a boutique studio in South Mumbai, catering exclusively to clients who value artistry over assembly-line beauty. Every appointment begins with a consultation that goes deeper than skin — I want to know how you want to feel.
              </p>
              <p style={{ color:"var(--text-mid)", lineHeight:1.9, marginBottom:32 }}>
                I'm CIDESCO certified, MAC trained, and obsessed with skincare as the foundation of all great makeup. My kit features only cruelty-free, luxury brands chosen for performance and ethics.
              </p>
              <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
                {["CIDESCO Certified","MAC Trained","Cruelty-Free Artist","Vogue India Featured"].map((tag, i) => (
                  <span key={i} style={{ background:"var(--nude)", color:"var(--rose)", fontSize:"0.75rem", fontWeight:500, letterSpacing:"1px", padding:"8px 16px", borderRadius:50, border:"1px solid var(--soft-pink)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:"var(--beige)", padding:"60px 0" }}>
        <div className="container">
          <div className="grid-4">
            {stats.map((s, i) => (
              <div key={i} className="about-stat reveal">
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.8rem", color:"var(--rose)", fontWeight:700 }}>{s.num}</div>
                <div style={{ fontSize:"0.78rem", color:"var(--text-light)", letterSpacing:"1.5px", textTransform:"uppercase", marginTop:4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom:60 }}>
            <span className="section-tag">Journey</span>
            <h2 className="section-title">My Story in Milestones</h2>
            <div className="section-divider"/>
          </div>
          <div style={{ maxWidth:700, margin:"0 auto", position:"relative" }}>
            <div style={{ position:"absolute", left:30, top:0, bottom:0, width:2, background:"linear-gradient(to bottom, var(--soft-pink), var(--rose))", borderRadius:2 }}/>
            {timeline.map((t, i) => (
              <div key={i} className="reveal" style={{ display:"flex", gap:40, marginBottom:40, paddingLeft:70, position:"relative" }}>
                <div style={{ position:"absolute", left:20, top:8, width:22, height:22, borderRadius:"50%", background:"linear-gradient(135deg, var(--soft-pink), var(--rose))", border:"3px solid white", boxShadow:"0 4px 12px rgba(192,108,132,0.3)" }}/>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"0.72rem", color:"var(--rose)", fontWeight:600, letterSpacing:"2px", textTransform:"uppercase", marginBottom:6 }}>{t.year}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", marginBottom:8, color:"var(--text-dark)" }}>{t.title}</div>
                  <p style={{ fontSize:"0.9rem", color:"var(--text-mid)", lineHeight:1.7 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesPage({ setPage }) {
  useReveal();

  const services = [
    {
      icon:"💍", name:"Bridal Makeup",
      desc:"Your wedding day deserves nothing less than perfection. I create timeless bridal looks that complement your personality, skin tone, and wedding theme — built to last through tears, hugs, and dancing.",
      features:["Trial session included","6-12 hour wear guarantee","Airbrush or traditional finish","HD camera-ready","Touch-up kit provided"],
      tag:"Most Booked"
    },
    {
      icon:"🥂", name:"Reception Glam",
      desc:"A statement look for the night you celebrate love. Bold, luminous, and unforgettable — the reception look is your chance to go glam.",
      features:["Consultation included","Drama lashes","Contouring","Glossy or matte finish"],
      tag:null
    },
    {
      icon:"✨", name:"Party Makeup",
      desc:"Whether it's a birthday, anniversary, or social soirée — look absolutely stunning. Quick, precise, and party-perfect.",
      features:["2hr session","Customizable look","Includes eye & lip"],
      tag:"Popular"
    },
    {
      icon:"📸", name:"Editorial & Fashion",
      desc:"High-concept, boundary-pushing makeup for editorial shoots, fashion campaigns, and creative projects.",
      features:["Concept planning","Multiple looks","Extreme pigment techniques","Artistic direction"],
      tag:null
    },
    {
      icon:"💆", name:"HD Makeup",
      desc:"Ultra-smooth, pore-minimizing, camera-perfect HD finish using airbrushing and premium HD formulas for events and photography.",
      features:["Airbrush technique","Full HD kit","Camera & lighting tested"],
      tag:null
    },
    {
      icon:"🌟", name:"Engagement Makeup",
      desc:"Your first official look as a soon-to-be-bride. Let's make it glow with a romantic, dewy, and luminous look.",
      features:["Skin-focused formula","Glow & dewy finish","2 look options"],
      tag:null
    },
    {
      icon:"🎭", name:"Special FX",
      desc:"Fantasy, horror, avant-garde — theatrical and special effects makeup for films, theatre, and concept shoots.",
      features:["Prosthetics","Body paint","Film-grade materials"],
      tag:null
    },
    {
      icon:"👑", name:"Pre-Bridal Care",
      desc:"A complete pre-wedding beauty regimen with multiple sessions designed to prep your skin for flawless makeup on the big day.",
      features:["3-session package","Facial treatments","Skin analysis","Product recommendations"],
      tag:"New"
    },
  ];

  return (
    <div className="page-wrap animate-page-in">
      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg, #F5E6E0 0%, #E8B4B8 100%)", padding:"80px 0 60px", textAlign:"center" }}>
        <div className="container">
          <span className="section-tag reveal">Expertise</span>
          <h1 className="section-title reveal" style={{ marginTop:8 }}>Services & Specialties</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{ marginTop:24, color:"var(--text-mid)", maxWidth:540, margin:"24px auto 0", lineHeight:1.8 }}>
            Each service is crafted with intention, using only premium cruelty-free products and personalized to your unique beauty.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section" style={{ background:"var(--beige)" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:28 }}>
            {services.map((s, i) => (
              <div key={i} className="card-glass reveal service-card" style={{ padding:"36px 32px", position:"relative" }}>
                {s.tag && (
                  <span style={{ position:"absolute", top:20, right:20, background:"var(--rose)", color:"white", fontSize:"0.65rem", fontWeight:600, letterSpacing:"1.5px", textTransform:"uppercase", padding:"5px 12px", borderRadius:50 }}>
                    {s.tag}
                  </span>
                )}
                <div style={{ display:"flex", gap:20, alignItems:"flex-start", marginBottom:20 }}>
                  <div className="service-icon" style={{ flexShrink:0 }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.35rem", color:"var(--text-dark)", paddingTop:8 }}>{s.name}</h3>
                </div>
                <p style={{ fontSize:"0.9rem", color:"var(--text-mid)", lineHeight:1.8, marginBottom:20 }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {s.features.map((f, j) => (
                    <span key={j} style={{ fontSize:"0.75rem", color:"var(--rose)", background:"rgba(192,108,132,0.08)", padding:"5px 12px", borderRadius:50, border:"1px solid rgba(192,108,132,0.2)" }}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center reveal" style={{ marginTop:60 }}>
            <p style={{ color:"var(--text-mid)", marginBottom:24 }}>Ready to experience the Amara Beauty difference?</p>
            <button className="btn-primary" onClick={() => { setPage("Booking"); window.scrollTo(0,0); }}>
              Book Your Session
            </button>
          </div>
        </div>
        <style>{`@media(max-width:768px){ .section .container > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </div>
  );
}

// ─── PRICING PAGE ─────────────────────────────────────────────────────────────
function PricingPage({ setPage }) {
  useReveal();

  const packages = [
    {
      name:"Glow",
      subtitle:"Perfect for parties & events",
      price:"₹4,999",
      color:"var(--nude)",
      featured:false,
      features:[
        "1 complete makeup look",
        "Consultation included",
        "2-hour appointment",
        "Premium product kit",
        "Basic lash application",
        "Setting spray finish",
      ],
      notIncluded:["Airbrush","Trial session","Touch-up kit"]
    },
    {
      name:"Luxe Bride",
      subtitle:"The ultimate bridal experience",
      price:"₹18,999",
      color:"var(--rose)",
      featured:true,
      features:[
        "Bridal + Reception looks",
        "Engagement makeup",
        "3 trial sessions",
        "Pre-bridal skin consultation",
        "6-8hr coverage",
        "Assistant MUA included",
        "Touch-up kit gifted",
        "HD airbrush technique",
        "Premium lash set",
        "On-call support",
      ],
      notIncluded:[]
    },
    {
      name:"Editorial",
      subtitle:"For shoots & creative projects",
      price:"₹9,999",
      color:"var(--soft-pink)",
      featured:false,
      features:[
        "2 complete editorial looks",
        "Concept consultation",
        "4-hour session",
        "HD & airbrush finish",
        "Colour correcting",
        "Body & neck makeup",
      ],
      notIncluded:["Trial session","Touch-up kit"]
    },
  ];

  return (
    <div className="page-wrap animate-page-in">
      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg, var(--nude), var(--soft-pink))", padding:"80px 0 60px", textAlign:"center" }}>
        <div className="container">
          <span className="section-tag reveal">Investment</span>
          <h1 className="section-title reveal" style={{ marginTop:8 }}>Pricing & Packages</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{ marginTop:24, color:"var(--text-mid)", maxWidth:520, margin:"24px auto 0", lineHeight:1.8 }}>
            Transparent pricing. Premium results. Every package includes a full consultation and personalized approach.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28, alignItems:"start" }}>
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  borderRadius:28,
                  overflow:"hidden",
                  boxShadow: pkg.featured ? "0 25px 70px rgba(192,108,132,0.35)" : "0 4px 30px rgba(192,108,132,0.1)",
                  transition:"all 0.4s ease",
                  transform: pkg.featured ? "scale(1.04)" : "scale(1)",
                }}
                onMouseEnter={e => { if(!pkg.featured) e.currentTarget.style.transform="translateY(-8px)"; }}
                onMouseLeave={e => { if(!pkg.featured) e.currentTarget.style.transform=""; }}
              >
                {/* Header */}
                <div style={{
                  background: pkg.featured
                    ? "linear-gradient(135deg, var(--rose), var(--deep-rose))"
                    : `linear-gradient(135deg, var(--nude), var(--soft-pink))`,
                  padding:"36px 32px",
                  color: pkg.featured ? "white" : "var(--text-dark)",
                  textAlign:"center",
                  position:"relative"
                }}>
                  {pkg.featured && (
                    <div style={{ position:"absolute", top:16, right:16, background:"rgba(255,255,255,0.2)", borderRadius:20, padding:"4px 14px", fontSize:"0.68rem", letterSpacing:"1.5px", textTransform:"uppercase", color:"white" }}>
                      ★ Best Value
                    </div>
                  )}
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.6rem", marginBottom:4, fontWeight:700 }}>{pkg.name}</div>
                  <div style={{ fontSize:"0.78rem", opacity:0.75, marginBottom:24, letterSpacing:"0.5px" }}>{pkg.subtitle}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"3.2rem", fontWeight:700, lineHeight:1 }}>{pkg.price}</div>
                  <div style={{ fontSize:"0.75rem", opacity:0.65, marginTop:4 }}>starting from</div>
                </div>
                {/* Body */}
                <div style={{ background:"white", padding:"32px" }}>
                  <div style={{ marginBottom:20 }}>
                    {pkg.features.map((f, j) => (
                      <div key={j} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, fontSize:"0.87rem", color:"var(--text-mid)" }}>
                        <span style={{ color:"var(--rose)", fontSize:"1rem" }}>✓</span> {f}
                      </div>
                    ))}
                    {pkg.notIncluded.map((f, j) => (
                      <div key={j} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, fontSize:"0.87rem", color:"#ccc" }}>
                        <span style={{ color:"#ddd" }}>✕</span> <s>{f}</s>
                      </div>
                    ))}
                  </div>
                  <button
                    className={pkg.featured ? "btn-primary" : "btn-outline"}
                    style={{ width:"100%", justifyContent:"center" }}
                    onClick={() => { setPage("Booking"); window.scrollTo(0,0); }}
                  >
                    Book {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom note */}
          <div className="reveal" style={{ marginTop:60, textAlign:"center", background:"var(--nude)", borderRadius:20, padding:"40px 32px" }}>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.4rem", marginBottom:12 }}>
              Need Something Custom? 💌
            </div>
            <p style={{ color:"var(--text-mid)", maxWidth:500, margin:"0 auto 24px", lineHeight:1.8 }}>
              For multi-day weddings, destination bookings, group events, or celebrity bookings — let's create a personalized package just for you.
            </p>
            <button className="btn-primary" onClick={() => { setPage("Contact"); window.scrollTo(0,0); }}>
              Request Custom Quote
            </button>
          </div>
        </div>
        <style>{`@media(max-width:900px){ section > .container > div:first-of-type { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </div>
  );
}

// ─── BOOKING PAGE ─────────────────────────────────────────────────────────────
function BookingPage() {
  useReveal();
  const [form, setForm] = useState({ name:"", phone:"", email:"", date:"", service:"", notes:"", time:"" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if(!form.name.trim()) e.name = "Full name is required";
    if(!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone.replace(/\s+/g,""))) e.phone = "Enter a valid 10-digit phone number";
    if(!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address";
    if(!form.date) e.date = "Please select a preferred date";
    if(!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if(Object.keys(e).length === 0) setSubmitted(true);
  };

  const services = ["Bridal Makeup","Reception Makeup","Party Makeup","Engagement Makeup","Editorial Makeup","HD Makeup","Pre-Bridal Package","Custom Package"];
  const times = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];

  return (
    <div className="page-wrap animate-page-in">
      <div style={{ background:"linear-gradient(135deg, var(--nude), var(--soft-pink))", padding:"80px 0 60px", textAlign:"center" }}>
        <div className="container">
          <span className="section-tag reveal">Reserve Your Date</span>
          <h1 className="section-title reveal" style={{ marginTop:8 }}>Book a Session</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{ marginTop:20, color:"var(--text-mid)", maxWidth:480, margin:"20px auto 0", lineHeight:1.8 }}>
            Fill in the form below and Amara will confirm your appointment within 24 hours.
          </p>
        </div>
      </div>

      <section className="section" style={{ background:"white" }}>
        <div className="container" style={{ maxWidth:780 }}>
          {submitted ? (
            <div className="reveal text-center" style={{ padding:"80px 40px", background:"var(--nude)", borderRadius:28 }}>
              <div style={{ fontSize:"4rem", marginBottom:20 }}>🌸</div>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"2rem", color:"var(--rose)", marginBottom:16 }}>Booking Received!</h2>
              <p style={{ color:"var(--text-mid)", lineHeight:1.8, maxWidth:400, margin:"0 auto 32px" }}>
                Thank you, {form.name}! Your request has been received. Amara will reach out within 24 hours to confirm your booking.
              </p>
              <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",date:"",service:"",notes:"",time:"" }); }}>
                Make Another Booking
              </button>
            </div>
          ) : (
            <div className="card-glass reveal" style={{ padding:"52px 48px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:24 }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className={`form-input${errors.name?" error":""}`} placeholder="Your full name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input className={`form-input${errors.phone?" error":""}`} placeholder="10-digit mobile number" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom:24 }}>
                <label className="form-label">Email Address *</label>
                <input className={`form-input${errors.email?" error":""}`} type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:24 }}>
                <div className="form-group">
                  <label className="form-label">Preferred Date *</label>
                  <input className={`form-input${errors.date?" error":""}`} type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={e => setForm({...form,date:e.target.value})} />
                  {errors.date && <span className="error-msg">{errors.date}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Time</label>
                  <select className="form-input" value={form.time} onChange={e => setForm({...form,time:e.target.value})}>
                    <option value="">Select time slot</option>
                    {times.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom:24 }}>
                <label className="form-label">Service Required *</label>
                <select className={`form-input${errors.service?" error":""}`} value={form.service} onChange={e => setForm({...form,service:e.target.value})}>
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s}>{s}</option>)}
                </select>
                {errors.service && <span className="error-msg">{errors.service}</span>}
              </div>
              <div className="form-group" style={{ marginBottom:36 }}>
                <label className="form-label">Additional Notes</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Tell me about your event, inspiration, skin concerns, or any specific requirements..."
                  value={form.notes}
                  onChange={e => setForm({...form,notes:e.target.value})}
                  style={{ resize:"vertical" }}
                />
              </div>
              <button className="btn-primary" style={{ width:"100%", justifyContent:"center", padding:"16px" }} onClick={handleSubmit}>
                ✨ Confirm Booking Request
              </button>
              <p style={{ textAlign:"center", marginTop:16, fontSize:"0.78rem", color:"var(--text-light)" }}>
                You'll receive a confirmation within 24 hours. No deposit required to enquire.
              </p>
            </div>
          )}
        </div>
        <style>{`@media(max-width:600px){ .card-glass { padding: 28px 20px !important; } .card-glass > div:first-child, .card-glass > div:nth-child(4) { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </div>
  );
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function ContactPage() {
  useReveal();
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if(form.name && form.email && form.message) setSent(true);
  };

  return (
    <div className="page-wrap animate-page-in">
      <div style={{ background:"linear-gradient(135deg, var(--nude), var(--soft-pink))", padding:"80px 0 60px", textAlign:"center" }}>
        <div className="container">
          <span className="section-tag reveal">Get In Touch</span>
          <h1 className="section-title reveal" style={{ marginTop:8 }}>Let's Connect</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{ marginTop:20, color:"var(--text-mid)", maxWidth:480, margin:"20px auto 0", lineHeight:1.8 }}>
            Have questions about services, pricing, or availability? I'd love to hear from you.
          </p>
        </div>
      </div>

      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:60, alignItems:"start" }}>
            {/* Info */}
            <div className="reveal">
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.6rem", marginBottom:28 }}>Studio Information</h3>
              {[
                { icon:"📍", title:"Studio Address", info:"Amara Beauty Studio\n202, Harmony Heights,\nPedder Road, South Mumbai\nMaharashtra 400 026" },
                { icon:"📞", title:"Phone & WhatsApp", info:"+91 98765 43210" },
                { icon:"✉️", title:"Email", info:"hello@amarabeauty.com\nbookings@amarabeauty.com" },
                { icon:"🕐", title:"Working Hours", info:"Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: By appointment only" },
              ].map((item, i) => (
                <div key={i} style={{ display:"flex", gap:18, marginBottom:28, padding:"24px", background:"var(--beige)", borderRadius:16, transition:"all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow="var(--shadow-soft)"; e.currentTarget.style.transform="translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow=""; e.currentTarget.style.transform=""; }}
                >
                  <div style={{ fontSize:"1.5rem", flexShrink:0, marginTop:2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight:600, fontSize:"0.85rem", color:"var(--rose)", letterSpacing:"1px", textTransform:"uppercase", marginBottom:6 }}>{item.title}</div>
                    <div style={{ fontSize:"0.9rem", color:"var(--text-mid)", lineHeight:1.7, whiteSpace:"pre-line" }}>{item.info}</div>
                  </div>
                </div>
              ))}
              {/* Social */}
              <div>
                <div style={{ fontWeight:600, fontSize:"0.78rem", color:"var(--text-light)", letterSpacing:"2px", textTransform:"uppercase", marginBottom:16 }}>Follow Along</div>
                <div style={{ display:"flex", gap:12 }}>
                  {[["📷","@amarabeauty_official"],["📘","Amara Beauty"],["🐦","@amarabeauty"],["▶","Amara Beauty Studio"]].map(([icon, handle], i) => (
                    <div key={i} className="social-link" title={handle}>{icon}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal">
              {sent ? (
                <div style={{ textAlign:"center", padding:"60px 40px", background:"var(--nude)", borderRadius:24 }}>
                  <div style={{ fontSize:"3rem", marginBottom:16 }}>💌</div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.8rem", color:"var(--rose)", marginBottom:12 }}>Message Sent!</h3>
                  <p style={{ color:"var(--text-mid)", lineHeight:1.8 }}>Thank you for reaching out! I'll respond within 24 hours.</p>
                  <button className="btn-outline" style={{ marginTop:28 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              ) : (
                <div className="card-glass" style={{ padding:"44px 40px" }}>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", marginBottom:28, color:"var(--text-dark)" }}>Send a Message</h3>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:20 }}>
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input className="form-input" placeholder="Full name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom:20 }}>
                    <label className="form-label">Subject</label>
                    <input className="form-input" placeholder="What's this about?" value={form.subject} onChange={e => setForm({...form,subject:e.target.value})} />
                  </div>
                  <div className="form-group" style={{ marginBottom:28 }}>
                    <label className="form-label">Message</label>
                    <textarea className="form-input" rows={5} placeholder="Tell me anything..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} style={{ resize:"vertical" }} />
                  </div>
                  <button className="btn-primary" style={{ width:"100%", justifyContent:"center" }} onClick={handleSend}>
                    Send Message 💌
                  </button>
                </div>
              )}

              {/* Map placeholder */}
              <div style={{ marginTop:28, borderRadius:20, overflow:"hidden", height:260, background:"linear-gradient(135deg, var(--nude), var(--soft-pink))", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", boxShadow:"var(--shadow-soft)" }}>
                <div style={{ fontSize:"3rem", marginBottom:12 }}>📍</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.1rem", color:"var(--text-dark)", fontStyle:"italic" }}>Amara Beauty Studio</div>
                <div style={{ fontSize:"0.82rem", color:"var(--text-mid)", marginTop:6 }}>Pedder Road, South Mumbai</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop:16, fontSize:"0.78rem", color:"var(--rose)", fontWeight:600, textDecoration:"none", letterSpacing:"1px", textTransform:"uppercase", background:"white", padding:"8px 20px", borderRadius:50, boxShadow:"0 4px 16px rgba(192,108,132,0.2)" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ section > .container > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch(page) {
      case "Home":     return <HomePage setPage={setPage} />;
      case "About":    return <AboutPage />;
      case "Services": return <ServicesPage setPage={setPage} />;
      case "Pricing":  return <PricingPage setPage={setPage} />;
      case "Booking":  return <BookingPage />;
      case "Contact":  return <ContactPage />;
      default:         return <HomePage setPage={setPage} />;
    }
  };

  return (
    <>
      <FontLink />
      <title>Amara Beauty | Luxury Makeup Artist Mumbai</title>
      <Navbar currentPage={page} setPage={setPage} />
      <main key={page} className="animate-page-in">
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
      <WhatsAppFAB />
    </>
  );
}