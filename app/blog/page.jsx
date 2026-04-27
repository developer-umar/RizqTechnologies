import { blogData } from "../../lib/blogData";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

export const metadata = {
  title: "Blog & Insights | Rizq Technologies",
  description: "Read the latest insights on digital branding, web development, and AI from the Rizq Technologies team.",
  openGraph: {
    title: "Blog & Insights | Rizq Technologies",
    description: "Read the latest insights on digital branding, web development, and AI from the Rizq Technologies team.",
  },
};

export default function BlogListingPage() {
  // CollectionPage / ItemList schema for AEO/GEO
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogData.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://rizqtechnologies.com/blog/${post.slug}`
    }))
  };

  return (
    <>
      <SchemaMarkup schemaData={collectionSchema} />
      <Navbar />
      
      <main className="min-h-screen bg-black pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Insights</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Expert perspectives on the future of web development, elite branding, and navigating the digital frontier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
