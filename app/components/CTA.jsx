"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="cta">
      {/* Background with gradient + subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:40px_40px]" />

      {/* Floating accent elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] border border-yellow-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 8 }}
          className="absolute -bottom-60 -right-60 w-[700px] h-[700px] border border-amber-300/20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none text-white">
            Let’s Build Your <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Next Big Success
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-tight"
        >
          From concept to conversion — we create digital experiences that don’t just look good,<br className="hidden md:block" /> they deliver real growth.
        </motion.p>

        {/* Creative Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-16 py-7 bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold text-2xl rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/40 hover:shadow-yellow-500/60 transition-all duration-300"
            >
              <span className="relative z-20 flex items-center gap-4">
                Start Your Project
                <motion.span 
                  className="text-4xl"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>

              {/* Shine + Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-400"
        >
          <span>✓ Free Strategy Call</span>
          <span>✓ 30-Day Satisfaction Guarantee</span>
          <span>✓ Expert Team</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;