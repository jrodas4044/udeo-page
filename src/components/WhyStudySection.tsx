"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Pioneros en Guatemala",
    desc: "Primera y única Facultad de Ciencias Forenses e Investigación Criminal del país, con 14 años de liderazgo.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Expertos del País",
    desc: "Catedráticos activos en el campo: fiscales, investigadores y peritos con experiencia real.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Enfoque Práctico",
    desc: "Laboratorios especializados, simulaciones de escenas del crimen y casos reales desde el primer año.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Oportunidades Laborales",
    desc: "Red de egresados en el Ministerio Público, PNC, INACIF y sector privado a nivel nacional.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function WhyStudySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-udeo-charcoal py-20 md:py-28">

      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
      />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #b40001 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-3">
            Tu futuro empieza aquí
          </p>
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            ¿Por qué estudiar en{" "}
            <span className="text-udeo-red">UDEO ext. Beristain</span>?
          </h2>
          <div className="w-16 h-1 bg-udeo-red mx-auto mt-6 rounded-full" />
        </div>

        <div className="flex md:flex-row flex-col gap-12 md:gap-16 items-center">

          {/* ── Image side (left) ── */}
          <div
            className={`md:w-2/5 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/1.png"
                  width={500}
                  height={600}
                  alt="UDEO Ext. BERISTAIN"
                  className="w-full object-cover"
                />
              </div>

              {/* Floating stat badge — top left */}
              <div className="absolute -top-5 -left-5 bg-udeo-red text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-extrabold leading-none">14+</p>
                <p className="text-xs uppercase tracking-widest text-white/80 mt-1">Años</p>
              </div>

              {/* Floating stat badge — bottom right */}
              <div className="absolute -bottom-5 -right-5 bg-white text-gray-900 rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-extrabold leading-none text-udeo-red">+3,000</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Graduados</p>
              </div>

              {/* Decorative border frame */}
              <div className="absolute -inset-3 border-2 border-udeo-red/20 rounded-3xl pointer-events-none" />
            </div>
          </div>

          {/* ── Cards grid (right) ── */}
          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((item, i) => (
              <div
                key={i}
                className={`group relative bg-white/5 hover:bg-udeo-red border border-white/10 hover:border-udeo-red rounded-2xl p-6 cursor-default transition-all duration-300 overflow-hidden ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -right-1 text-7xl font-extrabold text-white/5 group-hover:text-white/10 select-none leading-none transition-colors duration-300"
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 bg-udeo-red group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 text-white transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-white/50 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/oferta-academica"
            className="inline-flex items-center gap-3 bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-udeo-red/30 hover:shadow-xl group text-lg"
          >
            Ver Oferta Académica
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
