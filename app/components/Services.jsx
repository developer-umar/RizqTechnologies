"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareCode, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "Bold identities & stunning interfaces that make your brand unforgettable.",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200",
    span: "md:col-span-4",
  },
  {
    num: "02",
    tag: "Engineering",
    name: "Web Development",
    desc: "High-performance websites built for speed, scale & conversions.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    span: "md:col-span-8",
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Performance-driven marketing that turns traffic into revenue.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    span: "md:col-span-6",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Seamless mobile apps designed for engagement & performance.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    span: "md:col-span-6",
  },
  {
    num: "05",
    tag: "Custom",
    name: "Custom Software Solutions",
    desc: "Tailored software built exactly for your business workflows & unique architectural problems.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
    span: "md:col-span-12",
  },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-black py-24 px-4 md:px-10 overflow-hidden" id="services">
      
      {/* 1. ANIMATED BACKGROUND BEAMS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#facc1508_1px,transparent_1px),linear-gradient(to_bottom,#facc1508_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Moving Light Beams */}
        <motion.div 
          animate={{ x: [-1000, 1000], opacity: [0, 0.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-full bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -skew-x-12"
        />
        <motion.div 
          animate={{ y: [-1000, 1000], opacity: [0, 0.3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-0 right-[20%] w-full h-[300px] bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent"
        />
      </div>

      {/* 2. CENTER AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-yellow-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER AREA */}
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-yellow-500" />
              <span className="text-yellow-500 font-mono text-xs font-bold tracking-[0.5em] uppercase">Expertise</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter"
            >
              CRAFTING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-200 to-zinc-700 italic">LEGACIES.</span>
            </motion.h2>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-fr">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${service.span} relative group rounded-[3rem] p-[2px] overflow-hidden bg-zinc-900/20`}
            >
              {/* LASER BORDER EFFECT (ANIMATED ON HOVER) */}
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#facc15_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] z-0" />
              
              {/* INNER CONTENT CONTAINER */}
              <div className="relative z-10 h-full w-full rounded-[2.9rem] bg-zinc-950 flex flex-col overflow-hidden">
                
                {/* Background Textures */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover opacity-[0.03] grayscale group-hover:grayscale-0 group-hover:opacity-20 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/90" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08)_0%,transparent_70%)] transition-opacity duration-700" />
                </div>

                <div className="relative z-10 p-10 flex flex-col justify-between h-full min-h-[350px]">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <span className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-500 text-[10px] uppercase font-black tracking-[0.2em]">
                        {service.tag}
                      </span>
                      <span className="text-zinc-800 font-mono text-[11px] font-bold tracking-widest">{service.num}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-6 group-hover:translate-x-2 transition-transform duration-500">
                      {service.name}
                    </h3>

                    <p className="text-zinc-500 text-sm md:text-lg font-medium leading-relaxed max-w-[340px]">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-10">
                    <Link
                      href="#contact"
                      className="group/btn relative inline-flex items-center gap-3 px-8 py-4 rounded-full 
                      bg-white text-black font-black text-[11px] uppercase tracking-widest
                      hover:bg-yellow-400 transition-all duration-500 overflow-hidden"
                    >
                      <span className="relative z-10">Connect Now</span>
                      <MessageSquareCode className="relative z-10 w-4 h-4" />
                      <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </Link>
                    
                    <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white/10 group-hover:text-yellow-400 group-hover:border-yellow-400 group-hover:rotate-45 transition-all duration-700">
                      <ArrowUpRight className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}