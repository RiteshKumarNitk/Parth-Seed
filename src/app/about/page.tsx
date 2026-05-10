import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 md:pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">About Us</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Our Heritage, Vision & Commitment</p>
          </div>
        </section>

        {/* Corporate Profile */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="mb-6">Corporate Profile</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Parth Seeds Private Limited is built on over a decade of real agricultural experience. Founded by Rohit Kumar Tiwari and Santosh Jaiswal, our journey began in 2014 through direct field operations across central India — working closely with farmers, understanding their needs, and delivering seeds that actually perform.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  By the time we officially incorporated on September 5, 2025, we had already spent 11 years building trust on the ground. On January 7, 2026, the Government of India formally recognized us as a Startup India entity under DPIIT (Certificate No. DIPP237743) — validating what our farmers already knew.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Today, we are an ISO 9001:2015 certified company operating across Madhya Pradesh, Chhattisgarh, and Jharkhand, offering a complete portfolio of hybrid seeds, bio-fertilizers, and crop protection products.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="border border-border p-2 bg-muted">
                  <Image 
                    src="/row-crops.png" 
                    alt="Corporate Profile" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="standard-card">
                <h3 className="mb-6 text-primary">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  &quot;To be a nationally trusted agricultural company — delivering certified quality seeds, innovative bio-solutions, and honest partnerships that help every farmer grow.&quot;
                </p>
              </div>
              <div className="standard-card">
                <h3 className="mb-6 text-primary">Our Mission</h3>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>To supply high-yielding, quality-certified hybrid seeds suited to the agro-climatic conditions of central India and beyond.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>To offer farmers a complete input solution — from field crops and vegetable seeds to bio-fertilizers and crop protection products — under one reliable brand.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>To expand our reach from MP, Chhattisgarh, and Jharkhand to all Indian states, and ultimately to global markets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="section-title">
              <h2>Our Leadership</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="standard-card text-center flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-400 font-bold text-2xl uppercase">
                  RT
                </div>
                <h4 className="mb-2">Rohit Kumar Tiwari</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Co-Founder & Director</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  With 11+ years of hands-on agricultural experience since 2014, Rohit brings deep field-level expertise and a farmer-first approach to every product and decision at Parth Seeds.
                </p>
                <div className="text-xs text-gray-500 font-medium">
                  <p>Contact: +91 97525 89664</p>
                  <p>rohit135@gmail.com</p>
                </div>
              </div>

              <div className="standard-card text-center flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-400 font-bold text-2xl uppercase">
                  SJ
                </div>
                <h4 className="mb-2">Santosh Jaiswal</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Co-Founder & Director</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  An equal driving force behind Parth Seeds, Santosh brings operational strength and strong farmer relationships that have helped build a trusted network across central India.
                </p>
                <div className="text-xs text-gray-500 font-medium">
                  <p>Contact: +91 98933 32398</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
