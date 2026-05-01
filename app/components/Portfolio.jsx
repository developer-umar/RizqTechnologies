'use client';

import React, { Children, cloneElement, forwardRef, useRef, useEffect, isValidElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

if (typeof window !== "undefined") {
  gsap.config({ force3D: true, nullTargetWarn: false });
}

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
                bg-zinc-950/90 backdrop-blur-2xl overflow-hidden group cursor-pointer
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
    const radiusX = 420; // Perfect horizontal spread

    let rotationData = { value: 0 };

    const tl = gsap.to(rotationData, {
      value: Math.PI * 2,
      duration: 22,
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        cards.forEach((card, i) => {
          const angle = rotationData.value + (i * angleStep);
          const x = Math.cos(angle) * radiusX;
          const z = Math.sin(angle) * 150; // Depth effect
          
          // Flattened circular motion so it doesn't go up/down and hide
          const scale = gsap.utils.mapRange(-150, 150, 0.5, 1, z);
          const opacity = gsap.utils.mapRange(-150, 150, 0.1, 1, z);
          const blur = gsap.utils.mapRange(-150, 150, 4, 0, z);

          gsap.set(card, {
            x: x,
            z: z,
            scale: scale,
            opacity: opacity,
            filter: `blur(${blur}px)`,
            zIndex: Math.round(gsap.utils.mapRange(-150, 150, 1, 100, z)),
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
    <div ref={containerRef} className="hidden md:flex relative w-full h-[450px] perspective-[2000px] items-center justify-center overflow-visible z-10">
      {childArr.map((child, i) => (
        <div key={i} className="desktop-card-wrap absolute top-1/2 left-1/2">
          {isValidElement(child) ? cloneElement(child, { className: "w-[280px] h-[380px]", isActive: true }) : child}
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
        duration: 25, // Slightly faster than before for better fluid feel
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % (items.length * 100))
        }
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="md:hidden w-full overflow-hidden py-6" ref={scrollRef}>
      <div className="flex gap-4 px-4">
        {[...childArr, ...childArr].map((child, i) => (
          <div key={i} className="mobile-item shrink-0 w-[250px] aspect-[3/4.2]">
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
    { title: "GLOW", cat: "BRANDING", desc: "Luxury digital store.", img: "https://picsum.photos/id/20/800/1200", tags: ["Shopify"], link: "#" },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D identity.", img: "https://picsum.photos/id/1015/800/1200", tags: ["Three.js"], link: "#" },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization.", img: "https://picsum.photos/id/133/800/1200", tags: ["GSAP"], link: "#" },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS.", img: "https://picsum.photos/id/251/800/1200", tags: ["WebGL"], link: "#" }
  ];

  const renderCards = () => projects.map((p, i) => (
    <Card key={i} link={p.link}>
      <div className="relative h-full w-full">
        <Image src={p.img} alt={p.title} fill className="object-cover opacity-20 group-hover:opacity-50 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
          <div>
            <span className="text-yellow-400 font-mono text-[8px] tracking-[3px] uppercase">{p.cat}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-none mt-1">{p.title}</h3>
            <p className="text-zinc-500 text-[10px] mt-2 leading-relaxed">{p.desc}</p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {p.tags.map(t => (
                <span key={t} className="text-[9px] text-white/70 px-2 py-1 border border-white/20 rounded-md bg-black/60 uppercase tracking-widest font-bold backdrop-blur-sm">{t}</span>
              ))}
            </div>

            <div className="flex gap-2 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 mt-4">
              <Link href="/#contact" aria-label={`View ${p.title} project`} className="flex-1 flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black text-[10px] font-black rounded-xl uppercase hover:bg-yellow-300 transition-colors">
                  <ExternalIcon /> View Project
              </Link>
              <Link href="/#contact" aria-label={`View ${p.title} source on GitHub`} className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors bg-black/40 backdrop-blur-md">
                <GithubIcon />
              </Link>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black text-[9px] font-black rounded-xl uppercase hover:bg-yellow-300 transition-colors">
              <ExternalIcon /> View Case
            </button>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <section className="relative min-h-[85vh] bg-black flex flex-col items-center justify-center py-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-yellow-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="z-30 text-center mb-6 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-zinc-900/50 text-yellow-400 font-mono text-[9px] tracking-widest uppercase mb-4">
          <ZapIcon /> Featured Work
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase">
          SHIPPED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">EXPERIENCES.</span>
        </h2>
      </div>

      {/* Carousel Container - Centered and High-Z */}
      <div className="w-full relative z-40 flex flex-col justify-center items-center">
        <DesktopCarousel>{renderCards()}</DesktopCarousel>
        <MobileCarousel>{renderCards()}</MobileCarousel>
      </div>
      
      {/* Footer Padding */}
      <div className="h-6 w-full" />
    </section>
  );
}