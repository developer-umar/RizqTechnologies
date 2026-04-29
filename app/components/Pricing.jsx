"use client";

import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    desc: "A clean, professional digital presence for local businesses.",
    features: [
      "Up to 5 Custom Pages / Landing Page",
      "Mobile-Responsive Layout",
      "Standard Contact & Lead Form",
      "Basic Speed Optimization",
      "15 Days Post-Launch Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹35,000",
    desc: "A dynamic website built to drive and convert local traffic.",
    features: [
      "Up to 10 Dynamic Pages",
      "Basic CMS (Manage simple content)",
      "Standard On-Page SEO Setup",
      "WhatsApp & Social Integrations",
      "20 Days Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹75,000+",
    desc: "High-performance architecture with premium digital experiences.",
    features: [
      "Advanced CMS Architecture",
      "Premium GSAP & Custom Animations",
      "Core Web Vitals & Advanced SEO",
      "Custom API / 3rd Party Integrations",
      "1 Month Dedicated Support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative bg-black py-28 px-6 overflow-hidden" id="pricing">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-yellow-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Pricing</span>.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium">
            Engineered solutions tailored to your scale. No hidden fees, just high-performance deliverables.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative group bg-zinc-950/80 backdrop-blur-sm border rounded-[32px] p-8 md:p-10 transition-all duration-300 flex flex-col h-full
                ${plan.popular 
                  ? "border-yellow-400/80 shadow-[0_0_40px_rgba(250,204,21,0.15)] md:scale-105 z-10" 
                  : "border-white/10 hover:border-white/30 z-0"
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-black text-[11px] font-black px-6 py-2 rounded-full tracking-[2px] uppercase shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{plan.name}</h3>

              {/* Price */}
              <div className="mt-6 mb-4 flex items-end gap-1">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                {plan.name !== "Enterprise" && <span className="text-zinc-500 text-sm font-medium mb-2">/project</span>}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed h-10">{plan.desc}</p>

              {/* Divider */}
              <div className={`w-full h-px my-8 ${plan.popular ? 'bg-yellow-400/20' : 'bg-white/10'}`} />

              {/* Features */}
              <ul className="space-y-5 text-left flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base font-medium">
                    <span className="text-yellow-400 mt-0.5 text-lg">
                      {/* Premium Checkmark SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-auto w-full py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all duration-300
                  ${plan.popular 
                    ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:bg-yellow-300" 
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30"
                  }`}
              >
                {plan.popular ? "Start Project" : "Inquire Now"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Agency Trust Indicators */}
        <div className="text-center mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-zinc-500 text-xs md:text-sm font-medium tracking-wide">
          <span>Custom scope? Let's talk.</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span>100% Code Ownership</span>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-zinc-700" />
          <span>Secure Architecture</span>
        </div>

        {/* Dynamic Pricing Disclaimer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center max-w-3xl mx-auto border border-white/5 bg-white/[0.02] rounded-2xl py-4 px-6 backdrop-blur-sm"
        >
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed flex flex-col md:flex-row items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500/80 shrink-0 mb-1 md:mb-0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>
              <strong className="text-zinc-300 font-semibold tracking-wide">Estimated Investment:</strong> The figures above represent baseline pricing. Final costs may adapt based on exact project scope, custom features, and design complexity.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;