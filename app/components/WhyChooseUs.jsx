"use client";

import React from "react";
import { Rocket, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const WHY_DATA = [
  { title: "Rapid Delivery", desc: "We ship clean, production-ready code in weeks, not months.", icon: <Rocket size={24} /> },
  { title: "Expert Support", desc: "Direct access to senior engineers throughout the lifecycle.", icon: <Code2 size={24} /> },
  { title: "Privacy First", desc: "Enterprise-grade security protocols for all data assets.", icon: <ShieldCheck size={24} /> },
  { title: "Modern Stack", desc: "Using the latest 2026 tech trends to give you a competitive edge.", icon: <Cpu size={24} /> },
];

// Background Orbs Component for lightweight creativity
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -100, 0],
          x: [0, i % 2 === 0 ? 50 : -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full bg-yellow-500/5 blur-[80px]"
        style={{
          width: `${200 + i * 50}px`,
          height: `${200 + i * 50}px`,
          left: `${i * 20}%`,
          top: `${20 + i * 15}%`,
        }}
      />
    ))}
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#020202] py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
      {/* 1. CREATIVE BACKDROP */}
      <FloatingOrbs />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-yellow-500 font-mono text-[11px] font-bold tracking-[0.6em] uppercase">The Rizq Advantage</span>
            <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] mt-6">
              WHY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-800">RIZQ?</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="#contact" className="px-12 py-5 bg-yellow-500 text-black font-black text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(250,204,21,0.4)]">
               Start a Project
            </Link>
          </motion.div>
        </div>

        {/* 2. FLOATING CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_DATA.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ 
                y: -15, 
                rotateZ: i % 2 === 0 ? 1 : -1,
                scale: 1.02 
              }}
              className="group p-10 rounded-[3.5rem] bg-zinc-900/20 border border-white/5 backdrop-blur-xl hover:border-yellow-500/40 hover:bg-zinc-900/40 transition-all duration-700 relative overflow-hidden"
            >
              {/* Animated Glow Effect inside card */}
              <div className="absolute -inset-24 bg-yellow-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

              <div className="relative z-10">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-10 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 shadow-inner"
                >
                  {item.icon}
                </motion.div>
                
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="absolute bottom-6 left-10 w-12 h-1 bg-zinc-800 group-hover:bg-yellow-500 group-hover:w-20 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}