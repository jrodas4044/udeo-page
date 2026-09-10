import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

const values = [
  {
    title: "Excelencia Académica",
    desc: "Estándares de calidad internacionales en cada programa, con docentes activos en el campo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Integridad",
    desc: "Formación basada en valores cristianos, éticos y responsabilidad social con Guatemala.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Innovación",
    desc: "Más de 150 líneas de investigación y programas en constante actualización científica.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Compromiso Social",
    desc: "Contribuimos a la prevención del crimen y la construcción de una Guatemala más justa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const galleryPhotos = [
  { src: "/fotos-diplomado/1.jpg", caption: "Actividades académicas" },
  { src: "/fotos-diplomado/2.jpg", caption: "Laboratorio forense" },
  { src: "/fotos-diplomado/3.jpg", caption: "Diplomados y eventos" },
  { src: "/fotos-diplomado/4.jpg", caption: "Comunidad estudiantil" },
];

export const metadata = {
  title: "Sobre Nosotros",
  description:
    "Historia, misión y valores de la primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala. +3,000 graduados desde 2010.",
};

export default function About() {

  return (
    <div>
      <NavBar />
      <PageHero
        title="Sobre Nosotros"
        subtitle="Conoce la historia, misión y valores de la primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala."
      />

      {/* ── Quiénes somos ── */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

            {/* Text */}
            <div
              className="md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                14 años formando a los mejores investigadores de Guatemala
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                La Facultad de Ciencias Forenses e Investigación Criminal está
                comprometida con la sociedad en darle a nuestros estudiantes una
                educación integral de la más alta calidad, tanto a nivel pregrado,
                posgrado, maestría y doctorado, basada en valores cristianos, éticos
                y la filosofía de la escuela austriaca de economía.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                En el estudio de las ciencias forenses existen más de <strong className="text-gray-900">150 líneas
                de investigación</strong> que se pueden transformar en programas educativos,
                siendo uno de los objetivos de la Universidad de Occidente hacer de
                esta facultad la pionera en temas de vanguardia forense en
                América Latina.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "2010", label: "Fundación" },
                  { num: "+3,000", label: "Graduados" },
                  { num: "150+", label: "Líneas de investigación" },
                ].map((s, i) => (
                  <div key={i} className="text-center border border-gray-100 rounded-md p-3">
                    <p className="font-serif text-3xl text-udeo-red">{s.num}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="rounded-md overflow-hidden ">
                  <Image
                    src="/fotos-portada/1.jpg"
                    alt="Facultad UDEO"
                    width={600}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Misión & Visión ── */}
      <section className="relative bg-udeo-charcoal py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #b40001 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl text-white leading-tight">
              Misión & Visión
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Misión",
                icon: "🎯",
                text: "Comprometida con la sociedad en darle a nuestros estudiantes una educación integral de la más alta calidad, basada en valores cristianos, éticos y la filosofía de la escuela austriaca de economía, creando espacios que estimulen la formación, el debate y el estudio científico.",
              },
              {
                label: "Visión",
                icon: "🔭",
                text: "Convertirse en la institución modelo de enseñanza en el estudio del fenómeno del crimen en América Latina, manteniendo la excelencia en sus egresados y desarrollando el liderazgo de las ciencias forenses para que nuestros graduados estén científica y técnicamente capacitados.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-md p-8"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-udeo-red rounded-md flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-extrabold text-2xl">{item.label}</h3>
                </div>
                <p className="text-white/60 leading-relaxed text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 rounded-md p-6 hover:border-udeo-red/30 hover:shadow-lg hover:shadow-udeo-red/5"
              >
                <div className="w-12 h-12 bg-udeo-red/10 rounded-md flex items-center justify-center mb-4 text-udeo-red group-hover:text-white">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ── */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
              Vida Académica
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative rounded-md overflow-hidden aspect-square"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
