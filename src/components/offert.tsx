import { Festive } from "next/font/google";
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
        <div className="flex flex-col items-center">
          {/* Tarjeta principal */}
          <div className="mb-12 w-2/6">
            <ProgramCard
              name="Técnico Universitario Auditor Forense en Investigaciones Criminales"
              url="/tecnico-auditor-forense"
              imageUrl="/taf.jpg"
              classes="relative z-10"
            />
          </div>

          {/* Tarjetas secundarias */}
          <div className="flex justify-center mb-12 w-full">
            <div className="mx-4 w-1/3">
              <ProgramCard
                name="Licenciatura en Investigación Criminal y Seguridad"
                url="/licenciatura-investigacion-criminal"
                imageUrl="/lics.jpg"
                classes="relative z-10"
              />
            </div>
            <div className="mx-4 w-1/3">
              <ProgramCard
                name="Maestría en Investigación Criminal"
                url="/maestria-investigacion-criminal"
                imageUrl="/maestria.jpg"
                classes="relative z-10"
              />
            </div>
            <div className="mx-4 w-1/3">
              <ProgramCard
                name="Doctorado en Justicia Criminal y Ciencias Forenses"
                url="/doctorado-justicia-criminal"
                imageUrl="/doctorado.jpg"
                classes="relative z-10"
              />
            </div>
          </div>

          {/* Tarjetas restantes */}
          <div className="flex justify-around w-full">
            <div className="w-1/3">
              <ProgramCard
                name="Licenciatura en Ciencias Policiales"
                url="/licenciatura-ciencias-policiales"
                imageUrl="/policia.jpg"
                classes="relative z-10 transform -rotate-6"
              />
            </div>
            <div className="mt-8 w-1/3">
              <ProgramCard
                name="Diplomados"
                url="/diplomados"
                imageUrl="/dip.jpg"
                classes="relative z-10 transform rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
