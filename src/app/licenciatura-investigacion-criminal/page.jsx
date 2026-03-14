"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import PensumCard from "@/components/PensumCard";
import ContactSection from "@/components/ContactSection";

const highlights = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    title: "Investigación criminal",
    desc: "Análisis preciso de la criminalidad con recursos tecnológicos de vanguardia.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Metodología científica",
    desc: "Aplicación rigurosa de métodos científicos en cada investigación.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Trabajo en equipo",
    desc: "Planificación, organización y colaboración como ejes de la formación.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
    title: "Servicio a la comunidad",
    desc: "Profesionales formados para marcar una diferencia tangible en la sociedad.",
  },
];

const photos = [
  { src: "/fotos-lic/1.jpg", caption: "Investigación aplicada" },
  { src: "/fotos-lic/2.jpg", caption: "Prácticas de campo" },
  { src: "/fotos-lic/3.jpg", caption: "Actividades académicas" },
  { src: "/fotos-lic/4.jpg", caption: "Comunidad estudiantil" },
];

export default function Page() {
  return (
    <div>
      <NavBar />
      <PageHero
        title="Licenciatura en Investigación Criminal y Seguridad"
        subtitle="Desarrolla las habilidades esenciales para enfrentar los desafíos de la justicia y la seguridad."
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/2">
              <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">El programa</p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
                Conviértete en experto en{" "}
                <span className="text-udeo-red">seguridad e investigación</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  La Licenciatura en Investigación Criminal y Seguridad te brindará las habilidades esenciales para enfrentar los desafíos en el ámbito de la justicia. Los graduados estarán equipados para llevar a cabo análisis precisos de la criminalidad, utilizando recursos tecnológicos para auditar la evidencia circunstancial y esclarecer eventos que amenacen la paz social.
                </p>
                <p>
                  Nuestro programa fomenta la adquisición continua de conocimientos, promoviendo la responsabilidad y la ética en cada paso, con un fuerte sentido de servicio a la comunidad.
                </p>
              </div>
              <a href="#contact" className="inline-block mt-8 bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                ¡Inscríbete hoy!
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-udeo-red/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-udeo-red rounded-lg flex items-center justify-center text-white mb-3">{h.icon}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PensumCard index={1} period="Primer Semestre" courses={[
              "Metodología para la Elaboración de Tesis",
              "Investigación de Estructuras Criminales",
              "Fundamentos de Seguridad",
              "Documentoscopía y Grafotecnia",
              "Análisis de Información Comunicacional y Lingüística Forense",
              "Proceso Económico I",
            ]} />
            <PensumCard index={2} period="Segundo Semestre" courses={[
              "Seguridad Criminal Operacional",
              "Sociología Criminal",
              "Técnicas de Entrevista e Interrogatorio Forenses",
              "Proyecciones Estratégicas de la Política Criminal",
              "Administración de Seguridad y Riesgo",
              "Mecánica de Hechos Simulación Virtual, Posición Víctima-Victimario",
              "Proceso Económico",
            ]} />
            <PensumCard index={3} period="Tercer Semestre" courses={[
              "Dirección y Administración de Unidades Especializadas en Investigación de Delitos",
              "Accidentología Vial",
              "Investigaciones en Seguridad Bancaria",
              "Retórica y Oratoria Forense",
              "Metodología de la Investigación Científica en Dictámenes Periciales",
              "Praxeología Criminal I. Ejercicio Profesional Supervisado",
              "Filosofía Social de Mises",
            ]} />
            <PensumCard index={4} period="Cuarto Semestre" courses={[
              "Organización y Planeación en Inteligencia Criminal",
              "Informática Forense",
              "Seguridad e Inteligencia Criminal",
              "Teoría y Manejo de Casos en el Proceso Penal Acusatorio",
              "Victimodogmática",
              "Praxeología Criminal II. Ejercicio Profesional Supervisado",
              "Filosofía Social de Hayek",
              "Ética, Cultura y Valores",
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
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md aspect-square">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
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
