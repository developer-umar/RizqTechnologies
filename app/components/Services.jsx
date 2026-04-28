"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "We craft bold identities and stunning interfaces that make your brand instantly recognizable and impossible to ignore.",
    feats: ["Logo Design", "Brand Identity Systems", "UI/UX Design"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "02",
    tag: "Full Stack",
    name: "Website Development",
    desc: "High-performance websites and web apps built with modern tech — optimized for speed, SEO, and real business growth.",
    feats: ["Next.js / React", "Backend & APIs", "SEO Optimization"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Data-driven marketing strategies that attract the right audience, boost visibility, and convert traffic into revenue.",
    feats: ["SEO & SEM", "Meta & Google Ads", "Analytics & CRO"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Scalable, high-quality mobile apps designed for seamless user experience across both iOS and Android platforms.",
    feats: ["React Native / Flutter", "App Store Deployment", "Performance Optimization"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI & LLM Solutions",
    desc: "Smart AI solutions including chatbots, automation, and LLM integrations to streamline operations and boost efficiency.",
    feats: ["OpenAI / Claude APIs", "RAG Systems", "Custom AI Solutions"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud & Deployment",
    desc: "Reliable cloud infrastructure and automated deployment pipelines ensuring speed, scalability, and zero downtime.",
    feats: ["AWS / GCP / Vercel", "Docker & CI/CD", "Monitoring & Scaling"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
  },
  {
    num: "07",
    tag: "Strategy",
    name: "Tech Consulting",
    desc: "Expert guidance to help you choose the right technologies, plan scalable systems, and execute with confidence.",
    feats: ["Tech Audit", "Architecture Planning", "Team Guidance"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop",
  },
];

function ServiceCard({ service, index }) {
  const [hov, setHov] = useState(false);

  return (
    <div 
      className="service-card" 
      style={{ 
        position: "sticky",
        top: `calc(10% + ${index * 25}px)`, 
        marginBottom: "12vh" 
      }}
    >
      <div className="card-content">
        <div className="accent-line" />
        
        <div className="card-top">
          <span className="tag-badge">
            <span className="dot" />
            {service.tag}
          </span>
          <div className="service-number">{service.num} — CORE SERVICE</div>
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

      <div className="card-image-wrapper">
        <Image 
          src={service.img} 
          alt={service.name} 
          fill 
          className="card-image"
          sizes="(max-width: 900px) 100vw, 50vw"
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
        body { background: var(--bg); font-family: 'Inter', sans-serif; color: white; margin: 0; }

        .services-section { 
          position: relative; 
          min-height: 450vh; 
          padding: 140px 20px; 
          overflow: clip; 
          background-color: var(--bg);
        }

        /* GRID BACKGROUND LINES */
        .bg-grid {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 4rem 4rem;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          pointer-events: none;
        }

        .header-area { text-align: center; margin-bottom: 100px; position: relative; z-index: 10; }
        .sub-heading { color: #555; text-transform: uppercase; letter-spacing: 0.5em; font-size: 11px; font-weight: 800; margin-bottom: 20px; display: block; }
        .main-heading { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(45px, 9vw, 90px); font-weight: 800; line-height: 0.9; letter-spacing: -0.05em; }
        .accent-text { color: var(--accent); }

        .stack-container { display: flex; flex-direction: column; align-items: center; width: 100%; position: relative; z-index: 5; }

        .service-card {
          width: 100%; max-width: 1200px; 
          min-height: 600px; background: var(--card-bg);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 40px;
          display: grid; grid-template-columns: 1.1fr 1fr;
          overflow: hidden; box-shadow: 0 -30px 60px rgba(0,0,0,0.8);
          backdrop-blur: 10px;
        }

        .card-content { padding: clamp(35px, 6vw, 70px); display: flex; flex-direction: column; justify-content: space-between; position: relative; background: var(--card-bg); }
        .accent-line { position: absolute; left: 0; top: 15%; bottom: 15%; width: 3px; background: linear-gradient(transparent, var(--accent), transparent); }
        
        .tag-badge { display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(245,166,35,0.2); padding: 7px 16px; border-radius: 30px; color: var(--accent); font-size: 10px; font-weight: 700; text-transform: uppercase; width: fit-content; margin-bottom: 20px; }
        .dot { width: 7px; height: 7px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 10px var(--accent); }
        
        .service-number { font-size: 13px; color: #444; font-weight: 600; margin-bottom: 10px; }
        .service-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(32px, 5vw, 52px); font-weight: 800; line-height: 1.05; margin-bottom: 20px; }
        .service-desc { color: #888; line-height: 1.6; font-size: 16px; max-width: 440px; }

        .feats-container { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 30px; }
        .feat-tag { font-size: 11px; font-weight: 600; text-transform: uppercase; background: rgba(255,255,255,0.03); padding: 6px 14px; border-radius: 6px; color: #555; display: flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.05); }
        .feat-dot { width: 4px; height: 4px; background: var(--accent); border-radius: 50%; opacity: 0.5; }

        .cta-button { 
          display: inline-flex; align-items: center; gap: 12px; border: 1px solid var(--accent);
          padding: 18px 36px; border-radius: 40px; color: var(--accent); text-decoration: none;
          font-weight: 700; font-size: 12px; text-transform: uppercase; transition: all 0.4s ease;
          width: fit-content;
        }
        .cta-button.active { background: var(--accent); color: black; gap: 18px; }

        .card-image-wrapper { position: relative; min-height: 100%; overflow: hidden; }
        .card-image { object-fit: cover; filter: brightness(0.6) contrast(1.1); transition: transform 1.2s ease; }
        .service-card:hover .card-image { transform: scale(1.08); }
        .image-overlay { position: absolute; inset: 0; background: linear-gradient(to right, var(--card-bg) 5%, transparent 100%); }

        @media (max-width: 900px) {
          .service-card { 
            grid-template-columns: 1fr; 
            min-height: 680px; 
            width: 95%;
          }
          .card-content { order: 2; padding: 35px; }
          .card-image-wrapper { order: 1; height: 280px; }
          .image-overlay { background: linear-gradient(to top, var(--card-bg) 10%, transparent 100%); }
          .main-heading { font-size: 55px; }
          .service-desc { font-size: 15px; }
          .services-section { padding: 80px 10px; }
        }
      `}</style>

      <section id="services" className="services-section">
        {/* BACKGROUND GRID LINES */}
        <div className="bg-grid"></div>

        <div className="header-area">
          <span className="sub-heading">Innovating the future</span>
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