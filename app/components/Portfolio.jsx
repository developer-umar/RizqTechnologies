'use client';

import React, { Children, cloneElement, forwardRef, isValidElement, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin outside the component lifecycle
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== ICONS ====================
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z"/></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

// ==================== PREMIUM CARD ====================
export const Card = forwardRef(({ children, isActive, isMobile, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-[32px] md:rounded-[48px] border-t border-l transition-all duration-500 
                ${isActive ? 'border-yellow-400/50 shadow-[0_20px_50px_-10px_rgba(250,204,21,0.3)] ring-1 ring-yellow-400/20 md:scale-100 scale-105' : 'border-white/10 md:opacity-40 opacity-60 scale-95'} 
                bg-zinc-900/60 backdrop-blur-md overflow-hidden group cursor-pointer
                ${rest.className ?? ''}`.trim()}
  >
    {children}
  </div>
));
Card.displayName = 'Card';

// ==================== DESKTOP GSAP CAROUSEL ====================
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

      gsap.to(el, {
        x: diff * 260,
        y: absDiff * 40,
        z: -absDiff * 250,
        rotationY: diff * -35,
        scale: 1 - (absDiff * 0.2),
        opacity: 1 - (absDiff * 0.4),
        zIndex: 100 - absDiff,
        duration: 0.5,
        ease: "power3.out",
        xPercent: -50,
        yPercent: -50,
        overwrite: true
      });
    });
  }, [activeIndex, childArr.length]);

  return (
    <div className="hidden md:flex relative w-full h-[600px] perspective-[1500px] items-center justify-center">
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

// ==================== MOBILE NATIVE CAROUSEL ====================
const MobileCarousel = ({ children }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childArr = Children.toArray(children);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    const cards = containerRef.current?.querySelectorAll('.mobile-card-wrapper');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="md:hidden flex w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar py-10 px-[10vw] gap-4"
    >
      {childArr.map((child, i) => (
        <div 
          key={i} 
          data-index={i}
          className="mobile-card-wrapper relative snap-center shrink-0 w-[80vw] max-w-[320px] h-[420px] flex items-center justify-center transition-all duration-500"
        >
          {isValidElement(child)
            ? cloneElement(child, {
                isActive: i === activeIndex,
                isMobile: true,
                className: "!relative !top-0 !left-0 !transform-none w-full h-full" 
              })
            : child}
        </div>
      ))}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function PortfolioHero() {
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(2);
  const headerRef = useRef(null);
  
  const projects = [
    { title: "NEXUS", cat: "CORE SYSTEM", desc: "Enterprise cloud management for modern teams.", img: "https://picsum.photos/id/1/800/1200", tags: ["Next.js", "React"] },
    { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience.", img: "https://picsum.photos/id/20/800/1200", tags: ["Shopify", "Liquid"] },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D brand identity for Rizq Technologies.", img: "https://picsum.photos/id/1015/800/1200", tags: ["Three.js", "GSAP"] },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization with predictive analytics.", img: "https://picsum.photos/id/133/800/1200", tags: ["React", "D3"] },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform for the future.", img: "https://picsum.photos/id/251/800/1200", tags: ["WebGL", "Solidity"] }
  ];

  // GSAP ScrollTrigger for Header Reveal
  useEffect(() => {
    // Wrap in gsap.context for React strict mode compatibility and automatic cleanup
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".header-reveal",
        { 
          y: 80, 
          opacity: 0, 
          rotationX: 15 // Adds a subtle premium 3D un-hinge effect 
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15, // Cascades the animation: Pill -> H1 -> P
          ease: "expo.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%", // Triggers when the top of the header hits 85% of the screen height
            toggleActions: "play none none reverse", // Reverses animation if they scroll back up past it
          }
        }
      );
    }, headerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const renderCards = () => projects.map((p, i) => (
    <Card key={i}>
      <div className="relative h-full w-full group">
        <img loading="lazy" src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80" />
        
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
          <div className="space-y-1">
            <span className="text-yellow-400 font-mono text-[10px] tracking-[3px] uppercase">{p.cat}</span>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">{p.title}</h3>
            <p className="text-zinc-300 text-[12px] leading-relaxed max-w-[200px] mt-2 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
              {p.desc}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="text-[9px] text-white/70 px-2 py-1 border border-white/20 rounded-md bg-black/60 uppercase tracking-widest font-bold backdrop-blur-sm">{t}</span>
              ))}
            </div>

            <div className="flex gap-2 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 mt-4">
              <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black text-[10px] font-black rounded-xl uppercase hover:bg-yellow-300 transition-colors">
                  <ExternalIcon /> View Project
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors bg-black/40 backdrop-blur-md">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none" />
      </div>
    </Card>
  ));

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center py-10 md:py-20 overflow-hidden">
      
      {/* ==================== UPGRADED BACKGROUND DECOR ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse duration-1000" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-zinc-600/10 blur-[150px] rounded-full" />
        
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay" />
      </div>

      {/* ==================== UPGRADED HEADER WITH GSAP REVEAL ==================== */}
      {/* Added perspective for the 3D un-hinge animation and attached headerRef */}
      <div ref={headerRef} className="z-10 text-center mb-10 md:mb-16 space-y-4 px-4 mt-8 md:mt-0 perspective-[1000px]">
        
        {/* Added .header-reveal class to elements we want to stagger */}
        <div className="header-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-yellow-400 font-mono text-[9px] md:text-[10px] tracking-[3px] uppercase mx-auto shadow-[0_0_15px_rgba(250,204,21,0.1)] opacity-0">
          <ZapIcon /> Agency Portfolio
        </div>
        
        <h1 className="header-reveal text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.95] opacity-0">
          SHIPPED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            EXPERIENCES.
          </span>
        </h1>
        
        <p className="header-reveal text-zinc-400 text-[11px] md:text-sm max-w-lg mx-auto font-medium tracking-wide leading-relaxed opacity-0">
          A curated showcase of high-performance digital solutions, engineered and successfully delivered to our global clients.
        </p>
      </div>

      {/* ==================== UNTOUCHED CAROUSEL ARCHITECTURE ==================== */}
      <div className="w-full max-w-[1400px] z-10">
        <DesktopCarousel activeIndex={desktopActiveIndex} setActiveIndex={setDesktopActiveIndex}>
          {renderCards()}
        </DesktopCarousel>

        <MobileCarousel>
          {renderCards()}
        </MobileCarousel>
      </div>
    </section>
  );
}