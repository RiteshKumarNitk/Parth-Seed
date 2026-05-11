import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Sitemap | Parth Seeds",
  description: "Sitemap for Parth Seeds.",
};

export default function SitemapPage() {
  const linkSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Infrastructure", url: "/infrastructure" },
        { name: "Innovation", url: "/innovation" },
        { name: "Contact Us", url: "/contact" },
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "Company Profile", url: "/about/profile" },
        { name: "Vision & Mission", url: "/about/vision" },
        { name: "Management Team", url: "/about/management" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms and Conditions", url: "/terms-and-conditions" },
        { name: "Privacy Policy", url: "#" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="bg-primary/5 py-16 pt-32">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-primary">Sitemap</h1>
          <p className="text-gray-600 mt-4">Overview of all pages on our website.</p>
        </div>
      </div>
      
      <section className="section-padding flex-grow">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {linkSections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold text-primary border-b border-gray-200 pb-2 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <Link href={link.url} className="text-gray-700 hover:text-accent transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
