// ============================================================
// lib/blogData.js
// Static blog data store for Rizq Technologies
// All blogs are stored here as plain JS objects.
// To add a new blog: copy any entry, change the slug + content.
// To connect a CMS (Sanity, Contentful etc.) in future —
// just replace the `getAllBlogs()` and `getBlogBySlug()` functions.
// ============================================================

export const blogs = [
  {
    // Unique URL-friendly identifier — used in /blog/[slug] route
    slug: "why-your-website-needs-to-be-fast-in-2026",
    title: "Why Your Website Speed Is Your #1 Business Asset in 2026",
    excerpt:
      "A slow website is not just annoying — it's actively costing you customers. Here's what Core Web Vitals mean for your revenue and how to fix them.",
    category: "Performance",
    date: "2026-04-22",
    readTime: "6 min read",
    author: {
      name: "Rizq Team",
      role: "Engineering",
    },
    // Used for OpenGraph image in metadata — swap with real image later
    coverImage: "/blog/speed-2026.jpg",
    tags: ["Web Performance", "Core Web Vitals", "SEO", "Conversion Rate"],

    // ── Full blog content (HTML string) ──────────────────────────
    // Use <h2>, <p>, <ul>, <li>, <strong>, <em>, <blockquote> tags.
    // This is rendered via dangerouslySetInnerHTML in the blog page.
    content: `
      <p>In 2026, attention spans are shorter than ever. Google has fully baked page experience signals — <strong>Largest Contentful Paint (LCP)</strong>, <strong>Cumulative Layout Shift (CLS)</strong>, and <strong>Interaction to Next Paint (INP)</strong> — into its core ranking algorithm. If your site loads slowly, you're not just frustrating users, you're actively losing search rankings and revenue.</p>

      <h2>The Numbers Don't Lie</h2>
      <p>Studies consistently show that a <strong>1-second delay in page load time</strong> can reduce conversions by up to 7%. For an e-commerce store doing ₹10 lakh/month, that's ₹70,000 left on the table — every single month.</p>

      <blockquote>Fast websites aren't a luxury. They are the bare minimum expectation in 2026.</blockquote>

      <h2>What Are Core Web Vitals?</h2>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> How fast does your main content appear? Target: under 2.5 seconds.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> How quickly does your page respond to clicks/taps? Target: under 200ms.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> Does your layout jump around? Target: below 0.1.</li>
      </ul>

      <h2>5 Quick Wins to Boost Your Speed</h2>
      <p>Here are actionable improvements you can make today:</p>
      <ul>
        <li>Switch to <strong>Next.js</strong> with built-in image optimization and automatic code splitting.</li>
        <li>Use a global <strong>CDN</strong> (Cloudflare, Vercel Edge Network) to serve assets closer to your users.</li>
        <li>Compress and convert all images to <strong>WebP or AVIF</strong> format.</li>
        <li>Eliminate unused CSS and JavaScript — every kilobyte counts.</li>
        <li>Enable <strong>HTTP/3</strong> and Brotli compression on your server.</li>
      </ul>

      <h2>The Rizq Approach</h2>
      <p>At Rizq Technologies, every website we build targets a <strong>Lighthouse score above 95</strong> out of the box. We don't treat performance as an afterthought — it's baked into our architecture from day one. Because we know that a fast website isn't just good UX, it's good business.</p>
    `,

    // ── FAQ Section (used for AEO — Answer Engine Optimization) ──
    // These appear as an FAQ accordion on the blog page and are also
    // injected as FAQPage JSON-LD schema for Google's People Also Ask.
    faqs: [
      {
        question: "What is a good Core Web Vitals score?",
        answer:
          "Google considers LCP under 2.5s, INP under 200ms, and CLS below 0.1 as 'Good'. Aim for all three to be in the green zone for the best ranking and user experience.",
      },
      {
        question: "Does website speed affect SEO rankings?",
        answer:
          "Yes, absolutely. Since 2021, Google has officially included Core Web Vitals as ranking signals. A faster site gives you a ranking advantage over slower competitors with similar content.",
      },
      {
        question: "How long does it take to improve website speed?",
        answer:
          "Basic optimizations like image compression and caching can be done in a day. A full performance overhaul (new framework, CDN, code refactoring) typically takes 1–4 weeks depending on project size.",
      },
    ],
  },

  {
    slug: "seo-vs-aeo-whats-the-difference",
    title: "SEO vs AEO: What's the Difference and Why Both Matter in 2026",
    excerpt:
      "As AI answer engines like ChatGPT and Google's AI Overviews dominate search, traditional SEO is no longer enough. Enter AEO — Answer Engine Optimization.",
    category: "SEO & AEO",
    date: "2026-04-15",
    readTime: "8 min read",
    author: {
      name: "Rizq Team",
      role: "SEO Strategy",
    },
    coverImage: "/blog/seo-aeo.jpg",
    tags: ["SEO", "AEO", "AI Search", "Structured Data", "Google AI Overviews"],
    content: `
      <p>The way people search for information is fundamentally changing. In 2026, a significant portion of queries are answered directly by AI — ChatGPT, Google's AI Overviews, Perplexity, and Bing Copilot — without users ever clicking a website. This shift demands a new strategy: <strong>Answer Engine Optimization (AEO)</strong>.</p>

      <h2>Traditional SEO: What It Is</h2>
      <p>Search Engine Optimization (SEO) is the practice of optimizing your website to rank higher in traditional search engine results pages (SERPs). It focuses on keywords, backlinks, technical health, and content quality.</p>

      <h2>AEO: The New Frontier</h2>
      <p>Answer Engine Optimization (AEO) is about structuring your content so that AI-powered engines can easily extract and present your information as a direct answer. This means:</p>
      <ul>
        <li>Writing in clear, concise <strong>question-and-answer format</strong></li>
        <li>Using <strong>FAQPage, HowTo, and Article JSON-LD schemas</strong></li>
        <li>Building <strong>topical authority</strong> through comprehensive content clusters</li>
        <li>Earning mentions and citations from <strong>authoritative sources</strong></li>
      </ul>

      <h2>Key Differences</h2>
      <p><strong>SEO</strong> gets your page ranked on Google. <strong>AEO</strong> gets your content read aloud by AI or surfaced in featured snippets and AI Overviews. You need both.</p>

      <blockquote>The brands that will win in 2026 are those who optimize for both human searchers AND AI answer engines simultaneously.</blockquote>

      <h2>How Rizq Technologies Does Both</h2>
      <p>Every blog and service page we build includes structured data schemas, FAQ sections, semantic HTML, and internally linked content clusters. We treat AEO as a first-class citizen, not an afterthought — because that's where search is heading.</p>
    `,
    faqs: [
      {
        question: "What is Answer Engine Optimization (AEO)?",
        answer:
          "AEO is the practice of structuring and formatting content so that AI-powered answer engines like Google's AI Overviews, ChatGPT, and Perplexity can easily extract and present your information as a direct answer to user queries.",
      },
      {
        question: "Do I still need SEO if I do AEO?",
        answer:
          "Yes. SEO and AEO are complementary, not competing strategies. SEO helps you rank in traditional search results while AEO helps you appear in AI-generated answers. In 2026, you need both to maintain visibility.",
      },
      {
        question: "What schemas are most important for AEO?",
        answer:
          "FAQPage, Article, HowTo, and Organization schemas are the most impactful for AEO. They help AI engines understand the structure and purpose of your content, making it easier to extract and present as answers.",
      },
    ],
  },

  {
    slug: "how-branding-drives-business-growth",
    title: "How Premium Branding Drives 3x Business Growth — The Rizq Story",
    excerpt:
      "Your brand is not your logo. It's the feeling people get when they interact with your business. Here's how elite branding translates to real, measurable revenue.",
    category: "Branding",
    date: "2026-04-08",
    readTime: "7 min read",
    author: {
      name: "Rizq Team",
      role: "Brand Strategy",
    },
    coverImage: "/blog/branding-growth.jpg",
    tags: ["Branding", "Business Growth", "Design", "Identity"],
    content: `
      <p>Most businesses think branding is about having a nice logo and a colour palette. They're wrong. <strong>Branding is the total perception of your business</strong> in the minds of your customers — and it directly impacts how much they trust you, and whether they pay your price or your competitor's.</p>

      <h2>The Psychology of Premium Perception</h2>
      <p>When someone lands on a polished, premium-looking website versus a generic template site, their brain makes a judgment in <strong>0.05 seconds</strong>. That snap judgment determines whether they stay or bounce, and whether they see you as a ₹5,000/month vendor or a ₹50,000/month partner.</p>

      <h2>Elements of a Brand That Converts</h2>
      <ul>
        <li><strong>Visual Identity:</strong> Logo, colour palette, typography — all communicating your positioning at a glance.</li>
        <li><strong>Voice & Tone:</strong> How you write your copy — authoritative, friendly, or technical — shapes how customers perceive your expertise.</li>
        <li><strong>Website Experience:</strong> Speed, design quality, and UX directly signal how seriously you take your business.</li>
        <li><strong>Consistency:</strong> A brand that looks the same across Instagram, email, and your website builds trust compounding.</li>
      </ul>

      <blockquote>You don't get a second chance to make a first impression. In a world of infinite options, perception IS the product.</blockquote>

      <h2>What We Do at Rizq</h2>
      <p>We've worked with brands across e-commerce, SaaS, and professional services — and every single time, a comprehensive brand overhaul has led to <strong>measurably higher close rates and average deal sizes</strong>. Not because the product changed, but because the packaging did.</p>
    `,
    faqs: [
      {
        question: "How much does professional branding cost in India?",
        answer:
          "Professional branding packages in India typically range from ₹25,000 to ₹3,00,000+ depending on the scope — logo design, brand guidelines, website, and collateral. At Rizq Technologies, we offer comprehensive brand identity packages tailored to your business size and goals.",
      },
      {
        question: "How long does a branding project take?",
        answer:
          "A focused brand identity project (logo, colours, typography, guidelines) typically takes 2–4 weeks. A full brand + website overhaul takes 6–12 weeks. We move fast without cutting corners.",
      },
      {
        question: "Can good branding help a small business compete with larger companies?",
        answer:
          "Absolutely. Premium branding levels the playing field. A small business with world-class design and a compelling brand story can outperform larger, slower-moving competitors who rely on their size alone.",
      },
    ],
  },

  {
    slug: "nextjs-vs-wordpress-which-is-better-for-business",
    title: "Next.js vs WordPress: Which Is Actually Better for Your Business in 2026?",
    excerpt:
      "WordPress powers 43% of the web — but is it right for YOUR business? We break down when to use WordPress and when to go modern with Next.js.",
    category: "Web Development",
    date: "2026-03-28",
    readTime: "9 min read",
    author: {
      name: "Rizq Team",
      role: "Engineering",
    },
    coverImage: "/blog/nextjs-vs-wordpress.jpg",
    tags: ["Next.js", "WordPress", "Web Development", "CMS", "React"],
    content: `
      <p>The question we get most often from businesses evaluating their web presence: <em>"Should we build on WordPress or go with something modern like Next.js?"</em> The honest answer is — <strong>it depends on your goals</strong>. Let's break it down.</p>

      <h2>WordPress: The Familiar Giant</h2>
      <p>WordPress is phenomenal for content-heavy websites where non-technical staff need to manage content daily. Its ecosystem of plugins (Yoast, WooCommerce, Elementor) means you can add features without code. But this power comes with trade-offs:</p>
      <ul>
        <li>Performance: Heavy plugin loads slow sites down significantly</li>
        <li>Security: WordPress sites are the #1 target for hackers due to their ubiquity</li>
        <li>Scaling: High traffic spikes require expensive hosting infrastructure</li>
        <li>Customization limits: Complex UI/UX often fights against WordPress's architecture</li>
      </ul>

      <h2>Next.js: The Modern Powerhouse</h2>
      <p>Next.js (React-based) gives developers complete control over every pixel and every byte. It enables:</p>
      <ul>
        <li><strong>Blazing performance</strong> with static generation, server-side rendering, and edge computing</li>
        <li><strong>Superior SEO</strong> via server-rendered HTML that search engines love</li>
        <li><strong>Unlimited UI freedom</strong> — no template constraints</li>
        <li><strong>Built for scale</strong> — deploys to Vercel's global edge network with zero ops overhead</li>
      </ul>

      <h2>Our Recommendation</h2>
      <p>Use <strong>WordPress</strong> if: you have a blog-heavy site with frequent, non-technical content updates and a modest budget. Use <strong>Next.js</strong> if: performance, design quality, SEO supremacy, and scalability are priorities — which they should be for any serious business in 2026.</p>

      <blockquote>At Rizq Technologies, we build exclusively in Next.js because we refuse to compromise on performance, design quality, or long-term maintainability.</blockquote>
    `,
    faqs: [
      {
        question: "Is Next.js better than WordPress for SEO?",
        answer:
          "In most cases, yes. Next.js with server-side rendering produces clean, indexable HTML out of the box, gives you complete control over metadata, and delivers superior Core Web Vitals scores — all critical SEO factors. WordPress can achieve good SEO with the right plugins but requires more tuning.",
      },
      {
        question: "Can I migrate from WordPress to Next.js?",
        answer:
          "Yes. WordPress can be used as a headless CMS (content stored in WordPress, but the frontend built in Next.js) via the WordPress REST API or GraphQL with WPGraphQL. This gives you WordPress's content management with Next.js's performance and design freedom.",
      },
      {
        question: "Is Next.js more expensive to build than WordPress?",
        answer:
          "The initial development cost for a custom Next.js site is typically higher than a WordPress theme-based site. However, Next.js sites have lower ongoing maintenance costs, better performance (lower bounce rates, more conversions), and scale more cheaply — making the total cost of ownership comparable or lower.",
      },
    ],
  },

  {
    slug: "ai-tools-for-small-business-india-2026",
    title: "10 AI Tools Every Indian Small Business Should Be Using in 2026",
    excerpt:
      "From automating customer support to generating content at scale, AI tools are leveling the playing field for small businesses. Here are the 10 most impactful ones.",
    category: "AI & Automation",
    date: "2026-03-15",
    readTime: "10 min read",
    author: {
      name: "Rizq Team",
      role: "AI Solutions",
    },
    coverImage: "/blog/ai-tools-india.jpg",
    tags: ["AI Tools", "Small Business", "Automation", "India", "Productivity"],
    content: `
      <p>Just two years ago, advanced AI tools were the exclusive domain of large enterprises with dedicated tech teams. In 2026, the landscape has completely changed. <strong>These tools are affordable, easy to use, and genuinely transformative</strong> for small businesses across India.</p>

      <h2>1. ChatGPT / Claude — Your AI Business Partner</h2>
      <p>Use it to draft emails, write product descriptions, create content calendars, and answer complex business questions. The ₹1,700/month Pro tier is one of the best investments a business can make.</p>

      <h2>2. Cursor / GitHub Copilot — For Tech Teams</h2>
      <p>If you have developers, AI coding assistants reduce development time by 30–50%. Tasks that took a week can now be done in two days.</p>

      <h2>3. Runway / Kling AI — Video Creation</h2>
      <p>Generate product demo videos, social media content, and explainer videos without a video team. Particularly powerful for e-commerce brands.</p>

      <h2>4. Perplexity — AI-Powered Research</h2>
      <p>Perplexity replaces hours of research with minutes. Use it for competitor analysis, market research, and staying on top of industry trends.</p>

      <h2>5. Intercom / Tidio — AI Customer Support</h2>
      <p>Set up AI-powered chatbots that handle 60–70% of customer queries automatically, 24/7. Customers get instant answers; your team handles only complex issues.</p>

      <h2>6. Canva AI — Design at Scale</h2>
      <p>Generate social media graphics, presentations, and marketing materials in minutes with AI-powered design tools. No designer required.</p>

      <h2>7. Jasper / Copy.ai — Marketing Copy at Scale</h2>
      <p>Generate high-converting ad copy, email campaigns, and landing page content. Feed it your brand voice and it writes consistently on-brand.</p>

      <h2>8. Otter.ai — Meeting Intelligence</h2>
      <p>Records, transcribes, and summarizes every meeting automatically. Never lose a client requirement or action item again.</p>

      <h2>9. HubSpot AI — CRM + Marketing Automation</h2>
      <p>HubSpot's free tier with AI features can automate your entire sales pipeline — from lead capture to follow-up emails to deal tracking.</p>

      <h2>10. Rizq Technologies — Custom AI Solutions</h2>
      <p>For businesses that need custom AI integrations — whether it's an intelligent chatbot trained on your products, automated reporting, or AI-powered SEO — we build bespoke solutions that fit your exact needs.</p>

      <blockquote>The businesses that adopt AI tools today will have an insurmountable competitive advantage in 3–5 years. The window to act is now.</blockquote>
    `,
    faqs: [
      {
        question: "Are AI tools affordable for small businesses in India?",
        answer:
          "Yes. Most leading AI tools offer free tiers or plans starting from ₹500–₹2,000/month — a fraction of the cost of hiring a full-time employee to do the same tasks. The ROI is typically very high, especially for content creation, customer support, and research tasks.",
      },
      {
        question: "Which AI tool is best for a small business just starting with AI?",
        answer:
          "Start with ChatGPT or Claude. They have the broadest utility — you can use them for writing, research, planning, coding, and customer communication. Once you're comfortable, layer in more specialized tools for specific workflows.",
      },
      {
        question: "Can AI replace my employees?",
        answer:
          "AI augments your team rather than replacing it for most tasks. It handles repetitive, time-consuming work so your people can focus on high-value activities like client relationships, strategy, and creative problem-solving. Businesses that use AI + people outperform those using either alone.",
      },
    ],
  },

  {
    slug: "ecommerce-website-design-tips-2026",
    title: "7 E-Commerce Website Design Principles That Actually Increase Sales in 2026",
    excerpt:
      "Great e-commerce design is not about looking pretty — it's about reducing friction at every step of the buyer journey. Here are 7 principles that move the needle.",
    category: "E-Commerce",
    date: "2026-03-05",
    readTime: "7 min read",
    author: {
      name: "Rizq Team",
      role: "UI/UX & Design",
    },
    coverImage: "/blog/ecommerce-design.jpg",
    tags: ["E-Commerce", "UI/UX", "Conversion Rate", "Design", "Shopify"],
    content: `
      <p>Most e-commerce store owners focus on driving traffic. But here's the truth: <strong>a 1% improvement in your conversion rate is worth far more than a 20% increase in traffic</strong>. Good design is the highest-leverage investment you can make in your e-commerce business.</p>

      <h2>1. Speed First, Always</h2>
      <p>Every additional second of load time costs you approximately 7% of conversions. Use optimised images, a fast hosting provider, and a performance-first framework like Next.js or a well-optimised Shopify theme.</p>

      <h2>2. Mobile-Native, Not Mobile-Friendly</h2>
      <p>In India, 85%+ of e-commerce traffic comes from mobile. Design your mobile experience first — then adapt it for desktop. Not the other way around.</p>

      <h2>3. Trust Signals Everywhere</h2>
      <p>Show SSL certificates, reviews, return policies, and payment logos prominently. Trust anxiety is the #1 killer of first-time purchases in Indian e-commerce.</p>

      <h2>4. Friction-Free Checkout</h2>
      <p>Every additional step in your checkout process reduces conversions by ~10%. Offer guest checkout, pre-fill fields, and integrate UPI, Cards, and COD prominently.</p>

      <h2>5. Photography That Sells</h2>
      <p>Product photography is your digital salesperson. Invest in multiple angles, lifestyle shots, and zoom capability. Poor photos kill sales, regardless of how good your product is.</p>

      <h2>6. Persistent, Clear CTAs</h2>
      <p>Your "Add to Cart" button should always be visible, high-contrast, and action-oriented. Never make users scroll to find it.</p>

      <h2>7. Social Proof at Scale</h2>
      <p>Real reviews, user-generated content, and "X people bought this today" social proof notifications dramatically increase purchase confidence — especially for new visitors.</p>

      <blockquote>E-commerce design is not art. It is applied psychology with a measurable output: your conversion rate.</blockquote>
    `,
    faqs: [
      {
        question: "What is a good conversion rate for an Indian e-commerce website?",
        answer:
          "The average e-commerce conversion rate in India is 1–3%. A well-optimised store with strong design, fast load times, and clear CTAs can achieve 3–6%. Top-performing stores in niche categories can hit 8–12%.",
      },
      {
        question: "Should I build my e-commerce store on Shopify or a custom platform?",
        answer:
          "Shopify is excellent for most small-to-medium e-commerce businesses — it handles payments, inventory, and hosting reliably. For businesses with complex requirements (B2B pricing, custom workflows, proprietary tech), a custom Next.js + backend solution gives more flexibility and long-term control.",
      },
      {
        question: "How important is mobile design for Indian e-commerce?",
        answer:
          "Critically important. Over 85% of online shopping in India happens on mobile devices. A poor mobile experience — slow load times, small touch targets, complex checkout — will cost you the majority of your potential customers.",
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
// Helper Functions
// These abstract data access so the pages don't directly touch
// the array — making future CMS migration easier.
// ──────────────────────────────────────────────────────────────

/**
 * Returns all blog posts sorted by date (newest first).
 * Used in the blog listing page to render all cards.
 */
export function getAllBlogs() {
  return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Finds a single blog by its slug.
 * Returns undefined if not found — the dynamic page handles 404.
 * @param {string} slug - The URL-friendly blog identifier
 */
export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}

/**
 * Returns all slugs — used by generateStaticParams() in Next.js
 * to pre-render all individual blog pages at build time.
 */
export function getAllSlugs() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

/**
 * Returns related blogs — excludes the current blog and picks
 * up to 3 others. Simple "same category first" logic.
 * @param {string} currentSlug - Slug of the blog currently being viewed
 * @param {string} currentCategory - Category of the current blog
 */
export function getRelatedBlogs(currentSlug, currentCategory) {
  const sameCategory = blogs.filter(
    (b) => b.slug !== currentSlug && b.category === currentCategory
  );
  const others = blogs.filter(
    (b) => b.slug !== currentSlug && b.category !== currentCategory
  );
  // Prefer same-category; fill up to 3 with others
  return [...sameCategory, ...others].slice(0, 3);
}
