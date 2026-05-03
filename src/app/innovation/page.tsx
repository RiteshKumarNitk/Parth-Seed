import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { Microscope, FlaskConical, Globe, BookOpen } from "lucide-react";

export default function InnovationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 md:pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Research & Development</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Innovation at the Heart of Agriculture</p>
          </div>
        </section>

        {/* R&D Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="border border-border p-2 bg-muted">
                  <Image 
                    src="/hero.png" 
                    alt="R&D Lab" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto opacity-80"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="mb-6">Our Scientific Approach</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Research &amp; Development is the cornerstone of Parth Seed&apos;s success. We invest heavily in advanced plant breeding, biotechnology, and seed technology to create products that deliver consistent performance under challenging environmental conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start gap-4">
                    <Microscope className="text-primary shrink-0" size={24} />
                    <div>
                      <h4 className="text-sm mb-1">PLANT BREEDING</h4>
                      <p className="text-xs text-gray-500">Developing high-yield hybrid varieties.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FlaskConical className="text-primary shrink-0" size={24} />
                    <div>
                      <h4 className="text-sm mb-1">BIOTECHNOLOGY</h4>
                      <p className="text-xs text-gray-500">Molecular markers for precision selection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="section-title">
              <h2>Infrastructure & Facilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="standard-card">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Globe size={24} />
                  <h4 className="m-0 text-sm">FIELD TESTING CENTERS</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Extensive trial locations across various agro-climatic zones to ensure seed adaptability.
                </p>
              </div>
              <div className="standard-card">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <FlaskConical size={24} />
                  <h4 className="m-0 text-sm">SEED TESTING LABS</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  NABL accredited laboratories for genetic purity, germination, and moisture analysis.
                </p>
              </div>
              <div className="standard-card">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <BookOpen size={24} />
                  <h4 className="m-0 text-sm">TRAINING CENTERS</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Providing continuous education to our scientists and technical staff on global best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media & News Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="section-title">
              <h2>Media & Publications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-border p-8">
                <h3 className="text-sm mb-4 border-b pb-4">SCIENTIFIC PUBLICATIONS</h3>
                <ul className="space-y-4">
                  {[1, 2].map(i => (
                    <li key={i} className="flex justify-between items-center group cursor-pointer">
                      <span className="text-[13px] text-gray-600 font-bold hover:text-primary transition-colors">Study on Heat-Resilient Cotton Hybrids (2024)</span>
                      <span className="text-[10px] text-accent font-bold uppercase">PDF Download</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-border p-8">
                <h3 className="text-sm mb-4 border-b pb-4">PRESS RELEASES</h3>
                <ul className="space-y-4">
                  {[1, 2].map(i => (
                    <li key={i} className="flex justify-between items-center group cursor-pointer">
                      <span className="text-[13px] text-gray-600 font-bold hover:text-primary transition-colors">Parth Seed Expands Research Facility in Gujarat</span>
                      <span className="text-[10px] text-gray-400 font-bold">MAY 10, 2024</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
