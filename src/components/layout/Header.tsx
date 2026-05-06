"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Company Profile", href: "/about/profile" },
      { name: "Vision & Mission", href: "/about/vision" },
      { name: "Management Team", href: "/about/team" },
    ]
  },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Field Crops", href: "/products?category=Field Crops" },
      { name: "Vegetable Crops", href: "/products?category=Vegetable Crops" },
      { name: "Bio Products", href: "/products?category=Bio Products" },
    ]
  },
  { name: "R&D", href: "/innovation" },
  // { name: "Media", href: "/media" },
  // { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-border"
            : isHomePage
              ? "bg-transparent border-transparent"
              : "bg-white border-b border-border"
        )}
      >
        {/* Utility Bar */}
        <div className={cn(
          "bg-primary text-white text-[10px] md:text-[11px] font-bold transition-all duration-300 overflow-hidden",
          (isScrolled || (isHomePage && !isScrolled)) ? "h-0" : "h-9 py-2"
        )}>
          <div className="container-custom flex justify-between items-center whitespace-nowrap">
            <div className="flex gap-4 md:gap-8">
              <a href="tel:+919752589664" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={12} /> +91 97525 89664
              </a>
              <a href="mailto:rohit135@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={12} /> rohit135@gmail.com
              </a>
            </div>
            <div className="hidden sm:block tracking-widest">ISO 9001:2015 CERTIFIED</div>
          </div>
        </div>

        <nav className={cn(
          "container-custom flex justify-between items-center transition-all duration-300",
          isScrolled ? "py-3" : "py-5 md:py-8"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={cn(
              "animate-logo relative overflow-hidden w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-sm transition-transform group-hover:scale-110",
              isHomePage && !isScrolled ? "bg-white text-primary" : "bg-primary text-white"
            )}>
              <Image 
                src="/logo/parthseeds.jpg" 
                alt="Parth Seed Logo" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl md:text-2xl font-display font-black leading-none tracking-tighter uppercase transition-colors",
                isHomePage && !isScrolled ? "text-white" : "text-primary"
              )}>PARTH SEED</span>
              <span className={cn(
                "text-[9px] md:text-[10px] font-black uppercase mt-0.5 tracking-[0.2em] transition-colors",
                isHomePage && !isScrolled ? "text-white/70" : "text-gray-400"
              )}>Excellence in Seeds</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group px-1">
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-[12px] font-black tracking-widest uppercase transition-all duration-300 flex items-center gap-1 relative",
                    pathname === link.href || (link.submenu && pathname.startsWith(link.href))
                      ? isHomePage && !isScrolled ? "text-white" : "text-primary"
                      : isHomePage && !isScrolled ? "text-white/80 hover:text-white" : "text-secondary hover:text-primary"
                  )}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}

                  {/* Underline indicator */}
                  <span className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 transform transition-transform duration-300",
                    isHomePage && !isScrolled ? "bg-white" : "bg-primary",
                    pathname === link.href || (link.submenu && pathname.startsWith(link.href))
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white border border-border shadow-2xl py-3 rounded-sm overflow-hidden">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center justify-between px-6 py-2.5 text-[11px] font-black text-secondary hover:bg-muted hover:text-primary transition-colors group/sub"
                        >
                          {sub.name.toUpperCase()}
                          <ChevronRight size={10} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className={cn(
                "ml-6 rounded-sm py-2.5 px-6 group flex items-center gap-1 font-bold text-xs uppercase transition-all duration-300",
                isHomePage && !isScrolled
                  ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                  : "bg-primary text-white hover:bg-primary/90"
              )}
            >
              ENQUIRE
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 focus:outline-none transition-colors",
              isHomePage && !isScrolled ? "text-white" : "text-primary"
            )}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={cn(
        "fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-[120] transform transition-transform duration-300 ease-in-out lg:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full bg-white">
          <div className="flex justify-between items-center p-6 border-b border-border bg-white">
            <div className="flex items-center gap-3">
              <div className="animate-logo relative overflow-hidden w-10 h-10 rounded-sm bg-primary">
                <Image src="/logo/parthseeds.jpg" alt="Parth Seed" fill className="object-cover" />
              </div>
              <span className="font-display font-black text-primary text-xl tracking-tighter">PARTH SEED</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-primary hover:bg-muted rounded-full transition-colors focus:outline-none"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto py-6 px-6">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-2">
                {link.submenu ? (
                  <div className="py-2">
                    <button
                      className="flex justify-between items-center w-full py-3 text-sm font-black text-primary uppercase tracking-widest border-b border-muted/50"
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.name ? null : link.name)}
                    >
                      {link.name}
                      <ChevronDown size={18} className={cn("transition-transform duration-300", activeMobileSubmenu === link.name && "rotate-180")} />
                    </button>

                    <div className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      activeMobileSubmenu === link.name ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}>
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block py-3 pl-4 text-[12px] font-bold text-gray-500 hover:text-primary hover:bg-muted/30 border-l-2 border-muted transition-all"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-4 border-b border-muted/50 text-sm font-black text-primary uppercase tracking-widest hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-8 bg-muted/50 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-bold text-secondary">
                <Phone size={16} className="text-primary" /> +91 97525 89664
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-secondary">
                <Mail size={16} className="text-primary" /> rohit135@gmail.com
              </div>
              <Link
                href="/contact"
                className="btn-primary mt-4 py-4 rounded-sm text-center font-bold text-xs tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
