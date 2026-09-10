import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "Pioneros en Guatemala",
    desc: "Primera y única Facultad de Ciencias Forenses e Investigación Criminal del país, con 14 años de liderazgo.",
  },
  {
    title: "Catedráticos en ejercicio",
    desc: "Fiscales, investigadores y peritos activos que enseñan desde la experiencia real.",
  },
  {
    title: "Enfoque práctico",
    desc: "Laboratorios especializados, simulaciones de escenas del crimen y casos reales desde el primer año.",
  },
  {
    title: "Salida laboral",
    desc: "Red de egresados en el Ministerio Público, PNC, INACIF y sector privado a nivel nacional.",
  },
];

export default function WhyStudySection() {
  return (
    <section className="bg-udeo-charcoal text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl leading-tight mb-14 max-w-2xl">
          Por qué estudiar en UDEO Beristain
        </h2>

        <div className="flex md:flex-row flex-col gap-12 md:gap-16 items-start">
          <div className="md:w-2/5 w-full">
            <div className="rounded-md overflow-hidden">
              <Image
                src="/1.png"
                width={500}
                height={600}
                alt="Estudiante de la facultad con hoja de huellas dactilares"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {reasons.map((item) => (
              <div key={item.title} className="border-t border-white/15 pt-5">
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="sm:col-span-2 pt-4">
              <Link
                href="/oferta-academica"
                className="inline-block bg-udeo-red hover:bg-udeo-red-dark text-white font-semibold py-3.5 px-8 rounded-md transition-colors"
              >
                Ver oferta académica
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
