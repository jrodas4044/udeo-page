import Link from "next/link";
import ProgramCard, { programs } from "@/components/programCard";

export default function AcademicOffersSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
              Oferta académica
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Del técnico al doctorado, impartido por fiscales, peritos e
              investigadores activos en el campo forense guatemalteco.
            </p>
          </div>
          <Link
            href="/oferta-academica"
            className="text-udeo-red font-semibold underline underline-offset-4 decoration-udeo-red/30 hover:decoration-udeo-red transition-colors whitespace-nowrap"
          >
            Ver todos los programas
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.url} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
