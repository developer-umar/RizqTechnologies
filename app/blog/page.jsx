import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "../../lib/blogData";

export const metadata = {
  title: "Insights & Articles | Rizq Technologies",
  description: "Stay ahead with the latest trends in web development, AI, and digital performance. Insights from the Rizq Technologies team.",
  openGraph: {
    title: "Insights & Articles | Rizq Technologies",
    description: "Expert insights on Web Development, AI, and Performance.",
    url: "https://rizqtechnologies.com/blog",
  },
};

export default function BlogList() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black">
      <Navbar />
      
      {/* Hero Section for Blog */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] bg-yellow-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[25vw] h-[25vw] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            LATEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">INSIGHTS</span>
          </h1>
          {/* GEO Optimization: Clear, structured summary answering "What is this page about?" */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
            Explore advanced strategies, tutorials, and visionary perspectives on high-performance web development, artificial intelligence, and digital branding. Designed for elite brands and forward-thinking creators.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
              <article className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50">
                
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-yellow-400">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-xs text-white/50 mb-4 font-mono tracking-wide">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-yellow-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-white/60 mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm font-bold text-yellow-400 uppercase tracking-widest mt-auto">
                    Read Article 
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
