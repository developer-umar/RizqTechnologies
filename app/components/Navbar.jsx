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

    // 1. Mouse Tracking for the "Magnetic" Button Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const springConfig = { damping: 20, stiffness: 150 };
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

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                scrolled ? "py-3 px-4 md:px-10" : "py-6 px-4 md:px-10"
            }`}
        >
            <nav className={`max-w-7xl mx-auto transition-all duration-500 border rounded-[2rem] px-6 md:px-10 flex justify-between items-center h-[70px] md:h-[80px] ${
                scrolled
                    ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl"
                    : "bg-transparent border-transparent"
            }`}>

                {/* Logo */}
                <Link href="#home" className="relative z-[110] flex items-center" onClick={closeMenu}>
                    <Image
                        src="/hori-r.png"
                        alt="Rizq Logo"
                        width={437}
                        height={273}
                        className="object-contain w-[168px] md:w-[210px] transition-transform hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/70 hover:text-yellow-400 text-sm font-bold tracking-widest uppercase transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* 🔥 THE STELLAR MAGNETIC BUTTON */}
                    <Link href="#contact">
                        <motion.button
                            ref={btnRef}
                            onMouseMove={handleMouseMove}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            className="relative group px-8 py-3.5 rounded-full overflow-hidden bg-[#050505] border border-white/10 transition-colors duration-500 hover:border-yellow-400/40"
                        >
                            {/* Layer 1: Mouse-Following Radial Glow */}
                            <motion.div
                                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: useTransform(
                                        [dx, dy],
                                        ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(250, 204, 21, 0.2), transparent 80%)`
                                    ),
                                }}
                            />

                            {/* Layer 2: Rotating Aura Edge */}
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-[150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#facc15_360deg)] blur-xl"
                            />

                            {/* Layer 3: Text Content */}
                            <div className="relative z-10 flex items-center gap-3">
                                <span className="text-white font-bold text-[10px] uppercase tracking-[0.25em] group-hover:text-yellow-400 transition-colors duration-300">
                                    Get Started
                                </span>
                                <motion.span 
                                    className="text-yellow-400 text-lg leading-none"
                                    variants={{ initial: { x: 0 }, hover: { x: 3 } }}
                                    whileHover="hover"
                                >
                                    →
                                </motion.span>
                            </div>

                            {/* Layer 4: Dark Mask */}
                            <div className="absolute inset-[1px] bg-[#080808] rounded-full z-[1]" />
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={toggleMenu} className="md:hidden relative z-[110] text-white p-2">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full h-[100vh] bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center gap-10 z-[105]"
                        >
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="text-white text-4xl font-black italic hover:text-yellow-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <Link href="#contact" onClick={closeMenu}>
                                <button className="relative overflow-hidden bg-yellow-400 text-black px-12 py-4 rounded-full font-black text-xl uppercase italic shadow-[0_0_40px_rgba(250,204,21,0.4)] active:scale-95 transition">
                                    Get Started →
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite] transition-transform"></span>
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