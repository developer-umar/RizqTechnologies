"use client";

import React, { useEffect, useRef, useState } from "react";
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
  },
  {
    num: "02",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "Logos, identity systems, and design languages that make you unforgettable. Every pixel crafted with intention and precision.",
    feats: ["Logo Design", "Brand Guidelines", "UI/UX Systems"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Design tools and branding work",
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "SEO, paid ads, content strategy. Data-driven campaigns that bring qualified traffic and convert visitors into paying customers.",
    feats: ["SEO & SEM", "Meta & Google Ads", "Analytics & CRO"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Marketing analytics dashboard",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Cross-platform iOS & Android apps that feel truly native. From MVPs to production-grade products with seamless, delightful UX.",
    feats: ["React Native / Flutter", "Play & App Store", "Offline-first Design"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Mobile app on phone screen",
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI & LLM Solutions",
    desc: "Custom chatbots, LLM integrations, RAG pipelines, and intelligent automation that actually solves real business problems.",
    feats: ["OpenAI / Claude APIs", "RAG Pipelines", "Custom Fine-tuning"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
    imgAlt: "AI and machine learning visualization",
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud & Deployment",
    desc: "CI/CD pipelines, cloud infrastructure, Docker, and zero-downtime deployments. Your product — always running, always fast.",
    feats: ["AWS / Vercel / GCP", "Docker & CI/CD", "24/7 Monitoring"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Server room and cloud infrastructure",
  },
  {
    num: "07",
    tag: "Strategy",
    name: "Tech Consulting",
    desc: "Architecture reviews, roadmap planning, and tech audits. We help you build the right thing, the right way — first time.",
    feats: ["Tech Stack Audit", "Roadmap Planning", "Team Training"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Team discussing tech strategy",
  },
];

// ─────────────────────────────────────────────────────────────────
// SERVICE CARD (Sticky Stack Logic)
// ─────────────────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  return (
    <div
      style={{
        position: "sticky",
        top: `calc(12% + ${index * 30}px)`, // Ye cards ko ek ke niche ek stack karega
        width: "100%",
        maxWidth: 1000,
        height: "clamp(460px, 60vh, 600px)",
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 32,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        boxShadow: "0 -20px 50px rgba(0,0,0,0.8)",
        marginBottom: "10vh", // Stacking ke liye space deta hai
      }}
    >
      {/* LEFT PANEL */}
      <div style={{ position: "relative", zIndex: 2, padding: "clamp(32px,4vw,52px)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0d0d0d" }}>
        <div style={{ position: "absolute", left: 0, top: "15%", bottom: "15%", width: 2, background: "linear-gradient(to bottom, transparent, #F5A623, transparent)" }} />
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F5A623", border: "1px solid rgba(245,166,35,0.25)", padding: "6px 14px", borderRadius: 30, background: "rgba(245,166,35,0.06)", width: "fit-content" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5A623", boxShadow: "0 0 10px #F5A623" }} />
            {service.tag}
          </span>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, color: "#F5A623", display: "flex", alignItems: "center", gap: 12 }}>
            {service.num}
            <span style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(245,166,35,0.2), transparent)" }} />
          </div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
            {service.name}
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#777", maxWidth: 320 }}>{service.desc}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {service.feats.map((f, fi) => (
              <div key={fi} style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", color: "#444", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#F5A623", opacity: 0.5 }} />
                {f}
              </div>
            ))}
          </div>
          <ExploreButton />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src={service.img} alt={service.imgAlt} fill sizes="50vw" style={{ objectFit: "cover", filter: "brightness(0.4) contrast(1.1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0d0d0d 0%, rgba(13,13,13,0.3) 40%, transparent 100%)" }} />
      </div>
    </div>
  );
}

function ExploreButton() {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: hov ? 16 : 10, fontSize: 11, fontWeight: 600, textTransform: "uppercase", color: "#F5A623", border: `1px solid ${hov ? "#F5A623" : "rgba(245,166,35,0.3)"}`, padding: "12px 24px", borderRadius: 30, width: "fit-content", background: hov ? "rgba(245,166,35,0.08)" : "transparent", cursor: "pointer", transition: "all 0.3s ease" }}>
      Explore service <span>→</span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function Services() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        body { background: #050505; }
      `}</style>

      <section
        id="services"
        onMouseMove={handleMouseMove}
        style={{
          background: "#050505",
          position: "relative",
          minHeight: "200vh", // Container ko bada rakha hai taaki scroll stack ho sake
          paddingBottom: "20vh",
          overflow: "clip"
        }}
      >
        {/* MAGIC BACKGROUND: Grid + Glow */}
        <div
          aria-hidden
          style={{
            position: "fixed", // Fixed taaki scroll ke sath move na kare
            inset: 0,
            zIndex: 0,
            backgroundImage: `
              linear-gradient(rgba(245,166,35,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,166,35,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(circle at center, black, transparent 90%)"
          }}
        />

        {/* BENTO MOUSE GLOW */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            left: mousePos.x - 400,
            top: mousePos.y - 400,
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
            transition: "left 0.15s ease-out, top 0.15s ease-out"
          }}
        />

        {/* HEADER */}
        <div style={{ textAlign: "center", padding: "140px 24px 100px", position: "relative", zIndex: 1 }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 11, fontWeight: 500, letterSpacing: "0.3em", textTransform: "uppercase", color: "#555", marginBottom: 20 }}>
            <span style={{ width: 30, height: 1, background: "rgba(245,166,35,0.3)" }} />
            Capabilities
            <span style={{ width: 30, height: 1, background: "rgba(245,166,35,0.3)" }} />
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800, color: "#fff", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
            High-Impact <span style={{ color: "#F5A623" }}>Solutions.</span>
          </h2>
        </div>

        {/* THE STACK */}
        <div 
            style={{ 
                position: "relative", 
                zIndex: 1,
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                padding: "0 24px",
                width: "100%"
            }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}