"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const btnRef = useRef(null);

    // 1. Mouse Tracking for "Bento Magic Glow"
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const springConfig = { damping: 25, stiffness: 200 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#blog", label: "Blog" },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-3 px-4 md:px-10" : "py-6 px-4 md:px-10"}`}>
            <nav className={`max-w-7xl mx-auto transition-all duration-500 border rounded-[2rem] px-6 md:px-10 flex justify-between items-center h-[70px] md:h-[80px] ${
                scrolled ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl" : "bg-transparent border-white/10"
            }`}>

                {/* Logo */}
                <Link href="#home" className="relative z-[110] flex items-center">
                    <Image src="/hori-r.png" alt="Rizq Logo" width={210} height={100} className="object-contain w-[168px] md:w-[210px]" priority />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-white/70 hover:text-yellow-400 text-sm font-bold tracking-widest uppercase transition-colors">
                            {link.label}
                        </Link>
                    ))}

                    {/* 🔥 THE MAGIC BENTO FLUID BUTTON */}
                    <Link href="#contact">
                        <motion.button
                            ref={btnRef}
                            onMouseMove={handleMouseMove}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-8 py-3 rounded-full overflow-hidden border border-yellow-400/30 bg-white/5 transition-all duration-500 hover:border-yellow-400"
                        >
                            {/* Layer 1: The Bento Magic Glow (Always Active on Hover) */}
                            <motion.div
                                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                style={{
                                    background: useTransform(
                                        [dx, dy],
                                        ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(250, 204, 21, 0.4), transparent 80%)`
                                    ),
                                }}
                            />

                            {/* Layer 2: The Fluid Fill (Niche se upar) */}
                            <div className="absolute inset-0 bg-yellow-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />

                            {/* Layer 3: Persistent Border Glow (Takki button dikhe) */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(250,204,21,0.2)] group-hover:shadow-none transition-all" />

                            {/* Layer 4: Content */}
                            <div className="relative z-20 flex items-center gap-2">
                                <span className="text-yellow-400 group-hover:text-black font-bold text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 drop-shadow-[0_0_5px_rgba(250,204,21,0.3)]">
                                    Get Started
                                </span>
                                <motion.span 
                                    className="text-yellow-400 group-hover:text-black text-lg transition-colors duration-500"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-[110] text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-8 z-[105]">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-4xl font-bold uppercase tracking-tighter hover:text-yellow-400">
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="#contact" onClick={() => setIsOpen(false)}>
                                <button className="bg-yellow-400 text-black px-12 py-4 rounded-full font-black text-xl uppercase italic shadow-[0_0_30px_rgba(250,204,21,0.5)]">
                                    Get Started →
                                </button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;