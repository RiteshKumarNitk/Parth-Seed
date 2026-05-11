import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Frequently Asked Questions | Parth Seeds",
  description: "Frequently asked questions about Parth Seeds.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of seeds does Parth Seeds offer?",
      answer: "We offer a wide range of high-quality seeds including Field Crops (Hybrid Cotton, Maize, Wheat, Mustard) and Vegetable Crops (Tomato, Chilli, Okra, Cabbage)."
    },
    {
      question: "Where is Parth Seeds located?",
      answer: "Our registered office is located at Seed Valley, Gujarat, India - 380001."
    },
    {
      question: "How can I become a distributor?",
      answer: "If you're interested in becoming a distributor, please reach out to our team through the Contact Us page or email us directly at info@parthseed.com."
    },
    {
      question: "Do you provide guidance on crop management?",
      answer: "Yes, we are committed to farmer success. Our agricultural experts provide ongoing guidance on crop management, pest control, and optimal harvesting practices."
    },
    {
      question: "Are your seeds resistant to common pests?",
      answer: "Our R&D team works extensively to develop varieties with high resistance to common pests and diseases, ensuring better yields and lower input costs for farmers."
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="bg-primary/5 py-16 pt-32">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-4">Find answers to common questions about our products and services.</p>
        </div>
      </div>
      
      <section className="section-padding flex-grow">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
