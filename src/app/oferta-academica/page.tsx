"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import ProgramCard, { programs } from "@/components/programCard";

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
        title="Oferta académica"
        subtitle="Del técnico al doctorado, impartido por fiscales, peritos e investigadores activos en el campo forense guatemalteco."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 mb-10 border-b border-black/10 pb-6">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === f
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-black/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((program) => (
              <ProgramCard key={program.url} program={program} showDescription />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
