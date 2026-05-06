import React from "react";
import { Award, SunMedium, Building2 } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="bg-primary py-16 text-white border-y-4 border-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          
          <div className="flex flex-col items-center pt-6 md:pt-0 px-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Building2 className="text-accent" size={32} />
            </div>
            <h3 className="text-white text-xl mb-3">State-of-the-Art R&D</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
              Established a major dedicated research facility at Ahirgaon center to innovate and test new varieties.
            </p>
          </div>

          <div className="flex flex-col items-center pt-10 md:pt-0 px-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <SunMedium className="text-accent" size={32} />
            </div>
            <h3 className="text-white text-xl mb-3">Solar Energy Division</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
              Leading the way in implementing solar technology in local agriculture for a greener future.
            </p>
          </div>

          <div className="flex flex-col items-center pt-10 md:pt-0 px-4">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Award className="text-accent" size={32} />
            </div>
            <h3 className="text-white text-xl mb-3">20 Years of Trust</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
              Built on two decades of unwavering dedication to the Indian farming community and its prosperity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
