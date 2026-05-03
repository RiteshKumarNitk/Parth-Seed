"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[450px] flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Agriculture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-white border-l-4 border-accent pl-6 mb-6">
            Leading the Way in <br />
            Seed Technology & Innovation
          </h1>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed font-medium">
            Parth Seed is committed to providing high-quality hybrid seeds 
            to empower farmers and ensure sustainable agricultural growth across the nation.
          </p>

          <div className="flex gap-4">
            <button className="btn-primary">Our Products</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
