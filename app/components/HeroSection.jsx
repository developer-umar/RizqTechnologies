"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col justify-center pt-32" id="home">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-110">
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="relative z-30 px-8 md:px-20 max-w-7xl mx-auto w-full pb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full w-fit"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative h-2 w-2 rounded-full bg-yellow-500"></span>
                    </span>
                    <span className="text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">Built for 2026</span>
                </motion.div>

                <div className="max-w-5xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase"
                    >
                        Mastering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200 italic">Craft.</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 text-lg text-gray-400 max-w-lg leading-relaxed font-medium"
                    >
                        We build high-performance digital products for elite brands.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <Link href="#contact">
                        <button className="bg-yellow-400 hover:scale-105 transition-transform text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-yellow-400/20">
                            Start Project
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;