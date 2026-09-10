import Image from "next/image";
import Link from "next/link";

const values = [
  {
    label: "Calidad académica",
    desc: "Educación integral de nivel internacional en pregrado, posgrado y doctorado.",
  },
  {
    label: "Ética y valores",
    desc: "Formación basada en principios cristianos, éticos y responsabilidad social.",
  },
  {
    label: "Enfoque práctico",
    desc: "Laboratorios especializados y casos reales desde el primer semestre.",
  },
  {
    label: "Vanguardia nacional",
    desc: "Primera y única Facultad de Ciencias Forenses e Investigación Criminal de Guatemala.",
  },
];

export default function FacultySection() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Una facultad hecha para investigar
            </h2>

            <p className="font-serif italic text-gray-700 text-xl leading-relaxed mb-10 border-l-2 border-udeo-red pl-5">
              Formamos investigadores íntegros, comprometidos con la justicia y
              la verdad de Guatemala.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              {values.map((item) => (
                <div key={item.label} className="border-t border-black/15 pt-4">
                  <dt className="font-serif text-xl text-gray-900 mb-1">{item.label}</dt>
                  <dd className="text-gray-600 text-sm leading-relaxed">{item.desc}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/about"
              className="inline-block border border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 font-semibold py-3 px-7 rounded-md transition-colors"
            >
              Conocer la facultad
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative pb-16 pr-0 sm:pr-12">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-md overflow-hidden">
                <Image
                  src="/fotos-portada/1.jpg"
                  alt="Estudiantes de la facultad frente a sede de la Policía Nacional Civil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-0 right-0 sm:-right-0 w-[55%] sm:w-[48%] aspect-[4/3] rounded-md overflow-hidden ring-8 ring-white">
                <Image
                  src="/fotos-portada/3.jpg"
                  alt="Práctica de procesamiento de escena del crimen"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
