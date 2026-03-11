import { useState, useEffect } from "react";
import heroImage from "./assets/hero.jpg";


// ─── Indian Bridal & Makeup Image URLs ───────────────────────────────────────

const IMGS = {

  // HERO — bride getting makeup done
  hero: "https://images.unsplash.com/photo-1705351509122-d6c066fce38d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ARTIST WITH CLIENT
  artist: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80&fit=crop",
  artistAbout: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop",

  // SERVICES (interactive beauty work)
  svcBridal: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80&fit=crop",
  svcReception: "https://plus.unsplash.com/premium_photo-1724762184456-002573e89988?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  svcParty: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80&fit=crop",
  svcEditorial: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?w=600&q=80&fit=crop",
  svcHD: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80&fit=crop",
  svcEngagement: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=600&q=80&fit=crop",
  svcFX: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=600&q=80&fit=crop",
  svcPreBridal: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80&fit=crop",

  // PORTFOLIO (makeup process + bride ready looks)
  port1: "https://images.unsplash.com/photo-1753499860637-6b6961c8b603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  port2: "https://media.istockphoto.com/id/2135241393/photo/stunning-indian-bride-adorned-in-a-traditional-red-bridal-lehenga-gracefully-wears-heavy-gold.jpg?s=2048x2048&w=is&k=20&c=nl_Vf4H86S1TA8ksqdrSAgqPGbYVXvj0heTsS6yyprQ=",
  port3: "https://plus.unsplash.com/premium_photo-1724762183198-5d04b568772f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  port4: "https://media.istockphoto.com/id/2230986504/photo/woman-in-golden-dress-with-ornate-jewelry-during-festival.jpg?s=2048x2048&w=is&k=20&c=nP_rwTj3eLdXaoqj5nl1LBsXg5Q2fF7HtULhPzigDMk=",
  port5: "https://images.unsplash.com/photo-1645862757800-c15d95acd07a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  port6: "https://plus.unsplash.com/premium_photo-1683133987810-188ba2f7b3e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  port7: "https://images.unsplash.com/photo-1620025717384-f98be8f9aa78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  port8: "https://media.istockphoto.com/id/2225178758/photo/portrait-of-very-beautiful-young-indian-bride-in-luxurious-bridal-costume-with-makeup-and.jpg?s=2048x2048&w=is&k=20&c=EAV0RlsTunr83o2eetcsW6HqepXc-4Kga_pH3dokMlI=",
  port9: "https://media.istockphoto.com/id/1665311883/photo/dancer-looking-at-mirror-during-makeup.jpg?s=2048x2048&w=is&k=20&c=NzeIvYxXkW3-5nS76jk7DLfkaGlVKX5FvtTLY1whL9U=",
  port10: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80&fit=crop",
  port11: "https://media.istockphoto.com/id/1939814211/photo/portrait-of-traditional-indian-bride-smiling-and-looking-at-camera-dulhan-closeup.jpg?s=2048x2048&w=is&k=20&c=e0cx_qWR4fEhjU8WqBRLG9gT-G_XqAr7N2CXvZxgyck=",
  port12: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80&fit=crop",

  // TESTIMONIAL CLIENTS
  t1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fit=crop&crop=faces",
  t2: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80&fit=crop&crop=faces",
  t3: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&q=80&fit=crop&crop=faces",

  // STUDIO
  studio: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80&fit=crop"
};
// ─── SVG Icon Components ──────────────────────────────────────────────────────
const Icon = ({ name, size = 24, color = "currentColor", style = {} }) => {
  const icons = {
    award: <><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    diamond: <path d="M6 3h12l4 6-10 13L2 9z M2 9h20 M6 3l4 6 M18 3l-4 6"/>,
    camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    mapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    clock:  <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    car:    <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    twitter: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>,
    youtube: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    x:     <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    menu:  <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    send:  <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    ring:  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></>,
    sparkle: <><path d="M12 3L13.5 8.5H19L14.5 12L16 17.5L12 14L8 17.5L9.5 12L5 8.5H10.5L12 3Z"/></>,
    brush:   <><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1.02 3.5 1.02 2.2 0 3-1.8 3-3.02 0-1.67-1.33-3.04-1.5-3.04z"/></>,
    palette: <><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5v-.17c0-.41.17-.82.47-1.1.29-.28.68-.45 1.09-.45H17c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={style} aria-hidden="true">
      {icons[name] || null}
    </svg>
  );
};

// ─── Global Styles ────────────────────────────────────────────────────────────
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --nude: #F5E6E0; --soft-pink: #E8B4B8; --rose: #C06C84; --deep-rose: #9B4D6A;
      --beige: #FAF3F0; --text-dark: #3D2B2B; --text-mid: #7A5C5C; --text-light: #A88B8B;
      --white: #FFFFFF; --glass: rgba(255,255,255,0.60);
      --shadow-soft: 0 8px 32px rgba(192,108,132,0.12);
      --shadow-hover: 0 20px 60px rgba(192,108,132,0.22);
      --success: #1e8449; --error-red: #c0392b;
    }

    html { scroll-behavior: smooth; }
    body { font-family:'Poppins',sans-serif; background:var(--beige); color:var(--text-dark); overflow-x:hidden; }
    h1,h2,h3,h4,h5 { font-family:'Playfair Display',serif; }
    img { display:block; }

    ::-webkit-scrollbar { width:6px; }
    ::-webkit-scrollbar-track { background:var(--nude); }
    ::-webkit-scrollbar-thumb { background:var(--soft-pink); border-radius:3px; }

    @keyframes fadeUp    { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
    @keyframes slideLeft { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
    @keyframes float     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes pageIn    { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    @keyframes popIn     { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
    @keyframes shimmer   { 0%{background-position:-400px 0} 100%{background-position:400px 0} }

    .animate-fade-up  { animation: fadeUp   0.65s ease-out both; }
    .animate-fade-in  { animation: fadeIn   0.5s  ease-out both; }
    .animate-slide-l  { animation: slideLeft 0.65s ease-out both; }
    .animate-float    { animation: float    4s    ease-in-out infinite; }
    .animate-page-in  { animation: pageIn   0.5s  ease-out both; }
    .animate-pop-in   { animation: popIn    0.4s  ease-out both; }

    .delay-1{animation-delay:.1s} .delay-2{animation-delay:.2s} .delay-3{animation-delay:.3s}
    .delay-4{animation-delay:.4s} .delay-5{animation-delay:.5s} .delay-6{animation-delay:.6s}

    .reveal { opacity:0; transform:translateY(28px); transition:opacity .65s ease-out, transform .65s ease-out; }
    .reveal.visible { opacity:1; transform:translateY(0); }

    /* ── Navbar ── */
    .navbar { position:fixed; top:0; left:0; right:0; z-index:1000; transition:all .4s ease; padding:22px 0; }
    .navbar.scrolled { background:rgba(250,243,240,0.95); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); box-shadow:0 2px 30px rgba(192,108,132,0.1); padding:14px 0; }
    .nav-link { font-size:.78rem; font-weight:500; letter-spacing:1.2px; text-transform:uppercase; color:var(--text-mid); text-decoration:none; padding:8px 0; position:relative; transition:color .3s; }
    .nav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1.5px; background:var(--rose); transition:width .3s ease; }
    .nav-link:hover,.nav-link.active { color:var(--rose); }
    .nav-link:hover::after,.nav-link.active::after { width:100%; }

    /* ── Buttons ── */
    .btn-primary { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,var(--rose),var(--deep-rose)); color:white; font-family:'Poppins',sans-serif; font-size:.82rem; font-weight:500; letter-spacing:1.5px; text-transform:uppercase; padding:14px 36px; border-radius:50px; border:none; cursor:pointer; transition:all .35s ease; box-shadow:0 8px 25px rgba(192,108,132,.35); }
    .btn-primary:hover { transform:translateY(-3px); box-shadow:0 16px 40px rgba(192,108,132,.45); }
    .btn-outline { display:inline-flex; align-items:center; gap:8px; background:transparent; color:var(--rose); font-family:'Poppins',sans-serif; font-size:.82rem; font-weight:500; letter-spacing:1.5px; text-transform:uppercase; padding:13px 34px; border-radius:50px; border:1.5px solid var(--rose); cursor:pointer; transition:all .35s ease; }
    .btn-outline:hover { background:var(--rose); color:white; transform:translateY(-3px); box-shadow:0 12px 30px rgba(192,108,132,.3); }

    /* ── Glass card ── */
    .card-glass { background:var(--glass); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,.75); border-radius:20px; box-shadow:var(--shadow-soft); transition:all .4s ease; }
    .card-glass:hover { box-shadow:var(--shadow-hover); transform:translateY(-6px); }

    /* ── Section ── */
    .section-tag { display:inline-block; font-size:.7rem; font-weight:500; letter-spacing:3px; text-transform:uppercase; color:var(--rose); margin-bottom:12px; }
    .section-title { font-size:clamp(1.9rem,3.8vw,2.9rem); color:var(--text-dark); line-height:1.2; }
    .section-divider { width:56px; height:2px; background:linear-gradient(to right,var(--soft-pink),var(--rose)); border-radius:2px; margin:18px auto 0; }

    /* ── Hero ── */
    .hero-section { min-height:100vh; background:linear-gradient(135deg,#FAF3F0 0%,#F5E6E0 45%,#EDD0D8 100%); position:relative; overflow:hidden; display:flex; align-items:center; }
    .hero-blob-1 { position:absolute; width:560px; height:560px; background:radial-gradient(circle,rgba(232,180,184,.32) 0%,transparent 70%); top:-120px; right:-80px; border-radius:50%; pointer-events:none; }
    .hero-blob-2 { position:absolute; width:380px; height:380px; background:radial-gradient(circle,rgba(192,108,132,.12) 0%,transparent 70%); bottom:-60px; left:80px; border-radius:50%; pointer-events:none; }
    .hero-image-frame { position:relative; width:430px; max-width:100%; }
    .hero-image-frame::before { content:''; position:absolute; top:-18px; right:-18px; width:100%; height:100%; border:2px solid var(--soft-pink); border-radius:24px; z-index:0; }
    .hero-img { width:100%; aspect-ratio:3/4; object-fit:cover; border-radius:22px; position:relative; z-index:1; box-shadow:var(--shadow-hover); }
    .hero-badge { position:absolute; bottom:28px; left:-28px; z-index:2; background:white; border-radius:16px; padding:16px 20px; box-shadow:0 10px 40px rgba(192,108,132,.2); animation:float 4s ease-in-out infinite; min-width:140px; }

    /* ── Image cards ── */
    .img-cover { width:100%; height:100%; object-fit:cover; display:block; }
    .img-rounded { border-radius:16px; overflow:hidden; }

    /* ── Service cards ── */
    .service-card-img { width:100%; height:200px; object-fit:cover; border-radius:16px 16px 0 0; display:block; }
    .service-icon-box { width:52px; height:52px; border-radius:14px; background:linear-gradient(135deg,var(--nude),var(--soft-pink)); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform .3s ease; }
    .service-card:hover .service-icon-box { transform:scale(1.1) rotate(-5deg); }

    /* ── Portfolio ── */
    .portfolio-item { border-radius:20px; overflow:hidden; position:relative; cursor:pointer; transition:all .4s ease; aspect-ratio:3/4; }
    .portfolio-item:hover { transform:translateY(-6px); box-shadow:var(--shadow-hover); }
    .portfolio-item img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s ease; }
    .portfolio-item:hover img { transform:scale(1.06); }
    .portfolio-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(63,20,40,.88) 0%,rgba(63,20,40,.1) 55%,transparent 100%); opacity:0; transition:opacity .4s ease; display:flex; flex-direction:column; justify-content:flex-end; padding:22px; }
    .portfolio-item:hover .portfolio-overlay { opacity:1; }

    /* ── Trust badges ── */
    .trust-badge { display:flex; align-items:center; gap:14px; background:white; border-radius:16px; padding:20px 22px; box-shadow:0 4px 20px rgba(192,108,132,.08); transition:all .3s ease; }
    .trust-badge:hover { transform:translateY(-4px); box-shadow:var(--shadow-soft); }
    .trust-icon-box { width:50px; height:50px; border-radius:14px; background:linear-gradient(135deg,var(--nude),var(--soft-pink)); display:flex; align-items:center; justify-content:center; flex-shrink:0; }

    /* ── Testimonials ── */
    .testimonial-card { padding:36px 32px; border-radius:24px; background:white; box-shadow:0 4px 24px rgba(192,108,132,.08); transition:all .4s ease; position:relative; }
    .testimonial-card::before { content:'"'; position:absolute; top:12px; left:22px; font-family:'Playfair Display',serif; font-size:5rem; color:var(--soft-pink); opacity:.35; line-height:1; pointer-events:none; }
    .testimonial-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(192,108,132,.15); }
    .testimonial-avatar { width:48px; height:48px; border-radius:50%; object-fit:cover; border:2px solid var(--soft-pink); }

    /* ── Pricing ── */
    .pricing-card { border-radius:24px; padding:40px 32px; transition:all .4s ease; cursor:default; position:relative; overflow:hidden; }
    .pricing-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(to right,var(--soft-pink),var(--rose)); opacity:0; transition:opacity .3s; }
    .pricing-card:hover::before { opacity:1; }
    .pricing-card.featured { background:linear-gradient(145deg,var(--rose),var(--deep-rose)); color:white; }
    .pricing-card.featured::before { opacity:1; background:linear-gradient(to right,rgba(255,255,255,.4),white); }
    .price-number { font-family:'Playfair Display',serif; font-size:3rem; font-weight:700; }

    /* ── FAQ ── */
    .faq-item { border-radius:16px; background:white; box-shadow:0 2px 16px rgba(192,108,132,.07); margin-bottom:12px; overflow:hidden; transition:box-shadow .3s; }
    .faq-item:hover { box-shadow:0 6px 24px rgba(192,108,132,.13); }
    .faq-question { width:100%; background:none; border:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center; padding:22px 28px; font-family:'Poppins',sans-serif; font-size:.92rem; font-weight:500; color:var(--text-dark); text-align:left; transition:color .3s; gap:16px; }
    .faq-question:hover { color:var(--rose); }
    .faq-answer { padding:0 28px 22px; font-size:.88rem; color:var(--text-mid); line-height:1.9; }
    .faq-chevron { color:var(--rose); flex-shrink:0; transition:transform .3s ease; }
    .faq-chevron.open { transform:rotate(45deg); }

    /* ── Forms ── */
    .form-group { display:flex; flex-direction:column; gap:6px; }
    .form-label { font-size:.76rem; font-weight:500; letter-spacing:1px; text-transform:uppercase; color:var(--text-mid); }
    .form-input { padding:14px 18px; border:1.5px solid rgba(232,180,184,.5); border-radius:12px; background:white; font-family:'Poppins',sans-serif; font-size:.9rem; color:var(--text-dark); transition:all .3s ease; outline:none; }
    .form-input:focus { border-color:var(--rose); box-shadow:0 0 0 4px rgba(192,108,132,.1); }
    .form-input.error { border-color:var(--error-red); box-shadow:0 0 0 3px rgba(192,57,43,.1); }
    .form-input.valid { border-color:var(--success); }
    .error-msg { font-size:.73rem; color:var(--error-red); display:flex; align-items:center; gap:4px; }
    .valid-msg { font-size:.73rem; color:var(--success); }

    /* ── Footer ── */
    .footer { background:var(--text-dark); color:rgba(255,255,255,.65); padding:64px 0 28px; }

    /* ── Social links ── */
    .social-btn { width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:all .3s ease; text-decoration:none; border:1.5px solid rgba(255,255,255,.2); background:rgba(255,255,255,.06); color:rgba(255,255,255,.7); cursor:pointer; }
    .social-btn:hover { background:var(--rose); border-color:var(--rose); color:white; transform:translateY(-3px); box-shadow:0 8px 20px rgba(192,108,132,.4); }
    .social-btn-light { width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:all .3s ease; border:1.5px solid var(--soft-pink); background:var(--nude); color:var(--rose); cursor:pointer; }
    .social-btn-light:hover { background:var(--rose); border-color:var(--rose); color:white; transform:translateY(-3px); box-shadow:0 8px 20px rgba(192,108,132,.3); }

    /* ── About stat ── */
    .about-stat { text-align:center; padding:28px 20px; border-radius:18px; background:white; box-shadow:0 4px 20px rgba(192,108,132,.08); transition:all .3s ease; }
    .about-stat:hover { transform:translateY(-4px); box-shadow:var(--shadow-hover); }

    /* ── CTA section ── */
    .cta-section { background:linear-gradient(135deg,var(--rose) 0%,var(--deep-rose) 100%); color:white; text-align:center; padding:100px 24px; position:relative; overflow:hidden; }
    .cta-section::before { content:''; position:absolute; inset:0; background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); pointer-events:none; }

    /* ── Page wrap ── */
    .page-wrap { padding-top:90px; min-height:100vh; }

    /* ── Hamburger ── */
    @media(max-width:768px){
      .hero-image-frame{width:290px;margin:0 auto;}
      .hero-badge{left:0;}
      .nav-links{display:none;}
      .mobile-menu-open .nav-links{display:flex!important;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(250,243,240,.97);backdrop-filter:blur(20px);padding:24px;gap:16px;box-shadow:0 10px 30px rgba(192,108,132,.15);}
    }

    /* ── Stars ── */
    .stars { color:#E8A838; letter-spacing:3px; font-size:.9rem; }

    /* ── Helpers ── */
    .container{max-width:1180px;margin:0 auto;padding:0 24px;}
    .section{padding:100px 0;}
    .grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
    .grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
    @media(max-width:960px){.grid-3{grid-template-columns:repeat(2,1fr);}.grid-4{grid-template-columns:repeat(2,1fr);}.grid-2{grid-template-columns:1fr;}}
    @media(max-width:540px){.grid-3,.grid-4{grid-template-columns:1fr;}}
    .text-center{text-align:center;} .flex{display:flex;} .items-center{align-items:center;} .justify-between{justify-content:space-between;}
    .w-full{width:100%;}
  `}</style>
);

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const SchemaMarkup = () => {
  const schema = {
    "@context":"https://schema.org","@type":"LocalBusiness",
    "name":"Make Over By Jyoti","@id":"https://makeoverjyoti.com",
    "description":"Luxury makeup artist in Agra specializing in bridal, party, editorial, and HD makeup.",
    "address":{"@type":"PostalAddress","addressLocality":"Agra","addressRegion":"Uttar Pradesh","addressCountry":"IN"},
    "priceRange":"₹₹₹","url":"https://makeoverjyoti.com",
    "sameAs":["https://instagram.com/makeoverjyoti","https://facebook.com/makeoverjyoti"]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>;
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div role="list" aria-label="Frequently asked questions">
      {items.map((item, i) => (
        <div key={i} className="faq-item" role="listitem">
          <button className="faq-question" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}>
            <span>{item.q}</span>
            <span className={`faq-chevron${open===i?" open":""}`}>
              <Icon name="x" size={16} color="var(--rose)" style={{transform: open===i?"rotate(0deg)":"rotate(45deg)", transition:"transform .3s"}}/>
            </span>
          </button>
          {open===i && <div className="faq-answer animate-fade-in">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

// ─── Trust Badges ─────────────────────────────────────────────────────────────
function TrustBadges() {
  const badges = [
    {icon:"award",   title:"Award Winning",        desc:"Best Bridal MUA, Agra 2023"},
    {icon:"users",   title:"800+ Happy Clients",   desc:"Trusted across 6+ years"},
    {icon:"diamond", title:"Premium Products Only", desc:"Cruelty-free luxury brands"},
    {icon:"camera",  title:"HD & Airbrush Certified",desc:"Camera-ready perfection"},
    {icon:"star",    title:"Vogue India Featured",  desc:"Recognized editorial artist"},
    {icon:"shield",  title:"100% Satisfaction",    desc:"We don't stop until you love it"},
  ];
  return (
    <section className="section" style={{background:"var(--beige)"}} aria-label="Credentials and trust">
      <div className="container">
        <div className="text-center reveal" style={{marginBottom:52}}>
          <span className="section-tag">Why Choose Jyoti</span>
          <h2 className="section-title">Trusted by Hundreds of Brides</h2>
          <div className="section-divider"/>
        </div>
        <div className="grid-3">
          {badges.map((b,i)=>(
            <div key={i} className="trust-badge reveal">
              <div className="trust-icon-box">
                <Icon name={b.icon} size={22} color="var(--deep-rose)"/>
              </div>
              <div>
                <div style={{fontWeight:600,fontSize:".92rem",color:"var(--text-dark)",marginBottom:3}}>{b.title}</div>
                <div style={{fontSize:".8rem",color:"var(--text-mid)"}}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60);
    window.addEventListener("scroll",fn); return ()=>window.removeEventListener("scroll",fn);
  },[]);
  const links = ["Home","About","Services","Portfolio","Pricing","Booking","Contact"];
  return (
    <nav role="navigation" aria-label="Main navigation"
      className={`navbar${scrolled?" scrolled":""}${menuOpen?" mobile-menu-open":""}`}>
      <div className="container flex items-center justify-between">
        <div style={{cursor:"pointer"}} onClick={()=>{setPage("Home");setMenuOpen(false);window.scrollTo(0,0);}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.18rem",color:"var(--rose)",fontStyle:"italic",letterSpacing:".3px"}}>Make Over By Jyoti</div>
          <div style={{fontSize:".58rem",letterSpacing:"3px",textTransform:"uppercase",color:"var(--text-light)",marginTop:"-1px"}}>Luxury Makeup Artistry</div>
        </div>
        <div className="nav-links flex" style={{gap:"28px"}}>
          {links.map(l=>(
            <a key={l} className={`nav-link${currentPage===l?" active":""}`} href="#"
              aria-current={currentPage===l?"page":undefined}
              onClick={e=>{e.preventDefault();setPage(l);window.scrollTo(0,0);setMenuOpen(false);}}>
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center" style={{gap:"14px"}}>
          <button className="btn-primary" style={{padding:"10px 22px",fontSize:".74rem"}}
            onClick={()=>{setPage("Booking");window.scrollTo(0,0);setMenuOpen(false);}}>
            Book Now
          </button>
          <button style={{background:"none",border:"none",cursor:"pointer",display:"none",padding:4}}
            className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}
            aria-label="Toggle menu" aria-expanded={menuOpen}>
            <Icon name="menu" size={24} color="var(--rose)"/>
          </button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.hamburger{display:flex!important;}.btn-primary{display:none!important;}}`}</style>
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:52,marginBottom:52}}>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.45rem",color:"white",fontStyle:"italic",marginBottom:14}}>Make Over By Jyoti</div>
            <p style={{fontSize:".86rem",lineHeight:1.9,maxWidth:290,color:"rgba(255,255,255,.6)"}}>Luxury makeup artistry for the modern woman. Transforming faces, elevating confidence, and creating timeless beauty memories.</p>
            <div style={{display:"flex",gap:10,marginTop:24}}>
              {[["instagram","Instagram"],["facebook","Facebook"],["twitter","Twitter"],["youtube","YouTube"]].map(([name,label],i)=>(
                <button key={i} className="social-btn" aria-label={label} title={label}>
                  <Icon name={name} size={16} color="currentColor"/>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{color:"white",fontWeight:600,marginBottom:20,letterSpacing:"1.2px",textTransform:"uppercase",fontSize:".74rem"}}>Quick Links</div>
            {["Home","About","Services","Portfolio","Pricing","Booking","Contact"].map(l=>(
              <div key={l} style={{marginBottom:10}}>
                <a href="#" onClick={e=>{e.preventDefault();setPage(l);window.scrollTo(0,0);}}
                  style={{color:"rgba(255,255,255,.55)",textDecoration:"none",fontSize:".86rem",transition:"color .3s"}}
                  onMouseEnter={e=>e.target.style.color="var(--soft-pink)"}
                  onMouseLeave={e=>e.target.style.color="rgba(255,255,255,.55)"}>{l}</a>
              </div>
            ))}
          </div>
          <div>
            <div style={{color:"white",fontWeight:600,marginBottom:20,letterSpacing:"1.2px",textTransform:"uppercase",fontSize:".74rem"}}>Visit Us</div>
            {[
              {icon:"mapPin", text:"Agra, Uttar Pradesh\nIndia 282 001"},
              {icon:"clock",  text:"Mon–Sat: 9 AM – 7 PM"},
              {icon:"car",    text:"Sunday: By appointment"},
            ].map(({icon,text},i)=>(
              <div key={i} style={{display:"flex",gap:12,marginBottom:16,fontSize:".84rem",alignItems:"flex-start"}}>
                <Icon name={icon} size={16} color="var(--soft-pink)" style={{flexShrink:0,marginTop:2}}/>
                <span style={{color:"rgba(255,255,255,.55)",whiteSpace:"pre-line",lineHeight:1.6}}>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,.1)",paddingTop:24,textAlign:"center",fontSize:".78rem",color:"rgba(255,255,255,.35)"}}>
          © 2025 Make Over By Jyoti. All rights reserved. Crafted with care for luxury brides.
        </div>
      </div>
      <style>{`@media(max-width:768px){.footer>.container>div:first-child{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
    </footer>
  );
}

// ─── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  useReveal();

  const services = [
    {img:IMGS.svcBridal,   title:"Bridal Makeup",  desc:"Timeless bridal looks crafted to last through every precious moment of your wedding day."},
    {img:IMGS.svcParty,    title:"Party Glam",     desc:"Dazzling, head-turning looks that light up any celebration from birthdays to soirées."},
    {img:IMGS.svcEditorial,title:"Editorial",      desc:"High-fashion makeup for shoots, campaigns, and creative editorial projects."},
    {img:IMGS.svcHD,       title:"HD Makeup",      desc:"Flawless high-definition finish that looks stunning on camera and in real life."},
  ];

  const testimonials = [
    {img:IMGS.t1, name:"Priya Sharma",  role:"Bride, Dec 2024",  stars:5, text:"Jyoti made me feel like an absolute goddess on my wedding day. The makeup lasted the entire 16-hour day without a single touch-up!"},
    {img:IMGS.t2, name:"Kavya Mehta",   role:"Fashion Blogger",  stars:5, text:"I've worked with many artists, but Jyoti's editorial work is in a different league. Precision, creativity, and pure artistry."},
    {img:IMGS.t3, name:"Riya Patel",    role:"Birthday Girl",    stars:5, text:"My birthday glam was absolute perfection. She understood my vision instantly and delivered something even more beautiful than I imagined."},
  ];

  const faqs = [
    {q:"Where is Make Over By Jyoti located?",a:"The studio is based in Agra, Uttar Pradesh. Home visits across Agra, Mathura, and nearby cities are also available upon request."},
    {q:"How far in advance should I book?",a:"For bridal bookings, we recommend 3–6 months in advance. For party and event makeup, 2–4 weeks ahead ensures you secure your preferred date."},
    {q:"Do you offer a trial session?",a:"Yes! All bridal packages include trial sessions. Standalone trials are also available so you can preview your look well before the event."},
    {q:"What products do you use?",a:"We exclusively use premium cruelty-free brands including MAC, Charlotte Tilbury, NARS, Huda Beauty, and Kryolan for all applications."},
    {q:"Can you travel for destination weddings?",a:"Absolutely. Jyoti is available for destination bookings across India. Travel and accommodation charges apply and are discussed during consultation."},
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero-section" aria-label="Welcome">
        <div className="hero-blob-1" aria-hidden="true"/>
        <div className="hero-blob-2" aria-hidden="true"/>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center",paddingTop:80}}>
          <div>
            <div className="animate-fade-up" style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(232,180,184,.22)",border:"1px solid rgba(232,180,184,.5)",borderRadius:50,padding:"8px 18px",marginBottom:30}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"var(--rose)",display:"inline-block"}} aria-hidden="true"/>
              <span style={{fontSize:".7rem",fontWeight:500,letterSpacing:"2px",textTransform:"uppercase",color:"var(--rose)"}}>Agra's Luxury Makeup Artist</span>
            </div>
            <h1 className="animate-fade-up delay-1" style={{fontSize:"clamp(2.6rem,4.8vw,4rem)",lineHeight:1.15,color:"var(--text-dark)"}}>
              Where Beauty<br/><em style={{color:"var(--rose)"}}>Becomes Art</em>
            </h1>
            <p className="animate-fade-up delay-2" style={{marginTop:22,fontSize:"1rem",lineHeight:1.85,color:"var(--text-mid)",maxWidth:430}}>
              Award-winning makeup artistry for brides, editorials and events. Over 800 clients transformed with the magic touch of Jyoti.
            </p>
            <div className="animate-fade-up delay-3" style={{marginTop:36,display:"flex",gap:14,flexWrap:"wrap"}}>
              <button className="btn-primary" onClick={()=>{setPage("Booking");window.scrollTo(0,0);}}>Book a Session</button>
              <button className="btn-outline" onClick={()=>{setPage("Services");window.scrollTo(0,0);}}>View Services</button>
            </div>
            <div className="animate-fade-up delay-4" style={{marginTop:46,display:"flex",gap:36,flexWrap:"wrap"}}>
              {[["800+","Happy Clients"],["6+","Years Experience"],["150+","Bridal Looks"]].map(([num,label])=>(
                <div key={label}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.9rem",color:"var(--rose)",fontWeight:700}}>{num}</div>
                  <div style={{fontSize:".72rem",color:"var(--text-light)",letterSpacing:"1.2px",textTransform:"uppercase",marginTop:2}}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-l delay-2" style={{display:"flex",justifyContent:"center",paddingTop:40}}>
            <div className="hero-image-frame">
              <img src={IMGS.hero} alt="Jyoti — Luxury Makeup Artist in Agra" className="hero-img"/>
              <div className="hero-badge">
                <div style={{fontSize:".62rem",color:"var(--text-light)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:4}}>Top Rated</div>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:700,color:"var(--rose)"}}>4.9</span>
                  <span className="stars" aria-label="5 stars">★★★★★</span>
                </div>
                <div style={{fontSize:".68rem",color:"var(--text-light)",marginTop:2}}>Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.hero-section>.container{grid-template-columns:1fr!important;gap:36px!important;text-align:center;padding-top:36px!important;}.hero-section>div>.container>.animate-fade-up .flex{justify-content:center!important;}}`}</style>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section" style={{background:"white"}} aria-labelledby="svc-h">
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:56}}>
            <span className="section-tag">What I Offer</span>
            <h2 className="section-title" id="svc-h">Signature Services</h2>
            <div className="section-divider"/>
            <p style={{marginTop:18,color:"var(--text-mid)",maxWidth:480,margin:"18px auto 0",lineHeight:1.8,fontSize:".94rem"}}>From ethereal bridal looks to bold editorial statements — each service tailored exclusively for you.</p>
          </div>
          <div className="grid-4">
            {services.map((s,i)=>(
              <div key={i} className="card-glass service-card reveal" style={{overflow:"hidden",padding:0}}>
                <div style={{height:200,overflow:"hidden"}}>
                  <img src={s.img} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s ease",display:"block"}}
                    onMouseEnter={e=>e.target.style.transform="scale(1.06)"}
                    onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
                </div>
                <div style={{padding:"22px 22px 24px"}}>
                  <h3 style={{fontSize:"1.05rem",marginBottom:9,color:"var(--text-dark)",fontFamily:"'Playfair Display',serif"}}>{s.title}</h3>
                  <p style={{fontSize:".83rem",color:"var(--text-mid)",lineHeight:1.75}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center reveal" style={{marginTop:44}}>
            <button className="btn-outline" onClick={()=>{setPage("Services");window.scrollTo(0,0);}}>Explore All Services</button>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="section" style={{background:"var(--nude)"}} aria-labelledby="port-h">
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:56}}>
            <span className="section-tag">My Work</span>
            <h2 className="section-title" id="port-h">A Glimpse of the Magic</h2>
            <div className="section-divider"/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18}}>
            {[
              {img:IMGS.port1,label:"Ethereal Bridal",cat:"Bridal"},
              {img:IMGS.port3,label:"Reception Glam",cat:"Reception"},
              {img:IMGS.port5,label:"Editorial Shoot",cat:"Editorial"},
              {img:IMGS.port9,label:"Engagement Glow",cat:"Engagement"},
              {img:IMGS.port7,label:"Party Glam",cat:"Party"},
              {img:IMGS.port8,label:"HD Perfection",cat:"HD"},
              {img:IMGS.port11,label:"Bridal Glow",cat:"Bridal"},
              {img:IMGS.port6,label:"Fashion Look",cat:"Editorial"},
            ].map((item,i)=>(
              <div key={i} className="portfolio-item reveal">
                <img src={item.img} alt={item.label} loading="lazy"/>
                <div className="portfolio-overlay">
                  <span style={{fontSize:".6rem",color:"rgba(255,255,255,.75)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:4}}>{item.cat}</span>
                  <div style={{fontFamily:"'Playfair Display',serif",color:"white",fontSize:".98rem"}}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center reveal" style={{marginTop:44}}>
            <button className="btn-primary" onClick={()=>{setPage("Portfolio");window.scrollTo(0,0);}}>View Full Portfolio</button>
          </div>
        </div>
        <style>{`@media(max-width:900px){section[aria-labelledby="port-h"] .container>div:nth-child(2){grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* ── TRUST BADGES ── */}
      <TrustBadges/>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section" style={{background:"white"}} aria-labelledby="abt-h">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}}>
            <div className="reveal" style={{position:"relative"}}>
              <img src={IMGS.artistAbout} alt="Jyoti — Makeup Artist" style={{width:"100%",aspectRatio:"4/5",objectFit:"cover",borderRadius:28,display:"block",boxShadow:"var(--shadow-hover)"}}/>
              <div style={{position:"absolute",bottom:-16,right:-16,background:"white",borderRadius:18,padding:"18px 22px",boxShadow:"0 10px 40px rgba(192,108,132,.18)"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",color:"var(--rose)",fontWeight:700,lineHeight:1}}>6+</div>
                <div style={{fontSize:".68rem",color:"var(--text-light)",letterSpacing:"1.2px",textTransform:"uppercase",marginTop:4}}>Years of Magic</div>
              </div>
              <div style={{position:"absolute",top:24,left:-16,background:"white",borderRadius:14,padding:"14px 18px",boxShadow:"0 8px 28px rgba(192,108,132,.15)"}}>
                <div style={{fontSize:".6rem",color:"var(--text-light)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:4}}>Est.</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",color:"var(--rose)",fontWeight:700,lineHeight:1}}>2018</div>
              </div>
            </div>
            <div className="reveal">
              <span className="section-tag">My Story</span>
              <h2 className="section-title" id="abt-h" style={{textAlign:"left",marginBottom:20}}>Crafting Beauty,<br/><em style={{color:"var(--rose)"}}>One Brushstroke</em><br/>at a Time</h2>
              <p style={{color:"var(--text-mid)",lineHeight:1.9,marginBottom:18,fontSize:".94rem"}}>Hi, I'm Jyoti — a luxury makeup artist based in Agra with over 6 years of experience in bridal, editorial, and event makeup. My philosophy: every face tells a story, and makeup is just the ink.</p>
              <p style={{color:"var(--text-mid)",lineHeight:1.9,marginBottom:30,fontSize:".94rem"}}>CIDESCO certified and MAC trained, I combine technical precision with artistic intuition to create looks that feel authentically you — only elevated.</p>
              <button className="btn-primary" onClick={()=>{setPage("About");window.scrollTo(0,0);}}>Read My Story</button>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){section[aria-labelledby="abt-h"] .container>div{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section className="section" style={{background:"var(--beige)"}} aria-labelledby="pri-h">
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:56}}>
            <span className="section-tag">Packages</span>
            <h2 className="section-title" id="pri-h">Investment in Beauty</h2>
            <div className="section-divider"/>
          </div>
          <div className="grid-3">
            {[
              {name:"Glow",       price:"₹4,999",  features:["1 makeup look","Trial session","2hr appointment","Premium products"],              featured:false},
              {name:"Luxe Bride", price:"₹18,999", features:["Bridal + trials","Pre-bridal skin prep","6-8hr coverage","Touch-up kit","Asst. MUA"],featured:true},
              {name:"Editorial",  price:"₹9,999",  features:["Creative concept","HD finish","4hr session","2 complete looks"],                   featured:false},
            ].map((p,i)=>(
              <div key={i} className={`pricing-card reveal ${p.featured?"featured":"card-glass"}`} style={!p.featured?{background:"white",border:"1.5px solid rgba(232,180,184,.3)"}:{}}>
                {p.featured&&<div style={{position:"absolute",top:18,right:18,background:"rgba(255,255,255,.2)",borderRadius:20,padding:"4px 12px",fontSize:".67rem",letterSpacing:"1px",textTransform:"uppercase",color:"white"}}>Most Popular</div>}
                <div style={{fontSize:".72rem",letterSpacing:"2px",textTransform:"uppercase",marginBottom:10,color:p.featured?"rgba(255,255,255,.75)":"var(--text-light)"}}>{p.name}</div>
                <div className="price-number" style={{color:p.featured?"white":"var(--rose)"}}>{p.price}</div>
                <div style={{fontSize:".78rem",marginBottom:26,marginTop:2,color:p.featured?"rgba(255,255,255,.6)":"var(--text-light)"}}>Starting from</div>
                <div style={{borderTop:`1px solid ${p.featured?"rgba(255,255,255,.18)":"rgba(232,180,184,.3)"}`,paddingTop:22,marginBottom:26}}>
                  {p.features.map((f,j)=>(
                    <div key={j} style={{display:"flex",alignItems:"center",gap:10,marginBottom:11,fontSize:".85rem",color:p.featured?"rgba(255,255,255,.88)":"var(--text-mid)"}}>
                      <Icon name="check" size={14} color={p.featured?"rgba(255,255,255,.8)":"var(--rose)"}/>{f}
                    </div>
                  ))}
                </div>
                <button className={p.featured?"btn-outline":"btn-primary"} style={p.featured?{color:"white",borderColor:"rgba(255,255,255,.55)",width:"100%",justifyContent:"center"}:{width:"100%",justifyContent:"center"}} onClick={()=>{setPage("Booking");window.scrollTo(0,0);}}>Book This Package</button>
              </div>
            ))}
          </div>
          <div className="text-center reveal" style={{marginTop:32}}>
            <button className="btn-outline" onClick={()=>{setPage("Pricing");window.scrollTo(0,0);}}>See Full Pricing Details</button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{background:"white"}} aria-labelledby="test-h">
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:56}}>
            <span className="section-tag">Kind Words</span>
            <h2 className="section-title" id="test-h">What My Brides Say</h2>
            <div className="section-divider"/>
          </div>
          <div className="grid-3">
            {testimonials.map((t,i)=>(
              <article key={i} className="testimonial-card reveal" aria-label={`Review by ${t.name}`}>
                <div style={{paddingTop:22}}>
                  <div className="stars" style={{marginBottom:14}} aria-label={`${t.stars} stars`}>{"★".repeat(t.stars)}</div>
                  <p style={{fontSize:".9rem",color:"var(--text-mid)",lineHeight:1.85,fontStyle:"italic"}}>"{t.text}"</p>
                  <div style={{marginTop:22,display:"flex",alignItems:"center",gap:12}}>
                    <img src={t.img} alt={t.name} className="testimonial-avatar"/>
                    <div>
                      <div style={{fontWeight:600,fontSize:".88rem",color:"var(--text-dark)"}}>{t.name}</div>
                      <div style={{fontSize:".74rem",color:"var(--text-light)",marginTop:1}}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{background:"var(--nude)"}} aria-labelledby="faq-h">
        <div className="container" style={{maxWidth:780}}>
          <div className="text-center reveal" style={{marginBottom:48}}>
            <span className="section-tag">Got Questions?</span>
            <h2 className="section-title" id="faq-h">Frequently Asked</h2>
            <div className="section-divider"/>
          </div>
          <div className="reveal"><FAQ items={faqs}/></div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-section" role="region" aria-label="Book your session">
        <div style={{position:"relative",zIndex:1}}>
          <div className="reveal" style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.9rem,3.8vw,3rem)",marginBottom:16,lineHeight:1.3}}>Ready to Look & Feel<br/><em>Absolutely Stunning?</em></div>
          <p className="reveal" style={{opacity:.85,fontSize:"1rem",maxWidth:460,margin:"0 auto 38px",lineHeight:1.85}}>Limited bookings available each month. Secure your date with Jyoti today.</p>
          <div className="reveal" style={{display:"flex",justifyContent:"center",gap:14,flexWrap:"wrap"}}>
            <button style={{background:"white",color:"var(--rose)",fontFamily:"'Poppins',sans-serif",fontSize:".82rem",fontWeight:600,letterSpacing:"1.5px",textTransform:"uppercase",padding:"14px 36px",borderRadius:50,border:"none",cursor:"pointer",transition:"all .3s",boxShadow:"0 8px 25px rgba(0,0,0,.15)"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 16px 40px rgba(0,0,0,.2)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";}}
              onClick={()=>{setPage("Booking");window.scrollTo(0,0);}}>Book Your Session</button>
            <button style={{background:"transparent",color:"white",fontFamily:"'Poppins',sans-serif",fontSize:".82rem",fontWeight:500,letterSpacing:"1.5px",textTransform:"uppercase",padding:"13px 34px",borderRadius:50,border:"1.5px solid rgba(255,255,255,.55)",cursor:"pointer",transition:"all .3s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.14)";e.currentTarget.style.transform="translateY(-3px)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.transform="";}}
              onClick={()=>{setPage("Contact");window.scrollTo(0,0);}}>Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage() {
  useReveal();
  const stats = [{num:"800+",label:"Happy Clients"},{num:"6+",label:"Years of Artistry"},{num:"150+",label:"Bridal Looks"},{num:"12+",label:"Awards Won"}];
  const timeline = [
    {year:"2018",title:"The Beginning",desc:"Graduated from CIDESCO International and began the journey transforming faces in Agra's beauty scene."},
    {year:"2019",title:"MAC Certified",desc:"Completed advanced certification with MAC Cosmetics. Specialized in HD and airbrush techniques."},
    {year:"2021",title:"Editorial Breakthrough",desc:"Featured in Vogue India's bridal issue. Worked with top-tier fashion photographers across India."},
    {year:"2023",title:"500 Brides Milestone",desc:"Celebrated transforming 500 brides. Launched the signature skincare-first makeup approach."},
    {year:"2025",title:"Today",desc:"Agra's most sought-after luxury makeup artist. Make Over By Jyoti Studio opens its doors."},
  ];
  return (
    <div className="page-wrap animate-page-in">
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,var(--nude) 0%,var(--soft-pink) 100%)",padding:"80px 0 60px",textAlign:"center"}}>
        <div className="container">
          <span className="section-tag reveal">My Journey</span>
          <h1 className="section-title reveal" style={{marginTop:8}}>Behind the Brush</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{marginTop:22,color:"var(--text-mid)",maxWidth:540,margin:"22px auto 0",lineHeight:1.85,fontSize:".94rem"}}>I'm Jyoti — an artist who believes that true beauty is about authenticity, confidence, and feeling like the best version of yourself.</p>
        </div>
      </div>

      {/* Bio */}
      <section className="section" style={{background:"white"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}}>
            <div className="reveal" style={{position:"relative"}}>
              <img src={IMGS.artist} alt="Jyoti — Lead Makeup Artist" style={{width:"100%",aspectRatio:"3/4",objectFit:"cover",borderRadius:28,display:"block",boxShadow:"var(--shadow-hover)"}}/>
              <div style={{position:"absolute",bottom:-18,right:-18,background:"white",borderRadius:20,padding:"20px 24px",boxShadow:"0 10px 40px rgba(192,108,132,.2)"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",color:"var(--rose)",fontWeight:700,lineHeight:1}}>6+</div>
                <div style={{fontSize:".7rem",color:"var(--text-light)",letterSpacing:"1px",textTransform:"uppercase",marginTop:4}}>Years of Magic</div>
              </div>
            </div>
            <div className="reveal">
              <span className="section-tag">The Artist</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2.3rem",marginBottom:22,lineHeight:1.3}}>Passion Meets<br/><em style={{color:"var(--rose)"}}>Precision</em></h2>
              <p style={{color:"var(--text-mid)",lineHeight:1.9,marginBottom:18,fontSize:".93rem"}}>Growing up surrounded by art, I discovered my canvas wasn't walls or paper — it was faces. My first kit was borrowed from my mother's vanity, and somehow, that's where my story began.</p>
              <p style={{color:"var(--text-mid)",lineHeight:1.9,marginBottom:18,fontSize:".93rem"}}>Today, I lead a boutique studio in Agra, catering exclusively to clients who value artistry over assembly-line beauty. Every appointment begins with a consultation that goes deeper than skin.</p>
              <p style={{color:"var(--text-mid)",lineHeight:1.9,marginBottom:30,fontSize:".93rem"}}>CIDESCO certified, MAC trained, and obsessed with skincare as the foundation of all great makeup. My kit features only cruelty-free, luxury brands chosen for performance and ethics.</p>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                {["CIDESCO Certified","MAC Trained","Cruelty-Free","Vogue India Featured"].map((tag,i)=>(
                  <span key={i} style={{background:"var(--nude)",color:"var(--rose)",fontSize:".72rem",fontWeight:500,letterSpacing:"1px",padding:"7px 15px",borderRadius:50,border:"1px solid var(--soft-pink)"}}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){.section>.container>div[style*="1fr 1fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Stats */}
      <section style={{background:"var(--beige)",padding:"60px 0"}}>
        <div className="container">
          <div className="grid-4">
            {stats.map((s,i)=>(
              <div key={i} className="about-stat reveal">
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:"2.7rem",color:"var(--rose)",fontWeight:700}}>{s.num}</div>
                <div style={{fontSize:".75rem",color:"var(--text-light)",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:6}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio image strip */}
      <div style={{height:360,overflow:"hidden",position:"relative"}}>
        <img src={IMGS.studio} alt="Make Over By Jyoti — Studio" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%",display:"block"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(63,20,40,.6),transparent 60%)",display:"flex",alignItems:"center"}}>
          <div className="container">
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(1.6rem,3.5vw,2.6rem)",color:"white",lineHeight:1.3,maxWidth:380,fontStyle:"italic"}}>
              "Beauty begins the moment<br/>you decide to be yourself."
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <section className="section" style={{background:"white"}}>
        <div className="container">
          <div className="text-center reveal" style={{marginBottom:56}}>
            <span className="section-tag">Journey</span>
            <h2 className="section-title">My Story in Milestones</h2>
            <div className="section-divider"/>
          </div>
          <div style={{maxWidth:700,margin:"0 auto",position:"relative"}}>
            <div style={{position:"absolute",left:30,top:0,bottom:0,width:2,background:"linear-gradient(to bottom,var(--soft-pink),var(--rose))",borderRadius:2}} aria-hidden="true"/>
            {timeline.map((t,i)=>(
              <div key={i} className="reveal" style={{display:"flex",gap:40,marginBottom:40,paddingLeft:70,position:"relative"}}>
                <div style={{position:"absolute",left:21,top:8,width:20,height:20,borderRadius:"50%",background:"linear-gradient(135deg,var(--soft-pink),var(--rose))",border:"3px solid white",boxShadow:"0 4px 12px rgba(192,108,132,.3)"}} aria-hidden="true"/>
                <div style={{flex:1}}>
                  <div style={{fontSize:".7rem",color:"var(--rose)",fontWeight:600,letterSpacing:"2px",textTransform:"uppercase",marginBottom:6}}>{t.year}</div>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.15rem",marginBottom:7,color:"var(--text-dark)"}}>{t.title}</h3>
                  <p style={{fontSize:".88rem",color:"var(--text-mid)",lineHeight:1.75}}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── SERVICES PAGE ─────────────────────────────────────────────────────────────
function ServicesPage({ setPage }) {
  useReveal();
  const services = [
    {img:IMGS.svcBridal,    icon:"ring",    name:"Bridal Makeup",       desc:"Your wedding day deserves nothing less than perfection. Timeless bridal looks built to last through tears, hugs, and dancing.",                                      features:["Trial session included","6-12hr wear guarantee","Airbrush or traditional finish","HD camera-ready","Touch-up kit provided"],tag:"Most Booked"},
    {img:IMGS.svcReception, icon:"star",    name:"Reception Glam",      desc:"A statement look for the night you celebrate love. Bold, luminous, and utterly unforgettable.",                                                                          features:["Consultation included","Drama lashes","Contouring","Glossy or matte finish"],tag:null},
    {img:IMGS.svcParty,     icon:"sparkle", name:"Party Makeup",        desc:"Whether it's a birthday, anniversary, or social soirée — look absolutely stunning. Quick, precise, and party-perfect.",                                                  features:["2hr session","Customizable look","Includes eye & lip"],tag:"Popular"},
    {img:IMGS.svcEditorial, icon:"camera",  name:"Editorial & Fashion", desc:"High-concept, boundary-pushing makeup for editorial shoots, fashion campaigns, and creative projects.",                                                                  features:["Concept planning","Multiple looks","Extreme pigment techniques","Artistic direction"],tag:null},
    {img:IMGS.svcHD,        icon:"palette", name:"HD Makeup",           desc:"Ultra-smooth, pore-minimizing, camera-perfect HD finish using airbrushing and premium HD formulas.",                                                                     features:["Airbrush technique","Full HD kit","Camera & lighting tested"],tag:null},
    {img:IMGS.svcEngagement,icon:"ring",    name:"Engagement Makeup",   desc:"Your first official look as a soon-to-be-bride. Romantic, dewy, and luminous.",                                                                                          features:["Skin-focused formula","Glow & dewy finish","2 look options"],tag:null},
    {img:IMGS.svcFX,        icon:"brush",   name:"Special FX",          desc:"Fantasy, horror, avant-garde — theatrical and special effects makeup for films, theatre, and concept shoots.",                                                            features:["Prosthetics","Body paint","Film-grade materials"],tag:null},
    {img:IMGS.svcPreBridal, icon:"shield",  name:"Pre-Bridal Care",     desc:"A complete pre-wedding beauty regimen designed to prep your skin for flawless makeup on the big day.",                                                                   features:["3-session package","Facial treatments","Skin analysis","Product recommendations"],tag:"New"},
  ];
  return (
    <div className="page-wrap animate-page-in">
      <div style={{background:"linear-gradient(135deg,var(--nude),var(--soft-pink))",padding:"80px 0 60px",textAlign:"center"}}>
        <div className="container">
          <span className="section-tag reveal">Expertise</span>
          <h1 className="section-title reveal" style={{marginTop:8}}>Services & Specialties</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{marginTop:22,color:"var(--text-mid)",maxWidth:530,margin:"22px auto 0",lineHeight:1.85,fontSize:".94rem"}}>Each service crafted with intention, using only premium cruelty-free products and personalized to your unique beauty.</p>
        </div>
      </div>
      <section className="section" style={{background:"var(--beige)"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:26}}>
            {services.map((s,i)=>(
              <article key={i} className="card-glass reveal service-card" style={{overflow:"hidden",padding:0,position:"relative"}}>
                {s.tag&&<span style={{position:"absolute",top:16,right:16,zIndex:2,background:"var(--rose)",color:"white",fontSize:".62rem",fontWeight:600,letterSpacing:"1.5px",textTransform:"uppercase",padding:"5px 12px",borderRadius:50}}>{s.tag}</span>}
                <div style={{height:190,overflow:"hidden"}}>
                  <img src={s.img} alt={s.name} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform .5s ease"}}
                    onMouseEnter={e=>e.target.style.transform="scale(1.05)"}
                    onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
                </div>
                <div style={{padding:"26px 28px 28px"}}>
                  <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:14}}>
                    <div className="service-icon-box"><Icon name={s.icon} size={20} color="var(--deep-rose)"/></div>
                    <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.25rem",color:"var(--text-dark)"}}>{s.name}</h2>
                  </div>
                  <p style={{fontSize:".87rem",color:"var(--text-mid)",lineHeight:1.8,marginBottom:18}}>{s.desc}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                    {s.features.map((f,j)=>(
                      <span key={j} style={{fontSize:".72rem",color:"var(--rose)",background:"rgba(192,108,132,.08)",padding:"5px 12px",borderRadius:50,border:"1px solid rgba(192,108,132,.18)",display:"flex",alignItems:"center",gap:5}}>
                        <Icon name="check" size={11} color="var(--rose)"/>{f}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center reveal" style={{marginTop:56}}>
            <p style={{color:"var(--text-mid)",marginBottom:22,fontSize:".93rem"}}>Ready to experience the Make Over By Jyoti difference?</p>
            <button className="btn-primary" onClick={()=>{setPage("Booking");window.scrollTo(0,0);}}>Book Your Session</button>
          </div>
        </div>
        <style>{`@media(max-width:768px){.section .container>div:first-child{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  );
}

// ─── PORTFOLIO PAGE ────────────────────────────────────────────────────────────
function PortfolioPage({ setPage }) {
  useReveal();
  const [active, setActive] = useState("All");
  const filters = ["All","Bridal","Reception","Editorial","Party","HD","Engagement"];
  const works = [
    {img:IMGS.port1,  label:"Ethereal Bridal",    cat:"Bridal",     desc:"Dewy & timeless"},
    {img:IMGS.port2,  label:"Festive Bride",       cat:"Bridal",     desc:"Rich & radiant"},
    {img:IMGS.port3,  label:"Reception Goddess",   cat:"Reception",  desc:"Bold glamour"},
    {img:IMGS.port4,  label:"Night Reception",     cat:"Reception",  desc:"Dramatic & luxe"},
    {img:IMGS.port5,  label:"Editorial Shoot",     cat:"Editorial",  desc:"High fashion"},
    {img:IMGS.port6,  label:"Fashion Look",        cat:"Editorial",  desc:"Artistic vision"},
    {img:IMGS.port7,  label:"Birthday Glam",       cat:"Party",      desc:"Sparkling beauty"},
    {img:IMGS.port8,  label:"HD Perfection",       cat:"HD",         desc:"Camera-ready skin"},
    {img:IMGS.port9,  label:"Engagement Glow",     cat:"Engagement", desc:"Natural & dewy"},
    {img:IMGS.port10, label:"Airbrush Finish",     cat:"HD",         desc:"Flawless texture"},
    {img:IMGS.port11, label:"Bridal Luminance",    cat:"Bridal",     desc:"Timeless radiance"},
    {img:IMGS.port12, label:"Ring Ceremony",       cat:"Engagement", desc:"Soft & romantic"},
  ];
  const filtered = active==="All" ? works : works.filter(w=>w.cat===active);
  return (
    <div className="page-wrap animate-page-in">
      <div style={{background:"linear-gradient(135deg,var(--nude),var(--soft-pink))",padding:"80px 0 60px",textAlign:"center"}}>
        <div className="container">
          <span className="section-tag reveal">My Work</span>
          <h1 className="section-title reveal" style={{marginTop:8}}>Portfolio Gallery</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{marginTop:18,color:"var(--text-mid)",maxWidth:480,margin:"18px auto 0",lineHeight:1.85,fontSize:".94rem"}}>Browse through looks crafted with love, precision, and artistry — every face tells a unique story.</p>
        </div>
      </div>
      <section className="section" style={{background:"white"}}>
        <div className="container">
          {/* Filters */}
          <div className="reveal" style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",marginBottom:48}} role="tablist" aria-label="Filter portfolio">
            {filters.map(f=>(
              <button key={f} role="tab" aria-selected={active===f}
                style={{fontFamily:"'Poppins',sans-serif",fontSize:".76rem",fontWeight:500,letterSpacing:"1.2px",textTransform:"uppercase",padding:"9px 20px",borderRadius:50,border:`1.5px solid ${active===f?"var(--rose)":"rgba(232,180,184,.5)"}`,background:active===f?"var(--rose)":"white",color:active===f?"white":"var(--text-mid)",cursor:"pointer",transition:"all .3s ease"}}
                onClick={()=>setActive(f)}>{f}</button>
            ))}
          </div>
          {/* Grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18}}>
            {filtered.map((item,i)=>(
              <div key={item.label+i} className="portfolio-item reveal">
                <img src={item.img} alt={`${item.label} — ${item.desc}`} loading="lazy"/>
                <div className="portfolio-overlay">
                  <span style={{fontSize:".6rem",color:"rgba(255,255,255,.75)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:5}}>{item.cat}</span>
                  <div style={{fontFamily:"'Playfair Display',serif",color:"white",fontSize:".98rem"}}>{item.label}</div>
                  <div style={{fontSize:".78rem",color:"rgba(255,255,255,.75)",marginTop:3}}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center reveal" style={{marginTop:56,padding:"40px 32px",background:"var(--nude)",borderRadius:24}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.45rem",marginBottom:12}}>Love What You See?</div>
            <p style={{color:"var(--text-mid)",maxWidth:420,margin:"0 auto 26px",lineHeight:1.85,fontSize:".93rem"}}>Let's create your dream look together. Book a consultation today.</p>
            <button className="btn-primary" onClick={()=>{setPage("Booking");window.scrollTo(0,0);}}>Book Your Session</button>
          </div>
        </div>
        <style>{`@media(max-width:900px){.section .container>div:nth-child(2){grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>
    </div>
  );
}

// ─── PRICING PAGE ──────────────────────────────────────────────────────────────
function PricingPage({ setPage }) {
  useReveal();
  const packages = [
    {name:"Glow",       subtitle:"Perfect for parties & events",    price:"₹4,999",  featured:false,
     features:["1 complete makeup look","Consultation included","2-hour appointment","Premium product kit","Basic lash application","Setting spray finish"],
     notIncluded:["Airbrush","Trial session","Touch-up kit"]},
    {name:"Luxe Bride", subtitle:"The ultimate bridal experience",   price:"₹18,999", featured:true,
     features:["Bridal + Reception looks","Engagement makeup","3 trial sessions","Pre-bridal skin consultation","6-8hr coverage","Assistant MUA included","Touch-up kit gifted","HD airbrush technique","Premium lash set","On-call support"],
     notIncluded:[]},
    {name:"Editorial",  subtitle:"For shoots & creative projects",   price:"₹9,999",  featured:false,
     features:["2 complete editorial looks","Concept consultation","4-hour session","HD & airbrush finish","Colour correcting","Body & neck makeup"],
     notIncluded:["Trial session","Touch-up kit"]},
  ];
  const pricingFAQs = [
    {q:"Are prices fixed or negotiable?",a:"Published prices are starting rates. Final pricing depends on the complexity of the look, travel requirements, and event duration. Custom quotes are provided after consultation."},
    {q:"Is a deposit required to book?",a:"A 25% advance booking deposit is required to secure your date. It is adjusted against the final payment and is non-refundable if cancelled within 7 days of the event."},
    {q:"Do packages include travel charges?",a:"Studio visits are included. For home visits within Agra, a nominal travel fee of ₹300–₹500 applies. Outstation events are quoted separately."},
    {q:"Can I customize a package?",a:"Absolutely. All packages are flexible. We can add or remove services to fit your budget and needs. Contact us for a custom quote."},
    {q:"What payment methods are accepted?",a:"We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash. Full payment is due on or before the day of service."},
  ];
  return (
    <div className="page-wrap animate-page-in">
      <div style={{background:"linear-gradient(135deg,var(--nude),var(--soft-pink))",padding:"80px 0 60px",textAlign:"center"}}>
        <div className="container">
          <span className="section-tag reveal">Investment</span>
          <h1 className="section-title reveal" style={{marginTop:8}}>Pricing & Packages</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{marginTop:22,color:"var(--text-mid)",maxWidth:500,margin:"22px auto 0",lineHeight:1.85,fontSize:".94rem"}}>Transparent pricing. Premium results. Every package includes a full consultation and personalized approach.</p>
        </div>
      </div>
      <section className="section" style={{background:"white"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:26,alignItems:"start"}}>
            {packages.map((pkg,i)=>(
              <div key={i} className="reveal" style={{borderRadius:26,overflow:"hidden",boxShadow:pkg.featured?"0 24px 68px rgba(192,108,132,.32)":"0 4px 28px rgba(192,108,132,.1)",transition:"all .4s ease",transform:pkg.featured?"scale(1.03)":"scale(1)"}}
                onMouseEnter={e=>{if(!pkg.featured)e.currentTarget.style.transform="translateY(-8px)";}}
                onMouseLeave={e=>{if(!pkg.featured)e.currentTarget.style.transform="";}}>
                <div style={{background:pkg.featured?"linear-gradient(135deg,var(--rose),var(--deep-rose))":"linear-gradient(135deg,var(--nude),var(--soft-pink))",padding:"36px 30px",color:pkg.featured?"white":"var(--text-dark)",textAlign:"center",position:"relative"}}>
                  {pkg.featured&&<div style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,.18)",borderRadius:20,padding:"4px 13px",fontSize:".66rem",letterSpacing:"1.5px",textTransform:"uppercase",color:"white"}}>Best Value</div>}
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",marginBottom:4,fontWeight:700}}>{pkg.name}</div>
                  <div style={{fontSize:".76rem",opacity:.72,marginBottom:22}}>{pkg.subtitle}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"3rem",fontWeight:700,lineHeight:1}}>{pkg.price}</div>
                  <div style={{fontSize:".73rem",opacity:.6,marginTop:4}}>starting from</div>
                </div>
                <div style={{background:"white",padding:"30px"}}>
                  <div style={{marginBottom:20}}>
                    {pkg.features.map((f,j)=>(
                      <div key={j} style={{display:"flex",alignItems:"center",gap:10,marginBottom:11,fontSize:".85rem",color:"var(--text-mid)"}}>
                        <Icon name="check" size={14} color="var(--rose)"/>{f}
                      </div>
                    ))}
                    {pkg.notIncluded.map((f,j)=>(
                      <div key={j} style={{display:"flex",alignItems:"center",gap:10,marginBottom:11,fontSize:".85rem",color:"#ccc"}}>
                        <Icon name="x" size={14} color="#ddd"/><s style={{textDecoration:"line-through"}}>{f}</s>
                      </div>
                    ))}
                  </div>
                  <button className={pkg.featured?"btn-primary":"btn-outline"} style={{width:"100%",justifyContent:"center"}} onClick={()=>{setPage("Booking");window.scrollTo(0,0);}}>Book {pkg.name}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{marginTop:56,textAlign:"center",background:"var(--nude)",borderRadius:22,padding:"40px 32px"}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",marginBottom:12}}>Need Something Custom?</div>
            <p style={{color:"var(--text-mid)",maxWidth:480,margin:"0 auto 24px",lineHeight:1.85,fontSize:".93rem"}}>For multi-day weddings, destination bookings, group events — let's create a personalized package just for you.</p>
            <button className="btn-primary" onClick={()=>{setPage("Contact");window.scrollTo(0,0);}}>Request Custom Quote</button>
          </div>
        </div>
        <style>{`@media(max-width:900px){section>.container>div:first-of-type{grid-template-columns:1fr!important;}}`}</style>
      </section>
      <section className="section" style={{background:"var(--beige)"}}>
        <div className="container" style={{maxWidth:780}}>
          <div className="text-center reveal" style={{marginBottom:48}}>
            <span className="section-tag">Pricing Questions</span>
            <h2 className="section-title">Common Questions</h2>
            <div className="section-divider"/>
          </div>
          <div className="reveal"><FAQ items={pricingFAQs}/></div>
        </div>
      </section>
    </div>
  );
}

// ─── BOOKING PAGE ──────────────────────────────────────────────────────────────
function BookingPage() {
  useReveal();
  const [form,setForm]=useState({name:"",phone:"",email:"",date:"",service:"",time:"",source:"",notes:""});
  const [errors,setErrors]=useState({});
  const [touched,setTouched]=useState({});
  const [submitted,setSubmitted]=useState(false);

  const rules={
    name:    v=>!v.trim()?"Full name is required":v.trim().length<2?"Name must be at least 2 characters":"",
    phone:   v=>!v.trim()?"Phone number is required":/^[6-9][0-9]{9}$/.test(v.replace(/\s/g,""))?"":"Enter a valid 10-digit Indian mobile number",
    email:   v=>!v.trim()?"Email is required":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)?"":"Enter a valid email address",
    date:    v=>!v?"Please select a date":new Date(v)<new Date(new Date().setHours(0,0,0,0))?"Please select a future date":"",
    service: v=>!v?"Please select a service":"",
  };
  const validate=(f=form)=>{const e={};Object.keys(rules).forEach(k=>{const m=rules[k](f[k]);if(m)e[k]=m;});return e;};
  const handleBlur=k=>{setTouched(t=>({...t,[k]:true}));setErrors(validate());};
  const handleChange=(k,v)=>{const u={...form,[k]:v};setForm(u);if(touched[k])setErrors(validate(u));};
  const handleSubmit=()=>{setTouched(Object.keys(rules).reduce((a,k)=>({...a,[k]:true}),{}));const e=validate();setErrors(e);if(!Object.keys(e).length)setSubmitted(true);};
  const ic=n=>`form-input${touched[n]&&errors[n]?" error":touched[n]&&!errors[n]?" valid":""}`;
  const FS=({n})=>{if(!touched[n])return null;return errors[n]?<span className="error-msg" role="alert"><Icon name="x" size={12} color="var(--error-red)"/> {errors[n]}</span>:<span className="valid-msg"><Icon name="check" size={12} color="var(--success)"/> Looks good</span>;};

  const services=["Bridal Makeup","Reception Makeup","Party Makeup","Engagement Makeup","Editorial Makeup","HD Makeup","Pre-Bridal Package","Custom Package"];
  const times=["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
  const sources=["Instagram","Google Search","Facebook","Friend Referral","Shaadi.com","Other"];

  return (
    <div className="page-wrap animate-page-in">
      <div style={{background:"linear-gradient(135deg,var(--nude),var(--soft-pink))",padding:"80px 0 60px",textAlign:"center"}}>
        <div className="container">
          <span className="section-tag reveal">Reserve Your Date</span>
          <h1 className="section-title reveal" style={{marginTop:8}}>Book a Session</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{marginTop:18,color:"var(--text-mid)",maxWidth:460,margin:"18px auto 0",lineHeight:1.85,fontSize:".94rem"}}>Fill in the form below and Jyoti will confirm your appointment within 24 hours.</p>
        </div>
      </div>
      <section className="section" style={{background:"white"}}>
        <div className="container" style={{maxWidth:820}}>
          {/* Trust strip */}
          <div className="reveal" style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:40}}>
            {[
              {icon:"shield", text:"Secure & Private"},
              {icon:"check",  text:"24hr Confirmation"},
              {icon:"diamond",text:"No Hidden Charges"},
              {icon:"star",   text:"Free Consultation"},
            ].map((t,i)=>(
              <span key={i} style={{fontSize:".76rem",fontWeight:500,color:"var(--text-mid)",background:"var(--nude)",padding:"8px 16px",borderRadius:50,border:"1px solid var(--soft-pink)",display:"flex",alignItems:"center",gap:6}}>
                <Icon name={t.icon} size={13} color="var(--rose)"/>{t.text}
              </span>
            ))}
          </div>

          {submitted?(
            <div className="reveal text-center animate-pop-in" style={{padding:"70px 40px",background:"var(--nude)",borderRadius:28}}>
              <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,var(--soft-pink),var(--rose))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
                <Icon name="check" size={32} color="white"/>
              </div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"2rem",color:"var(--rose)",marginBottom:14}}>Booking Received!</h2>
              <p style={{color:"var(--text-mid)",lineHeight:1.85,maxWidth:400,margin:"0 auto 28px",fontSize:".93rem"}}>
                Thank you, <strong>{form.name}</strong>! Your request for <strong>{form.service}</strong> on <strong>{form.date}</strong> has been received. Jyoti will confirm within 24 hours.
              </p>
              <button className="btn-primary" onClick={()=>{setSubmitted(false);setForm({name:"",phone:"",email:"",date:"",service:"",time:"",source:"",notes:""});setTouched({});setErrors({});}}>Make Another Booking</button>
            </div>
          ):(
            <div className="card-glass reveal" style={{padding:"50px 46px"}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.45rem",marginBottom:30,color:"var(--text-dark)"}}>Your Details</h2>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22,marginBottom:22}}>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-name">Full Name *</label>
                  <input id="b-name" className={ic("name")} placeholder="Your full name" value={form.name} onChange={e=>handleChange("name",e.target.value)} onBlur={()=>handleBlur("name")} aria-required="true" autoComplete="name"/>
                  <FS n="name"/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-phone">Mobile Number *</label>
                  <input id="b-phone" className={ic("phone")} placeholder="10-digit mobile number" value={form.phone} onChange={e=>handleChange("phone",e.target.value.replace(/\D/g,"").slice(0,10))} onBlur={()=>handleBlur("phone")} aria-required="true" autoComplete="tel" inputMode="numeric"/>
                  <FS n="phone"/>
                </div>
              </div>
              <div className="form-group" style={{marginBottom:22}}>
                <label className="form-label" htmlFor="b-email">Email Address *</label>
                <input id="b-email" className={ic("email")} type="email" placeholder="your@email.com" value={form.email} onChange={e=>handleChange("email",e.target.value)} onBlur={()=>handleBlur("email")} aria-required="true" autoComplete="email"/>
                <FS n="email"/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22,marginBottom:22}}>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-date">Preferred Date *</label>
                  <input id="b-date" className={ic("date")} type="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={e=>handleChange("date",e.target.value)} onBlur={()=>handleBlur("date")} aria-required="true"/>
                  <FS n="date"/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-time">Preferred Time</label>
                  <select id="b-time" className="form-input" value={form.time} onChange={e=>handleChange("time",e.target.value)}>
                    <option value="">Select time slot</option>
                    {times.map(t=><option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22,marginBottom:22}}>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-service">Service Required *</label>
                  <select id="b-service" className={ic("service")} value={form.service} onChange={e=>handleChange("service",e.target.value)} onBlur={()=>handleBlur("service")} aria-required="true">
                    <option value="">Select a service</option>
                    {services.map(s=><option key={s}>{s}</option>)}
                  </select>
                  <FS n="service"/>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="b-source">How did you find me?</label>
                  <select id="b-source" className="form-input" value={form.source} onChange={e=>handleChange("source",e.target.value)}>
                    <option value="">Select source</option>
                    {sources.map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group" style={{marginBottom:32}}>
                <label className="form-label" htmlFor="b-notes">Additional Notes</label>
                <textarea id="b-notes" className="form-input" rows={4} placeholder="Tell me about your event, inspiration, skin concerns, or any specific requirements..." value={form.notes} onChange={e=>handleChange("notes",e.target.value)} style={{resize:"vertical"}}/>
              </div>
              <button className="btn-primary" style={{width:"100%",justifyContent:"center",padding:"15px",fontSize:".88rem"}} onClick={handleSubmit}>Confirm Booking Request</button>
              <p style={{textAlign:"center",marginTop:14,fontSize:".76rem",color:"var(--text-light)",display:"flex",alignItems:"center",justifyContent:"center",gap:5}}>
                <Icon name="shield" size={13} color="var(--text-light)"/>Your details are private and secure. No deposit required to enquire.
              </p>
            </div>
          )}
        </div>
        <style>{`@media(max-width:600px){.card-glass{padding:26px 18px!important;}.card-glass>div[style*="grid-template-columns"]{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  );
}

// ─── CONTACT PAGE ──────────────────────────────────────────────────────────────
function ContactPage() {
  useReveal();
  const [form,setForm]=useState({name:"",email:"",subject:"",message:""});
  const [errors,setErrors]=useState({});
  const [sent,setSent]=useState(false);
  const handleSend=()=>{
    const e={};
    if(!form.name.trim()) e.name="Name is required";
    if(!form.email.trim()||!/\S+@\S+\.\S+/.test(form.email)) e.email="Valid email is required";
    if(!form.message.trim()) e.message="Message cannot be empty";
    setErrors(e);
    if(!Object.keys(e).length) setSent(true);
  };
  const infoItems = [
    {icon:"mapPin", title:"Studio Location", info:"Make Over By Jyoti\nAgra, Uttar Pradesh\nIndia 282 001"},
    {icon:"clock",  title:"Working Hours",   info:"Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: By appointment only"},
    {icon:"car",    title:"Home Visits",     info:"Available across Agra, Mathura & nearby areas.\nTravel charges apply."},
  ];
  return (
    <div className="page-wrap animate-page-in">
      <div style={{background:"linear-gradient(135deg,var(--nude),var(--soft-pink))",padding:"80px 0 60px",textAlign:"center"}}>
        <div className="container">
          <span className="section-tag reveal">Get In Touch</span>
          <h1 className="section-title reveal" style={{marginTop:8}}>Let's Connect</h1>
          <div className="section-divider reveal"/>
          <p className="reveal" style={{marginTop:18,color:"var(--text-mid)",maxWidth:460,margin:"18px auto 0",lineHeight:1.85,fontSize:".94rem"}}>Have questions about services, pricing, or availability? I'd love to hear from you.</p>
        </div>
      </div>
      <section className="section" style={{background:"white"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.4fr",gap:60,alignItems:"start"}}>
            {/* Info panel */}
            <div className="reveal">
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",marginBottom:28}}>Studio Information</h2>
              {infoItems.map((item,i)=>(
                <div key={i} style={{display:"flex",gap:16,marginBottom:18,padding:"20px",background:"var(--beige)",borderRadius:16,transition:"all .3s"}}
                  onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-soft)";e.currentTarget.style.transform="translateX(4px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.boxShadow="";e.currentTarget.style.transform="";}}>
                  <div style={{width:42,height:42,borderRadius:12,background:"linear-gradient(135deg,var(--nude),var(--soft-pink))",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <Icon name={item.icon} size={18} color="var(--deep-rose)"/>
                  </div>
                  <div>
                    <div style={{fontWeight:600,fontSize:".83rem",color:"var(--rose)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:5}}>{item.title}</div>
                    <div style={{fontSize:".88rem",color:"var(--text-mid)",lineHeight:1.75,whiteSpace:"pre-line"}}>{item.info}</div>
                  </div>
                </div>
              ))}
              <div style={{marginTop:8}}>
                <div style={{fontWeight:600,fontSize:".75rem",color:"var(--text-light)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:14}}>Follow Along</div>
                <div style={{display:"flex",gap:10}}>
                  {[["instagram","Instagram"],["facebook","Facebook"],["twitter","Twitter"],["youtube","YouTube"]].map(([name,label],i)=>(
                    <button key={i} className="social-btn-light" aria-label={label} title={label}>
                      <Icon name={name} size={16} color="currentColor"/>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="reveal">
              {sent?(
                <div style={{textAlign:"center",padding:"56px 36px",background:"var(--nude)",borderRadius:24}}>
                  <div style={{width:64,height:64,borderRadius:"50%",background:"linear-gradient(135deg,var(--soft-pink),var(--rose))",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>
                    <Icon name="send" size={26} color="white"/>
                  </div>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.75rem",color:"var(--rose)",marginBottom:12}}>Message Sent!</h3>
                  <p style={{color:"var(--text-mid)",lineHeight:1.85,fontSize:".93rem"}}>Thank you for reaching out! Jyoti will respond within 24 hours.</p>
                  <button className="btn-outline" style={{marginTop:26}} onClick={()=>setSent(false)}>Send Another</button>
                </div>
              ):(
                <div className="card-glass" style={{padding:"42px 38px"}}>
                  <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"1.45rem",marginBottom:26,color:"var(--text-dark)"}}>Send a Message</h2>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:18}}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-name">Your Name</label>
                      <input id="c-name" className={`form-input${errors.name?" error":""}`} placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} autoComplete="name"/>
                      {errors.name&&<span className="error-msg" role="alert"><Icon name="x" size={11} color="var(--error-red)"/>{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">Email</label>
                      <input id="c-email" className={`form-input${errors.email?" error":""}`} type="email" placeholder="your@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} autoComplete="email"/>
                      {errors.email&&<span className="error-msg" role="alert"><Icon name="x" size={11} color="var(--error-red)"/>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-group" style={{marginBottom:18}}>
                    <label className="form-label" htmlFor="c-subject">Subject</label>
                    <input id="c-subject" className="form-input" placeholder="What's this about?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
                  </div>
                  <div className="form-group" style={{marginBottom:26}}>
                    <label className="form-label" htmlFor="c-message">Message *</label>
                    <textarea id="c-message" className={`form-input${errors.message?" error":""}`} rows={5} placeholder="Tell me anything..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{resize:"vertical"}} aria-required="true"/>
                    {errors.message&&<span className="error-msg" role="alert"><Icon name="x" size={11} color="var(--error-red)"/>{errors.message}</span>}
                  </div>
                  <button className="btn-primary" style={{width:"100%",justifyContent:"center",gap:10}} onClick={handleSend}>
                    <Icon name="send" size={16} color="white"/> Send Message
                  </button>
                </div>
              )}
              {/* Map placeholder */}
              <div style={{marginTop:24,borderRadius:20,overflow:"hidden",height:250,position:"relative"}}>
                <img src={IMGS.studio} alt="Studio location — Agra" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"brightness(0.75)"}}/>
                <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10}}>
                  <div style={{background:"white",borderRadius:12,padding:"10px 14px",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(0,0,0,.2)"}}>
                    <Icon name="mapPin" size={18} color="var(--rose)"/>
                    <span style={{fontFamily:"'Playfair Display',serif",fontSize:".95rem",color:"var(--text-dark)",fontStyle:"italic"}}>Make Over By Jyoti, Agra</span>
                  </div>
                  <a href="https://maps.google.com/?q=Agra,Uttar+Pradesh" target="_blank" rel="noopener noreferrer"
                    style={{fontSize:".74rem",color:"white",fontWeight:600,textDecoration:"none",letterSpacing:"1px",textTransform:"uppercase",background:"var(--rose)",padding:"8px 20px",borderRadius:50,boxShadow:"0 4px 16px rgba(192,108,132,.4)"}}>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:960px){section>.container>div[style*="1fr 1.4fr"]{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </div>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page,setPage]=useState("Home");
  const renderPage=()=>{
    switch(page){
      case "Home":      return <HomePage setPage={setPage}/>;
      case "About":     return <AboutPage/>;
      case "Services":  return <ServicesPage setPage={setPage}/>;
      case "Portfolio": return <PortfolioPage setPage={setPage}/>;
      case "Pricing":   return <PricingPage setPage={setPage}/>;
      case "Booking":   return <BookingPage/>;
      case "Contact":   return <ContactPage/>;
      default:          return <HomePage setPage={setPage}/>;
    }
  };
  return (
    <>
      <FontLink/>
      <SchemaMarkup/>
      <title>Make Over By Jyoti | Luxury Makeup Artist in Agra</title>
      <meta name="description" content="Make Over By Jyoti — Award-winning luxury makeup artist in Agra. Bridal, party, editorial & HD makeup. Book your session today."/>
      <meta name="keywords" content="makeup artist Agra, bridal makeup Agra, luxury makeup Agra, Make Over By Jyoti, HD makeup, party makeup Agra, wedding makeup Agra"/>
      <meta property="og:title" content="Make Over By Jyoti | Luxury Makeup Artist in Agra"/>
      <meta property="og:description" content="Award-winning bridal & luxury makeup artistry in Agra. 800+ happy clients. Book your session today."/>
      <meta property="og:type" content="website"/>
      <meta name="robots" content="index, follow"/>
      <link rel="canonical" href="https://makeoverjyoti.com"/>
      <Navbar currentPage={page} setPage={setPage}/>
      <main id="main-content" key={page} className="animate-page-in">
        {renderPage()}
      </main>
      <Footer setPage={setPage}/>
    </>
  );
}