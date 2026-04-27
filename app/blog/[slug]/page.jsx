import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "../../../lib/blogData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SchemaMarkup from "../../components/SchemaMarkup";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seoMeta.title,
    description: post.seoMeta.description,
    keywords: post.seoMeta.keywords,
    openGraph: {
      title: post.seoMeta.title,
      description: post.seoMeta.description,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoMeta.title,
      description: post.seoMeta.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // AEO & GEO: Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.seoMeta.description
  };

  // AEO & GEO: FAQ Schema
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <SchemaMarkup schemaData={articleSchema} />
      {faqSchema && <SchemaMarkup schemaData={faqSchema} />}
      <Navbar />
      
      <main className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          
          <Link href="/blog" className="inline-flex items-center text-zinc-400 hover:text-blue-400 transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-zinc-400 space-x-4 mb-8">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* GEO Optimization: Key Takeaways Section for AI summarization */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-12 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start text-zinc-300">
                    <span className="text-blue-400 mr-3 text-lg">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* AEO Optimization: FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-zinc-800">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </article>
      </main>

      <Footer />
    </>
  );
}
