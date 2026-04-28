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
        
        :root { --accent: #F5A623; --bg: #080808; --card-bg: #111111; }
        html { scroll-behavior: smooth; }
        body { 
          background-color: var(--bg);
          background-image: 
            radial-gradient(at 0% 0%, rgba(245, 166, 35, 0.08) 0, transparent 50%), 
            radial-gradient(at 100% 100%, rgba(245, 166, 35, 0.05) 0, transparent 50%);
          font-family: 'Inter', sans-serif; 
          color: white; 
          margin: 0; 
        }

        .services-section { position: relative; min-height: 450vh; padding: 140px 20px; overflow: clip; }
        
        .header-area { text-align: center; margin-bottom: 100px; position: relative; z-index: 10; }
        .sub-heading { color: #666; text-transform: uppercase; letter-spacing: 0.5em; font-size: 11px; font-weight: 800; margin-bottom: 20px; display: block; }
        .main-heading { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(45px, 9vw, 95px); font-weight: 800; line-height: 0.9; letter-spacing: -0.05em; }
        .accent-text { color: var(--accent); text-shadow: 0 0 30px rgba(245, 166, 35, 0.2); }

        .stack-container { display: flex; flex-direction: column; align-items: center; width: 100%; position: relative; z-index: 5; }

        .service-card {
          width: 100%; max-width: 1200px; 
          min-height: 600px; background: var(--card-bg);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 40px;
          display: grid; grid-template-columns: 1.1fr 1fr;
          overflow: hidden; box-shadow: 0 -40px 80px rgba(0,0,0,0.9);
        }

        .card-content { padding: clamp(40px, 6vw, 70px); display: flex; flex-direction: column; justify-content: space-between; position: relative; background: var(--card-bg); }
        .accent-line { position: absolute; left: 0; top: 15%; bottom: 15%; width: 3px; background: linear-gradient(transparent, var(--accent), transparent); }
        
        .tag-badge { display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(245,166,35,0.15); padding: 8px 18px; border-radius: 30px; color: var(--accent); font-size: 11px; font-weight: 800; text-transform: uppercase; width: fit-content; margin-bottom: 20px; background: rgba(245,166,35,0.02); }
        .dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 15px var(--accent); }
        
        .service-number { font-size: 13px; color: #444; font-weight: 700; margin-bottom: 10px; letter-spacing: 0.1em; }
        .service-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(34px, 5vw, 56px); font-weight: 800; line-height: 1.0; margin-bottom: 24px; color: #fff; }
        .service-desc { color: #999; line-height: 1.7; font-size: 17px; max-width: 440px; }

        .feats-container { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px; }
        .feat-tag { font-size: 11px; font-weight: 700; text-transform: uppercase; background: rgba(255,255,255,0.02); padding: 7px 14px; border-radius: 6px; color: #555; display: flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.04); }
        .feat-dot { width: 4px; height: 4px; background: var(--accent); border-radius: 50%; opacity: 0.6; }

        .cta-button { 
          display: inline-flex; align-items: center; gap: 12px; border: 1px solid var(--accent);
          padding: 18px 36px; border-radius: 50px; color: var(--accent); text-decoration: none;
          font-weight: 800; font-size: 13px; text-transform: uppercase; transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          width: fit-content;
        }
        .cta-button.active { background: var(--accent); color: black; transform: scale(1.05); }

        .card-image-wrapper { position: relative; min-height: 100%; overflow: hidden; }
        .card-image { object-fit: cover; filter: brightness(0.7) contrast(1.1); transition: transform 1.2s ease; }
        .service-card:hover .card-image { transform: scale(1.05); }
        .image-overlay { position: absolute; inset: 0; background: linear-gradient(to right, var(--card-bg) 5%, transparent 100%); }

        @media (max-width: 900px) {
          .service-card { 
            grid-template-columns: 1fr; 
            min-height: 700px;
          }
          .card-content { order: 2; padding: 40px; }
          .card-image-wrapper { order: 1; height: 320px; }
          .image-overlay { background: linear-gradient(to top, var(--card-bg) 15%, transparent 100%); }
          .main-heading { font-size: 55px; }
          .services-section { padding-top: 80px; }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="header-area">
          <span className="sub-heading">Unmatched Expertise</span>
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