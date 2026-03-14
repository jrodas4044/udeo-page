"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import PensumCard from "@/components/PensumCard";
import ContactSection from "@/components/ContactSection";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Teoría y práctica",
    desc: "Equilibrio único entre fundamentos legales y ejercicios de simulación en casos reales.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Docentes activos",
    desc: "Profesionales en ejercicio que aportan experiencia real del campo policial.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Proyección profesional",
    desc: "Formación que abre puertas en seguridad pública, privada e inteligencia criminal.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Enfoque comunitario",
    desc: "Estrategias de convivencia, prevención y servicio a la comunidad guatemalteca.",
  },
];

const photos = [
  { src: "/fotos-policia/1.png", caption: "Formación policial" },
  { src: "/fotos-policia/2.jpg", caption: "Prácticas de campo" },
  { src: "/fotos-policia/3.png", caption: "Actividades académicas" },
  { src: "/fotos-policia/4.jpg", caption: "Comunidad estudiantil" },
];

export default function Page() {
  return (
    <div>
      <NavBar />
      <PageHero
        title="Licenciatura en Ciencias Policiales"
        subtitle="Formación integral en aplicación de la ley, ética y seguridad ciudadana."
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Text */}
            <div className="lg:w-1/2">
              <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">El programa</p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
                Protege y sirve con{" "}
                <span className="text-udeo-red">formación de excelencia</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Sumérgete en el apasionante mundo de la aplicación de la ley y la
                  seguridad ciudadana. Este programa integral te brindará una educación
                  excepcional para formarte como un profesional altamente capacitado y
                  ético en el campo policial.
                </p>
                <p>
                  Desde técnicas avanzadas de investigación hasta la gestión de crisis,
                  obtendrás habilidades prácticas que te empoderarán para enfrentar los
                  desafíos cambiantes de la seguridad pública, con docentes activos en
                  el campo que te acompañan en todo el proceso.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block mt-8 bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                ¡Inscríbete hoy!
              </a>
            </div>

            {/* Highlights grid */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-udeo-red/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-udeo-red rounded-lg flex items-center justify-center text-white mb-3">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{h.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pensum */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="container m-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-2">Plan de estudios</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900">Pensum Académico</h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PensumCard index={1} period="Primer Cuatrimestre" courses={[
              "Cosmovisión de la Cultura Maya, Garífuna y Xinca",
              "Estrategias de Prevención Criminal",
              "Intervención Policial en Infancia y Adolescencia en Riesgo",
              "Urbanismo y Estrategias de Convivencia Ciudadana",
              "Seguridad Vial",
            ]} />
            <PensumCard index={2} period="Segundo Cuatrimestre" courses={[
              "La Actuación Policial en la Seguridad Colectiva",
              "Fenomenología Criminal de las Maras",
              "La Atención Policial a la Víctima",
              "Derecho de Policía",
              "Estadística Criminal",
            ]} />
            <PensumCard index={3} period="Tercer Cuatrimestre" courses={[
              "Migración y Trata de Personas",
              "Investigación Policial en Narcoactividad",
              "Informática Forense",
              "Casuística Policial en Secuestros, Extorsiones y Sicariato",
              "Técnicas de Entrevista e Interrogatorio Policial",
            ]} />
            <PensumCard index={4} period="Cuarto Cuatrimestre" courses={[
              "Organización y Planeación en Inteligencia Criminal",
              "Nuevas Tecnologías de la Criminalidad",
              "Análisis de Información Comunicacional y Lingüística Forense",
              "Investigación Policial en Violencia de Género",
              "Inteligencia Policial",
            ]} />
            <PensumCard index={5} period="Quinto Cuatrimestre" courses={[
              "Sistema Penitenciario",
              "Política Pública en Seguridad Privada",
              "Seguridad Turística y Ecológica",
              "Criminología de la Reacción Social",
              "Sistemas Operativos Policiales",
            ]} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-2">Nuestra comunidad</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900">Vida Académica</h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-md aspect-square"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{photo.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
