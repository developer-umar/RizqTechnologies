'use client';

import React, { Children, cloneElement, forwardRef, useRef, useEffect, isValidElement } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

if (typeof window !== "undefined") {
  gsap.config({ force3D: true }); // Performance boost
}

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

// ==================== PREMIUM CARD ====================
export const Card = forwardRef(({ children, isActive, isMobile, link = "#", ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    onClick={() => window.open(link, '_blank')}
    className={`absolute rounded-[24px] md:rounded-[40px] border-t border-l 
                transition-[border-color,box-shadow] duration-500 ease-out
                ${isActive ? 'border-yellow-400/40 shadow-[0_15px_40px_-10px_rgba(250,204,21,0.2)]' : 'border-white/5'} 
                bg-zinc-950/80 backdrop-blur-xl overflow-hidden group cursor-pointer
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
    const radiusX = 400; // Controlled width
    const radiusY = 120; // Flattened ellipse to prevent vertical clipping

    let rotationData = { value: 0 };

    const tl = gsap.to(rotationData, {
      value: Math.PI * 2,
      duration: 25,
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        cards.forEach((card, i) => {
          const angle = rotationData.value + (i * angleStep);
          const x = Math.cos(angle) * radiusX;
          const z = Math.sin(angle) * radiusX;
          const y = Math.sin(angle) * radiusY; // Elliptical height
          
          const scale = gsap.utils.mapRange(-radiusX, radiusX, 0.5, 1, z);
          const opacity = gsap.utils.mapRange(-radiusX, radiusX, 0.15, 1, z);

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
    <div ref={containerRef} className="hidden md:flex relative w-full h-[500px] perspective-[1500px] items-center justify-center overflow-visible">
      {childArr.map((child, i) => (
        <div key={i} className="desktop-card-wrap absolute top-1/2 left-1/2">
          {isValidElement(child) ? cloneElement(child, { className: "w-[300px] h-[400px]", isActive: true }) : child}
        </div>
      ))}
    </div>
  );
};

// ==================== MOBILE SEAMLESS LOGO-STYLE LOOP ====================
const MobileCarousel = ({ children }) => {
  const scrollRef = useRef(null);
  const childArr = Children.toArray(children);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".mobile-item");
      
      gsap.to(items, {
        xPercent: `-=${items.length * 100}`,
        ease: "none",
        duration: 35, // Very slow and premium
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % (items.length * 100))
        }
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="md:hidden w-full overflow-hidden py-4" ref={scrollRef}>
      <div className="flex gap-4 px-4">
        {[...childArr, ...childArr].map((child, i) => (
          <div key={i} className="mobile-item shrink-0 w-[240px] aspect-[3/4.2]">
            {isValidElement(child) ? cloneElement(child, { isMobile: true, isActive: true }) : child}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function PortfolioHero() {
  const projects = [
    { title: "Leather Craft", cat: "CORE SYSTEM", desc: "Premium Leather display.", img: "/leather_craft_premium.png", tags: ["Next.js"], link: "#" },
    { title: "GLOW", cat: "BRANDING", desc: "Luxury digital store.", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=600", tags: ["Shopify"], link: "#" },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D identity.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600", tags: ["Three.js"], link: "#" },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600", tags: ["GSAP"], link: "#" },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600", tags: ["WebGL"], link: "#" }
  ];

  const renderCards = () => projects.map((p, i) => (
    <Card key={i} link={p.link}>
      <div className="relative h-full w-full">
        <Image src={p.img} alt={p.title} fill className="object-cover opacity-30 group-hover:opacity-60 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <div>
            <span className="text-yellow-400 font-mono text-[8px] tracking-[3px] uppercase">{p.cat}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mt-1">{p.title}</h3>
            <p className="text-zinc-500 text-[10px] mt-2 leading-relaxed line-clamp-2">{p.desc}</p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-1.5 flex-wrap">
              {p.tags.map(t => <span key={t} className="text-[7px] text-white/40 border border-white/10 px-2 py-0.5 rounded bg-white/5 uppercase">{t}</span>)}
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black text-[9px] font-black rounded-xl uppercase">
              <ExternalIcon /> View Case
            </button>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60%] bg-yellow-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="z-30 text-center mb-4 md:mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-900/50 text-yellow-400 font-mono text-[9px] tracking-widest uppercase mb-4">
          <ZapIcon /> Featured Work
        </div>
        <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
          SHIPPED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">EXPERIENCES.</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative z-20 flex-1 flex flex-col justify-center">
        <DesktopCarousel>{renderCards()}</DesktopCarousel>
        <MobileCarousel>{renderCards()}</MobileCarousel>
      </div>
      
      {/* Footer Padding/Space */}
      <div className="h-10 md:h-20 w-full" />
    </section>
  );
}