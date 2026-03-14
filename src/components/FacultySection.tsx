"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    label: "Calidad académica",
    desc: "Educación integral de nivel internacional en pregrado, posgrado y doctorado.",
    icon: (
      <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: "Ética y valores",
    desc: "Formación basada en principios cristianos, éticos y responsabilidad social.",
    icon: (
      <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Enfoque práctico",
    desc: "Laboratorios especializados y casos reales desde el primer semestre.",
    icon: (
      <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    label: "Vanguardia nacional",
    desc: "Primera y única Facultad de Ciencias Forenses e Investigación Criminal de Guatemala.",
    icon: (
      <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const photos = [
  { src: "/fotos-portada/1.jpg", caption: "Nuestros estudiantes", large: true },
  { src: "/fotos-portada/2.jpg", caption: "Laboratorio forense", large: false },
  { src: "/fotos-portada/3.jpg", caption: "Ceremonia de graduación", large: false },
];

export default function FacultySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-udeo-red pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex md:flex-row flex-col gap-12 md:gap-20 items-center">

          {/* ── Text side ── */}
          <div
            className={`md:w-1/2 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Watermark number */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-8 -left-4 text-[9rem] md:text-[11rem] font-extrabold text-gray-100 select-none leading-none pointer-events-none"
              >
                14
              </span>

              <div className="relative z-10">
                {/* Label + title */}
                <div className="border-l-4 border-udeo-red pl-6 mb-6">
                  <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-2">
                    Nuestra Facultad
                  </p>
                  <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                    Ciencias Forenses e{" "}
                    <span className="text-udeo-red">Investigación Criminal</span>
                  </h2>
                </div>

                {/* Pull quote */}
                <blockquote className="relative mb-8 pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 text-6xl text-udeo-red/20 font-serif leading-none"
                  >
                    &ldquo;
                  </span>
                  <p className="text-gray-500 italic text-base md:text-lg leading-relaxed">
                    Formamos investigadores íntegros, comprometidos con la
                    justicia y la verdad de Guatemala.
                  </p>
                </blockquote>

                {/* Values list */}
                <ul className="space-y-4 mb-10">
                  {values.map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-4 transition-all duration-500 ${
                        visible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${200 + i * 100}ms` }}
                    >
                      <div className="w-8 h-8 bg-udeo-red/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Conocer más sobre nosotros
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Photos mosaic ── */}
          <div
            className={`md:w-1/2 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Floating badge */}
              <div className="absolute -top-4 -right-2 z-20 bg-udeo-red text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl tracking-wide">
                Primera en Guatemala
              </div>

              {/* Mosaic grid */}
              <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                {/* Large photo — spans 2 rows */}
                <div className="group row-span-2 relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={photos[0].src}
                    alt={photos[0].caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={520}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold text-sm">{photos[0].caption}</span>
                  </div>
                </div>

                {/* Small photo 1 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={photos[1].src}
                    alt={photos[1].caption}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={300}
                    height={176}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white font-semibold text-xs">{photos[1].caption}</span>
                  </div>
                </div>

                {/* Small photo 2 */}
                <div className="group relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={photos[2].src}
                    alt={photos[2].caption}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={300}
                    height={176}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white font-semibold text-xs">{photos[2].caption}</span>
                  </div>
                </div>
              </div>

              {/* Decorative background blob */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-udeo-red/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
