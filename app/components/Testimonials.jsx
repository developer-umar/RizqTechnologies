"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aman Siddiqui",
    role: "MD, Leather Hub",
    content: "Rizq Technologies ne hamari e-commerce platform ko pura revamp kar diya. Performance aur design ek dum world-class hai.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, Saba Exports",
    content: "Professionalism and creativity at its best. Group Saba ki digital identity ab international standards ko match karti hai.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Mr.Kapoor",
    role: "CEO, 9K Nanotech",
    content: "Technical expertise is unmatched. Next.js integration ke baad hamari site ki speed aur SEO rankings drastically improve hui hain.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Umar",
  },
  {
    name: "Vikram Malhotra",
    role: "Director, Calico Industries",
    content: "Highly recommended for custom software. Rizq team ne hamare requirements ko samjha aur ek scalable solution deliver kiya.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
  },
  {
    name: "Habib Khan",
    role: "Owner, Habib Fashion",
    content: "Creative UI/UX design! Hamare customers ko naya interface bahut pasand aa raha hai. Conversion rates 40% badh gaye hain.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Habib",
  },
];

export default function CreativeTestimonials() {
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden" id="testimonials">
      
      {/* BACKGROUND ELEMENTS */}
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
            <span className="text-amber-500 font-mono text-[11px] font-bold tracking-[0.5em] uppercase">Client Stories</span>
            <span className="h-[1px] w-8 bg-amber-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none"
          >
            Trusted by <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic font-light">Industry Leaders.</span>
          </motion.h2>
        </header>

        {/* INFINITE SCROLL */}
        <div className="relative flex overflow-hidden py-10 mask-gradient">
          <motion.div 
            className="flex gap-6 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 35, // Balanced speed for readability
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedTestimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </motion.div>

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
    <div className="w-[380px] md:w-[480px] flex-shrink-0 group">
      <div className="h-full p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 backdrop-blur-md hover:border-amber-500/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
        
        <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-amber-500/10 transition-colors" size={80} />

        <div className="relative z-10">
          <div className="flex gap-1 mb-8">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
            ))}
          </div>
          
          <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed italic mb-10">
            "{item.content}"
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-8">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider">{item.name}</h4>
            <p className="text-amber-500/80 font-mono text-[9px] uppercase tracking-[0.2em] mt-1">{item.role}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 to-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      </div>
    </div>
  );
}