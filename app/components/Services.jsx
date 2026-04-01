"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    tag: "Full Stack",
    name: "Web Development",
    shortName: "Web\nDev",
    desc: "Blazing-fast websites & web apps. Next.js, React, custom dashboards — built for performance, SEO, and conversion from day one.",
    feats: ["Next.js / React", "REST & GraphQL APIs", "SEO Optimized"],
    big: "WD",
    symbol: "⬡",
    accent: "#F5A623",
  },
  {
    num: "02",
    tag: "Mobile",
    name: "App Development",
    shortName: "App\nDev",
    desc: "Cross-platform iOS & Android apps that feel truly native. From MVPs to production-grade products with seamless, delightful UX.",
    feats: ["React Native / Flutter", "Play & App Store", "Offline-first"],
    big: "APP",
    symbol: "◎",
    accent: "#F5A623",
  },
  {
    num: "03",
    tag: "AI / ML",
    name: "AI & LLM Solutions",
    shortName: "AI &\nLLM",
    desc: "Custom chatbots, LLM integrations, RAG pipelines, and intelligent automation that actually solves real business problems.",
    feats: ["OpenAI / Claude APIs", "RAG Pipelines", "Custom Fine-tuning"],
    big: "AI",
    symbol: "◈",
    accent: "#F5A623",
  },
  {
    num: "04",
    tag: "Branding",
    name: "Brand & UI Design",
    shortName: "Brand\n& UI",
    desc: "Logos, identity systems, and design systems that make you unforgettable. Every pixel crafted with intent and precision.",
    feats: ["Logo Design", "Brand Guidelines", "UI/UX Systems"],
    big: "BR",
    symbol: "◇",
    accent: "#F5A623",
  },
  {
    num: "05",
    tag: "Growth",
    name: "Digital Marketing",
    shortName: "Digital\nMktg",
    desc: "SEO, paid ads, content strategy. Data-driven campaigns that bring qualified traffic and convert visitors into paying customers.",
    feats: ["SEO & SEM", "Meta & Google Ads", "Analytics & CRO"],
    big: "DM",
    symbol: "◉",
    accent: "#F5A623",
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud & Deployment",
    shortName: "Cloud\n& CD",
    desc: "CI/CD pipelines, cloud infrastructure, Docker, and zero-downtime deployments. Your product — always running, always fast.",
    feats: ["AWS / Vercel / GCP", "Docker & CI/CD", "24/7 Monitoring"],
    big: "CD",
    symbol: "⬟",
    accent: "#F5A623",
  },
  {
    num: "07",
    tag: "Strategy",
    name: "Tech Consulting",
    shortName: "Tech\nConsult",
    desc: "Architecture reviews, roadmap planning, and tech audits. We help you build the right thing, the right way — first time.",
    feats: ["Tech Stack Audit", "Roadmap Planning", "Team Training"],
    big: "TC",
    symbol: "◬",
    accent: "#F5A623",
  },
];

// ─── CUSTOM CURSOR ────────────────────────────────────────────────────────────
function useCursor(stripRef) {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      raf.current = requestAnimationFrame(loop);
    };

    const onEnter = () => el.classList.add("cursor--big");
    const onLeave = () => el.classList.remove("cursor--big");

    window.addEventListener("mousemove", move, { passive: true });
    stripRef.current?.addEventListener("mouseenter", onEnter);
    stripRef.current?.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      stripRef.current?.removeEventListener("mouseenter", onEnter);
      stripRef.current?.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return cursorRef;
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function FlowingServices() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const stripRef = useRef(null);
  const cursorRef = useCursor(stripRef);

  const current = hovered !== null ? hovered : active;

  const handleEnter = useCallback((i) => setHovered(i), []);
  const handleLeave = useCallback(() => setHovered(null), []);
  const handleClick = useCallback((i) => setActive(i), []);

  return (
    <>
      {/* ── Inline styles (scoped, no Tailwind conflicts) ── */}
      <style>{`
        /* Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        /* Cursor */
        .fs-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 12px; height: 12px;
          border-radius: 50%;
          background: #F5A623;
          pointer-events: none;
          z-index: 9999;
          transition: width 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      height 0.25s cubic-bezier(0.34,1.56,0.64,1);
          mix-blend-mode: difference;
          will-change: transform;
        }
        .fs-cursor.cursor--big {
          width: 52px;
          height: 52px;
        }

        /* Card base */
        .fs-card {
          position: relative;
          border-radius: 20px;
          border: 1px solid #161616;
          background: #0c0c0c;
          overflow: hidden;
          cursor: none;
          transition:
            flex 0.6s cubic-bezier(0.34, 1.1, 0.64, 1),
            border-color 0.35s ease,
            background 0.35s ease;
          flex-shrink: 0;
          display: flex;
          align-items: stretch;
        }

        /* flex states */
        .fs-card--idle     { flex: 1 }
        .fs-card--active   { flex: 4.5 }
        .fs-card--shrunk   { flex: 0.4 }

        /* amber glow */
        .fs-card::after {
          content: '';
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,166,35,0.11) 0%, transparent 68%);
          top: -70px; right: -50px;
          pointer-events: none;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .fs-card--active::after { opacity: 1; }
        .fs-card--active { border-color: rgba(245,166,35,0.18) !important; }

        /* collapsed (icon + number) */
        .fs-collapsed {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px;
          opacity: 1;
          transition: opacity 0.2s ease;
          z-index: 1;
        }
        .fs-card--active .fs-collapsed { opacity: 0; pointer-events: none; }

        .fs-col-num {
          font-family: 'Syne', sans-serif;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.18em; color: #252525;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          transition: color 0.25s;
        }
        .fs-card:hover .fs-col-num { color: #F5A62360; }

        .fs-col-symbol {
          font-size: 16px; color: #1e1e1e;
          transition: color 0.25s;
        }
        .fs-card:hover .fs-col-symbol { color: #F5A62340; }

        /* expanded content */
        .fs-content {
          position: absolute; inset: 0;
          padding: 32px 30px 28px;
          display: flex; flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.4s 0.1s ease, transform 0.4s 0.1s ease;
          z-index: 1;
          min-width: 260px;
        }
        .fs-card--active .fs-content {
          opacity: 1;
          transform: translateX(0);
        }

        /* tag pill */
        .fs-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #F5A623;
          border: 1px solid rgba(245,166,35,0.2);
          padding: 4px 12px; border-radius: 30px;
          background: rgba(245,166,35,0.05);
          width: fit-content;
        }
        .fs-tag::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #F5A623;
          opacity: 0.6;
        }

        /* service name */
        .fs-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #ffffff;
          line-height: 1.1;
        }

        /* desc */
        .fs-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          line-height: 1.8;
          color: #4a4a4a;
          max-width: 280px;
        }

        /* features */
        .fs-feats { display: flex; flex-direction: column; gap: 6px; }
        .fs-feat {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #2e2e2e;
          display: flex; align-items: center; gap: 9px;
          transition: color 0.2s;
        }
        .fs-feat:hover { color: #666; }
        .fs-feat::before {
          content: '';
          width: 4px; height: 4px; border-radius: 50%;
          background: #F5A623; opacity: 0.45; flex-shrink: 0;
        }

        /* CTA button */
        .fs-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #F5A623;
          border: 1px solid rgba(245,166,35,0.22);
          padding: 9px 18px; border-radius: 30px;
          width: fit-content;
          background: transparent;
          transition: all 0.22s ease;
          cursor: none;
        }
        .fs-cta:hover {
          background: rgba(245,166,35,0.07);
          border-color: rgba(245,166,35,0.45);
          gap: 14px;
        }
        .fs-cta-arrow { transition: transform 0.22s ease; display: inline-block; }
        .fs-cta:hover .fs-cta-arrow { transform: translateX(4px); }

        /* ghost number */
        .fs-ghost {
          position: absolute;
          bottom: -8px; right: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 96px; font-weight: 800;
          letter-spacing: -0.04em;
          color: transparent;
          -webkit-text-stroke: 1px #171717;
          line-height: 1;
          user-select: none; pointer-events: none;
          z-index: 0;
          transition: -webkit-text-stroke 0.35s ease;
        }
        .fs-card--active .fs-ghost {
          -webkit-text-stroke: 1px rgba(245,166,35,0.1);
        }

        /* divider line between num and content */
        .fs-num-badge {
          font-family: 'Syne', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em;
          color: #F5A623;
          display: flex; align-items: center; gap: 12px;
        }
        .fs-num-badge::after {
          content: '';
          flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(245,166,35,0.3), transparent);
        }

        /* section eyebrow */
        .fs-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: #383838;
        }
        .fs-eyebrow-line {
          display: block; width: 22px; height: 1px;
          background: #2a2a2a;
        }

        /* section title */
        .fs-section-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.05;
        }

        /* mobile */
        @media (max-width: 640px) {
          .fs-strip {
            flex-direction: column !important;
            height: auto !important;
          }
          .fs-card--idle,
          .fs-card--active,
          .fs-card--shrunk {
            flex: none !important;
            height: auto !important;
            min-height: 68px;
          }
          .fs-card--active { min-height: 240px !important; }
          .fs-collapsed {
            flex-direction: row;
            padding: 20px 24px;
            justify-content: flex-start;
            gap: 14px;
          }
          .fs-col-num {
            writing-mode: horizontal-tb;
            transform: none;
          }
          .fs-content { padding: 24px 22px 20px; min-width: unset; }
          .fs-cursor { display: none !important; }
        }
      `}</style>

      {/* ── Custom Cursor ── */}
      <div ref={cursorRef} className="fs-cursor" />

      {/* ── Section ── */}
      <section
        id="services"
        style={{
          background: "#080808",
          padding: "80px 0 88px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern bg */}
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(245,166,35,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Header ── */}
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p className="fs-eyebrow" style={{ justifyContent: "center", marginBottom: "18px" }}>
              <span className="fs-eyebrow-line" />
              What we offer
              <span className="fs-eyebrow-line" />
            </p>
            <h2
              className="fs-section-title"
              style={{ fontSize: "clamp(32px, 5.5vw, 58px)" }}
            >
              Everything your business
              <br />
              <em style={{ fontStyle: "normal", color: "#F5A623" }}>
                needs to grow
              </em>
            </h2>
          </div>

          {/* ── Flowing Strip ── */}
          <div
            ref={stripRef}
            className="fs-strip"
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "stretch",
              height: "360px",
              width: "100%",
            }}
            onMouseLeave={handleLeave}
          >
            {SERVICES.map((s, i) => {
              const state =
                current === i
                  ? "fs-card--active"
                  : current !== null
                  ? "fs-card--shrunk"
                  : "fs-card--idle";

              return (
                <div
                  key={i}
                  className={`fs-card ${state}`}
                  onMouseEnter={() => handleEnter(i)}
                  onClick={() => handleClick(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={s.name}
                  onKeyDown={(e) => e.key === "Enter" && handleClick(i)}
                >
                  {/* Collapsed state */}
                  <div className="fs-collapsed">
                    <span className="fs-col-num">{s.num}</span>
                    <span className="fs-col-symbol">{s.symbol}</span>
                  </div>

                  {/* Expanded content */}
                  <div className="fs-content">
                    {/* Top */}
                    <div>
                      <span className="fs-tag">{s.tag}</span>
                    </div>

                    {/* Middle */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <div className="fs-num-badge">{s.num}</div>
                      <h3 className="fs-name">{s.name}</h3>
                      <p className="fs-desc">{s.desc}</p>
                    </div>

                    {/* Bottom */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div className="fs-feats">
                        {s.feats.map((f, fi) => (
                          <div key={fi} className="fs-feat">{f}</div>
                        ))}
                      </div>
                      <button className="fs-cta">
                        Explore
                        <span className="fs-cta-arrow">→</span>
                      </button>
                    </div>
                  </div>

                  {/* Ghost big text */}
                  <div className="fs-ghost">{s.big}</div>
                </div>
              );
            })}
          </div>

          {/* ── Bottom counter ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "32px",
            }}
          >
            {SERVICES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to service ${i + 1}`}
                style={{
                  width: active === i ? "24px" : "6px",
                  height: "6px",
                  borderRadius: "6px",
                  background: active === i ? "#F5A623" : "#1e1e1e",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}