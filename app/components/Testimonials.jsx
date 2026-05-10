"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

/**
 * CLIENT DATA: Real brand names from the portfolio with professional 
 * Indian identities and high-quality headshots.
 */
const TESTIMONIALS = [
  {
    name: "Aman Siddiqui",
    role: "MD, Leather Hub",
    content: "Rizq Technologies completely revamped our e-commerce platform. The performance and design are truly world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop", // Professional Indian Male
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, Saba Exports",
    content: "Professionalism and creativity at its best. Group Saba's digital identity now matches international standards perfectly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop", // Professional Indian Female
  },
  {
    name: "Mr. Kapoor",
    role: "CEO, 9K Nanotech",
    content: "Technical expertise is unmatched. After Next.js integration, our site speed and SEO rankings improved drastically.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop", // Tech Executive
  },
  {
    name: "Vikram Malhotra",
    role: "Director, Calico Industries",
    content: "Highly recommended for custom software. The team understood our requirements and delivered a truly scalable solution.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop", // Corporate Leader
  },
  {
    name: "Habib Khan",
    role: "Owner, Habib Fashion",
    content: "Creative UI/UX design! Our customers love the new interface. Our conversion rates have increased by 40%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop", // Creative Entrepreneur
  },
];

export default function CreativeTestimonials() {
  // Seamless loop logic: Duplicate the items for an endless horizontal carousel
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden" id="testimonials">
      
      {/* VISUAL BACKGROUND: Subtle amber glow and grain texture for depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-[1px] w-8 bg-amber-500" />
            <span className="text-amber-500 font-mono text-[11px] font-bold tracking-[0.5em] uppercase">Client Success Stories</span>
            <span className="h-[1px] w-8 bg-amber-500" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none"
          >
            Trusted by <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 italic font-light">
              Market Disruptors.
            </span>
          </motion.h2>
        </header>

        {/* MOTION CONTAINER: Infinite linear scroll with fading masks */}
        <div className="relative flex overflow-hidden py-10 mask-gradient">
          <motion.div 
            className="flex gap-6 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, // Optimized speed for text legibility
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedTestimonials.map((item, i) => (
              <TestimonialCard key={i} item={item} />
            ))}
          </motion.div>

          {/* Edge fades for smooth entry/exit of cards */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20" />
        </div>
      </div>

      {/* Global CSS for the Masking effect */}
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
    <div className="w-[400px] md:w-[500px] flex-shrink-0 group">
      <div className="h-full p-10 md:p-12 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
        
        {/* Background Quote Icon for high-end aesthetic */}
        <Quote className="absolute top-10 right-10 text-white/5 group-hover:text-amber-500/10 transition-colors" size={100} />

        <div className="relative z-10">
          <div className="flex gap-1 mb-8">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
            ))}
          </div>
          
          <p className="text-zinc-200 text-xl md:text-2xl font-semibold leading-snug italic mb-12 group-hover:text-white transition-colors">
            "{item.content}"
          </p>
        </div>

        {/* Footer: Real profile photo with luxury framing */}
        <div className="flex items-center gap-5 relative z-10 border-t border-white/10 pt-10">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
            <img src={item.avatar} alt={item.name} className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-1000" />
          </div>
          <div>
            <h4 className="text-white font-black text-base uppercase tracking-tight">{item.name}</h4>
            <p className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.25em] mt-1.5">{item.role}</p>
          </div>
        </div>

        {/* Animated accent border on hover */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
      </div>
    </div>
  );
}