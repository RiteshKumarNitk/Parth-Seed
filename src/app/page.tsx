import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeatureSection from "@/components/home/FeatureSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />
      
      <div className="pt-0">
        <Hero />
      </div>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="border border-border p-2 bg-muted">
                <Image 
                  src="/row-crops.png" 
                  alt="About Us" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Parth Seed Limited is a leading name in the Indian seed industry, dedicated to developing and providing high-quality hybrid seeds that cater to the diverse needs of farmers across the country.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With our robust R&D capabilities and a vast network of processing units, we ensure that every seed we produce meets the highest standards of genetic purity and germination.
              </p>
              <button className="btn-primary">Learn More About Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <FeatureSection />

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="section-title">
            <h2>Our Product Range</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="standard-card group">
              <div className="relative h-64 mb-6 overflow-hidden border border-border">
                <Image src="/row-crops.png" alt="Row Crops" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="mb-4">Field Crops</h3>
              <p className="text-gray-500 mb-6 text-sm">
                High-yielding varieties of Cotton, Maize, Wheat, and Mustard optimized for different soil types and climatic conditions.
              </p>
              <Link href="/products?category=Row Crops" className="text-primary font-bold text-xs flex items-center gap-2 hover:underline">
                VIEW VARIETIES <ArrowRight size={14} />
              </Link>
            </div>

            <div className="standard-card group">
              <div className="relative h-64 mb-6 overflow-hidden border border-border">
                <Image src="/vegetables.png" alt="Vegetables" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="mb-4">Vegetable Crops</h3>
              <p className="text-gray-500 mb-6 text-sm">
                A wide range of hybrid vegetable seeds including Tomato, Chilli, Okra, and Cabbage designed for high productivity.
              </p>
              <Link href="/products?category=Vegetable Crops" className="text-primary font-bold text-xs flex items-center gap-2 hover:underline">
                VIEW VARIETIES <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-12 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold mb-2">25+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold mb-2">120+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Hybrid Varieties</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold mb-2">10M+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Farmers Trust Us</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold mb-2">500+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Distribution Points</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <div className="section-title">
            <h2>Latest Updates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-border overflow-hidden">
                <div className="p-6">
                  <span className="text-[10px] font-bold text-accent mb-2 block tracking-widest">MAY 15, 2024</span>
                  <h4 className="normal-case text-primary font-bold text-base mb-4 leading-snug">New hybrid cotton variety &apos;Parth-99&apos; receives certification.</h4>
                  <button className="text-primary font-bold text-[11px] hover:underline">READ MORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
