"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alex Thompson",
    role: "CEO, NexaCorp",
    content: "Rizq Technologies transformed our legacy system into a high-performance MERN powerhouse. Our load speeds dropped by 60%.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, FlowUI",
    content: "The design sensibility of this agency is unmatched. They don't just build features; they craft experiences that convert.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Mohammad Umar",
    role: "Director, Umar & Friends",
    content: "Reliable, scalable, and extremely creative. Their AI integration saved our team 20+ hours of manual work every week.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=umar",
  },
  {
    name: "David Chen",
    role: "Founder, AlphaStream",
    content: "Building with Next.js was a breeze with Rizq. Their technical SEO expertise put us on the first page of Google in months.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

export default function CreativeTestimonials() {
  // We double the array to create a seamless infinite loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden" id="testimonials">
      
      {/* 1. CREATIVE LIGHTWEIGHT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 font-mono text-[11px] font-bold tracking-[0.5em] uppercase">Testimonials</span>
            <span className="h-[1px] w-8 bg-amber-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none"
          >
            Don't take our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic">word for it.</span>
          </motion.h2>
        </header>

        {/* 2. INFINITE SCROLLING CONTAINER */}
        <div className="relative flex overflow-hidden py-10 mask-gradient">
          <motion.div 
            className="flex gap-6 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedTestimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </motion.div>

          {/* Gradient Overlays for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-20" />
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 group">
      <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
        
        {/* Subtle Background Icon */}
        <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-amber-500/10 transition-colors" size={80} />

        <div className="relative z-10">
          <div className="flex gap-1 mb-6">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
            ))}
          </div>
          
          <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed italic mb-10">
            "{item.content}"
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10 border-t border-white/10 pt-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/20">
            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider">{item.name}</h4>
            <p className="text-amber-500/80 font-mono text-[10px] uppercase tracking-widest mt-1">{item.role}</p>
          </div>
        </div>

        {/* Hover Highlight Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
}