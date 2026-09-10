import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import PensumCard from "@/components/PensumCard";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Técnico Auditor Forense en Investigaciones Criminales",
  description:
    "Carrera técnica en auditoría forense e investigación criminal en Guatemala. Forma parte de la vanguardia en análisis forense con docentes activos en el campo.",
};

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
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                Análisis forense aplicado a la justicia criminal
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                El técnico auditor forense e investigador criminal tendrá la capacidad de hacer análisis concretos sobre la criminalidad, aprovechando recursos tecnológicos para realizar auditorías de evidencia circunstancial que permita el esclarecimiento de hechos que atenten contra la paz social.
              </p>
              <a href="#contact" className="inline-block bg-udeo-red hover:bg-udeo-red-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Solicitar información
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>, title: "Auditoría forense", desc: "Técnicas avanzadas para el análisis y documentación de evidencia criminal." },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Criminalística aplicada", desc: "Procesamiento de escena del crimen con metodología científica rigurosa." },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, title: "Formación integral", desc: "Derecho, anatomía forense, psicología criminal y más en 6 semestres." },
                { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, title: "Pasarela académica", desc: "Puente directo hacia la Licenciatura en Investigación Criminal y Seguridad." },
              ].map((h, i) => (
                <div key={i} className="bg-white border border-black/10 rounded-md p-5">
                  <div className="text-udeo-red mb-3">{h.icon}</div>
                  <h3 className="text-gray-900 text-sm mb-1">{h.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="container m-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-gray-900">Pensum Académico</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PensumCard index={1} period="1er Semestre" courses={[
              "Fundamentos de Derecho",
              "Principios de la Investigación Técnica Forense",
              "Anatomía Forense",
              "Planimetría, Técnicas Audiovisuales y Documentación Judicial",
              "Criminalística I",
            ]} />
            <PensumCard index={2} period="2do Semestre" courses={[
              "Desviología Criminológica",
              "Técnicas Especiales de Investigación",
              "Oratoria y Lenguaje Forense",
              "Ética, Cultura y Valores",
              "Sistemas de Identificación Criminal y Lofoscopía",
            ]} />
            <PensumCard index={3} period="3er Semestre" courses={[
              "Auditoría Forense I",
              "Estudio de la Constitución Política de la República de Guatemala",
              "Tanatología Forense",
              "Proceso Económico I",
              "Investigación Criminal, Análisis de Casos",
              "Fotografía Audiovisual y Forense",
            ]} />
            <PensumCard index={4} period="4to Semestre" courses={[
              "Auditoría Forense II",
              "Rastros Biológicos y Química Forense",
              "La Evidencia Criminal y El Valor Probatorio",
              "Proceso Económico II",
              "Psicología Criminal",
            ]} />
            <PensumCard index={5} period="5to Semestre" courses={[
              "Evidencia Criminalística en Documentos, Protocolos Forenses y Otros Formatos",
              "Antropología Criminal Guatemalteca",
              "Física Forense, Pruebas Balísticas y Explosivos",
              "Filosofía Social de Hayek",
              "Laboratorio de Investigación Criminal",
              "Laboratorio de Auditoría Forense",
            ]} />
            <PensumCard index={6} period="6to Semestre" courses={[
              "Filosofía Social de Mises",
              "El Perito en el Proceso Penal",
              "Análisis Delictivo, Gestión de Calidad Forense",
              "Técnicas de Redacción de Informes",
              "Auditoría Forense Financiera",
              "Procesamiento del Escenario Criminal. Ejercicio Profesional Supervisado",
            ]} />
          </div>
        </div>
      </section>

      <section className="bg-udeo-charcoal py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-white">Todo lo que necesitas saber</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Requisitos */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <h3 className="text-white text-lg">Requisitos</h3>
              </div>
              <ul className="space-y-2.5">
                {["Síntesis curricular en una hoja.", "Cierre de Pensum Diversificado.", "Carta donde exponga su deseo de incorporarte a la Facultad de Ciencias Forenses.", "3 Copias oficio del título de diversificado con sello de la Contraloría General de Cuentas (en alta definición).", "Fotocopia del DPI.", "Certificación de Nacimiento emitida por RENAP.", "4 Fotografías tamaño cédula a color, reciente con ropa formal.", "Carencia de Antecedentes Penales y Policíacos.", "Folder Oficio Color Negro, con gancho."].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-udeo-gold mt-[5px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Costos */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-udeo-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-white text-lg">Costos</h3>
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
                    <span className="text-udeo-gold font-serif text-2xl">{cost.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horario */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-white text-lg">Horarios</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-md p-4">
                  <p className="text-udeo-gold font-bold text-sm mb-1">Jornada Vespertina</p>
                  <p className="text-white/70 text-sm">Martes, miércoles y jueves</p>
                  <p className="text-white font-semibold text-sm">17:00 – 21:00 hrs</p>
                </div>
                <div className="bg-white/5 rounded-md p-4">
                  <p className="text-udeo-gold font-bold text-sm mb-1">Jornada Sabatina</p>
                  <p className="text-white/70 text-sm">Sábados</p>
                  <p className="text-white font-semibold text-sm">08:00 – 18:00 hrs</p>
                </div>
              </div>
            </div>

            {/* Duración */}
            <div className="bg-white/5 border border-white/10 rounded-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-udeo-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-white text-lg">Duración</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-6xl text-udeo-gold leading-none">3</span>
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
