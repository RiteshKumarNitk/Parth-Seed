"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Product } from "@/data/products";
import Image from "next/image";
import { ArrowLeft, Download, Microscope, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 md:pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-8 text-white">
          <div className="container-custom">
            <Link href="/products" className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-300 hover:text-white mb-4 uppercase tracking-widest">
              <ArrowLeft size={14} /> Back to Catalog
            </Link>
            <h1 className="text-white text-3xl mb-0">{product.name}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Image Column */}
              <div className="lg:w-1/2">
                <div className="border border-border p-2 bg-muted">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image src={product.images ? product.images[activeImageIndex] : product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  {product.images && product.images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {product.images.map((img, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-20 shrink-0 border-2 transition-all ${activeImageIndex === idx ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
                        >
                          <Image src={img} alt={`${product.name} ${idx + 1}`} fill sizes="80px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="standard-card flex items-center gap-4 py-4">
                    <ShieldCheck className="text-primary" size={24} />
                    <div>
                      <h4 className="text-[11px] mb-0">ISO CERTIFIED</h4>
                      <p className="text-[10px] text-gray-500 m-0">Quality Guaranteed</p>
                    </div>
                  </div>
                  <div className="standard-card flex items-center gap-4 py-4">
                    <Microscope className="text-primary" size={24} />
                    <div>
                      <h4 className="text-[11px] mb-0">R&D BACKED</h4>
                      <p className="text-[10px] text-gray-500 m-0">Scientifically Proven</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="lg:w-1/2">
                <div className="mb-10">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2 block">{product.subcategory}</span>
                  <h2 className="text-2xl mb-6">Product Overview</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <h3 className="text-sm mb-6 border-b pb-2">KEY FEATURES</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[13px] text-gray-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10 bg-muted/50 p-6 border border-border">
                  <h3 className="text-sm mb-4">TECHNICAL SPECIFICATIONS</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs py-2 border-b border-border/50">
                      <span className="text-gray-500 font-bold uppercase tracking-wider">Crop Category</span>
                      <span className="text-primary font-bold">{product.category}</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-border/50">
                      <span className="text-gray-500 font-bold uppercase tracking-wider">Maturity Period</span>
                      <span className="text-primary font-bold">90 - 110 Days</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-border/50">
                      <span className="text-gray-500 font-bold uppercase tracking-wider">Suitability</span>
                      <span className="text-primary font-bold">Kharif / Rabi</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">Enquire Now</button>
                  <button className="flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors">
                    <Download size={16} /> Download Leaflet
                  </button>
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
