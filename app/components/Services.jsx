"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "Bold identities and stunning interfaces.",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-1",
    glow: "rgba(245, 166, 35, 0.15)"
  },
  {
    num: "02",
    tag: "Engineering",
    name: "Web Development",
    desc: "High-performance systems built for global scale.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-8 md:row-span-1",
    glow: "rgba(59, 130, 246, 0.15)"
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Data-driven strategies that convert traffic to revenue.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-7 md:row-span-1",
    glow: "rgba(34, 197, 94, 0.15)"
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Seamless iOS & Android experiences.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-5 md:row-span-2",
    glow: "rgba(168, 85, 247, 0.15)"
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI Solutions",
    desc: "Smart automation & neural workflows.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-1",
    glow: "rgba(239, 68, 68, 0.15)"
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud Systems",
    desc: "Reliable & scalable infrastructure.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-3 md:row-span-1",
    glow: "rgba(6, 182, 212, 0.15)"
  },
  {
    num: "07",
    tag: "Consulting",
    name: "Tech Strategy",
    desc: "Roadmaps for digital transformation.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-12 md:row-span-1",
    glow: "rgba(249, 115, 22, 0.15)"
  }
];

export default function ServicesBentoRefined() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND GRID & MESH */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            OUR <span className="text-amber-500">EXPERTISE.</span>
          </motion.h2>
        </div>

        {/* 2. BENTO GRID WITH IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[300px] md:auto-rows-[340px]">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`${service.span} relative group rounded-[40px] border border-white/10 overflow-hidden bg-zinc-950`}
            >
              {/* IMAGE LAYER: Background with desaturation */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.img} 
                  alt={service.name} 
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                {/* Gradient overlay to ensure text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
              </div>

              {/* CONTENT LAYER */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-amber-500 font-mono text-xs tracking-widest uppercase font-bold">
                      {service.tag}
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">{service.num}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-zinc-400 mt-3 text-sm md:text-base leading-relaxed max-w-[280px]">
                    {service.desc}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                    {/* Minimal Feats List */}
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f5a623]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    </div>

                    {/* Explore Glass Button */}
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300">
                      Explore <ArrowUpRight className="w-3 h-3" />
                    </button>
                </div>
              </div>

              {/* Subtle Edge Glow on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${service.glow}, transparent 60%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}