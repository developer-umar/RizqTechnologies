"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#pricing", label: "Pricing" },
        { href: "#contact", label: "Contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                
                {/* Logo */}
                <Link
                    href="#home"
                    aria-label="Rizq Technologies - Go to homepage"
                    className="flex items-center group"
                    onClick={closeMenu}
                >
                    <Image
                        src="/l9_new.png"
                        alt="Rizq Technologies Logo"
                        width={180}
                        height={55}
                        className="object-contain transition-all duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/90 hover:text-yellow-400 transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 hover:after:w-full after:transition-all"
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="#contact" onClick={closeMenu}>
                        <button className="bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-black px-7 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:-translate-y-0.5">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 focus:outline-none"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
                <div className="flex flex-col h-full pt-24 px-8">
                    <nav className="flex flex-col gap-8 text-3xl font-medium">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white hover:text-yellow-400 transition-all py-3 border-b border-white/10"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pb-16">
                        <Link href="#contact" onClick={closeMenu}>
                            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-5 rounded-2xl font-semibold text-xl">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
