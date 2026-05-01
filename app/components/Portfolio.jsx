import React from 'react';
import Image from 'next/image';

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M4 14.71L15 3l-2 9h7L9 21l2-9H4z" /></svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  { id: "01", title: "Leather Craft", cat: "Core System", desc: "Revolutionizing digital product displays with high-fidelity textures.", img: "/leather_craft_premium.png" },
  { id: "02", title: "GLOW LUXURY", cat: "Branding", desc: "Digital identity for the next generation of skincare brands.", img: "https://images.unsplash.com/photo-1631730486784-029750059e0a?q=80&w=800" },
  { id: "03", title: "RIZQ TECH", cat: "Fintech", desc: "A seamless bridge between traditional finance and blockchain.", img: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800" },
  { id: "04", title: "AETHER AI", cat: "Visuals", desc: "Generating neural data insights through predictive analytics.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800" }
];

export default function AgencyShowcase() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      
      {/* --- Yellow Creativity Background Decor --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 font-mono text-[10px] tracking-widest uppercase mb-6">
              <ZapIcon /> Works & Case Studies
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase">
              Digital <br /> <span className="text-yellow-400">Archives.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-xs text-sm font-medium leading-relaxed border-l border-yellow-500/30 pl-4">
            Curating high-end digital experiences for ambitious brands. Focused on speed, quality, and aesthetics.
          </p>
        </div>

        {/* --- Projects List Section --- */}
        <div className="flex flex-col gap-32">
          {projects.map((p, i) => (
            <div 
              key={p.id} 
              className="group flex flex-col md:flex-row items-center gap-12 md:gap-24"
            >
              {/* ID & Numbering */}
              <div className="hidden md:block">
                <span className="text-8xl font-black text-zinc-900 group-hover:text-yellow-400/20 transition-colors duration-500">
                  {p.id}
                </span>
              </div>

              {/* Visual Side */}
              <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-yellow-400/30 transition-all duration-700">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/3 space-y-6">
                <div className="space-y-2">
                  <p className="text-yellow-400 font-mono text-[11px] uppercase tracking-[4px]">{p.cat}</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  {p.desc}
                </p>
                <button className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest group/btn">
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-yellow-400 group-hover/btn:text-black group-hover/btn:border-yellow-400 transition-all duration-300">
                    <ExternalIcon />
                  </span>
                  View Project
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- Footer Accent --- */}
      <div className="mt-40 text-center border-t border-white/5 pt-12">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[10px]">End of Portfolio</p>
      </div>

    </section>
  );
}