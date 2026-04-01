"use client";

import React, { useEffect, useRef } from "react";

const services = [
  {
    num: "01", name: "Web\nDevelopment", tag: "Full Stack",
    desc: "Blazing-fast websites and web apps. Next.js, React, custom dashboards — built for performance and conversion.",
    feats: ["Next.js / React", "REST & GraphQL", "SEO Optimized"],
    big: "WD",
  },
  {
    num: "02", name: "App\nDevelopment", tag: "Mobile",
    desc: "Cross-platform iOS & Android apps that feel native. From MVPs to scale-ready products with stunning UX.",
    feats: ["React Native", "Flutter", "App Store Ready"],
    big: "APP",
  },
  {
    num: "03", name: "AI & LLM\nSolutions", tag: "AI / ML",
    desc: "Custom chatbots, LLM integrations, RAG pipelines. Intelligent automation that actually solves real problems.",
    feats: ["OpenAI / Claude", "RAG Pipelines", "Fine-tuning"],
    big: "AI",
  },
  {
    num: "04", name: "Brand &\nUI Design", tag: "Branding",
    desc: "Logo, identity, and design systems that make you unforgettable. Every pixel crafted with intent.",
    feats: ["Logo Design", "Brand System", "UI/UX"],
    big: "BR",
  },
  {
    num: "05", name: "Digital\nMarketing", tag: "Growth",
    desc: "SEO, paid ads, content. Strategies that bring qualified traffic and turn visitors into paying customers.",
    feats: ["SEO & SEM", "Meta & Google Ads", "CRO"],
    big: "DM",
  },
  {
    num: "06", name: "Cloud &\nDeployment", tag: "DevOps",
    desc: "CI/CD pipelines, cloud infra, Docker, zero-downtime deploys. Your product — always running.",
    feats: ["AWS / Vercel / GCP", "Docker & CI/CD", "24/7 Uptime"],
    big: "CD",
  },
  {
    num: "07", name: "Tech\nConsulting", tag: "Strategy",
    desc: "Architecture reviews, roadmap planning, tech audits. Build the right thing, the right way, first time.",
    feats: ["Stack Audit", "Roadmap", "Team Training"],
    big: "TC",
  },
];

export default function Services() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("s-visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .s-card {
          opacity: 0;
          transform: translateY(60px) scale(0.97);
          transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1),
                      transform 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        .s-card.s-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .s-glow::after {
          content: '';
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,166,35,0.09) 0%, transparent 70%);
          top: -80px; right: -80px;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .s-card.s-visible.s-glow::after { opacity: 1; }
        .s-bar { transition: opacity 0.4s, -webkit-text-stroke 0.4s; }
        .s-card.s-visible:hover .s-bar {
          -webkit-text-stroke: 1px rgba(245,166,35,0.3) !important;
        }
        .s-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: #F5A623;
          border: 1px solid rgba(245,166,35,0.25);
          padding: 10px 20px; border-radius: 50px;
          transition: all 0.25s ease; cursor: pointer;
          background: transparent;
        }
        .s-cta-btn:hover {
          background: rgba(245,166,35,0.07);
          border-color: rgba(245,166,35,0.5);
          gap: 14px;
        }
        .feat-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; color: #444;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s;
        }
        .feat-row:hover { color: #888; }
      `}</style>

      <section className="bg-[#080808]" id="services">

        {/* ── Header ── */}
        <div className="text-center pt-24 pb-16 px-6">
          <p className="inline-flex items-center gap-2 text-[10px] tracking-[.22em] uppercase text-neutral-700 mb-5">
            <span className="block w-6 h-px bg-neutral-800" />
            What we build
            <span className="block w-6 h-px bg-neutral-800" />
          </p>
          <h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
          >
            Services that{" "}
            <em className="not-italic text-yellow-400">move</em>
            <br />the needle
          </h2>
        </div>

        {/* ── Sticky Scroll Track ── */}
        <div className="relative">
          {services.map((s, i) => (
            <div key={i}>
              {/* Sticky slide */}
              <div
                className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8"
                style={{ zIndex: i + 1, marginTop: i === 0 ? 0 : "-100vh" }}
              >
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="s-card s-glow relative w-full max-w-4xl bg-[#0e0e0e] border border-[#1a1a1a] rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center overflow-hidden"
                >
                  {/* Service tag */}
                  <span className="absolute top-6 right-6 z-10 text-[10px] tracking-[.15em] uppercase text-yellow-400/50 border border-yellow-400/10 px-3 py-1 rounded-full">
                    {s.tag}
                  </span>

                  {/* LEFT */}
                  <div className="relative z-10">
                    <div
                      className="flex items-center gap-3 mb-5 text-[11px] font-bold tracking-[.2em] text-yellow-400"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {s.num}
                      <span className="flex-1 h-px bg-gradient-to-r from-yellow-400/30 to-transparent" />
                    </div>

                    <h3
                      className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5"
                      style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
                    >
                      {s.name.split("\n").map((line, li) => (
                        <span key={li}>
                          {line}
                          {li < s.name.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                      {s.desc}
                    </p>

                    <button className="s-cta-btn">
                      Explore service
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className="relative z-10 hidden md:flex flex-col gap-5">
                    <div
                      className="s-bar text-[120px] md:text-[140px] font-extrabold leading-none select-none"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        color: "transparent",
                        WebkitTextStroke: "1px #1e1e1e",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {s.big}
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      {s.feats.map((f, fi) => (
                        <div key={fi} className="feat-row">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-50 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for scroll room */}
              {i < services.length - 1 && (
                <div style={{ height: "90vh" }} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="h-20" />
      </section>
    </>
  );
}