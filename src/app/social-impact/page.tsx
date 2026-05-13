import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Sprout, Heart, GraduationCap, TreePine, ArrowRight } from "lucide-react";

export const metadata = {
  title: 'Social Impact | Parth Seed',
  description: 'Our CSR initiatives focus on empowering people and protecting the environment. See how we are making a difference in the community.',
};

export default function SocialImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 md:pt-[110px]">
        {/* Hero Banner with Image */}
        <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero.png" 
              alt="Social Impact" 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
          </div>
          
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-white mb-6 text-4xl md:text-6xl font-display font-black tracking-tighter uppercase drop-shadow-lg">
              Beyond Business
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
              We believe that true growth is shared. Discover how Parth Seed is working to uplift farming communities, empower the next generation, and protect our environment.
            </p>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-3xl md:text-4xl text-primary font-black">Rooted in the Community</h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Parth Seed, our relationship with farmers goes beyond just supplying high-quality seeds. We live and work in the same communities, experiencing the same challenges and triumphs. Our Corporate Social Responsibility (CSR) initiatives are our way of giving back to the families and the land that have supported our journey from the very beginning.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12 border-t border-gray-100 pt-12">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-accent mb-2">10+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Villages Adopted</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-accent mb-2">500+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Families Helped</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-accent mb-2">100+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Children Supported</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-accent mb-2">1000+</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Trees Planted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Initiatives */}
        <section className="section-padding bg-muted/50 border-y border-border">
          <div className="container-custom">
            <div className="section-title text-center mb-16">
              <h2 className="text-3xl md:text-4xl">Our Core Initiatives</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                We focus our efforts where they matter most—empowering rural livelihoods, improving health, ensuring education, and fostering a greener tomorrow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Initiative 1 */}
              <div className="bg-white rounded-sm shadow-sm border border-border p-8 md:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full mb-8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Sprout size={32} />
                </div>
                <h3 className="text-2xl mb-4">Farmer Support Programs</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are actively supporting farmers across 10 villages in the Jabalpur Division. Our teams provide free agricultural training, essential resources, and continuous guidance to help improve crop yields and promote sustainable farming practices.
                </p>
                <div className="flex items-center text-accent font-bold text-sm uppercase tracking-widest">
                  Empowering Livelihoods
                </div>
              </div>
              
              {/* Initiative 2 */}
              <div className="bg-white rounded-sm shadow-sm border border-border p-8 md:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full mb-8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl mb-4">Community Welfare</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Health and warmth are basic human rights. We organize regular blanket donation drives during harsh winter seasons to protect the vulnerable. Additionally, we actively host and sponsor blood donation camps to support local healthcare infrastructure.
                </p>
                <div className="flex items-center text-accent font-bold text-sm uppercase tracking-widest">
                  Health & Care
                </div>
              </div>

              {/* Initiative 3 */}
              <div className="bg-white rounded-sm shadow-sm border border-border p-8 md:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full mb-8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl mb-4">Child Education</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe education is the seed for a brighter future. Our company provides direct financial assistance to underprivileged families, helping cover school fees, uniforms, and educational materials to ensure children never have to drop out.
                </p>
                <div className="flex items-center text-accent font-bold text-sm uppercase tracking-widest">
                  Securing the Future
                </div>
              </div>

              {/* Initiative 4 */}
              <div className="bg-white rounded-sm shadow-sm border border-border p-8 md:p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full mb-8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <TreePine size={32} />
                </div>
                <h3 className="text-2xl mb-4">Environmental Sustainability</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Agriculture thrives when nature is in balance. We conduct massive tree plantation drives across central India. By increasing green cover, we aim to combat climate change, prevent soil erosion, and create a healthier ecosystem for future generations.
                </p>
                <div className="flex items-center text-accent font-bold text-sm uppercase tracking-widest">
                  Protecting Nature
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 bg-primary text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Join Us in Making a Difference</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              When you choose Parth Seed, you aren't just investing in high-quality agriculture—you're partnering with a brand that actively invests back into the farming community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-accent px-8 py-4 text-sm tracking-widest shadow-lg shadow-accent/30 flex items-center justify-center gap-2">
                GET IN TOUCH <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="px-8 py-4 text-sm font-bold tracking-widest uppercase border border-white/30 hover:bg-white hover:text-primary transition-colors flex items-center justify-center">
                Explore Our Products
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
