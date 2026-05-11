import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms and Conditions | Parth Seeds",
  description: "Terms and conditions for Parth Seeds website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-primary/5 py-16 pt-32">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary">Terms and Conditions</h1>
          <p className="text-gray-600 mt-4">Last updated: May 2026</p>
        </div>
      </div>
      
      <section className="section-padding flex-grow">
        <div className="container-custom max-w-4xl prose prose-slate">
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">1. Introduction</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Welcome to Parth Seeds Pvt. Ltd. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">2. Intellectual Property Rights</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Other than the content you own, under these terms, Parth Seeds and/or its licensors own all the intellectual property rights and materials contained in this website.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">3. Restrictions</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed">
            <li>Publishing any website material in any other media.</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material.</li>
            <li>Using this website in any way that is or may be damaging to this website.</li>
            <li>Using this website in any way that impacts user access to this website.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">4. Limitation of Liability</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            In no event shall Parth Seeds, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">5. Governing Law & Jurisdiction</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            These terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
