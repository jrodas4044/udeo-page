"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import PensumCard from "@/components/PensumCard";
import ContactSection from "@/components/ContactSection";

const objectives = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    title: "Liderazgo en investigación",
    desc: "Liderar iniciativas conforme a la realidad social, cultural, política, científica y de justicia.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    title: "Generación de conocimiento",
    desc: "Capacitar científicos generadores de conocimiento en las interdisciplinas de la administración de justicia.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Política criminal",
    desc: "Formular métodos que permitan evaluar y desarrollar estrategias ante los retos globales de criminalidad.",
  },
];

const photos = [
  { src: "/fotos-doctorado/1.jpg", caption: "Seminario doctoral" },
  { src: "/fotos-doctorado/2.jpg", caption: "Docentes internacionales" },
  { src: "/fotos-doctorado/3.jpg", caption: "Investigación avanzada" },
  { src: "/fotos-doctorado/4.jpg", caption: "Comunidad doctoral" },
];

const lineasInvestigacion = [
  "Prevención de la criminalidad",
  "Modelos sociológicos del crimen",
  "Políticas públicas relacionadas al delito y sus consecuencias",
  "Modelos de atención victimal",
  "Ciencias forenses",
  "Las fuentes del derecho dentro del sistema de justicia",
  "Modelos de humanización democrática",
  "Economía y mercado — análisis en materia criminal",
];

const requisitosIngreso = [
  "Título que acredite el grado de maestría en ciencias exactas, jurídicas, tecnológicas, humanísticas o afines",
  "Título en grado de licenciatura",
  "Méritos que puedan ser de interés en la valoración del candidato(a) a doctor",
  "Propuesta de formulación de tesis en cinco páginas sobre una línea de investigación",
  "Síntesis curricular con investigaciones o publicaciones previas, si las hubiere",
];

const fasesModulo = [
  { code: "IIM", name: "Inducción Inicial del Módulo" },
  { code: "ADC", name: "Análisis y Desarrollo Crítico" },
  { code: "MD", name: "Medición Didáctica" },
  { code: "CE", name: "Conversatorio con el docente titular" },
];

export default function Page() {
  return (
    <div>
      <NavBar />
      <PageHero
        title="Doctorado en Justicia Criminal y Ciencias Forenses"
        subtitle="Propón líneas estratégicas de acción en política criminal aplicando las Ciencias Forenses."
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">Doctorado</p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight max-w-2xl">
                El nivel más alto de formación en <span className="text-udeo-red">ciencias forenses</span>
              </h2>
            </div>
            <a
              href="https://drive.google.com/file/d/1B_5_M89Y_0EBERUUIiup55Kf2xEk7vNK/view"
              target="_blank"
              className="flex-shrink-0 flex items-center gap-2 font-bold px-5 py-2.5 text-sm bg-udeo-red text-white hover:bg-udeo-red-dark rounded-full transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Descargar Folleto
            </a>
          </div>
          <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-12 max-w-3xl">
            <p>Programa integral diseñado para que los egresados propongan a la sociedad líneas estratégicas de acción a corto, mediano y largo plazo en política criminal y justicia, aplicando los métodos y técnicas de las Ciencias Forenses.</p>
            <p>Impartido por un selecto grupo de docentes internacionales que actúan como guías en cada investigación doctoral.</p>
          </div>

          {/* Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-udeo-red/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-udeo-red rounded-xl flex items-center justify-center text-white mb-4">{obj.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{obj.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{obj.desc}</p>
              </div>
            ))}
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

      {/* Líneas + Requisitos */}
      <section className="bg-udeo-gold-pale py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-2">Investigación doctoral</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900">Líneas y Requisitos</h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-udeo-red rounded-full inline-block" />
                Líneas de Investigación
              </h3>
              <p className="text-gray-500 text-sm mb-4">El postulante realizará su investigación doctoral sobre una de las siguientes problemáticas:</p>
              <ul className="space-y-2.5">
                {lineasInvestigacion.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-udeo-red mt-[5px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-udeo-gold rounded-full inline-block" />
                Requisitos de Ingreso
              </h3>
              <p className="text-gray-500 text-sm mb-4">El postulante presentará una carta de exposición de motivos incluyendo:</p>
              <ul className="space-y-2.5">
                {requisitosIngreso.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-udeo-gold mt-[5px] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="bg-udeo-charcoal py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-2">Metodología ABI</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white">Metodología del Programa</h2>
            <div className="w-16 h-1 bg-udeo-gold mx-auto mt-4 rounded-full" />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-white/60 text-base text-center leading-relaxed mb-10">
              Vinculamos a profesionales nacionales e internacionales en el estudio interdisciplinario de los paradigmas de la criminalidad y justicia. La Facultad adoptó la metodología <strong className="text-white">ABI</strong> para desarrollar competencias de aprendizaje analítica, lógica y creativa.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fasesModulo.map((fase, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-udeo-gold/30 transition-all duration-300">
                  <span className="inline-block bg-udeo-red text-white text-xs font-black px-3 py-1 rounded-full mb-3">{fase.code}</span>
                  <p className="text-white/80 text-sm leading-snug">{fase.name}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm text-center mt-6">
              Cada módulo tiene una duración de seis semanas en modalidad semipresencial, con seminario discursivo y visita del docente internacional.
            </p>
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
            <PensumCard index={1} period="Constructo de la conducta desviada" description="Teorías epistemológicas y criminológicas." />
            <PensumCard index={2} period="Justicia penal especializada" description="El rol de la justicia criminal." />
            <PensumCard index={3} period="Articulación de las ciencias forenses en el sistema de justicia" description="Estudio de casos." />
            <PensumCard index={4} period="Construcción de la política criminal de justicia" description="Victimal, restaurativa y adolescentes en conflicto con la ley." />
            <PensumCard index={5} period="Política criminal de justicia preventiva, de seguridad y penitenciaria" description="Construcción de modelos de prevención y seguridad." />
            <PensumCard index={6} period="Criminalidad corporativa" description="Doctrina, aspectos sustantivos y procesales, cooperación transnacional, políticas públicas en materia de prevención." />
            <PensumCard index={7} period="Cientificidad de las pruebas en el proceso" description="Componentes esenciales de las ciencias forenses." />
            <PensumCard index={8} period="Construcción de escenarios en la cultura política" description="Estructuras institucionales, alianzas y luchas políticas — corrupción en los organismos del estado." />
            <PensumCard index={9} period="Alternativas y cambios penales contemporáneos" description="Derecho comparado de políticas de justicia criminal." />
            <PensumCard index={10} period="La economía" description="Condiciones económicas y sociales conducentes de criminalidad." />
            <PensumCard index={11} period="Geopolítica y gobernanza" description="Análisis geopolítico aplicado a la seguridad y justicia." />
            <PensumCard index={12} period="La comunidad social estratégica" description="El sistema de justicia ante la sociedad." />
            <PensumCard index={13} period="Metodología de la investigación científica" description="Fundamentos metodológicos para la investigación doctoral." />
            <PensumCard index={14} period="Cursos filosóficos" description="Bases filosóficas del pensamiento jurídico y criminal." />
          </div>
        </div>
      </section>

      {/* Perfil de egreso */}
      <div className="bg-udeo-gold-pale py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-2">Egresados</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900">Perfil de Egreso</h2>
            <div className="w-16 h-1 bg-udeo-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>El Doctorado en Justicia Criminal y Ciencias Forenses posee el liderazgo académico nacional e internacional en las ciencias forenses; desde el 2012 con la creación de la primera Facultad de Ciencias Forenses e Investigación Criminal en Guatemala promovemos nuevos desafíos interdisciplinarios con conciencia social.</p>
            <p>Nuestros egresados profundizan los valores de la filosofía libertaria de nuestra casa de estudios, inspirando la formación de profesionales íntegros basados en el espíritu solidario.</p>
            <p>La Facultad asume el compromiso de crear alianzas con el sector público y privado para la difusión de las tesis doctorales que permitan establecer lineamientos científicos en el abordaje de la justicia, la equidad y la violencia.</p>
          </div>
        </div>
      </div>

      {/* Costos */}
      <section className="bg-udeo-charcoal py-14 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-2">Inversión</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white">Costos del Programa</h2>
            <div className="w-16 h-1 bg-udeo-gold mx-auto mt-4 rounded-full" />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { label: "Inscripción por módulo", qty: "×18 módulos", value: "Q500.00", note: "Incluye libro físico del docente, guía programática y plataforma" },
              { label: "Mensualidades", qty: "×24 meses", value: "Q2,000.00", note: null },
              { label: "Inscripción anteproyecto de tesis", qty: null, value: "Q1,000.00", note: "Revisión y desarrollo de propuesta metodológica" },
              { label: "Defensa de tesis doctoral", qty: null, value: "Q3,600.00", note: "Proceso final" },
              { label: "Trámite de graduación", qty: null, value: "Q2,000.00", note: "Proceso final" },
            ].map((cost, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-white font-semibold text-sm">{cost.label}</p>
                    {cost.qty && <span className="text-white/40 text-xs">{cost.qty}</span>}
                  </div>
                  {cost.note && <p className="text-white/40 text-xs mt-0.5">{cost.note}</p>}
                </div>
                <span className="text-udeo-gold font-black text-lg whitespace-nowrap">{cost.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
