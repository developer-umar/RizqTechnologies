"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center text-sm text-zinc-400 mb-4 space-x-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>
        <p className="text-zinc-400 mb-6 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
          Read Article
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
