"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/rizqtechnologies",
      label: "@rizqtech",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/rizqtechnologies",
      label: "Connect",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    {
      name: "X",
      href: "https://twitter.com/rizqtech",
      label: "Follow",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      )
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@rizqtechnologies",
      label: "Subscribe",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 68.4 68.4 0 0 1 19 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 68.4 68.4 0 0 1-19 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
      )
    },
  ];

  return (
    <footer className="bg-[#050505] pt-24 pb-10 px-6 relative overflow-hidden text-white">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <Image src="/l9_new.png" alt="Logo" width={140} height={45} className="brightness-125" />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-8">
              We craft premium digital experiences that combine design, performance, and innovation to elevate your brand.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-yellow-400/10 transition-colors text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="text-sm">hello@rizqtechnologies.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-8 flex items-center gap-2 uppercase tracking-tighter text-sm">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              Links
            </h3>
            <ul className="space-y-4 text-gray-400">
              {["Home", "Services", "Portfolio", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-all hover:pl-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-5">
            <h3 className="text-white font-semibold mb-8 flex items-center gap-2 uppercase tracking-tighter text-sm">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              Socials
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/30 transition-all group"
                >
                  <div className="text-gray-400 group-hover:text-yellow-500">
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-none mb-1">{social.name}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{social.label}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-gray-500">
          <p>© {new Date().getFullYear()} Rizq Technologies</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors uppercase tracking-widest">Terms</Link>
          </div>
          <div className="flex items-center gap-2 opacity-80 bg-white/5 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>Systems Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;