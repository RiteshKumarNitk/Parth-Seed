import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-white border-l-4 border-accent pl-3 mb-6 text-sm">PARTH SEED LIMITED</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              A leading seed company in India, committed to excellence in agricultural research and high-quality seed production for the benefit of farmers.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white border-l-4 border-accent pl-3 mb-6 text-sm">QUICK LINKS</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/about" className="hover:text-white">About the Company</Link></li>
              <li><Link href="/products" className="hover:text-white">Our Product Range</Link></li>
              <li><Link href="/innovation" className="hover:text-white">Research & Development</Link></li>
              {/* <li><Link href="/media" className="hover:text-white">Media & News</Link></li>
              <li><Link href="/contact" className="hover:text-white">Career Opportunities</Link></li> */}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white border-l-4 border-accent pl-3 mb-6 text-sm">PRODUCTS</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/products?category=Field Crops" className="hover:text-white">Hybrid Cotton Seeds</Link></li>
              <li><Link href="/products?category=Field Crops" className="hover:text-white">Hybrid Maize Seeds</Link></li>
              <li><Link href="/products?category=Vegetable Crops" className="hover:text-white">Vegetable Seeds</Link></li>
              <li><Link href="/products?category=Field Crops" className="hover:text-white">Field Crop Seeds</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white border-l-4 border-accent pl-3 mb-6 text-sm">CONTACT US</h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Registered Office, Seed Valley, <br />Gujarat, India - 380001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <span>info@parthseed.com</span>
              </li>
            </ul>
          </div>
        </div>



        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} PARTH SEED LIMITED. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
