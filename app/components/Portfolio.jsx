'use client';

import React, { Children, cloneElement, forwardRef, isValidElement, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ==================== ICONS ====================
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z"/></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

// ==================== PREMIUM CARD ====================
export const Card = forwardRef(({ children, isActive, isMobile, index, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    style={{
        // Mobile Stacking Logic: Purane cards naye cards ke piche 'stuck' lagenge
        top: isMobile ? `${60 + (index * 15)}px` : '50%',
        zIndex: index + 10
    }}
    className={`
        ${isMobile ? 'sticky mb-10 w-full h-[500px]' : 'absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[480px]'}
        rounded-[40px] border border-white/10
        transition-all duration-700 ease-out
        ${isActive && !isMobile ? 'border-yellow-400/40 shadow-[0_30px_60px_-15px_rgba(250,204,21,0.25)] ring-1 ring-yellow-400/10' : 'bg-zinc-900/40'} 
        backdrop-blur-xl overflow-hidden group cursor-pointer
        ${rest.className ?? ''}`.trim()}
  >
    {children}
    {/* Texture Overlay for premium feel */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
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
        x: diff * 320,
        y: absDiff * 40,
        z: -absDiff * 400,
        rotationY: diff * -40,
        scale: 1 - (absDiff * 0.2),
        opacity: 1 - (absDiff * 0.5),
        duration: 1,
        ease: "power4.out",
        overwrite: true
      });
    });
  }, [activeIndex, childArr.length]);

  return (
    <div className="hidden md:block relative w-full h-[700px] perspective-[2500px]">
      {childArr.map((child, i) =>
        isValidElement(child)
          ? cloneElement(child, {
              ref: refs.current[i],
              isActive: i === activeIndex,
              onClick: () => setActiveIndex(i),
              index: i
            })
          : child
      )}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function PortfolioHero() {
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(2);
  const headerRef = useRef(null);
  
  const projects = [
    { title: "Leather Craft", cat: "ECOMMERCE", desc: "Premium heritage leather display system.", img: "/leather_craft_premium.png", tags: ["Next.js", "Tailwind"] },
    { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800", tags: ["Shopify", "Motion"] },
    { title: "RIZQ", cat: "FINTECH", desc: "3D brand identity for high-scale tech.", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800", tags: ["Three.js", "GSAP"] },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization with analytics.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800", tags: ["React", "D3.js"] },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform.", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800", tags: ["WebGL", "Rust"] }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".header-reveal", { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "expo.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 90%" }
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const renderCardContent = (p) => (
    <div className="relative h-full w-full">
      <Image 
        src={p.img} alt={p.title} fill 
        className="object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 saturate-50 group-hover:saturate-100"
      />
      
      {/* Dynamic Scrolled Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />

      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-20">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
             <div className="h-1 w-6 bg-yellow-500 rounded-full" />
             <span className="text-yellow-500 font-mono text-[10px] tracking-[4px] uppercase">{p.cat}</span>
          </div>
          <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">{p.title}</h3>
          <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
            {p.desc}
          </p>
          {/* Mobile visible desc */}
          <p className="text-zinc-300 text-xs font-medium md:hidden">{p.desc}</p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            {p.tags.map(t => (
              <span key={t} className="text-[9px] text-white/80 px-3 py-1.5 border border-white/10 rounded-lg bg-white/5 uppercase tracking-widest font-black backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>

          <Link href="#contact" className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black text-[11px] font-black rounded-2xl uppercase hover:bg-yellow-500 transition-all duration-500 shadow-xl active:scale-95">
            <ExternalIcon /> Case Study
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4 md:px-0 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#000_80%)]" />
      </div>

      <div ref={headerRef} className="z-30 text-center mb-16 space-y-6 max-w-4xl">
        <div className="header-reveal inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-zinc-900/50 text-yellow-500 font-mono text-[10px] tracking-[4px] uppercase mx-auto">
          <ZapIcon /> Selected Works
        </div>
        
        <h2 className="header-reveal text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
          Curated <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-700">Projects.</span>
        </h2>
      </div>

      {/* ==================== CONTENT ==================== */}
      <div className="w-full max-w-7xl z-30 px-6 md:px-0">
        
        {/* DESKTOP VIEW */}
        <DesktopCarousel activeIndex={desktopActiveIndex} setActiveIndex={setDesktopActiveIndex}>
          {projects.map((p, i) => (
            <Card key={i}>{renderCardContent(p)}</Card>
          ))}
        </DesktopCarousel>

        {/* MOBILE STACKING VIEW: No Carousel, Just Beautiful Stacking Scroll */}
        <div className="md:hidden flex flex-col w-full py-10">
           {projects.map((p, i) => (
             <Card key={i} isMobile={true} index={i} isActive={true}>
               {renderCardContent(p)}
             </Card>
           ))}
        </div>

      </div>
    </section>
  );
}