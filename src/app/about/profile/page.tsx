import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function CompanyProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Company Profile</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Our Heritage & Evolution</p>
          </div>
        </section>

        {/* Profile Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="mb-6">About Parth Seeds Private Limited</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Parth Seeds Private Limited is a certified agricultural company headquartered in Satna, Madhya Pradesh. We specialize in high-quality hybrid seeds, crop protection products, bio-fertilizers, and agricultural inputs for farming communities across Madhya Pradesh, Chhattisgarh, and Jharkhand.
                  </p>
                  <p>
                    Our story begins in 2014, when our co-founders started direct field operations with a single purpose — to bring better seeds and honest dealing to Indian farmers. Over the next 11 years, that ground-level commitment shaped our product knowledge, our values, and our understanding of what farmers truly need.
                  </p>
                  <p>
                    On September 5, 2025, we were officially incorporated as Parth Seeds Private Limited (CIN: U46692MP2025PTC078819). On January 7, 2026, we received Startup India recognition from DPIIT (Certificate No. DIPP237743), valid through September 4, 2035, for our work in the Agriculture and Organic Agriculture sectors.
                  </p>
                  <p>
                    Our ISO 9001:2015 certification, issued by Integral Certification Ltd., covers the retail and wholesale of agricultural products — including seeds, fertilizers, pesticides, herbicides, insecticides, crop protection products, organic inputs, and related agricultural products.
                  </p>
                </div>
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

        {/* Achievements Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="section-title">
              <h2>Our Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="standard-card">
                <h4 className="text-primary mb-4 uppercase text-sm tracking-wider">Startup India Recognition</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Recognized by DPIIT, Ministry of Commerce & Industry, Government of India. Certificate No. DIPP237743. Issued: January 7, 2026. Valid through: September 4, 2035. Sector: Agriculture & Organic Agriculture.
                </p>
              </div>
              <div className="standard-card">
                <h4 className="text-primary mb-4 uppercase text-sm tracking-wider">ISO 9001:2015 Certified</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Certified by Integral Certification Ltd. covering the full scope of agricultural retail and wholesale — seeds, fertilizers, pesticides, herbicides, insecticides, crop protection, organic inputs, and related products.
                </p>
              </div>
              <div className="standard-card">
                <h4 className="text-primary mb-4 uppercase text-sm tracking-wider">11+ Years of Farmer Trust</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Since 2014, we have built lasting relationships with farmers across MP, Chhattisgarh, and Jharkhand through consistent quality and honest dealings.
                </p>
              </div>
              <div className="standard-card">
                <h4 className="text-primary mb-4 uppercase text-sm tracking-wider">Three Active States</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Currently serving farming communities across Madhya Pradesh, Chhattisgarh, and Jharkhand with a structured expansion plan for pan-India reach.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
