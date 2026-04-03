'use client';

import React, { Children, cloneElement, forwardRef, isValidElement, useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

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
export const Card = forwardRef(({ children, isActive, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-[32px] md:rounded-[48px] border-t border-l transition-all duration-500 
                ${isActive ? 'border-yellow-400/50 shadow-[0_20px_50px_-10px_rgba(250,204,21,0.3)] ring-1 ring-yellow-400/20' : 'border-white/10 opacity-40'} 
                bg-zinc-900/60 backdrop-blur-xl overflow-hidden group cursor-pointer
                ${rest.className ?? ''}`.trim()}
  >
    {children}
  </div>
));
Card.displayName = 'Card';

// ==================== RESPONSIVE CAROUSEL ====================
const CarouselStack = ({ children }) => {
  const childArr = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(2);
  const refs = useRef([]);

  if (refs.current.length !== childArr.length) {
    refs.current = childArr.map((_, i) => refs.current[i] || React.createRef());
  }

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    childArr.forEach((_, i) => {
      const el = refs.current[i].current;
      if (!el) return;

      const diff = i - activeIndex;
      const absDiff = Math.abs(diff);

      gsap.to(el, {
        x: diff * (isMobile ? 60 : 260), // Mobile par kam spread
        y: absDiff * (isMobile ? 15 : 40),
        z: -absDiff * (isMobile ? 100 : 250),
        rotationY: diff * (isMobile ? -15 : -35),
        scale: 1 - (absDiff * (isMobile ? 0.1 : 0.2)),
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
    <div className="relative w-full h-[500px] md:h-[600px] perspective-[1500px] flex items-center justify-center">
      {childArr.map((child, i) =>
        isValidElement(child)
          ? cloneElement(child, {
              ref: refs.current[i],
              isActive: i === activeIndex,
              onClick: () => setActiveIndex(i),
              // Mobile responsive sizes
              className: "w-[280px] h-[380px] md:w-[360px] md:h-[480px]"
            })
          : child
      )}
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
export default function PortfolioHero() {
  const projects = [
    { title: "NEXUS", cat: "CORE SYSTEM", desc: "Enterprise cloud management for modern teams.", img: "https://picsum.photos/id/1/800/1200", tags: ["Next.js"] },
    { title: "GLOW", cat: "BRANDING", desc: "Luxury skincare digital store experience.", img: "https://picsum.photos/id/20/800/1200", tags: ["Shopify"] },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D brand identity for Rizq Technologies.", img: "https://picsum.photos/id/1015/800/1200", tags: ["Three.js", "GSAP"] },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization with predictive analytics.", img: "https://picsum.photos/id/133/800/1200", tags: ["React"] },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS platform for the future.", img: "https://picsum.photos/id/251/800/1200", tags: ["WebGL"] }
  ];

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[40%] bg-yellow-400/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]" />
      </div>

      {/* Header */}
      <div className="z-10 text-center mb-8 md:mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-yellow-400 font-mono text-[9px] md:text-[10px] tracking-[3px] uppercase mx-auto">
          <ZapIcon /> Selected Works
        </div>
        <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
          THE <span className="text-yellow-400">RIZQ</span> <br /> STUDIO.
        </h1>
      </div>

      {/* 3D Snappy Carousel */}
      <div className="w-full max-w-[1400px] z-10">
        <CarouselStack>
          {projects.map((p, i) => (
            <Card key={i}>
              <div className="relative h-full w-full">
                {/* Background Image */}
                <img src={p.img} alt="" className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${i === 2 ? 'opacity-40 grayscale-0' : 'opacity-20 grayscale'}`} />
                
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                  {/* Info Section */}
                  <div className="space-y-1">
                    <span className="text-yellow-400 font-mono text-[8px] md:text-[9px] tracking-[3px] uppercase">{p.cat}</span>
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">{p.title}</h3>
                    {/* Description: Shown on Desktop hover or if Active on Mobile */}
                    <p className={`text-zinc-400 text-[10px] md:text-[11px] leading-relaxed max-w-[180px] mt-2 transition-opacity duration-500 group-hover:opacity-100 opacity-0 md:block`}>
                      {p.desc}
                    </p>
                  </div>

                  {/* Footer Section */}
                  <div className="space-y-4">
                    <div className="flex gap-1.5 flex-wrap">
                      {p.tags.map(t => (
                        <span key={t} className="text-[7px] text-white/40 px-2 py-1 border border-white/10 rounded-md bg-black/40 uppercase tracking-widest font-bold">{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-2 transition-all duration-500 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100">
                      <a href="#" className="flex-1 flex items-center justify-center gap-2 py-3 bg-yellow-400 text-black text-[9px] font-black rounded-xl uppercase">
                         <ExternalIcon /> View
                      </a>
                      <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl text-white">
                        <GithubIcon />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              </div>
            </Card>
          ))}
        </CarouselStack>
      </div>
    </section>
  );
}