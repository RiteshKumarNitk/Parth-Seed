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
                <h2 className="mb-6">About Parth Seed Limited</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Established with a vision to revolutionize the agricultural landscape, Parth Seed Limited has emerged as a premier seed company in India. For over three decades, we have been at the forefront of developing high-performing hybrid seeds that empower farmers and ensure food security.
                  </p>
                  <p>
                    Our journey began with a small group of passionate agricultural scientists who believed that technology could solve the challenges faced by Indian farmers. Today, we are a multi-state organization with research centers and processing units across the country.
                  </p>
                  <p>
                    We pride ourselves on our scientific integrity, quality standards, and deep-rooted relationship with the farming community. Every seed that carries the Parth name is a promise of growth, resilience, and prosperity.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="standard-card">
                <h4 className="text-primary mb-4">NATIONAL RECOGNITION</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Recipient of numerous national awards for innovation in seed technology and contributions to the Indian agricultural sector.
                </p>
              </div>
              <div className="standard-card">
                <h4 className="text-primary mb-4">GLOBAL STANDARDS</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Adherence to international quality standards with ISO 9001:2015 certification for all our processing and testing facilities.
                </p>
              </div>
              <div className="standard-card">
                <h4 className="text-primary mb-4">TRUSTED PARTNER</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A trusted partner to millions of farmers across India, providing them with reliable solutions for every season.
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
