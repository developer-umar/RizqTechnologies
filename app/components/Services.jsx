"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, BrainCircuit, Monitor, Smartphone, PenTool, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { num: "01", tag: "Creative", name: "Brand & UI Design", desc: "Bold identities & stunning interfaces that make your brand unforgettable.", img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200", span: "md:col-span-4", icon: <Sparkles /> },
  { num: "02", tag: "Tech", name: "Web Development", desc: "High-performance websites built for speed, scale & conversions.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200", span: "md:col-span-8", icon: <Code2 /> },
  { num: "03", tag: "AI/ML", name: "AI Solutions", desc: "Integrating neural networks and predictive models into modern workflows.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200", span: "md:col-span-7", icon: <BrainCircuit /> },
  { num: "04", tag: "Art", name: "Graphic Designing", desc: "High-end visual storytelling through digital art and typography.", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200", span: "md:col-span-5", icon: <PenTool /> },
  { num: "05", tag: "Growth", name: "Digital Marketing", desc: "Performance-driven marketing that turns traffic into revenue.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", span: "md:col-span-6", icon: <Zap /> },
  { num: "06", tag: "Mobile", name: "App Development", desc: "Seamless mobile apps designed for engagement & performance.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200", span: "md:col-span-6", icon: <Smartphone /> },
  { num: "07", tag: "Systems", name: "Custom Software", desc: "Tailored software built exactly for your business unique architectural problems.", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200", span: "md:col-span-12", icon: <Monitor /> },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-[#080808] py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* 1. VISIBLE YELLOW GRID SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-2 w-2 bg-yellow-500 rounded-full animate-ping" />
            <span className="text-yellow-500 font-mono text-sm font-bold tracking-[0.3em] uppercase">What we do</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter"
          >
            OUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">SERVICES.</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes laser-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-laser {
          animation: laser-spin 6s linear infinite;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`${service.span} group relative rounded-[3rem] p-[1px] overflow-hidden bg-zinc-800/50`}
    >
      {/* 2. THE YELLOW LASER BORDER EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] animate-laser bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#facc15_360deg)]" />
      </div>

      <div className="relative z-10 h-full w-full rounded-[2.95rem] bg-[#0c0c0c] flex flex-col overflow-hidden">
        
        {/* 3. BALANCED IMAGE OVERLAY (Visible but not overpowering) */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.name}
            className="w-full h-full object-cover opacity-[0.25] md:opacity-[0.1] grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          {/* Gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0c0c0c]/80 to-[#0c0c0c]" />
        </div>

        <div className="relative z-10 p-10 flex flex-col justify-between h-full min-h-[400px]">
          <div>
            <div className="flex justify-between items-center mb-10">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
              </div>
              <span className="text-zinc-600 font-mono text-sm font-bold tracking-widest">{service.num}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] mb-4 group-hover:text-yellow-400 transition-colors">
              {service.name}
            </h3>

            <p className="text-zinc-400 text-sm md:text-lg font-medium leading-tight max-w-[320px] group-hover:text-zinc-200 transition-colors">
              {service.desc}
            </p>
          </div>

          <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5">
            <Link
              href="#contact"
              className="text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-yellow-500 transition-colors"
            >
              Start Project <ArrowUpRight size={14} />
            </Link>
            
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 group-hover:border-yellow-500 group-hover:text-yellow-500 group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}