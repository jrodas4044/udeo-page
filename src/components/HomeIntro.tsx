"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeIntro = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-udeo-charcoal via-gray-900 to-udeo-red-dark">

      {/* Background image — más visible */}
      <div
        className="absolute inset-0 opacity-35"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <Image src="/hero.png" alt="Hero background" fill className="object-cover" priority />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-udeo-charcoal via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-udeo-charcoal/80 via-udeo-charcoal/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 md:px-8 pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Left — Text ── */}
            <div className="lg:w-3/5 text-center lg:text-left">

              {/* Institutional label */}
              <div className="hero-animate" style={{ animationDelay: "0s" }}>
                <span className="inline-flex items-center gap-3 text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-6">
                  <span className="w-8 h-px bg-udeo-gold hidden sm:block" />
                  UDEO · Ext. Antonio Beristain
                  <span className="w-8 h-px bg-udeo-gold hidden sm:block" />
                </span>
              </div>

              {/* Title */}
              <div className="hero-animate" style={{ animationDelay: "0.15s" }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  Ciencias Forenses e{" "}
                  <span className="text-udeo-red">Investigación Criminal</span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="hero-animate" style={{ animationDelay: "0.3s" }}>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  14 años formando a los mejores investigadores criminales del
                  país, con los más altos estándares académicos y éticos.
                </p>
              </div>

              {/* CTAs */}
              <div
                className="hero-animate flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                style={{ animationDelay: "0.45s" }}
              >
                <Link
                  href="/oferta-academica"
                  className="bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base hover:scale-105"
                >
                  Ver Oferta Académica
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white/30 hover:border-udeo-gold text-white hover:text-udeo-gold font-bold py-4 px-8 rounded-full transition-all duration-300 text-base backdrop-blur-sm"
                >
                  Conocer Más
                </Link>
              </div>
            </div>

            {/* ── Right — Visual ── */}
            <div
              className="lg:w-2/5 w-full max-w-md mx-auto lg:mx-0 hero-animate-right"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                  <Image
                    src="/hero4.jpg"
                    alt="Estudiantes UDEO"
                    width={500}
                    height={400}
                    className="w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Floating stat — top left */}
                <div className="absolute -top-4 -left-4 bg-udeo-red text-white px-4 py-3 rounded-xl shadow-xl">
                  <p className="text-2xl font-extrabold leading-none">14+</p>
                  <p className="text-xs text-white/80 uppercase tracking-wide mt-0.5">Años</p>
                </div>

                {/* Floating stat — bottom right */}
                <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl">
                  <p className="text-2xl font-extrabold leading-none text-udeo-red">+3,000</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">Graduados</p>
                </div>

                {/* Decorative frame */}
                <div className="absolute -inset-3 border-2 border-white/10 rounded-3xl pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Conoce más</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default HomeIntro;
