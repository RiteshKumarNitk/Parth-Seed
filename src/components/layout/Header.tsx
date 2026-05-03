"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "HOME", href: "/" },
  { 
    name: "ABOUT US", 
    href: "/about",
    submenu: [
      { name: "Company Profile", href: "/about/profile" },
      { name: "Vision & Mission", href: "/about/vision" },
      { name: "Management Team", href: "/about/team" },
    ]
  },
  { 
    name: "PRODUCTS", 
    href: "/products",
    submenu: [
      { name: "Row Crops", href: "/products?category=Row Crops" },
      { name: "Vegetable Crops", href: "/products?category=Vegetable Crops" },
    ]
  },
  { name: "R&D", href: "/innovation" },
  { name: "MEDIA", href: "/media" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Utility Bar */}
      <div className="bg-primary py-2 text-white text-[11px] font-bold">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Phone size={12} /> +91 123 456 7890</span>
            <span className="flex items-center gap-1.5"><Mail size={12} /> info@parthseed.com</span>
          </div>
          <div className="hidden md:block">ISO 9001:2015 CERTIFIED COMPANY</div>
        </div>
      </div>

      <nav className="container-custom flex justify-between items-center py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary text-white w-10 h-10 flex items-center justify-center font-display font-bold text-xl">P</div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold text-primary leading-none tracking-tight">PARTH SEED</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase mt-1">Excellence in Seeds</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 text-[12px] font-bold tracking-wide transition-colors flex items-center gap-1",
                  pathname === link.href ? "text-primary border-b-2 border-primary" : "text-secondary hover:text-primary"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} />}
              </Link>
              {link.submenu && (
                <div className="absolute top-full left-0 w-48 bg-white border border-border shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-6 py-2 text-[12px] font-bold text-secondary hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="lg:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl p-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-50 last:border-0">
              <Link href={link.href} className="py-3 text-sm font-bold text-primary block" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
