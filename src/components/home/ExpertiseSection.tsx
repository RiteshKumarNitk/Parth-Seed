import React from "react";
import { CheckCircle2, ShieldCheck, Sprout } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="section-title text-center">
          <h2>Our Expertise</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Delivering comprehensive agricultural solutions to maximize yield and ensure sustainable farming practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Agriculture Seeds */}
          <div className="bg-white p-8 border border-border shadow-sm group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-6">
              <Sprout className="text-primary" size={24} />
            </div>
            <h3 className="mb-4 text-xl">Agriculture Seeds</h3>
            <ul className="space-y-4">
              {[
                "High-yield Paddy & Grain Seeds",
                "Hybrid & researched crops",
                "Quality Vegetable & Fruit Crops",
                "Colorful & Exotic Flower Seeds",
                "Oil Seeds & Pulse Varieties",
                "All Agri-Seed Related Solutions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Protection & Nutrition */}
          <div className="bg-white p-8 border border-border shadow-sm group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-6">
              <ShieldCheck className="text-primary" size={24} />
            </div>
            <h3 className="mb-4 text-xl">Protection & Nutrition</h3>
            <ul className="space-y-4">
              {[
                "Modern Agri Equipments",
                "Premium Pesticides & Fungicides",
                "Effective Herbicides & PGR Products",
                "Fertilizer Granual (All Major Types)",
                "Liquid & Bio-Fertilizer Solutions",
                "Micro-Nutrients & Soil Conditioners",
                "Soil Enhancement Agri Products",
                "Agriculture Related All Works"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
