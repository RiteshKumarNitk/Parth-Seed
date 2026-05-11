import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Parth Seeds",
  description: "Privacy policy for Parth Seeds.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-primary/5 py-16 pt-32">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-gray-600 mt-4">Last updated: May 2026</p>
        </div>
      </div>
      
      <section className="section-padding flex-grow">
        <div className="container-custom max-w-4xl prose prose-slate">
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">1. Information We Collect</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We collect information you provide directly to us, such as when you fill out a contact form, request support, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">2. How We Use Your Information</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We use the information we collect to operate our website, respond to your comments and questions, provide customer service, and communicate with you about our products, services, offers, and promotions.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">3. Information Sharing</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We do not share your personal information with third parties except as described in this privacy policy, such as with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">4. Security</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">5. Contact Us</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at info@parthseed.com.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
