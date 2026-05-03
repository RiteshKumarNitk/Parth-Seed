import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, ShieldCheck, Award } from "lucide-react";

export default function ManagementTeamPage() {
  const team = [
    { name: "Executive Director", role: "Scientific Leadership", focus: "Plant Breeding & Genetics" },
    { name: "Managing Director", role: "Corporate Strategy", focus: "Business Expansion & Growth" },
    { name: "Director of Research", role: "Innovation Lead", focus: "Biotechnology & R&D" },
    { name: "Head of Operations", role: "Supply Chain", focus: "Seed Processing & Quality" },
    { name: "Technical Consultant", role: "Agricultural Expert", focus: "Farmer Engagement" },
    { name: "CFO", role: "Finance & Accounts", focus: "Strategic Financial Planning" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Management Team</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Leadership Driving Excellence</p>
          </div>
        </section>

        {/* Leadership Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-16 mb-24">
              <div className="md:w-1/2">
                <h2 className="mb-6">Leadership at Parth Seed</h2>
                <div className="w-16 h-1 bg-accent mb-8"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our management team comprises visionary leaders and veteran agricultural scientists who bring decades of expertise to the table. Their combined experience in seed technology, corporate strategy, and rural economics drives the organization toward achieving its goal of empowering farmers.
                </p>
                <div className="flex gap-10 mt-12">
                  <div className="text-center">
                    <div className="text-primary text-3xl font-display font-bold">30+</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Years Industry Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary text-3xl font-display font-bold">50+</div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">PhD Scientists</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="standard-card bg-muted border-none p-10">
                  <h3 className="text-sm mb-6 uppercase tracking-widest">Core Philosophy</h3>
                  <p className="text-gray-600 text-sm italic border-l-4 border-accent pl-6 mb-8">
                    "We believe that leadership is not just about making decisions, but about creating an environment where scientific curiosity and farmer-centric solutions can thrive."
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-primary font-bold">
                      <ShieldCheck size={18} className="text-accent" /> QUALITY COMMITTED
                    </div>
                    <div className="flex items-center gap-3 text-xs text-primary font-bold">
                      <Award size={18} className="text-accent" /> EXCELLENCE DRIVEN
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="standard-card group">
                  <div className="w-32 h-32 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Users size={48} />
                  </div>
                  <div className="text-center">
                    <h4 className="mb-2 text-primary">{member.name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">{member.role}</p>
                    <div className="w-8 h-0.5 bg-accent mx-auto mb-4"></div>
                    <p className="text-[11px] text-gray-500">
                      Expertise: {member.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
