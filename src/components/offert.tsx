import { Festive } from "next/font/google";
import Image from "next/image";
import ProgramCard from "./programCard";

export default function Offerts() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center flex"
      id="offerts"
    >
      <ProgramCard
        name="Técnico Universitario Auditor Forense en Investigaciones Criminales"
        url="/tecnico-auditor-forense"
        imageUrl="/taf.jpg"
      />

      <ProgramCard
        name="Licenciatura en Investigación Criminal y Seguridad"
        url="/licenciatura-investigacion-criminal"
        imageUrl="/lics.jpg"
      />

      <ProgramCard
        name="Maestría en Investigación Criminal"
        url="/maestria-investigacion-criminal"
        imageUrl="/maestria.jpg"
      />

      <ProgramCard
        name="Doctorado en Justicia Criminal y Ciencias Forenses"
        url="/doctorado-justicia-criminal"
        imageUrl="/doctorado.jpg"
      />

      <ProgramCard
        name="Licenciatura en Ciencias Policiales"
        url="/licenciatura-ciencias-policiales"
        imageUrl="/policia.jpg"
      />

      <ProgramCard name="Diplomados" url="/diplomados" imageUrl="/dip.jpg" />
    </div>
  );
}
