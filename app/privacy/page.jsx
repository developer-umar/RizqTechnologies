import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Rizq Technologies — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://rizq-technologies.vercel.app/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <div id="privacy-page">
        <Navbar />
        <div className="pt-28 pb-20 min-h-screen bg-black text-white">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-yellow-400 transition-colors uppercase tracking-widest font-bold mb-12">
              <span>←</span>
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-white/50 text-sm mb-12">Last updated: May 5, 2026</p>

            <div className="space-y-10 text-white/70 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Name and email address (via contact form)</li>
                  <li>Project details and business information you share</li>
                  <li>Usage data and analytics from website visits</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Respond to inquiries and project requests</li>
                  <li>Improve our services and website experience</li>
                  <li>Send relevant updates and communications (with your consent)</li>
                  <li>Analyze website performance and user behavior</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website and business, subject to confidentiality agreements.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption and follows industry-standard security practices.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Cookies and Analytics</h2>
                <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. We use analytics tools to understand website traffic and improve our services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Object to processing of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>For any privacy-related questions or requests, contact us at:</p>
                <p className="mt-2 text-yellow-400">contact.rizqtech@gmail.com</p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
