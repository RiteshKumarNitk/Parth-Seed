import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Briefcase, Heart, Rocket, ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="bg-primary pt-32 pb-24 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Join the <span className="text-secondary">Seed Revolution</span></h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We are looking for passionate innovators, scientists, and agricultural experts 
              to help us build a more sustainable and food-secure world.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Why Work at Parth Seed?</h2>
            <p className="text-lg text-muted-foreground">
              We provide a nurturing environment where your ideas can grow and make a real-world impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation First", desc: "Work with cutting-edge technology in biotech and genomics.", icon: Rocket },
              { title: "Inclusive Culture", desc: "A diverse team where every voice is heard and valued.", icon: Users },
              { title: "Impactful Work", desc: "Directly improve the lives of millions of farmers globally.", icon: Heart },
              { title: "Growth Mindset", desc: "Continuous learning and professional development programs.", icon: Briefcase }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-muted/30 border border-border text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
                  <item.icon size={28} />
                </div>
                <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Current Openings</h2>
              <p className="text-lg text-muted-foreground">
                Find your place in our growing team. Browse through our current opportunities.
              </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-full border border-border text-sm font-semibold text-primary">
              12 Active Roles
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: "Senior Research Scientist", dept: "R&D", location: "Seed Valley", type: "Full-time" },
              { title: "Field Trial Manager", dept: "Operations", location: "Remote / Field", type: "Full-time" },
              { title: "Biotech Lab Assistant", dept: "Innovation", location: "Agro Park", type: "Contract" },
              { title: "Marketing Lead", dept: "Commercial", location: "Headquarters", type: "Full-time" }
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-border flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-accent hover:shadow-lg transition-all">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-muted rounded text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{job.dept}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">• {job.type}</span>
                  </div>
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{job.location}</p>
                </div>
                <button className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-accent transition-all flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Don&apos;t see a role that fits? We&apos;re always looking for talent.</p>
            <button className="text-primary font-bold border-b-2 border-primary hover:text-accent hover:border-accent transition-all">
              Send us your CV anyway
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
