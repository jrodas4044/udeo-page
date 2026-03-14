"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const programs = [
  {
    name: "Técnico Universitario Auditor Forense en Investigaciones Criminales",
    url: "/tecnico-auditor-forense",
    imageUrl: "/taf.jpg",
    level: "Técnico",
    levelColor: "bg-udeo-gold text-gray-900",
    duration: "2.5 años",
    description: "Formación especializada en auditoría forense y técnicas de investigación criminal aplicadas.",
  },
  {
    name: "Licenciatura en Investigación Criminal y Seguridad",
    url: "/licenciatura-investigacion-criminal",
    imageUrl: "/lics.jpg",
    level: "Licenciatura",
    levelColor: "bg-blue-600 text-white",
    duration: "5 años",
    description: "Programa completo en técnicas de investigación, criminalística y seguridad ciudadana.",
  },
  {
    name: "Licenciatura en Ciencias Policiales",
    url: "/licenciatura-ciencias-policiales",
    imageUrl: "/policia.jpg",
    level: "Licenciatura",
    levelColor: "bg-blue-600 text-white",
    duration: "5 años",
    description: "Formación académica para profesionales de las ciencias policiales y seguridad pública.",
  },
  {
    name: "Maestría en Investigación Criminal",
    url: "/maestria-investigacion-criminal",
    imageUrl: "/maestria.jpg",
    level: "Maestría",
    levelColor: "bg-purple-700 text-white",
    duration: "2 años",
    description: "Posgrado de alto nivel para especialistas en investigación criminal y ciencias forenses.",
  },
  {
    name: "Doctorado en Justicia Criminal y Ciencias Forenses",
    url: "/doctorado-justicia-criminal",
    imageUrl: "/doctorado.jpg",
    level: "Doctorado",
    levelColor: "bg-udeo-red text-white",
    duration: "3 años",
    description: "El nivel más alto de formación académica en justicia criminal y ciencias forenses.",
  },
  {
    name: "Diplomados",
    url: "/diplomados",
    imageUrl: "/dip.jpg",
    level: "Diplomado",
    levelColor: "bg-emerald-600 text-white",
    duration: "Variable",
    description: "Programas cortos de especialización en áreas específicas del campo forense.",
  },
];

const filters = ["Todos", "Técnico", "Licenciatura", "Maestría", "Doctorado", "Diplomado"];

export default function OfertaAcademica() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? programs
    : programs.filter((p) => p.level === active);

  return (
    <div>
      <NavBar />
      <PageHero
        title="Oferta Académica"
        subtitle="Formación de vanguardia en todos los niveles, impartida por los mejores profesionales del campo forense en Guatemala."
      />

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  active === f
                    ? "bg-udeo-red text-white border-udeo-red shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-udeo-red hover:text-udeo-red"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-center text-gray-400 text-sm mb-8">
            {filtered.length} programa{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program, i) => (
              <Link
                key={i}
                href={program.url}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-udeo-red/10 transition-all duration-500 flex flex-col"
              >
                <div className="relative overflow-hidden h-52">
                  <Image
                    src={program.imageUrl}
                    alt={program.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${program.levelColor}`}>
                    {program.level}
                  </span>
                  <div className="absolute inset-0 bg-udeo-red/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-sm border-2 border-white px-6 py-2 rounded-full">
                      Ver programa
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">{program.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{program.description}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {program.duration}
                    </div>
                    <span className="text-udeo-red text-xs font-bold group-hover:underline">Ver más →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <div id="contact" className="bg-udeo-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-udeo-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Contáctanos
              </p>
              <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight">
                ¿Listo para dar el <span className="text-udeo-gold">siguiente paso</span>?
              </h2>
              <p className="text-white/50 mt-4 text-base">
                Déjanos tus datos y un asesor se pondrá en contacto contigo.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
