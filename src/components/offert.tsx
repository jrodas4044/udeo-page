import Image from "next/image";
import ProgramCard from "./programCard";

export default function Offerts() {
  return (
    <div
      className="relative bg-gray-100 bg-white shadow-lg px-4 py-6"
      id="offerts"
    >
      <div className="absolute inset-0 bg-[url('/texture/board.jpg')] opacity-30"></div>
      <div className="relative z-10">
        {/* Tarjeta destacada */}
        <div className="max-w-md mx-auto mb-8">
          <ProgramCard
            name="Técnico Universitario Auditor Forense en Investigaciones Criminales"
            url="/tecnico-auditor-forense"
            imageUrl="/taf.jpg"
            classes="relative z-10"
          />
        </div>

        {/* Grid responsivo de programas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          <ProgramCard
            name="Licenciatura en Investigación Criminal y Seguridad"
            url="/licenciatura-investigacion-criminal"
            imageUrl="/lics.jpg"
            classes="relative z-10"
          />
          <ProgramCard
            name="Maestría en Investigación Criminal"
            url="/maestria-investigacion-criminal"
            imageUrl="/maestria.jpg"
            classes="relative z-10"
          />
          <ProgramCard
            name="Doctorado en Justicia Criminal y Ciencias Forenses"
            url="/doctorado-justicia-criminal"
            imageUrl="/doctorado.jpg"
            classes="relative z-10"
          />
          <ProgramCard
            name="Licenciatura en Ciencias Policiales"
            url="/licenciatura-ciencias-policiales"
            imageUrl="/policia.jpg"
            classes="relative z-10"
          />
          <ProgramCard
            name="Diplomados"
            url="/diplomados"
            imageUrl="/dip.jpg"
            classes="relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
