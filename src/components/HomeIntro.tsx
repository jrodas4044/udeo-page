"use client";

import { useEffect, useState } from "react";
import TypewriterTitle from "./TypewriterTitle";
import Image from "next/image";

const HomeIntro = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-udeo-charcoal via-gray-900 to-udeo-red-dark">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-udeo-charcoal via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-udeo-red-dark/30 via-transparent to-udeo-red/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 md:px-8 min-h-screen">
        <div className="max-w-5xl w-full text-center">
          {/* University logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="UDEO Logo"
              width={200}
              height={80}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Typewriter title */}
          <div className="mb-6">
            <TypewriterTitle
              text="Facultad de Ciencias Forenses e Investigación Criminal"
              delay={80}
            />
          </div>

          {/* Subtitle */}
          <div className="mb-10">
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              14 años formando a los mejores
              <br />
              <span className="text-udeo-gold-light font-semibold">
                investigadores criminales del país
              </span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/oferta-academica"
              className="bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg hover:scale-105"
            >
              Ver Oferta Académica
            </a>
            <a
              href="/about"
              className="border-2 border-white/40 hover:border-udeo-gold text-white hover:text-udeo-gold-light font-bold py-4 px-8 rounded-full transition-all duration-300 text-lg hover:scale-105 backdrop-blur-sm"
            >
              Conocer Más
            </a>
          </div>
        </div>

        {/* Crime tape at bottom */}
        <div className="absolute bottom-0 left-0 right-0 crime-tape">
          <span className="font-bold text-udeo-red-dark">
            ¡Atención! Solo los valientes cruzan esta línea para luchar por la
            justicia en Guatemala.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
