import React from "react";
import { Microscope, ShieldCheck, Sprout, Users } from "lucide-react";

const features = [
  {
    title: "RESEARCH & DEVELOPMENT",
    desc: "Our state-of-the-art R&D centers focus on developing high-yielding and disease-resistant hybrid seed varieties.",
    icon: Microscope
  },
  {
    title: "QUALITY ASSURANCE",
    desc: "Strict quality control measures are implemented at every stage of seed production to ensure maximum purity.",
    icon: ShieldCheck
  },
  {
    title: "FARMER SUPPORT",
    desc: "We provide comprehensive technical support and guidance to farmers to help them achieve better harvests.",
    icon: Sprout
  },
  {
    title: "COMMUNITY IMPACT",
    desc: "Dedicated to improving the livelihoods of rural communities through sustainable agricultural practices.",
    icon: Users
  }
];

export default function FeatureSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Core Strengths</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Providing excellence in agriculture through scientific innovation and commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="standard-card text-center group">
              <div className="w-16 h-16 bg-white border border-border flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon size={32} />
              </div>
              <h3 className="text-sm mb-4">{feature.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
