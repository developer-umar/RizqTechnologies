'use client';

import React, { Children, cloneElement, forwardRef, useState, useRef, useEffect, isValidElement } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable'; // Added for smooth mobile interaction

// ==================== GSAP REGISTRATION ====================
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

// ==================== ICONS ====================
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

// ==================== PREMIUM CARD ====================
export const Card = forwardRef(({ children, isActive, isMobile, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    // Strict separation: CSS handles paints (borders/shadows), GSAP handles desktop transforms.
    className={`absolute rounded-[32px] md:rounded-[48px] border-t border-l 
                transition-[border-color,box-shadow,transform] duration-500 ease-out
                ${isActive ? 'border-yellow-400/50 shadow-[0_20px_50px_-10px_rgba(250,204,21,0.3)] ring-1 ring-yellow-400/20' : 'border-white/10'} 
                bg-zinc-900/60 backdrop-blur-md overflow-hidden group cursor-pointer
                ${isMobile ? 'relative top-0 left-0 transform-none w-full h-full' : 'top-1/2 left-1/2'}
                ${rest.className ?? ''}`.trim()}
  >
    {children}
  </div>
));
Card.displayName = 'Card';

// ==================== DESKTOP GSAP CAROUSEL (UNTOUCHED) ====================
const DesktopCarousel = ({ children, activeIndex, setActiveIndex }) => {
  const childArr = Children.toArray(children);
  const refs = useRef([]);

  if (refs.current.length !== childArr.length) {
    refs.current = childArr.map((_, i) => refs.current[i] || React.createRef());
  }

  useEffect(() => {
    childArr.forEach((_, i) => {
      const el = refs.current[i].current;
      if (!el) return;

      const diff = i - activeIndex;
      const absDiff = Math.abs(diff);
      const targetZIndex = 100 - absDiff;

      gsap.to(el, {
        x: diff * 280,
        y: absDiff * 30,
        z: -absDiff * 300,
        rotationY: diff * -35,
        rotationZ: diff * -2,
        scale: 1 - (absDiff * 0.15),
        opacity: 1 - (absDiff * 0.4),
        zIndex: targetZIndex,
        duration: 0.85,
        ease: "expo.out",
        xPercent: -50,
        yPercent: -50,
        overwrite: true
      });
    });
  }, [activeIndex, childArr.length]);

  return (
    <div className="hidden md:flex relative w-full h-[600px] perspective-[2000px] items-center justify-center">
      {childArr.map((child, i) =>
        isValidElement(child)
          ? cloneElement(child, {
            ref: refs.current[i],
            isActive: i === activeIndex,
            onClick: () => setActiveIndex(i),
            className: "w-[360px] h-[480px]"
          })
          : child
      )}
    </div>
  );
};

// ==================== MOBILE AUTO-MOTION CAROUSEL (PROFESSIONAL & RECTANGLE) ====================
const MobileCarousel = ({ children }) => {
  const containerRef = useRef(null);
  const proxyRef = useRef(null); // Used for dragging logic
  const childArr = Children.toArray(children);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const cards = gsap.utils.toArray('.mobile-card-wrapper', container);
    
    if (!container || cards.length === 0) return;

    // 1. Setup infinite loop logic
    const loop = gsap.to(cards, {
      xPercent: "-=" + (100 * cards.length),
      duration: cards.length * 8, // Adjust speed here (higher = slower)
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.unitize(gsap.utils.wrap(-100 * cards.length, 0))
      }
    });

    // 2. Start auto-play smoothly
    gsap.to(loop, {timeScale: 1, duration: 1, ease: "power1.inOut"}).play();

    // 3. User Interaction - Pause on touch/drag, resume on release
    const drag = Draggable.create(proxyRef.current, {
      type: "x",
      trigger: container,
      onPress() {
        gsap.to(loop, {timeScale: 0, duration: 0.3}); // Pause smoothly
      },
      onDrag() {
        // Map drag progress to loop progress
        loop.progress(gsap.utils.wrap(0, 1, this.x / (container.offsetWidth * 1.5)));
      },
      onRelease() {
        gsap.to(loop, {timeScale: 1, duration: 0.5, ease: "power1.out"}); // Resume smoothly
      }
    });

    return () => {
      loop.kill();
      drag[0].kill();
    };
  }, [childArr.length]);

  return (
    <div className="md:hidden w-full overflow-hidden py-6 relative mt-[-20px]">
      {/* Invisible proxy element for Draggable tracking */}
      <div ref={proxyRef} className="absolute inset-0 z-20" />
      
      <div
        ref={containerRef}
        className="flex w-full will-change-transform"
        style={{ width: `${childArr.length * 85}vw` }} // Ensures container is wide enough
      >
        {childArr.map((child, i) => (
          <div
            key={i}
            className="mobile-card-wrapper shrink-0 w-[80vw] aspect-[3/4] max-w-[320px] px-2 flex items-center justify-center transition-all duration-500"
          >
            {isValidElement(child)
              ? cloneElement(child, {
                // In mobile loop, "isActive" is harder to define without heavy logic, 
                // so we make them all look professional/active.
                isActive: true, 
                isMobile: true,
                className: "w-full h-full shadow-xl"
              })
              : child}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function PortfolioHero() {
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(2);
  const headerRef = useRef(null);

  const projects = [
    { title: "Leather Craft", cat: "CORE SYSTEM", desc: "Application for displaying Leather products.", img: "/leather_craft_premium.png", tags: ["Next.js", "Tailwind"] },
    { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience.", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=600", tags: ["Shopify", "Liquid"] },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D brand identity for Rizq Technologies.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600", tags: ["Three.js", "GSAP"] },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization with predictive analytics.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600", tags: ["React", "D3"] },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform for the future.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600", tags: ["WebGL", "Solidity"] },
    { title: "NEXUS", cat: "SAAS", desc: "Cloud collaboration tool for remote teams.", img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=600", tags: ["Next.js", "AWS"] } // Added one more for mobile loop variety
  ];

  // GSAP ScrollTrigger for Header Reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".header-reveal",
        {
          y: 80,
          opacity: 0,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const renderCards = () => projects.map((p, i) => (
    <Card key={i}>
      <div className="relative h-full w-full group">
        <Image
          src={p.img}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 80vw, 360px"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-40 group-hover:opacity-70 saturate-[0.8] group-hover:saturate-100 group-hover:scale-110"
          loading={i === 0 ? "eager" : "lazy"} // Performance: Eager load the first image
          priority={i === 0}
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[5]" />

        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
          <div className="space-y-1">
            <span className="text-yellow-400 font-mono text-[9px] tracking-[3px] uppercase">{p.cat}</span>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] uppercase">{p.title}</h3>
            {/* Mobile: always show desc. Desktop: show on hover */}
            <p className="text-zinc-300 text-[11px] md:text-[12px] leading-relaxed max-w-[220px] mt-2 transition-opacity duration-500 opacity-100 md:opacity-0 md:group-hover:opacity-100">
              {p.desc}
            </    p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-1.5 md:gap-2 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="text-[8px] md:text-[9px] text-white/70 px-2 py-1 border border-white/10 rounded-md bg-black/60 uppercase tracking-widest font-bold backdrop-blur-sm">{t}</span>
              ))}
            </div>

            {/* GitHub Removed, View Project is primary action */}
            <div className="flex gap-2 transition-all duration-500 translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 mt-2 md:mt-4">
              <a href="#" aria-label={`View ${p.title} project`} className="flex-1 flex items-center justify-center gap-2.5 py-3.5 bg-yellow-400 text-black text-[10px] md:text-[11px] font-black rounded-xl uppercase hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-900/20">
                <ExternalIcon /> View Project
              </a>
            </div>
          </div>
        </div>
        {/* Background gradient for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 pointer-events-none" />
      </div>
    </Card>
  ));

  return (
    <section id="portfolio" className="relative min-h-screen bg-black flex flex-col items-center justify-center py-10 md:py-20 overflow-hidden">

      {/* ==================== BACKGROUND DECOR (ENHANCED YELLOW) ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid base */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Existing Pulse (smoothed) */}
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[50%] bg-yellow-600/10 blur-[130px] rounded-full animate-pulse-slow" />
        
        {/* Added New Creative Yellow Blob (Abstract) */}
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[40%] bg-yellow-500/10 blur-[110px] rounded-full rotate-12 opacity-70" />

        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-zinc-700/10 blur-[150px] rounded-full" />

        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay" />
      </div>

      {/* ==================== HEADER ==================== */}
      <div ref={headerRef} className="z-10 text-center mb-6 md:mb-16 space-y-4 px-4 mt-12 md:mt-0 perspective-[1000px]">
        <div className="header-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-yellow-400 font-mono text-[9px] md:text-[10px] tracking-[3px] uppercase mx-auto shadow-[0_0_15px_rgba(250,204,21,0.1)] opacity-0">
          <ZapIcon /> Agency Portfolio
        </div>

        <h2 className="header-reveal text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95] opacity-0">
          SHIPPED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            EXPERIENCES.
          </span>
        </h2>

        <p className="header-reveal text-zinc-400 text-[11px] md:text-sm max-w-lg mx-auto font-medium tracking-wide leading-relaxed opacity-0">
          A curated showcase of high-performance digital solutions, engineered and successfully delivered to our global clients.
        </p>
      </div>

      {/* ==================== CAROUSEL ==================== */}
      <div className="w-full max-w-[1400px] z-10">
        <DesktopCarousel activeIndex={desktopActiveIndex} setActiveIndex={setDesktopActiveIndex}>
          {renderCards()}
        </DesktopCarousel>

        <MobileCarousel>
          {renderCards()}
        </MobileCarousel>
      </div>
      
      {/* CSS for Hide Scrollbar & Pulse */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}