"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Client-side navigation ke liye best hai

// ─────────────────────────────────────────────────────────────────
// DATA: Refined for Premium Branding
// ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "We craft bold identities and stunning interfaces that make your brand instantly recognizable and impossible to ignore.",
    feats: ["Logo Design", "Brand Identity Systems", "UI/UX Design"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Design tools and branding work",
  },
  {
    num: "02",
    tag: "Full Stack",
    name: "Website Development",
    desc: "High-performance websites and web apps built with modern tech — optimized for speed, SEO, and real business growth.",
    feats: ["Next.js / React", "Backend & APIs", "SEO Optimization"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Developer working on code",
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Data-driven marketing strategies that attract the right audience, boost visibility, and convert traffic into revenue.",
    feats: ["SEO & SEM", "Meta & Google Ads", "Analytics & CRO"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Marketing analytics dashboard",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Scalable, high-quality mobile apps designed for seamless user experience across both iOS and Android platforms.",
    feats: ["React Native / Flutter", "App Store Deployment", "Performance Optimization"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Mobile app on phone screen",
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI & LLM Solutions",
    desc: "Smart AI solutions including chatbots, automation, and LLM integrations to streamline operations and boost efficiency.",
    feats: ["OpenAI / Claude APIs", "RAG Systems", "Custom AI Solutions"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format&fit=crop",
    imgAlt: "AI and machine learning visualization",
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud & Deployment",
    desc: "Reliable cloud infrastructure and automated deployment pipelines ensuring speed, scalability, and zero downtime.",
    feats: ["AWS / GCP / Vercel", "Docker & CI/CD", "Monitoring & Scaling"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Server room and cloud infrastructure",
  },
  {
    num: "07",
    tag: "Strategy",
    name: "Tech Consulting",
    desc: "Expert guidance to help you choose the right technologies, plan scalable systems, and execute with confidence.",
    feats: ["Tech Audit", "Architecture Planning", "Team Guidance"],
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format&fit=crop",
    imgAlt: "Team discussing tech strategy",
  },
];

// ─────────────────────────────────────────────────────────────────
// SERVICE CARD
// ─────────────────────────────────────────────────────────────────
function ServiceCard({ service, index }) {
  return (
    <div
      style={{
        position: "sticky",
        top: `calc(15% + ${index * 32}px)`, 
        width: "100%",
        maxWidth: 1100,
        height: "clamp(500px, 65vh, 650px)",
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 40,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "minmax(300px, 1.2fr) 1fr",
        boxShadow: "0 -30px 60px rgba(0,0,0,0.9)",
        marginBottom: "12vh", 
      }}
    >
      {/* LEFT PANEL */}
      <div style={{ position: "relative", zIndex: 2, padding: "clamp(40px,5vw,64px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: 2, background: "linear-gradient(to bottom, transparent, #F5A623, transparent)" }} />
        
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5A623", border: "1px solid rgba(245,166,35,0.15)", padding: "8px 18px", borderRadius: 40, background: "rgba(245,166,35,0.03)", width: "fit-content" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5A623", boxShadow: "0 0 12px #F5A623" }} />
            {service.tag}
          </span>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "#F5A623", opacity: 0.6 }}>
            {service.num} — SOLUTIONS
          </div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {service.name}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#999", maxWidth: 400, fontWeight: 400 }}>{service.desc}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {service.feats.map((f, fi) => (
              <span key={fi} style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", color: "#555", display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.03)", padding: "6px 12px", borderRadius: 4 }}>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#F5A623" }} />
                {f}
              </span>
            ))}
          </div>
          <ContactCTAButton />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Image src={service.img} alt={service.imgAlt} fill sizes="50vw" style={{ objectFit: "cover", filter: "grayscale(100%) contrast(1.2) brightness(0.5)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0a0a0a 0%, transparent 100%)" }} />
      </div>
    </div>
  );
}

function ContactCTAButton() {
  const [hov, setHov] = useState(false);
  return (
    <Link href="#contact" scroll={true}
      onMouseEnter={() => setHov(true)} 
      onMouseLeave={() => setHov(false)} 
      style={{ 
        display: "inline-flex", 
        alignItems: "center", 
        gap: hov ? 16 : 10, 
        fontSize: 12, 
        fontWeight: 700, 
        textTransform: "uppercase", 
        color: hov ? "#000" : "#F5A623", 
        border: "1px solid #F5A623", 
        padding: "16px 32px", 
        borderRadius: 40, 
        width: "fit-content", 
        background: hov ? "#F5A623" : "transparent", 
        cursor: "pointer", 
        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        textDecoration: "none"
      }}
    >
      Let's Connect <span style={{ transform: hov ? "translateX(4px)" : "none", transition: "transform 0.3s" }}>→</span>
    </Link>
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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;600&display=swap');
        html { scroll-behavior: smooth; }
        body { background: #050505; font-family: 'Inter', sans-serif; }
      `}</style>

      <section
        id="services"
        onMouseMove={handleMouseMove}
        style={{
          background: "#050505",
          position: "relative",
          minHeight: "300vh", 
          paddingBottom: "20vh",
          overflow: "clip"
        }}
      >
        {/* GRID OVERLAY */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245,166,35,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)"
          }}
        />

        {/* HEADER */}
        <div style={{ textAlign: "center", padding: "160px 24px 120px", position: "relative", zIndex: 1 }}>
          <p style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 12, fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: "#444", marginBottom: 24 }}>
            <span style={{ width: 40, height: 1, background: "rgba(245,166,35,0.2)" }} />
            Core Capabilities
            <span style={{ width: 40, height: 1, background: "rgba(245,166,35,0.2)" }} />
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(44px, 8vw, 92px)", fontWeight: 800, color: "#fff", lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            High-Performance <br/> <span style={{ color: "#F5A623" }}>Architectures.</span>
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
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}