import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Rizq Technologies — governing your use of our website and services.",
  alternates: {
    canonical: "https://rizq-technologies.vercel.app/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <div id="terms-page">
        <Navbar />
        <div className="pt-28 pb-20 min-h-screen bg-black text-white">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-yellow-400 transition-colors uppercase tracking-widest font-bold mb-12">
              <span>←</span>
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
              Terms <span className="text-yellow-400">of Service</span>
            </h1>
            <p className="text-white/50 text-sm mb-12">Last updated: May 5, 2026</p>

            <div className="space-y-10 text-white/70 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using the Rizq Technologies website (https://rizq-technologies.vercel.app), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
                <p>Rizq Technologies provides digital services including web development, brand and UI design, AI solutions, graphic designing, digital marketing, app development, and custom software. Specific service terms, deliverables, and timelines are defined in individual project agreements.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, images, and software, is the property of Rizq Technologies and is protected by intellectual property laws. Upon full payment, clients receive agreed-upon usage rights for delivered work as specified in project contracts.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">4. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Submit false or misleading information through our contact forms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                <p>Rizq Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our website or services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites and encourage you to review their privacy policies and terms of service.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">7. Modifications</h2>
                <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes constitutes acceptance of the revised terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">8. Governing Law</h2>
                <p>These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4">9. Contact</h2>
                <p>For questions about these terms, contact us at:</p>
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
