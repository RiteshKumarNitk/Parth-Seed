"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Agriculture"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white border-l-4 border-accent pl-6 mb-6 text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
            Leading the Way in <br className="hidden sm:block" />
            <span className="text-accent">Seed Technology</span> & Innovation
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-medium">
            Parth Seed is committed to providing high-yielding hybrid seeds 
            to empower farmers and ensure sustainable agricultural growth across the nation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-primary py-4 px-8 rounded-sm text-sm">
              EXPLORE PRODUCTS
            </Link>
            <Link href="/contact" className="btn-secondary py-4 px-8 rounded-sm text-sm bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
