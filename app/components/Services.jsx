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

      {/* 1. MAGIC BACKGROUND GRID (Yellow Lines) */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 
        bg-[linear-gradient(to_right,#facc15_1px,transparent_1px),
        linear-gradient(to_bottom,#facc15_1px,transparent_1px)]
        bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      {/* 2. AMBIENT GLOW */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-yellow-500 font-mono text-xs tracking-[0.4em] uppercase mb-4"
            >
              Elite Expertise
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              OUR PREMIUM <br/> <span className="text-zinc-800 italic">SERVICES.</span>
            </motion.h2>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-xs md:text-right font-medium">
            We engineer high-performance digital ecosystems built for global scale.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${service.span} relative group rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-950 flex flex-col h-full`}
            >
              {/* MAGIC SHIMMER BORDER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

              {/* BACKGROUND IMAGE & OVERLAYS */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[320px]">
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-[10px] uppercase font-black tracking-widest">
                      {service.tag}
                    </span>
                    <span className="text-zinc-800 font-mono text-xs">{service.num}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none mb-4 group-hover:text-yellow-400 transition-colors duration-500">
                    {service.name}
                  </h3>

                  <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium leading-relaxed max-w-[320px]">
                    {service.desc}
                  </p>
                </div>

                {/* INTERACTIVE ACTION */}
                <div className="flex justify-between items-center mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                    bg-yellow-400 text-black font-black text-[10px] uppercase tracking-widest
                    hover:bg-white transition-all duration-500 shadow-[0_10px_30px_rgba(250,204,21,0.2)]"
                  >
                    Have a Talk
                    <MessageSquareCode className="w-4 h-4" />
                  </Link>
                  
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-yellow-400 group-hover:border-yellow-400 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}