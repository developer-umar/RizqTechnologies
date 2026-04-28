import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogPosts } from "../../../lib/blogData";

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate JSON-LD for AEO and Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.image],
    datePublished: post.date,
    author: [{
      "@type": "Organization",
      "name": post.author,
    }],
    description: post.seo.description,
  };

  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Inject JSON-LD directly into the <head> using script tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        
        {/* Breadcrumb / Back Link */}
        <Link href="/blog" className="inline-flex items-center text-sm font-bold text-yellow-400 uppercase tracking-widest mb-8 hover:-translate-x-2 transition-transform">
          ← Back to Articles
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-mono tracking-wide text-white/50 uppercase mb-6">
            <span className="bg-white/10 px-3 py-1 rounded-full text-yellow-400 border border-white/10">{post.category}</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* GEO Optimization: Key Takeaways Section */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <section className="bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400" />
            <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center gap-3">
              <span className="text-xl">⚡</span> Key Takeaways
            </h2>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex gap-4 text-white/80 leading-relaxed">
                  <span className="text-yellow-400 font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Article Content */}
        {/* We use prose classes (from tailwind typography if available, otherwise custom css) 
            or inline styling for rich content. Since we have a sleek theme, we'll style the raw HTML */}
        <article 
          className="max-w-none text-white/80 leading-relaxed
          [&>h2]:text-3xl [&>h2]:font-black [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:text-yellow-400 [&>h2]:tracking-tight
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-white
          [&>p]:mb-8 [&>p]:text-lg
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2
          [&>a]:text-yellow-400 [&>a]:underline [&>a:hover]:text-yellow-300 transition-colors
          [&>strong]:text-white [&>strong]:font-bold
          [&>code]:bg-white/10 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-yellow-200 [&>code]:font-mono [&>code]:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* AEO Optimization: FAQs Section directly in the content */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-20 border-t border-white/10 pt-16">
            <h2 className="text-3xl font-black tracking-tighter mb-10 text-center">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Questions</span>
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/30 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
