// PortfolioSection.js (Server Component by default)
import React from 'react';
import Image from 'next/image';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase mb-6">
          Premium <span className="text-zinc-600">Builds.</span>
        </h2>
        <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base">
          Focused on high-performance, minimalist digital experiences. 
          No fluff, just pure engineering.
        </p>
      </div>

      {/* Bento Grid - Pure CSS Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {projects.map((p, i) => (
          <div 
            key={i} 
            className={`group relative rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-all duration-500 hover:border-yellow-400/30 ${p.size}`}
          >
            {/* Background Image with Server Optimization */}
            <Image 
              src={p.img} 
              alt={p.title} 
              fill 
              className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Glass Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest">{p.cat}</span>
                <div className="p-2 rounded-full bg-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ExternalIcon />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-1">{p.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm max-w-[200px] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {p.desc}
                </p>
              </div>
            </div>

            {/* Hidden Link for SEO/Accessibility */}
            <a href="#" className="absolute inset-0 z-20"><span className="sr-only">View {p.title}</span></a>
          </div>
        ))}
      </div>
    </section>
  );
}