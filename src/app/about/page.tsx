"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const values = [
  {
    title: "Excelencia Académica",
    desc: "Estándares de calidad internacionales en cada programa, con docentes activos en el campo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Integridad",
    desc: "Formación basada en valores cristianos, éticos y responsabilidad social con Guatemala.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovación",
    desc: "Más de 150 líneas de investigación y programas en constante actualización científica.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Compromiso Social",
    desc: "Contribuimos a la prevención del crimen y la construcción de una Guatemala más justa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const galleryPhotos = [
  { src: "/fotos-diplomado/1.jpg", caption: "Actividades académicas" },
  { src: "/fotos-diplomado/2.jpg", caption: "Laboratorio forense" },
  { src: "/fotos-diplomado/3.jpg", caption: "Diplomados y eventos" },
  { src: "/fotos-diplomado/4.jpg", caption: "Comunidad estudiantil" },
];

export default function About() {
  const intro = useVisible(0.15);
  const misionVision = useVisible(0.1);
  const valuesSection = useVisible(0.1);
  const gallery = useVisible(0.1);

  return (
    <div>
      <NavBar />
      <PageHero
        title="Sobre Nosotros"
        subtitle="Conoce la historia, misión y valores de la primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala."
      />

      {/* ── Quiénes somos ── */}
      <section ref={intro.ref} className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-udeo-charcoal pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

            {/* Text */}
            <div
              className={`md:w-1/2 transition-all duration-700 ${
                intro.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">
                Quiénes somos
              </p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
                14 años formando a los{" "}
                <span className="text-udeo-red">mejores investigadores</span>{" "}
                de Guatemala
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                La Facultad de Ciencias Forenses e Investigación Criminal está
                comprometida con la sociedad en darle a nuestros estudiantes una
                educación integral de la más alta calidad, tanto a nivel pregrado,
                posgrado, maestría y doctorado, basada en valores cristianos, éticos
                y la filosofía de la escuela austriaca de economía.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                En el estudio de las ciencias forenses existen más de <strong className="text-gray-900">150 líneas
                de investigación</strong> que se pueden transformar en programas educativos,
                siendo uno de los objetivos de la Universidad de Occidente hacer de
                esta facultad la pionera en temas de vanguardia forense en
                América Latina.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "2010", label: "Fundación" },
                  { num: "+3,000", label: "Graduados" },
                  { num: "150+", label: "Líneas de investigación" },
                ].map((s, i) => (
                  <div key={i} className="text-center border border-gray-100 rounded-xl p-3">
                    <p className="text-2xl font-extrabold text-udeo-red">{s.num}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className={`md:w-1/2 transition-all duration-700 delay-200 ${
                intro.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/fotos-portada/1.jpg"
                    alt="Facultad UDEO"
                    width={600}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-udeo-red text-white rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-3xl font-extrabold leading-none">1°</p>
                  <p className="text-xs uppercase tracking-widest text-white/80 mt-1">En Guatemala</p>
                </div>
                <div className="absolute -inset-3 border-2 border-udeo-red/20 rounded-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Misión & Visión ── */}
      <section ref={misionVision.ref} className="relative bg-udeo-charcoal py-20 md:py-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-white pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
        />
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #b40001 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              misionVision.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-3">
              Identidad institucional
            </p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white leading-tight">
              Misión <span className="text-udeo-red">&</span> Visión
            </h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Misión",
                icon: "🎯",
                text: "Comprometida con la sociedad en darle a nuestros estudiantes una educación integral de la más alta calidad, basada en valores cristianos, éticos y la filosofía de la escuela austriaca de economía, creando espacios que estimulen la formación, el debate y el estudio científico.",
              },
              {
                label: "Visión",
                icon: "🔭",
                text: "Convertirse en la institución modelo de enseñanza en el estudio del fenómeno del crimen en América Latina, manteniendo la excelencia en sus egresados y desarrollando el liderazgo de las ciencias forenses para que nuestros graduados estén científica y técnicamente capacitados.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 transition-all duration-500 ${
                  misionVision.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-udeo-red rounded-xl flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-extrabold text-2xl">{item.label}</h3>
                </div>
                <p className="text-white/60 leading-relaxed text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section ref={valuesSection.ref} className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-udeo-charcoal pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              valuesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">
              Lo que nos define
            </p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight">
              Nuestros <span className="text-udeo-red">Valores</span>
            </h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className={`group bg-white border border-gray-100 rounded-2xl p-6 hover:border-udeo-red/30 hover:shadow-lg hover:shadow-udeo-red/5 transition-all duration-300 ${
                  valuesSection.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-udeo-red/10 group-hover:bg-udeo-red rounded-xl flex items-center justify-center mb-4 text-udeo-red group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ── */}
      <section ref={gallery.ref} className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-16 bg-gray-50 pointer-events-none"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              gallery.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">
              Nuestra comunidad
            </p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight">
              Vida <span className="text-udeo-red">Académica</span>
            </h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden shadow-md aspect-square transition-all duration-500 ${
                  gallery.visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
