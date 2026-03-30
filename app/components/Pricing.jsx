"use client"
import React from "react";

const Pricing = () => {
  return (
    <section className="bg-black text-white py-20 px-6" id="pricing">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Pricing <span className="text-yellow-400">Plans</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* Basic */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-400">Basic</h3>
            <p className="mt-4 text-2xl font-semibold">₹10,000+</p>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>5 Pages Website</li>
              <li>Responsive Design</li>
              <li>Basic SEO</li>
            </ul>
          </div>

          {/* Standard */}
          <div className="bg-yellow-400 text-black p-6 rounded-xl scale-105">
            <h3 className="text-xl font-bold">Standard</h3>
            <p className="mt-4 text-2xl font-semibold">₹25,000+</p>
            <ul className="mt-4 space-y-2">
              <li>10 Pages</li>
              <li>SEO Optimization</li>
              <li>Speed Optimization</li>
            </ul>
          </div>

          {/* Premium */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-400">Premium</h3>
            <p className="mt-4 text-2xl font-semibold">₹60,000+</p>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Custom Web App</li>
              <li>Advanced SEO</li>
              <li>Full Support</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;