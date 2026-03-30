"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* 🔥 Logo */}
                <Link href="#home" aria-label="Go to homepage" className="flex items-center">
                    <Image
                        src="/l9_new.png"
                        alt="Rizq Technologies Logo"
                        width={170}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* 📌 Navigation Links (SCROLL LINKS) */}
                <nav className="hidden md:flex gap-8 text-white text-sm">
                    <Link href="#home" className="hover:text-yellow-400 transition">Home</Link>
                    <Link href="#services" className="hover:text-yellow-400 transition">Services</Link>
                    <Link href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
                    <Link href="#pricing" className="hover:text-yellow-400 transition">Pricing</Link>
                    <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
                </nav>

                {/* 🚀 CTA */}
                <Link href="#contact">
                    <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                        Get Started
                    </button>
                </Link>

            </div>
        </header>
    );
};

export default Navbar;