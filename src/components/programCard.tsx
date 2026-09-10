import Image from "next/image";
import Link from "next/link";

export type Program = {
  name: string;
  url: string;
  imageUrl: string;
  level: string;
  duration: string;
  description: string;
};

export const programs: Program[] = [
  {
    name: "Técnico Universitario Auditor Forense en Investigaciones Criminales",
    url: "/tecnico-auditor-forense",
    imageUrl: "/taf.jpg",
    level: "Técnico",
    duration: "2.5 años",
    description: "Formación especializada en auditoría forense y técnicas de investigación criminal aplicadas.",
  },
  {
    name: "Licenciatura en Investigación Criminal y Seguridad",
    url: "/licenciatura-investigacion-criminal",
    imageUrl: "/lics.jpg",
    level: "Licenciatura",
    duration: "5 años",
    description: "Programa completo en técnicas de investigación, criminalística y seguridad ciudadana.",
  },
  {
    name: "Licenciatura en Ciencias Policiales",
    url: "/licenciatura-ciencias-policiales",
    imageUrl: "/policia.jpg",
    level: "Licenciatura",
    duration: "5 años",
    description: "Formación académica para profesionales de las ciencias policiales y seguridad pública.",
  },
  {
    name: "Maestría en Investigación Criminal",
    url: "/maestria-investigacion-criminal",
    imageUrl: "/maestria.jpg",
    level: "Maestría",
    duration: "2 años",
    description: "Posgrado de alto nivel para especialistas en investigación criminal y ciencias forenses.",
  },
  {
    name: "Doctorado en Justicia Criminal y Ciencias Forenses",
    url: "/doctorado-justicia-criminal",
    imageUrl: "/doctorado.jpg",
    level: "Doctorado",
    duration: "3 años",
    description: "El nivel más alto de formación académica en justicia criminal y ciencias forenses.",
  },
  {
    name: "Diplomados",
    url: "/diplomados",
    imageUrl: "/dip.jpg",
    level: "Diplomado",
    duration: "Duración variable",
    description: "Programas cortos de especialización en áreas específicas del campo forense.",
  },
];

export default function ProgramCard({
  program,
  showDescription = false,
}: {
  program: Program;
  showDescription?: boolean;
}) {
  return (
    <Link
      href={program.url}
      className="group bg-white border border-black/10 rounded-md overflow-hidden flex flex-col hover:border-udeo-red/40 transition-colors"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={program.imageUrl}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-gray-500 mb-2">
          {program.level} · {program.duration}
        </p>
        <h3 className="text-xl leading-snug text-gray-900 group-hover:text-udeo-red transition-colors">
          {program.name}
        </h3>
        {showDescription && (
          <p className="text-gray-600 text-sm leading-relaxed mt-3">{program.description}</p>
        )}
      </div>
    </Link>
  );
}
