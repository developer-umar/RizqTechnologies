"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MessageSquareCode, ArrowUpRight, Cpu, Palette } from "lucide-react";
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
    tag: "Intelligence",
    name: "AI & ML Solutions",
    desc: "Integrating neural networks and predictive models into modern workflows.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    span: "md:col-span-7",
  },
  {
    num: "04",
    tag: "Visuals",
    name: "Graphic Designing",
    desc: "High-end visual storytelling through digital art and typography.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
    span: "md:col-span-5",
  },
  {
    num: "05",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Performance-driven marketing that turns traffic into revenue.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    span: "md:col-span-6",
  },
  {
    num: "06",
    tag: "Mobile",
    name: "App Development",
    desc: "Seamless mobile apps designed for engagement & performance.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    span: "md:col-span-6",
  },
  {
    num: "07",
    tag: "Custom",
    name: "Custom Software",
    desc: "Tailored software built exactly for your business workflows.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
    span: "md:col-span-12",
  },
];

export default function ServicesBentoMagic() {
  return (
    <section className="relative min-h-screen bg-black py-24 px-4 md:px-10 overflow-hidden" id="services">
      {/* BACKGROUND EFFECTS (Kept original logic, refined opacity) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#facc1505_1px,transparent_1px),linear-gradient(to_bottom,#facc1505_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter"
          >
            CRAFTING <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-yellow-500/50 to-zinc-700 italic">FUTURE.</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(100); // Start laser beam at a visible point

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`${service.span} group relative rounded-[2.5rem] p-[1.5px] overflow-hidden bg-zinc-900/50 transition-all duration-500`}
    >
      {/* LASER 2.0: Follows Mouse on desktop, subtle pulse on mobile */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(250,204,21,0.4), transparent 80%)`,
        }}
      />

      <div className="relative z-10 h-full w-full rounded-[2.45rem] bg-zinc-950 flex flex-col overflow-hidden">
        {/* IMAGE OVERLAY: Fixed mobile darkness by using higher base opacity on mobile */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={service.img}
            alt={service.name}
            className="w-full h-full object-cover opacity-[0.08] md:opacity-[0.03] grayscale group-hover:grayscale-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[380px]">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-[10px] uppercase font-bold tracking-widest">
                {service.tag}
              </span>
              <span className="text-zinc-700 font-mono text-xs">{service.num}</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-4 group-hover:text-yellow-400 transition-colors duration-300">
              {service.name}
            </h3>

            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-[300px]">
              {service.desc}
            </p>
          </div>

          <div className="flex justify-between items-end">
             <Link
                href="#contact"
                className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-[10px] uppercase font-black tracking-widest hover:bg-yellow-500 hover:text-black transition-all duration-300"
             >
                Inquire Now
             </Link>
            
            <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-yellow-500/50 group-hover:text-yellow-500 group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}