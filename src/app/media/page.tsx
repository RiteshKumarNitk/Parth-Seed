import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Youtube, Instagram, Facebook, Share2, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function MediaPage() {
  const videos = [
    { title: "Parth Seed: Journey of Excellence", id: "V1", duration: "5:20" },
    { title: "Field Trial Success Stories 2024", id: "V2", duration: "3:45" },
    { title: "Scientific Seed Processing Tour", id: "V3", duration: "4:15" },
  ];

  const socialPosts = [
    { type: "instagram", title: "New Hybrid Cotton Launch", image: "/row-crops.png" },
    { type: "facebook", title: "Farmer Meet in Gujarat", image: "/hero.png" },
    { type: "instagram", title: "R&D Lab Breakthrough", image: "/vegetables.png" },
    { type: "youtube", title: "Sustainable Farming Tips", image: "/row-crops.png" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-24 md:pt-[110px]">
        {/* Banner */}
        <section className="bg-primary py-12 text-white">
          <div className="container-custom">
            <h1 className="text-white mb-2">Media & Social Center</h1>
            <p className="text-gray-300 text-sm font-bold uppercase tracking-widest">Showcasing Our Impact & Agricultural Excellence</p>
          </div>
        </section>

        {/* Video Gallery (YouTube Style) */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="section-title text-left">
              <h2 className="flex items-center gap-3">
                <Youtube className="text-red-600" /> Video Gallery
              </h2>
              <div className="w-16 h-1 bg-accent mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="standard-card p-0 group overflow-hidden">
                  <div className="relative aspect-video bg-gray-900 flex items-center justify-center cursor-pointer">
                    <PlayCircle size={64} className="text-white/50 group-hover:text-red-600 transition-all group-hover:scale-110 z-10" />
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[10px] px-2 py-0.5 font-bold">{video.duration}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-sm normal-case mb-2 group-hover:text-primary transition-colors">{video.title}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">YouTube Channel</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Feed (Instagram/Facebook Placeholder) */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="section-title text-left">
              <h2 className="flex items-center gap-3">
                <Instagram className="text-pink-600" /> Social Hub
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Follow us on social media for real-time updates from the fields.</p>
              <div className="w-16 h-1 bg-accent mt-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialPosts.map((post, i) => (
                <div key={i} className="relative aspect-square group cursor-pointer overflow-hidden border border-border">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-4">
                      {post.type === 'instagram' && <Instagram size={24} className="text-white mx-auto mb-2" />}
                      {post.type === 'facebook' && <Facebook size={24} className="text-white mx-auto mb-2" />}
                      {post.type === 'youtube' && <Youtube size={24} className="text-white mx-auto mb-2" />}
                      <p className="text-white text-[10px] font-bold uppercase tracking-wider">{post.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="btn-primary flex items-center gap-2 mx-auto">
                <Share2 size={16} /> Load More Social Posts
              </button>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="section-title text-left">
              <h2>Press Releases & News</h2>
              <div className="w-16 h-1 bg-accent mt-4"></div>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 p-8 bg-white border border-border hover:shadow-md transition-shadow group">
                  <div className="md:w-1/4 text-center border-r border-border pr-8">
                    <div className="text-3xl font-display font-bold text-primary">15</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">MAY 2024</div>
                  </div>
                  <div className="md:w-3/4">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2 block">Company Update</span>
                    <h3 className="text-lg normal-case mb-4 group-hover:text-primary transition-colors">Parth Seed Limited announces strategic expansion into international markets with new hybrid variants.</h3>
                    <button className="text-primary font-bold text-[11px] hover:underline uppercase tracking-wider">Download Press Release (PDF)</button>
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
