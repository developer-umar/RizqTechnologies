"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Pricing हटाया + Blog add किया
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
                <Link
                    href="#home"
                    className="relative z-[110] flex items-center"
                    onClick={closeMenu}
                >
                    <Image
                        src="/hori-r.png"
                        alt="Rizq Logo"
                        width={437}
                        height={273}
                        className="object-contain w-[168px] md:w-[210px] transition-transform hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop */}
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

                    {/* 🔥 Premium Button */}
                    <Link href="#contact">
                        <button className="relative overflow-hidden group bg-yellow-400 text-black px-7 py-3 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 active:scale-95">
                            
                            {/* Shine effect */}
                            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>

                            {/* Text */}
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started →
                            </span>

                            {/* Hover glow */}
                            <span className="absolute inset-0 rounded-full shadow-[0_0_25px_rgba(250,204,21,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative z-[110] text-white p-2"
                >
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

                            {/* Mobile Button same upgrade */}
                            <Link href="#contact" onClick={closeMenu}>
                                <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-black text-xl uppercase italic shadow-[0_0_30px_rgba(250,204,21,0.6)] active:scale-95 transition">
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