import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1F10] text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-white border-l-4 border-accent pl-3 mb-6 text-sm">PARTH SEED LIMITED</h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              A leading seed company in India, committed to excellence in agricultural research and high-quality seed production for the benefit of farmers.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1CT6z7g1Gg/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/parthseeds135?utm_source=qr&igsh=aWJlazd1Zngyd3l2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white border-l-4 border-accent pl-3 mb-6 text-sm">QUICK LINKS</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li><Link href="/about" className="hover:text-white">About the Company</Link></li>
              <li><Link href="/social-impact" className="hover:text-white">Social Impact (CSR)</Link></li>
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
                <span> PARTH SEEDS PVT. LTD. <br />
                  Infront of Dwivedi beej Bhandar, <br />
                  JP road, shine library, beside of <br />
                  pandey kirana store, near of sachchu <br />
                  fruits & vegetables shop, Bagha, <br />
                  Bagha Infront of, Satna, Madhya Pradesh 485001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                {/* <span>+91 9752589664</span> */}
                <span>+91 9826230048</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <span>rohitt135@gmail.com</span>
                {/* <span>parthaspl25@gmail.com (Company)</span> */}
              </li>
            </ul>
          </div>
        </div>



        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} PARTH SEED LIMITED. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms of Use</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
