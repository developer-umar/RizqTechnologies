"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquareCode } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    tag: "Branding",
    name: "Brand & UI Design",
    desc: "Bold identities & stunning interfaces that make your brand unforgettable.",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-1",
    glow: "rgba(245, 166, 35, 0.15)"
  },
  {
    num: "02",
    tag: "Engineering",
    name: "Web Development",
    desc: "High-performance systems engineered for speed, scale & reliability.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-8 md:row-span-1",
    glow: "rgba(59, 130, 246, 0.15)"
  },
  {
    num: "03",
    tag: "Growth",
    name: "Digital Marketing",
    desc: "Data-driven strategies that convert traffic into real business growth.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-7 md:row-span-1",
    glow: "rgba(34, 197, 94, 0.15)"
  },
  {
    num: "04",
    tag: "Mobile",
    name: "App Development",
    desc: "Seamless mobile apps built for performance & user engagement.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-5 md:row-span-2",
    glow: "rgba(168, 85, 247, 0.15)"
  },
  {
    num: "05",
    tag: "AI / ML",
    name: "AI Solutions",
    desc: "AI-powered automation to optimize workflows and boost efficiency.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-4 md:row-span-1",
    glow: "rgba(239, 68, 68, 0.15)"
  },
  {
    num: "06",
    tag: "DevOps",
    name: "Cloud Systems",
    desc: "Scalable cloud infrastructure with security & performance at core.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-3 md:row-span-1",
    glow: "rgba(6, 182, 212, 0.15)"
  },
  {
    num: "07",
    tag: "Consulting",
    name: "Tech Strategy",
    desc: "Strategic tech consulting to accelerate your digital transformation.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-12 md:row-span-1",
    glow: "rgba(249, 115, 22, 0.15)"
  }
];

export default function ServicesBentoMagic() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-10 overflow-hidden font-sans cursor-none" id="expertise">

      {/* CURSOR GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            400px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(250, 204, 21, 0.15),
            transparent 70%
          )`,
        }}
      />

      {/* YELLOW GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#facc15_1px,transparent_1px),
          linear-gradient(to_bottom,#facc15_1px,transparent_1px)]
          bg-[size:60px_60px] opacity-20" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-amber-500 font-mono text-[10px] uppercase font-black mb-4 tracking-[0.3em]"
          >
            Core Capabilities
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none"
          >
            OUR ELITE <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              EXPERTISE.
            </span>
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[360px]">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`${service.span} relative group rounded-[32px] overflow-hidden p-[1.5px]
              transition-transform duration-500 hover:scale-[1.02]`}
            >

              {/* BORDER ANIMATION */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm animate-[shimmer_2s_infinite]" style={{ backgroundSize: '200% 100%' }} />

              {/* CARD */}
              <div className="relative h-full w-full bg-zinc-950 rounded-[30.5px] overflow-hidden flex flex-col justify-between
              transition-all duration-500 group-hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

                {/* IMAGE */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.img} 
                    alt={service.name} 
                    className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-500 font-mono text-[9px] uppercase tracking-widest font-black">
                      {service.tag}
                    </span>
                    <span className="text-zinc-700 font-mono text-[10px]">{service.num}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tighter mb-4 group-hover:text-amber-400 transition-all duration-500">
                    {service.name}
                  </h3>

                  <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-[320px]">
                    {service.desc}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="relative z-10 p-8 pt-0 flex justify-between items-center">
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f5a623] animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-700 font-bold uppercase tracking-widest">
                      Active System
                    </span>
                  </div>

                  {/* BUTTON */}
                  <Link 
                    href="#contact" 
                    className="group relative flex items-center gap-2 px-6 py-3 rounded-full 
                    bg-white/5 border border-white/10 backdrop-blur-xl 
                    text-white text-[10px] font-black uppercase tracking-[0.2em] 
                    overflow-hidden transition-all duration-300 
                    hover:bg-amber-500 hover:text-black hover:border-amber-500
                    hover:shadow-[0_0_25px_rgba(245,166,35,0.4)]
                    active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Project
                      <MessageSquareCode className="w-3 h-3 transition-transform duration-300 group-hover:rotate-12" />
                    </span>

                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500"></span>
                  </Link>
                </div>
              </div>

              {/* CARD GLOW */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${service.glow}, transparent 70%)` }}
              />

            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

    </section>
  );
}