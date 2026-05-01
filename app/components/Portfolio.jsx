'use client';

import React, { Children, cloneElement, forwardRef, useState, useRef, useEffect, isValidElement } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

// ==================== PREMIUM CARD ====================
export const Card = forwardRef(({ children, isActive, isMobile, link = "#", ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    onClick={() => window.open(link, '_blank')}
    className={`absolute rounded-[32px] md:rounded-[48px] border-t border-l 
                transition-[border-color,box-shadow,transform] duration-500 ease-out
                ${isActive ? 'border-yellow-400/50 shadow-[0_20px_50px_-10px_rgba(250,204,21,0.3)]' : 'border-white/10'} 
                bg-zinc-900/60 backdrop-blur-md overflow-hidden group cursor-pointer
                ${isMobile ? 'relative w-full h-full' : 'top-1/2 left-1/2'}
                ${rest.className ?? ''}`.trim()}
  >
    {children}
  </div>
));
Card.displayName = 'Card';

// ==================== DESKTOP CIRCULAR INFINITE CAROUSEL ====================
const DesktopCarousel = ({ children }) => {
  const containerRef = useRef(null);
  const childArr = Children.toArray(children);

  useEffect(() => {
    const cards = gsap.utils.toArray(".desktop-card-wrap");
    const totalCards = cards.length;
    const angleStep = (Math.PI * 2) / totalCards;
    const radius = 450; // Adjusted for better alignment

    let rotationData = { value: 0 };

    const tl = gsap.to(rotationData, {
      value: Math.PI * 2,
      duration: 30, // Slow and professional
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        cards.forEach((card, i) => {
          const angle = rotationData.value + (i * angleStep);
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          // Subtle Y movement to create a 3D elliptical feel
          const y = Math.sin(angle * 0.5) * 50; 
          
          const scale = gsap.utils.mapRange(-radius, radius, 0.4, 1, z);
          const opacity = gsap.utils.mapRange(-radius, radius, 0.1, 1, z);

          gsap.set(card, {
            x: x,
            y: y,
            z: z,
            scale: scale,
            opacity: opacity,
            zIndex: Math.round(opacity * 100),
            xPercent: -50,
            yPercent: -50,
          });
        });
      }
    });

    containerRef.current.addEventListener("mouseenter", () => tl.pause());
    containerRef.current.addEventListener("mouseleave", () => tl.play());

    return () => tl.kill();
  }, [childArr.length]);

  return (
    <div ref={containerRef} className="hidden md:flex relative w-full h-[550px] perspective-[2000px] items-center justify-center overflow-visible">
      {childArr.map((child, i) => (
        <div key={i} className="desktop-card-wrap absolute top-1/2 left-1/2">
          {isValidElement(child) ? cloneElement(child, { className: "w-[320px] h-[440px]", isActive: true }) : child}
        </div>
      ))}
    </div>
  );
};

// ==================== MOBILE SEAMLESS LOGO-STYLE LOOP (SLOW & SMOOTH) ====================
const MobileCarousel = ({ children }) => {
  const scrollRef = useRef(null);
  const childArr = Children.toArray(children);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".mobile-item");
      
      gsap.to(items, {
        xPercent: `-=${items.length * 100}`,
        ease: "none",
        duration: 25, // Increased for a much slower, smoother motion
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % (items.length * 100))
        }
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="md:hidden w-full overflow-hidden py-5" ref={scrollRef}>
      <div className="flex gap-4 px-4">
        {[...childArr, ...childArr].map((child, i) => (
          <div key={i} className="mobile-item shrink-0 w-[260px] aspect-[3/4]">
            {isValidElement(child) ? cloneElement(child, { isMobile: true, isActive: true }) : child}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function PortfolioHero() {
  const headerRef = useRef(null);

  const projects = [
    { title: "Leather Craft", cat: "CORE SYSTEM", desc: "Premium Leather product display.", img: "/leather_craft_premium.png", tags: ["Next.js"], link: "https://yourlink.com" },
    { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store.", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=600", tags: ["Shopify"], link: "#" },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D brand identity.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600", tags: ["Three.js"], link: "#" },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600", tags: ["GSAP"], link: "#" },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600", tags: ["WebGL"], link: "#" }
  ];

  useEffect(() => {
    gsap.fromTo(".header-reveal", 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const renderCards = () => projects.map((p, i) => (
    <Card key={i} link={p.link}>
      <div className="relative h-full w-full">
        <Image src={p.img} alt={p.title} fill className="object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <div>
            <span className="text-yellow-400 font-mono text-[9px] tracking-widest uppercase">{p.cat}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">{p.title}</h3>
            <p className="text-zinc-400 text-[10px] mt-1 max-w-[150px] leading-relaxed">{p.desc}</p>
          </div>
          <div className="space-y-3">
            <div className="flex gap-1.5">
              {p.tags.map(t => <span key={t} className="text-[7px] text-white/60 border border-white/10 px-2 py-0.5 rounded bg-black/40 uppercase font-bold">{t}</span>)}
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black text-[9px] font-black rounded-xl uppercase hover:bg-white transition-all transform group-active:scale-95">
              <ExternalIcon /> View Project
            </button>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <section className="relative min-h-[90vh] bg-black flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[20%] w-[60%] h-[40%] bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Header aligned higher */}
      <div className="z-30 text-center mb-8 px-4">
        <div className="header-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/50 text-yellow-400 font-mono text-[9px] tracking-widest uppercase mb-4">
          <ZapIcon /> Agency Portfolio
        </div>
        <h2 className="header-reveal text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">
          SHIPPED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-sm">EXPERIENCES.</span>
        </h2>
      </div>

      {/* Carousel with no gap issues */}
      <div className="w-full relative z-20 mt-[-20px]">
        <DesktopCarousel>{renderCards()}</DesktopCarousel>
        <MobileCarousel>{renderCards()}</MobileCarousel>
      </div>
    </section>
  );
}