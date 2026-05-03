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
                  Established with a vision to revolutionize the agricultural landscape, Parth Seed Limited has emerged as a premier seed company in India. For over three decades, we have been at the forefront of developing high-performing hybrid seeds that empower farmers and ensure food security.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our core strength lies in our robust Research & Development capabilities, supported by a world-class team of scientists and state-of-the-art breeding facilities. We are committed to delivering seeds that offer superior yield potential, disease resistance, and adaptability to diverse agro-climatic conditions.
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
                  &quot;To be a global leader in agricultural biotechnology, providing innovative and sustainable seed solutions that transform the lives of farmers and ensure a hunger-free world.&quot;
                </p>
              </div>
              <div className="standard-card">
                <h3 className="mb-6 text-primary">Our Mission</h3>
                <ul className="space-y-4 text-gray-600 text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    To develop high-yielding hybrid seeds through precision breeding.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    To provide technical guidance and support to the farming community.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    To maintain the highest standards of genetic purity and quality.
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
              <h2>Our Management Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="standard-card text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400 font-bold text-2xl uppercase">
                    M{i}
                  </div>
                  <h4 className="mb-2">Executive Director</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Leadership Team</p>
                  <p className="text-[11px] text-gray-500">
                    With decades of experience in the seed industry, our leadership ensures strategic growth and scientific excellence.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
