

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", 
      },

    ],
  },
  async redirects() {
    return [
      // ── WWW Canonicalization ─────────────────────────────────────────────
      // Permanently redirect www → non-www so Google sees only one canonical URL.
      // 308 = permanent redirect that preserves the HTTP method (better than 301).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rizq-technologies.vercel.app" }],
        destination: "https://rizq-technologies.vercel.app/:path*",
        permanent: true, // Issues HTTP 308
      },
    ];
  },


  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;