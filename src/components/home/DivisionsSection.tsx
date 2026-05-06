import React from "react";
import { Sun, Leaf, TestTube, Lightbulb, Factory, Users } from "lucide-react";

export default function DivisionsSection() {
  const specializedDivisions = [
    { title: "Major R&D Hub (Ahirgaon Center)", icon: TestTube },
    { title: "Solar Energy Agri Division", icon: Sun },
    { title: "Modern Cattle Feed Centre", icon: Factory },
    { title: "Commercial & Industrial Nursery", icon: Leaf },
    { title: "Seed Trial & Quality Testing Facility", icon: TestTube },
    { title: "Technical Farming Consultations", icon: Lightbulb },
    { title: "Direct Farmer Reach Initiatives", icon: Users },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title text-center mb-16">
          <h2>Specialized Divisions & Highlights</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
            Our multi-faceted approach to agricultural development ensures that every aspect of farming is supported by dedicated experts and cutting-edge facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Solar Division */}
          <div className="bg-muted p-8 border border-border group hover:border-primary transition-colors text-center">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Sun className="text-accent" size={32} />
            </div>
            <h3 className="mb-3 text-lg">Solar Division</h3>
            <p className="text-sm text-gray-600 mb-6 line-clamp-3">
              Integrating renewable energy into agriculture for sustainable farming and cost reduction.
            </p>
            <ul className="text-xs text-gray-500 space-y-2 text-left bg-white p-4 border border-border/50">
              <li className="flex items-center gap-2">• Solar Pumping Systems</li>
              <li className="flex items-center gap-2">• Rural Electrification</li>
              <li className="flex items-center gap-2">• Eco-Friendly Agri Solutions</li>
            </ul>
          </div>

          {/* Cattle Feed Division */}
          <div className="bg-muted p-8 border border-border group hover:border-primary transition-colors text-center">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <Factory className="text-accent" size={32} />
            </div>
            <h3 className="mb-3 text-lg">Cattle Feed Division</h3>
            <p className="text-sm text-gray-600 mb-6 line-clamp-3">
              Focusing on livestock health with premium quality feed and nutritional supplements.
            </p>
            <ul className="text-xs text-gray-500 space-y-2 text-left bg-white p-4 border border-border/50">
              <li className="flex items-center gap-2">• Balanced Nutrition Feed</li>
              <li className="flex items-center gap-2">• Quality Testing Lab</li>
              <li className="flex items-center gap-2">• Livestock Health Consultancy</li>
            </ul>
          </div>

          {/* R&D Hub */}
          <div className="bg-muted p-8 border border-border group hover:border-primary transition-colors text-center">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <TestTube className="text-accent" size={32} />
            </div>
            <h3 className="mb-3 text-lg">Ahirgaon R&D Hub</h3>
            <p className="text-sm text-gray-600 mb-6 line-clamp-3">
              Our central hub for agricultural innovation, testing, and farmer training programs.
            </p>
            <ul className="text-xs text-gray-500 space-y-2 text-left bg-white p-4 border border-border/50">
              <li className="flex items-center gap-2">• New Variety Trials</li>
              <li className="flex items-center gap-2">• Soil Testing Services</li>
              <li className="flex items-center gap-2">• Modern Nursery Unit</li>
            </ul>
          </div>
        </div>

        {/* Specialized Divisions List */}
        <div className="bg-primary text-white p-8 md:p-12 border-l-4 border-accent">
          <h3 className="text-white mb-8 text-xl">All Specialized Divisions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedDivisions.map((div, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <div.icon size={14} className="text-accent" />
                </div>
                <span className="text-sm font-bold opacity-90">{div.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
