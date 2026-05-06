import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 md:pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Contact Us</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Connect with our agricultural experts</p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Info Column */}
              <div className="lg:w-1/3">
                <h2 className="mb-10">Get In Touch</h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-2">REGISTERED OFFICE</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-bold uppercase tracking-wide">
                        PARTH SEEDS PVT. LTD. <br />
                        Infront of Dwivedi beej Bhandar, <br />
                        JP road, shine library, beside of <br />
                        pandey kirana store, near of sachchu <br />
                        fruits & vegetables shop, Bagha, <br />
                        Bagha Infront of, Satna, Madhya Pradesh 485001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-2">CALL US</h4>
                      <p className="text-xs text-gray-500 font-bold tracking-widest">
                        +91 97525 89664 <br />
                        +91 94259 79664 <br />
                        +91 98933 32398

                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-2">EMAIL US</h4>
                      <p className="text-xs text-gray-500 font-bold tracking-widest">
                        INFO@PARTHSEED.COM <br />
                        SALES@PARTHSEED.COM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center text-primary shrink-0 border border-border">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm mb-2">BUSINESS HOURS</h4>
                      <p className="text-xs text-gray-500 font-bold tracking-widest">
                        MON - SAT: 9:00 AM - 6:00 PM <br />
                        SUN: CLOSED
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:w-2/3">
                <div className="bg-muted p-10 border border-border">
                  <h3 className="mb-8">Send a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Your Name *</label>
                        <input type="text" className="w-full bg-white border border-border p-3 text-sm focus:outline-none focus:border-primary" required />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Email Address *</label>
                        <input type="email" className="w-full bg-white border border-border p-3 text-sm focus:outline-none focus:border-primary" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Phone Number</label>
                        <input type="text" className="w-full bg-white border border-border p-3 text-sm focus:outline-none focus:border-primary" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Subject</label>
                        <input type="text" className="w-full bg-white border border-border p-3 text-sm focus:outline-none focus:border-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase text-gray-500 mb-2 block">Your Message *</label>
                      <textarea className="w-full bg-white border border-border p-3 text-sm focus:outline-none focus:border-primary h-32" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full md:w-auto">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[300px] md:h-[450px] bg-gray-100 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.195109394803!2d80.8192689!3d24.595083499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f006c39d417%3A0x5846f6ff0e35d1cf!2sPARTH%20SEEDS%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1778084548181!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>

          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
