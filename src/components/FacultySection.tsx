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

const photos = [
  { src: "/fotos-portada/1.jpg", alt: "Estudiantes de la facultad" },
  { src: "/fotos-portada/2.jpg", alt: "Laboratorio forense" },
  { src: "/fotos-portada/3.jpg", alt: "Ceremonia de graduación" },
];

export default function FacultySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex md:flex-row flex-col gap-12 md:gap-20 items-center">

          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              Una facultad hecha para investigar
            </h2>

            <p className="font-serif italic text-gray-700 text-xl leading-relaxed mb-10 border-l-2 border-udeo-red pl-5">
              Formamos investigadores íntegros, comprometidos con la justicia y
              la verdad de Guatemala.
            </p>

            <dl className="space-y-5 mb-10">
              {values.map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-gray-900">{item.label}</dt>
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

          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
              <div className="row-span-2 relative rounded-md overflow-hidden">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="w-full h-full object-cover"
                  width={400}
                  height={520}
                />
              </div>
              {photos.slice(1).map((p) => (
                <div key={p.src} className="rounded-md overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-44 object-cover"
                    width={300}
                    height={176}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
