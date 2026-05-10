import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Lightbulb, Heart } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Vision & Mission</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">The Values That Have Guided Us Since 2014</p>
          </div>
        </section>

        {/* Vision & Mission Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                    <Target size={32} />
                  </div>
                  <div>
                    <h2 className="text-primary mb-6">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed italic text-lg border-l-4 border-accent pl-6">
                      &quot;To be a nationally trusted and globally recognized agricultural company — delivering quality seeds, innovative bio-solutions, and unwavering farmer support that transforms lives from the ground up.&quot;
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start mt-12">
                  <div className="w-16 h-16 bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                    <Lightbulb size={32} />
                  </div>
                  <div>
                    <h2 className="text-primary mb-6">Our Mission</h2>
                    <ul className="space-y-6 text-gray-600">
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <div>
                          <h4 className="text-sm mb-1">QUALITY FIRST</h4>
                          <p className="text-xs">To supply ISO 9001:2015 certified, high-yielding hybrid seeds and bio-products that consistently meet the needs of farmers across central India and beyond.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <div>
                          <h4 className="text-sm mb-1">FARMER PROSPERITY</h4>
                          <p className="text-xs">To stand alongside farmers with reliable products, honest dealings, and practical on-ground support — ensuring a better harvest every single season.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <div>
                          <h4 className="text-sm mb-1">COMPLETE AGRICULTURAL SOLUTION</h4>
                          <p className="text-xs">To offer farmers everything they need under one roof — from hybrid seeds and bio-fertilizers to crop protection and soil nutrition products.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <div>
                          <h4 className="text-sm mb-1">NATIONAL & GLOBAL REACH</h4>
                          <p className="text-xs">To grow from our current base in MP, Chhattisgarh, and Jharkhand to every Indian state, and ultimately into international markets through export and import initiatives.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Core Values & Upcoming Initiatives Column */}
              <div className="flex flex-col gap-8">
                <div className="bg-muted p-10 border border-border">
                  <div className="flex gap-4 items-center mb-10">
                    <Heart size={28} className="text-accent" />
                    <h3 className="text-primary m-0">Our Core Values</h3>
                  </div>
                  <div className="space-y-10">
                    <div className="standard-card bg-white">
                      <h4 className="text-sm mb-2 uppercase">Integrity</h4>
                      <p className="text-xs text-gray-500">11 years in this industry is only possible through honest dealing. Every product, every partnership, and every promise at Parth Seeds is backed by complete transparency and accountability.</p>
                    </div>
                    <div className="standard-card bg-white">
                      <h4 className="text-sm mb-2 uppercase">Innovation</h4>
                      <p className="text-xs text-gray-500">We continuously evolve our product portfolio and are actively working towards establishing dedicated R&D facilities, solar agriculture initiatives, and livestock nutrition solutions in the coming months.</p>
                    </div>
                    <div className="standard-card bg-white">
                      <h4 className="text-sm mb-2 uppercase">Commitment</h4>
                      <p className="text-xs text-gray-500">Both co-founders — Rohit Kumar Tiwari and Santosh Jaiswal — are personally involved at every level of the business. That direct ownership of quality is our strongest guarantee to every farmer and partner we serve.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-10 border border-primary/10">
                  <h3 className="text-primary mb-6 text-xl">Upcoming Initiatives (Coming 2026)</h3>
                  <p className="text-sm text-gray-600 mb-6">As part of our next phase of growth, we are working towards:</p>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>A dedicated <strong>R&D Center</strong> for new variety trials, soil testing, and nursery operations.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>A <strong>Solar Energy Agriculture Division</strong> to integrate renewable energy into farming for sustainable, cost-effective solutions.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>A <strong>Cattle Feed Division</strong> focused on livestock nutrition, quality feed, and health consultancy.</span>
                    </li>
                  </ul>
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
