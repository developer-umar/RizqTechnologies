"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    tag: "Full Stack",
    name: "Web Development",
    desc: "Blazing-fast websites & web apps. Next.js, React, custom dashboards — built for performance, SEO, and conversion from day one.",
    feats: ["Next.js / React", "REST & GraphQL APIs", "SEO Optimized"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Developer working on code",
    caption: "Web & Frontend",
  },
   {
    num: "02",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "Logos, identity systems, and design languages that make you unforgettable. Every pixel crafted with intention and precision.",
    feats: ["Logo Design", "Brand Guidelines", "UI/UX Systems"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Design tools and branding work",
    caption: "Design & Branding",
  },
  
   {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "SEO, paid ads, content strategy. Data-driven campaigns that bring qualified traffic and convert visitors into paying customers.",
    feats: ["SEO & SEM", "Meta & Google Ads", "Analytics & CRO"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Marketing analytics dashboard",
    caption: "Growth & Marketing",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Cross-platform iOS & Android apps that feel truly native. From MVPs to production-grade products with seamless, delightful UX.",
    feats: ["React Native / Flutter", "Play & App Store", "Offline-first Design"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Mobile app on phone screen",
    caption: "iOS & Android",
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI & LLM Solutions",
    desc: "Custom chatbots, LLM integrations, RAG pipelines, and intelligent automation that actually solves real business problems.",
    feats: ["OpenAI / Claude APIs", "RAG Pipelines", "Custom Fine-tuning"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
    imgAlt: "AI and machine learning visualization",
    caption: "Artificial Intelligence",
  },
 
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud & Deployment",
    desc: "CI/CD pipelines, cloud infrastructure, Docker, and zero-downtime deployments. Your product — always running, always fast.",
    feats: ["AWS / Vercel / GCP", "Docker & CI/CD", "24/7 Monitoring"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Server room and cloud infrastructure",
    caption: "Cloud Infrastructure",
  },
  {
    num: "07",
    tag: "Strategy",
    name: "Tech Consulting",
    desc: "Architecture reviews, roadmap planning, and tech audits. We help you build the right thing, the right way — first time.",
    feats: ["Tech Stack Audit", "Roadmap Planning", "Team Training"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Team discussing tech strategy",
    caption: "Strategy & Consulting",
  },
];

// ─────────────────────────────────────────────────────────────────
// SERVICE CARD (Sticky Stack)
// ─────────────────────────────────────────────────────────────────
function ServiceCard({ service, index, onVisible }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(index); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onVisible]);

  return (
    <div
      ref={cardRef}
      style={{
        position: "sticky",
        top: `calc(10% + ${index * 32}px)`, 
        width: "100%",
        maxWidth: 1000,
        height: "clamp(460px, 56vh, 580px)",
        background: "#0d0d0d",
        border: "1px solid #1a1a1a",
        borderRadius: 28,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        boxShadow: "0 -20px 50px rgba(0,0,0,0.9)",
        marginBottom: "12vh", 
      }}
    >
      {/* LEFT PANEL */}
      <div style={{ position: "relative", zIndex: 2, padding: "clamp(32px,4vw,52px)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d0d0d" }}>
        <div style={{ position: "absolute", left: 0, top: "12%", bottom: "12%", width: 2, background: "linear-gradient(to bottom, transparent, #F5A623, transparent)", borderRadius: 2 }} />
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 9, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F5A623", border: "1px solid rgba(245,166,35,0.2)", padding: "4px 12px", borderRadius: 30, background: "rgba(245,166,35,0.04)", width: "fit-content" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#F5A623" }} />
            {service.tag}
          </span>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#F5A623", display: "flex", alignItems: "center", gap: 12 }}>
            {service.num}
            <span style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(245,166,35,0.3), transparent)" }} />
          </div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.1 }}>
            {service.name}
          </h3>
          <p style={{ fontSize: 13, lineHeight: 1.85, color: "#4a4a4a", maxWidth: 300 }}>{service.desc}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {service.feats.map((f, fi) => (
              <div key={fi} style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e2e2e", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#F5A623", opacity: 0.4 }} />
                {f}
              </div>
            ))}
          </div>
          <ExploreButton />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src={service.img} alt={service.imgAlt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover", filter: "brightness(0.42) saturate(0.65)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.55) 38%, transparent 100%)", zIndex: 1 }} />
      </div>
    </div>
  );
}

function ExploreButton() {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: hov ? 16 : 10, fontSize: 10, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F5A623", border: `1px solid ${hov ? "rgba(245,166,35,0.45)" : "rgba(245,166,35,0.2)"}`, padding: "10px 20px", borderRadius: 30, width: "fit-content", background: hov ? "rgba(245,166,35,0.07)" : "transparent", cursor: "pointer", transition: "all 0.22s ease" }}>
      Explore service <span>→</span>
    </button>
  );
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @media (max-width: 640px) {
          .svc-stack-wrapper { padding: 0 16px !important; }
        }
      `}</style>

      <section
        id="services"
        style={{
          background: "#080808",
          position: "relative",
          minHeight: "100vh",
          paddingBottom: "100px"
        }}
      >
        {/* YE RHA BHAI GRID BG (Yellow Lining) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.02) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(245,166,35,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />

        <div style={{ textAlign: "center", padding: "100px 24px 80px", position: "relative", zIndex: 1 }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 10, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "#444", marginBottom: 18 }}>
            <span style={{ width: 22, height: 1, background: "#222" }} />
            What we build
            <span style={{ width: 22, height: 1, background: "#222" }} />
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5.5vw, 58px)", fontWeight: 800, color: "#fff", lineHeight: 1.05 }}>
            Services that <em style={{ fontStyle: "normal", color: "#F5A623" }}>move</em> <br /> the needle
          </h2>
        </div>

        <div 
            className="svc-stack-wrapper"
            style={{ 
                position: "relative", 
                zIndex: 1,
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                padding: "0 40px"
            }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              onVisible={setActiveIdx}
            />
          ))}
        </div>
      </section>
    </>
  );
}