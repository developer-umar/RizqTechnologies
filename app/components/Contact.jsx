"use client"
import React from "react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Contact <span className="text-yellow-400">Us</span>
        </h2>

        <form className="mt-10 space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
          ></textarea>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold w-full">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;