"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/FIELD CROPS/Paddy.jpg",
  "/FIELD CROPS/Wheat.jpg",
  "/FIELD CROPS/Mustard.jpg",
  "/FIELD CROPS/Soybean.webp",
  "/FIELD CROPS/til.webp"
];

export default function AboutImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden bg-muted border border-border group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "easeOut" } // Slow zoom-out Ken Burns effect
          }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES[currentIndex]}
            alt="Parth Seed Field Crops"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
