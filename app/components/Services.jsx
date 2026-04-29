"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles, BrainCircuit, PenTool, Monitor, Smartphone, Briefcase, Zap } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    tag: "Design",
    name: "Brand & UI Identity",
    desc: "Luxury aesthetics meets conversion-focused UI for the elite brands.",
    icon: <Sparkles className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    span: "md:col-span-4",
    color: "rgba(250, 204, 21, 0.4)"
  },
  {
    num: "02",
    tag: "Intelligence",
    name: "AI & ML Solutions",
    desc: "Neural networks and LLM integrations that automate your growth.",
    icon: <BrainCircuit className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    span: "md:col-span-8",
    color: "rgba(59, 130, 246, 0.4)"
  },
  {
    num: "03",
    tag: "Visuals",
    name: "Motion Graphics",
    desc: "Cinematic visual storytelling that stops the scroll instantly.",
    icon: <PenTool className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    span: "md:col-span-7",
    color: "rgba(168, 85, 247, 0.4)"
  },
  {
    num: "04",
    tag: "Core",
    name: "Web Systems",
    desc: "Next-gen architecture with sub-second load times and scale.",
    icon: <Monitor className="w-6 h-6" />,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    span: "md:col-span-5",
    color: "rgba(34, 197, 94, 0.4)"
  }
];

export default function AgencyServices() {
  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-12 overflow-hidden">
      {/* 1. DYNAMIC MESH BACKGROUND - Fixes the "Too Dark" issue */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-mono tracking-[0.3em] uppercase text-sm block"
          >
            // Capabilities
          </motion.span>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter"
          >
            THE <span className="text-zinc-800">EDGE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((s, i) => <ServiceCard key={i} s={s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // 3D Tilt Logic
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = (mouseY / height - 0.5) * -10; // Max 10 deg tilt
    const rY = (mouseX / width - 0.5) * 10;

    x.set(mouseX);
    y.set(mouseY);
    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const background = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseXSpring}px ${mouseYSpring}px,
      ${s.color},
      transparent 80%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`${s.span} group relative h-[450px] rounded-[3rem] p-[2px] bg-zinc-800/50 transition-all duration-500 hover:bg-zinc-700/50`}
    >
      {/* 2. ENHANCED LASER BORDER */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]"
        style={{ background }}
      />

      <div className="relative z-10 h-full w-full rounded-[2.9rem] bg-[#0a0a0a] overflow-hidden flex flex-col p-10">
        {/* IMAGE LAYER - Higher base visibility for mobile */}
        <div className="absolute inset-0 z-0">
          <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-[0.15] md:opacity-[0.05] group-hover:scale-110 transition-transform duration-[2s] ease-out grayscale group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col h-full justify-between translate-z-10">
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/5 text-yellow-500">
              {s.icon}
            </div>
            <span className="font-mono text-zinc-700 text-xl font-bold">{s.num}</span>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-none mb-4 group-hover:text-yellow-400 transition-colors">
              {s.name.split(' ').map((word, index) => (
                <span key={index} className="block">{word}</span>
              ))}
            </h3>
            <p className="text-zinc-500 text-lg max-w-[280px] group-hover:text-zinc-300 transition-colors">
              {s.desc}
            </p>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-white/5">
             <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
               <Zap className="w-4 h-4 text-yellow-500" />
               View Case Study
             </div>
             <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
               <ArrowUpRight className="w-6 h-6" />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}