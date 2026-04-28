"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    tag: "Identity",
    name: "Brand & UI Design",
    desc: "We craft bold identities and stunning interfaces that make your brand instantly recognizable and impossible to ignore.",
    feats: ["Logo Design", "Brand Systems", "UI/UX Design"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "02",
    tag: "Engineering",
    name: "Web Development",
    desc: "High-performance websites and web apps built with modern tech — optimized for speed, SEO, and real business growth.",
    feats: ["Next.js / React", "Backend & APIs", "SEO Optimization"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "03",
    tag: "Intelligence",
    name: "AI & LLM Solutions",
    desc: "Smart AI solutions including chatbots, automation, and LLM integrations to streamline operations and boost efficiency.",
    feats: ["OpenAI / Claude", "RAG Systems", "Custom AI"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "04",
    tag: "Scalability",
    name: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure and automated deployment pipelines ensuring speed, scalability, and zero downtime.",
    feats: ["AWS / Vercel", "Docker & CI/CD", "24/7 Monitoring"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
  }
];

function ServiceCard({ service, index }) {
  const [hov, setHov] = useState(false);

  return (
    <div className="service-card" style={{ top: `calc(10% + ${index * 32}px)` }}>
      {/* CONTENT PANEL */}
      <div className="card-content">
        <div className="accent-line" />
        
        <div className="card-top">
          <span className="tag-badge">
            <span className="dot" />
            {service.tag}
          </span>
          <div className="service-number">{service.num} — SOLUTIONS</div>
          <h3 className="service-title">{service.name}</h3>
          <p className="service-desc">{service.desc}</p>
        </div>

        <div className="card-bottom">
          <div className="feats-container">
            {service.feats.map((f, fi) => (
              <span key={fi} className="feat-tag">
                <span className="feat-dot" />
                {f}
              </span>
            ))}
          </div>
          
          <Link 
            href="#contact" 
            className={`cta-button ${hov ? 'active' : ''}`}
            onMouseEnter={() => setHov(true)} 
            onMouseLeave={() => setHov(false)}
          >
            Let's Connect <span>→</span>
          </Link>
        </div>
      </div>

      {/* IMAGE PANEL */}
      <div className="card-image-wrapper">
        <Image 
          src={service.img} 
          alt={service.name} 
          fill 
          className="card-image"
        />
        <div className="image-overlay" />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&family=Inter:wght@300;400;600&display=swap');
        
        :root { --accent: #F5A623; --bg: #050505; --card-bg: #0d0d0d; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); font-family: 'Inter', sans-serif; color: white; }

        .services-section { position: relative; min-height: 250vh; padding: 100px 20px; overflow: clip; }
        
        .header-area { text-align: center; margin-bottom: 80px; position: relative; z-index: 10; }
        .sub-heading { color: #555; text-transform: uppercase; letter-spacing: 0.4em; font-size: 12px; font-weight: 600; margin-bottom: 16px; display: block; }
        .main-heading { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(40px, 7vw, 80px); font-weight: 800; line-height: 1; letter-spacing: -0.04em; }
        .accent-text { color: var(--accent); }

        .stack-container { display: flex; flexDirection: column; align-items: center; width: 100%; position: relative; z-index: 5; }

        .service-card {
          position: sticky; width: 100%; max-width: 1100px; 
          min-height: 550px; background: var(--card-bg);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 32px;
          display: grid; grid-template-columns: 1.2fr 1fr;
          overflow: hidden; margin-bottom: 15vh; box-shadow: 0 -20px 40px rgba(0,0,0,0.5);
        }

        .card-content { padding: 50px; display: flex; flex-direction: column; justify-content: space-between; position: relative; }
        .accent-line { position: absolute; left: 0; top: 20%; bottom: 20%; width: 2px; background: linear-gradient(transparent, var(--accent), transparent); }
        
        .tag-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(245,166,35,0.2); padding: 6px 14px; border-radius: 20px; color: var(--accent); font-size: 10px; font-weight: 700; text-transform: uppercase; width: fit-content; margin-bottom: 20px; }
        .dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 10px var(--accent); }
        
        .service-number { font-size: 12px; color: #555; font-weight: 600; margin-bottom: 10px; }
        .service-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(28px, 4vw, 42px); font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
        .service-desc { color: #888; line-height: 1.6; font-size: 16px; max-width: 400px; }

        .feats-container { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px; }
        .feat-tag { font-size: 11px; background: rgba(255,255,255,0.03); padding: 5px 12px; border-radius: 4px; color: #666; display: flex; align-items: center; gap: 6px; }
        .feat-dot { width: 3px; height: 3px; background: var(--accent); border-radius: 50%; }

        .cta-button { 
          display: inline-flex; align-items: center; gap: 10px; border: 1px solid var(--accent);
          padding: 14px 28px; border-radius: 30px; color: var(--accent); text-decoration: none;
          font-weight: 700; font-size: 12px; text-transform: uppercase; transition: all 0.3s ease;
        }
        .cta-button.active { background: var(--accent); color: black; gap: 16px; }

        .card-image-wrapper { position: relative; min-height: 300px; }
        .card-image { object-fit: cover; filter: grayscale(100%) brightness(0.6); }
        .image-overlay { position: absolute; inset: 0; background: linear-gradient(to right, var(--card-bg), transparent); }

        @media (max-width: 900px) {
          .service-card { grid-template-columns: 1fr; height: auto; min-height: unset; position: relative !important; top: 0 !important; margin-bottom: 40px; }
          .card-content { order: 2; padding: 30px; }
          .card-image-wrapper { order: 1; height: 250px; }
          .image-overlay { background: linear-gradient(to top, var(--card-bg), transparent); }
          .main-heading { font-size: 45px; }
          .services-section { min-height: auto; }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="header-area">
          <span className="sub-heading">Expertise</span>
          <h2 className="main-heading">
            Our Premium <br/> <span className="accent-text">Services.</span>
          </h2>
        </div>

        <div className="stack-container">
          {SERVICES.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
        </div>
      </section>
    </>
  );
}