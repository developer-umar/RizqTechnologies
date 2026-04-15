"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400 font-mono text-sm tracking-[0.5em] uppercase mb-4 block">
            Error 404
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none mb-8">
            LOST IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-600">SPACE.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto mb-12 font-medium">
            The masterpiece you are looking for has been moved or doesn't exist yet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-400/20">
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements for Premium Feel */}
      <motion.div 
        animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-24 h-24 border border-white/10 rounded-2xl rotate-12 backdrop-blur-sm hidden md:block"
      />
      <motion.div 
        animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[15%] w-16 h-16 border border-yellow-400/20 rounded-full hidden md:block"
      />
    </div>
  );
}
