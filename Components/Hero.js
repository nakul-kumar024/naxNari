// components/Hero.tsx   (or ImageCarousel.tsx — choose one name)
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/back1.jpg",
  "/back2.jpg",
  "/back3.jpg",
  // "/back4.jpg",   ← add if you want to use it later
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5000 ms = 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[70vh] min-h-125 max-h-200 overflow-hidden">
      {/* Images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={src}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover brightness-75"
            priority={index === 0} // load first image faster
            quality={85}
          />
        </div>
      ))}

      {/* Optional overlay text + CTA – very common for hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6 drop-shadow-lg">
          NARI
        </h1>
        <p className="text-xl md:text-3xl mb-10 max-w-3xl drop-shadow-md">
          Timeless Ethnic Jewelry • Handcrafted Elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* <a
            href="/shop"
            className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg"
          >
            Shop Now
          </a> */}
          <button
            onClick={() => {
              document.getElementById("shopSection").scrollIntoView({
                behavior: "smooth"
              });
            }}
            className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg"
          >
            Shop Now
          </button>

          <section id="shopSection">
            {/* <h2>Shop Section</h2> */}
            {/* Your shop content */}
          </section>

          <a
            href="/new-arrivals"
            className="border-2 border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition shadow-lg"
            onClick={(e) => {
              e.preventDefault(); // stops the default navigation
              document.getElementById("shopSection").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            New Arrivals
          </a>

        </div>
      </div>

      {/* Navigation arrows (optional – many hero carousels hide arrows on mobile) */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full hover:bg-black/60 transition z-20 hidden md:block"
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full hover:bg-black/60 transition z-20 hidden md:block"
        aria-label="Next image"
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}