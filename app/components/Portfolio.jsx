// PortfolioSection.js (Server Component by default)
import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';

if (typeof window !== "undefined") {
  gsap.config({ force3D: true, nullTargetWarn: false });
}

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const projects = [
  { title: "Leather Craft", cat: "E-Commerce", desc: "Premium Leather product showcase.", img: "/leather_craft_premium.png", size: "md:col-span-2 md:row-span-2", color: "from-orange-500/20" },
  { title: "GLOW", cat: "Branding", desc: "Luxury skincare store.", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800", size: "md:col-span-1 md:row-span-1", color: "from-blue-500/20" },
  { title: "RIZQ", cat: "Fintech", desc: "3D brand identity for finance.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800", size: "md:col-span-1 md:row-span-2", color: "from-emerald-500/20" },
  { title: "AETHER", cat: "AI Engine", desc: "Neural data visualization.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800", size: "md:col-span-1 md:row-span-1", color: "from-purple-500/20" },
  { title: "VOID", cat: "Web3", desc: "Spatial OS platform.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800", size: "md:col-span-2 md:row-span-1", color: "from-red-500/20" }
];

export default function BentoPortfolio() {
  return (
    <section className="bg-black py-20 px-6 min-h-screen flex flex-col items-center">
      {/* Header - Simple & Static for Speed */}
      <div className="max-w-4xl w-full text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-yellow-400 font-mono text-[10px] tracking-widest uppercase mb-4">
          <ZapIcon /> Selected Works
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
    { title: "GLOW", cat: "BRANDING", desc: "Luxury digital store.", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=600", tags: ["Shopify"], link: "#" },
    { title: "RIZQ", cat: "FINTECH", desc: "High-end 3D identity.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600", tags: ["Three.js"], link: "#" },
    { title: "AETHER", cat: "AI ENGINE", desc: "Neural data visualization.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600", tags: ["GSAP"], link: "#" },
    { title: "VOID", cat: "WEB3", desc: "Decentralized spatial OS.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600", tags: ["WebGL"], link: "#" }
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
            <div className="flex gap-1.5 flex-wrap">
              {p.tags.map(t => <span key={t} className="text-[7px] text-white/40 border border-white/10 px-2 py-0.5 rounded bg-white/5 uppercase">{t}</span>)}
            </div>

            {/* Hidden Link for SEO/Accessibility */}
            <a href="#" className="absolute inset-0 z-20"><span className="sr-only">View {p.title}</span></a>
          </div>
        ))}
      </div>
    </section>
  );
}