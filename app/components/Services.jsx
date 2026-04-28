"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, Monitor, Rocket, Smartphone, 
  Cpu, Cloud, Layout, ArrowUpRight 
} from "lucide-react";

// Icons mapping for services
const icons = [
  <Zap key="1" />, <Monitor key="2" />, <Rocket key="3" />, 
  <Smartphone key="4" />, <Cpu key="5" />, <Cloud key="6" />, <Layout key="7" />
];

const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "We craft bold identities and stunning interfaces that make your brand unrecognizable.",
    span: "md:col-span-4 md:row-span-1",
    color: "from-amber-500/20",
  },
  {
    num: "02",
    tag: "Full Stack",
    name: "Web Development",
    desc: "High-performance web apps built for speed and real business growth.",
    span: "md:col-span-8 md:row-span-1",
    color: "from-blue-500/20",
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Data-driven strategies that convert traffic into revenue.",
    span: "md:col-span-8 md:row-span-1",
    color: "from-green-500/20",
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Seamless user experiences across iOS and Android.",
    span: "md:col-span-4 md:row-span-2",
    color: "from-purple-500/20",
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI & LLM Solutions",
    desc: "Smart automation and LLM integrations to boost efficiency.",
    span: "md:col-span-4 md:row-span-1",
    color: "from-red-500/20",
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud & Deployment",
    desc: "Reliable infrastructure ensuring zero downtime.",
    span: "md:col-span-4 md:row-span-1",
    color: "from-cyan-500/20",
  },
  {
    num: "07",
    tag: "Strategy",
    name: "Tech Consulting",
    desc: "Expert guidance for scalable architectures.",
    span: "md:col-span-12 md:row-span-1",
    color: "from-orange-500/20",
  },
];

export default function ServicesBento() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden font-sans" id="services">
      {/* 1. BACKGROUND GRID LINES (Industry Standard) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER AREA */}
        <div className="mb-20 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-amber-500 font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none"
          >
            OUR PREMIUM <br/> <span className="text-zinc-700 italic">SERVICES.</span>
          </motion.h2>
        </div>

        {/* 2. BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px] md:auto-rows-[320px]">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`${service.span} relative group bg-zinc-900/40 border border-white/5 rounded-[32px] p-8 overflow-hidden backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-500`}
            >
              {/* Radial Glow on Hover */}
              <div className={`absolute -inset-px bg-gradient-to-br ${service.color} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-500">
                    {icons[i]}
                  </div>
                  <span className="text-zinc-600 font-mono text-xs">{service.num}</span>
                </div>
                
                <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-2">
                  {service.tag}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                  {service.name}
                </h3>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed max-w-[280px]">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Interactive Layer */}
              <div className="relative z-10 flex justify-between items-end">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>
                <motion.button 
                  whileHover={{ x: 3, y: -3 }}
                  className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest group-hover:text-amber-500 transition-colors"
                >
                  Explore <ArrowUpRight className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. FINAL FOOTER CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-zinc-500 text-sm max-w-md text-center md:text-left">
            Need a custom solution? We engineer specific architectures for market-leading growth.
          </p>
          <a 
            href="#contact" 
            className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-amber-500 transition-colors"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}