"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden" id="home">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/hero-poster.jpg" // Optional: Add a poster image for better UX
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay + Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
                
                {/* Animated Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter"
                >
                    We Build Websites That{" "}
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                        Grow Your Business
                    </span>
                </motion.h1>

                {/* Animated Subheading */}
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-medium tracking-wide"
                >
                    Rizq Technologies crafts modern, lightning-fast, and conversion-focused digital experiences 
                    that deliver measurable growth.
                </motion.p>

                {/* Animated Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none"
                >
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl shadow-yellow-400/30"
                        >
                            Get Started
                        </motion.button>
                    </Link>

                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
                        >
                            Book a Free Call
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-white/60 text-sm tracking-widest font-medium">SCROLL TO EXPLORE</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 bg-white/70 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;