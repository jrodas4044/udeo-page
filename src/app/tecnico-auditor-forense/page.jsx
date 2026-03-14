"use client";

import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import PensumCard from "@/components/PensumCard";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div>
      <NavBar />
      <PageHero
        title="Técnico Auditor Forense en Investigaciones Criminales"
        subtitle="Forma parte de la vanguardia en investigación criminal y análisis forense."
      />
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/2">
              <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">El programa</p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight mb-6">
                Análisis forense aplicado a la <span className="text-udeo-red">justicia criminal</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                El técnico auditor forense e investigador criminal tendrá la capacidad de hacer análisis concretos sobre la criminalidad, aprovechando recursos tecnológicos para realizar auditorías de evidencia circunstancial que permita el esclarecimiento de hechos que atenten contra la paz social.
              </p>
              <a href="#contact" className="inline-block bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                ¡Inscríbete hoy!
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>, title: "Auditoría forense", desc: "Técnicas avanzadas para el análisis y documentación de evidencia criminal." },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Criminalística aplicada", desc: "Procesamiento de escena del crimen con metodología científica rigurosa." },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, title: "Formación integral", desc: "Derecho, anatomía forense, psicología criminal y más en 6 semestres." },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, title: "Pasarela académica", desc: "Puente directo hacia la Licenciatura en Investigación Criminal y Seguridad." },
              ].map((h, i) => (
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

      <section className="bg-gray-50 py-14 px-4">
        <div className="container m-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-2">Plan de estudios</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900">Pensum Académico</h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PensumCard index={1} period="1er Semestre" courses={[
              "Fundamentos del derecho",
              "Principios de la investigación técnica forense",
              "Anatomía forense",
              "Planimetría, técnicas audiovisuales y documentación judicial",
              "Criminalística I",
            ]} />
            <PensumCard index={2} period="2do Semestre" courses={[
              "Desviología Criminológica",
              "Técnicas especiales de Investigación",
              "Oratoria y lenguaje forense",
              "Razón y fe",
              "Sistemas de identificación criminal y Lofoscopía",
            ]} />
            <PensumCard index={3} period="3er Semestre" courses={[
              "Auditoria forense I",
              "Estudio de la Constitución Política de la República de Guatemala",
              "Tanatología forense",
              "Proceso Económico I",
              "Investigación criminal, análisis de casos",
              "Fotografía Audiovisual y Forense",
            ]} />
            <PensumCard index={4} period="4to Semestre" courses={[
              "Auditoria forense II",
              "Rastros biológicos y química forense",
              "La evidencia criminal y el valor probatorio",
              "Proceso económico II",
              "Psicología criminal",
            ]} />
            <PensumCard index={5} period="5to Semestre" courses={[
              "Evidencia criminalística en documentos, protocolos forenses y otros formatos",
              "Antropología criminal guatemalteca",
              "Física forense, pruebas balísticas y explosivos",
              "Filosofía social de Hayek",
              "Laboratorio de Investigación criminal",
              "Laboratorio de auditoria forense",
            ]} />
            <PensumCard index={6} period="6to Semestre" courses={[
              "Filosofía Social de Mises — El perito en el proceso penal",
              "Análisis delictivo, gestión de calidad forense",
              "Técnicas de redacción de informes",
              "Auditoria forense financiera",
              "Procesamiento del escenario criminal — Ejercicio profesional supervisado",
            ]} />
          </div>
        </div>
      </section>

      <section className="bg-udeo-charcoal py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-2">Información del programa</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white">Todo lo que necesitas saber</h2>
            <div className="w-16 h-1 bg-udeo-gold mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Requisitos */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-udeo-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-udeo-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <h3 className="text-white font-bold text-lg">Requisitos</h3>
              </div>
              <ul className="space-y-2.5">
                {["Currículum Vitae", "Cierre de Pensum Diversificado", "Carta de Exposición de Motivos", "Fotostática de título de Diversificado (con sello de Contraloría, SAT y 3 fotocopias)", "Fotocopias del DPI", "Certificación de nacimiento emitida por RENAP reciente y 3 fotocopias", "4 fotografías tamaño cédula a color con ropa formal", "Carencia de antecedentes penales y policiacos"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-udeo-gold mt-[5px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Costos */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-udeo-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-udeo-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-white font-bold text-lg">Costos</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Inscripción", value: "Q650", note: "Consulta nuestras promociones" },
                  { label: "Mensualidad", value: "Q700", note: null },
                  { label: "Biblioteca Virtual", value: "Q10", note: "Por mes" },
                ].map((cost, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0">
                    <div>
                      <p className="text-white font-semibold text-sm">{cost.label}</p>
                      {cost.note && <p className="text-white/40 text-xs mt-0.5">{cost.note}</p>}
                    </div>
                    <span className="text-udeo-gold font-black text-xl">{cost.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horario */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-udeo-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-udeo-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-white font-bold text-lg">Horarios</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-udeo-gold font-bold text-sm mb-1">Jornada Vespertina</p>
                  <p className="text-white/70 text-sm">Martes, miércoles y jueves</p>
                  <p className="text-white font-semibold text-sm">17:00 – 21:00 hrs</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-udeo-gold font-bold text-sm mb-1">Jornada Sabatina</p>
                  <p className="text-white/70 text-sm">Sábados</p>
                  <p className="text-white font-semibold text-sm">08:00 – 18:00 hrs</p>
                </div>
              </div>
            </div>

            {/* Duración */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-udeo-gold/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-udeo-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-white font-bold text-lg">Duración</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-udeo-gold leading-none">3</span>
                  <div>
                    <p className="text-white font-bold text-lg">años</p>
                    <p className="text-white/50 text-sm">Técnico Auditor Forense</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4 mt-2">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Al finalizar, puedes continuar con la <span className="text-white font-semibold">Licenciatura en Investigación Criminal y Seguridad</span> con una duración adicional de 2 años.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
