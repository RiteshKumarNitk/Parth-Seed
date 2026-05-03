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
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">The Core Values Driving Our Innovation</p>
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
                      "To be a global leader in agricultural biotechnology, providing innovative and sustainable seed solutions that transform the lives of farmers and ensure a hunger-free world."
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
                          <h4 className="text-sm mb-1">SCIENTIFIC EXCELLENCE</h4>
                          <p className="text-xs">To develop high-yielding hybrid seeds through precision breeding and advanced biotechnology.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <div>
                          <h4 className="text-sm mb-1">FARMER PROSPERITY</h4>
                          <p className="text-xs">To provide technical guidance and support to the farming community for enhanced agricultural productivity.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <div>
                          <h4 className="text-sm mb-1">QUALITY LEADERSHIP</h4>
                          <p className="text-xs">To maintain the highest standards of genetic purity and quality in every seed we produce.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Core Values Column */}
              <div className="bg-muted p-10 border border-border">
                <div className="flex gap-4 items-center mb-10">
                  <Heart size={28} className="text-accent" />
                  <h3 className="text-primary m-0">Our Core Values</h3>
                </div>
                <div className="space-y-10">
                  <div className="standard-card bg-white">
                    <h4 className="text-sm mb-2">INTEGRITY</h4>
                    <p className="text-xs text-gray-500">Conducting all business activities with transparency, honesty, and ethical standards.</p>
                  </div>
                  <div className="standard-card bg-white">
                    <h4 className="text-sm mb-2">INNOVATION</h4>
                    <p className="text-xs text-gray-500">Constantly seeking new ways to improve seed performance and agricultural efficiency.</p>
                  </div>
                  <div className="standard-card bg-white">
                    <h4 className="text-sm mb-2">COMMITMENT</h4>
                    <p className="text-xs text-gray-500">Unwavering dedication to the success and sustainability of the global farming community.</p>
                  </div>
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
