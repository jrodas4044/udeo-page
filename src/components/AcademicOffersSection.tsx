"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "Técnico Universitario Auditor Forense en Investigaciones Criminales",
    url: "/tecnico-auditor-forense",
    imageUrl: "/taf.jpg",
    level: "Técnico",
    levelColor: "bg-udeo-gold text-gray-900",
    duration: "2.5 años",
  },
  {
    name: "Licenciatura en Investigación Criminal y Seguridad",
    url: "/licenciatura-investigacion-criminal",
    imageUrl: "/lics.jpg",
    level: "Licenciatura",
    levelColor: "bg-blue-600 text-white",
    duration: "5 años",
  },
  {
    name: "Licenciatura en Ciencias Policiales",
    url: "/licenciatura-ciencias-policiales",
    imageUrl: "/policia.jpg",
    level: "Licenciatura",
    levelColor: "bg-blue-600 text-white",
    duration: "5 años",
  },
  {
    name: "Maestría en Investigación Criminal",
    url: "/maestria-investigacion-criminal",
    imageUrl: "/maestria.jpg",
    level: "Maestría",
    levelColor: "bg-purple-700 text-white",
    duration: "2 años",
  },
  {
    name: "Doctorado en Justicia Criminal y Ciencias Forenses",
    url: "/doctorado-justicia-criminal",
    imageUrl: "/doctorado.jpg",
    level: "Doctorado",
    levelColor: "bg-udeo-red text-white",
    duration: "3 años",
  },
  {
    name: "Diplomados",
    url: "/diplomados",
    imageUrl: "/dip.jpg",
    level: "Diplomado",
    levelColor: "bg-emerald-600 text-white",
    duration: "Variable",
  },
];

export default function AcademicOffersSection() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-50 py-20 md:py-28">

      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-udeo-charcoal pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">
            Programas académicos
          </p>
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            Oferta <span className="text-udeo-red">Académica</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
            Formación de vanguardia en todos los niveles, impartida por los mejores
            profesionales del campo forense en Guatemala.
          </p>
          <div className="w-16 h-1 bg-udeo-red mx-auto mt-6 rounded-full" />
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <Link
              key={i}
              href={program.url}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-udeo-red/10 transition-all duration-500 flex flex-col ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={program.imageUrl}
                  alt={program.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay always */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Level badge */}
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${program.levelColor}`}>
                  {program.level}
                </span>

                {/* Hover CTA overlay */}
                <div className="absolute inset-0 bg-udeo-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-sm border-2 border-white px-6 py-2 rounded-full">
                    Ver programa
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 flex-1">
                  {program.name}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.duration}
                  </div>
                  <span className="text-udeo-red text-xs font-bold group-hover:underline">
                    Ver más →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/oferta-academica"
            className="inline-flex items-center gap-3 border-2 border-udeo-red text-udeo-red hover:bg-udeo-red hover:text-white font-bold py-3 px-10 rounded-full transition-all duration-300 group"
          >
            Ver todos los programas
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
