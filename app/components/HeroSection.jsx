"use client"
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay (Netflix Style) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* 🔥 Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          We Build Websites That <span className="text-yellow-400">Grow Your Business</span>
        </h1>

        {/* 📝 Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Rizq Technologies helps businesses create modern, fast, and high-converting websites
          that drive real results.
        </p>

        {/* 🚀 Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
            Get Started
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            Book a Call
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;

