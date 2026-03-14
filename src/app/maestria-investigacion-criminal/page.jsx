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
        title="Maestría en Investigación Criminal"
        subtitle="Conviértete en líder en el campo de la justicia y la seguridad con formación avanzada."
      />
      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">Posgrado</p>
              <h2 className="font-extrabold text-3xl md:text-4xl text-gray-900 leading-tight">
                Liderazgo en <span className="text-udeo-red">investigación criminal avanzada</span>
              </h2>
            </div>
            <a
              href="https://drive.google.com/file/d/1HYarbjdo_fnudAOoMCcKXUrvsREFSYJn/view?usp=drive_link"
              target="_blank"
              className="flex-shrink-0 flex items-center gap-2 font-bold px-5 py-2.5 text-sm bg-udeo-red text-white hover:bg-udeo-red-dark rounded-full transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Descargar Folleto
            </a>
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-12">
            Diseñada para quienes buscan convertirse en líderes en el campo de la justicia y la seguridad, esta maestría te brindará las habilidades, el conocimiento y la perspicacia necesarios para abordar los desafíos más apremiantes de nuestra sociedad.
          </p>

          {/* Perfil de egreso */}
          <div>
            <p className="text-udeo-red font-semibold text-xs uppercase tracking-widest mb-3">Perfil de egreso</p>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-6">Competencias que desarrollarás</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Análisis e interpretación de indicios",
                "Reconstrucción de hechos criminales",
                "Investigaciones de campo",
                "Diseño de programas de prevención criminal",
                "Estrategias de seguridad",
                "Investigación en delitos bancarios",
                "Seguridad e integridad en investigaciones",
                "Asesoría en inteligencia",
                "Planificación de servicios de inteligencia",
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-udeo-red/20 transition-all">
                  <span className="w-2 h-2 rounded-full bg-udeo-red flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{skill}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PensumCard index={1} period="Primer Semestre" courses={[
              "Historia de las ciencias forenses y la investigación criminal",
              "Ética, Cultura y Valores",
              "Axiomas de la investigación criminal — método científico aplicado en la reconstrucción de un hecho",
              "Análisis de la conducta desviada criminológica, Semiología criminal",
              "Proceso económico I",
            ]} />
            <PensumCard index={2} period="Segundo Semestre" courses={[
              "Fundamentación legal de la argumentación pericial y forense",
              "Sistemas de identificación criminalísticos",
              "Aplicación de las ciencias biológicas, químicas, físicas y fisiológicas a la investigación criminal — cadena de custodia",
              "El uso de la informática y las telecomunicaciones en la investigación criminal",
              "Proceso económico II",
            ]} />
            <PensumCard index={3} period="Tercer Semestre" courses={[
              "Seminario de tesis I",
              "Medicina forense, Lesionología, Sexología forense",
              "Filosofía social de Mises",
              "Investigación Técnica judicial: laboratorio casuística I",
              "Métodos de investigación criminal aplicados al manejo de crisis en casos de secuestro",
            ]} />
            <PensumCard index={4} period="Cuarto Semestre" courses={[
              "Filosofía Social de Hayek",
              "Investigación de Delitos Económicos y Financieros",
              "Seminario de Tesis II",
              "Procesos de Inteligencia e Investigación Criminal",
            ]} />
          </div>
        </div>
      </section>

      <section className="bg-udeo-charcoal py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-2">Conoce más</p>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white">El programa en acción</h2>
            <div className="w-16 h-1 bg-udeo-gold mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "https://www.youtube.com/embed/fa9kZibb8nM", title: "Presentación del programa" },
              { src: "https://www.youtube.com/embed/AS5nNBHOk3U", title: "Testimonio de egresados" },
            ].map((video, i) => (
              <div key={i} className="group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10 hover:ring-udeo-gold/40 transition-all duration-300">
                  <iframe
                    className="w-full"
                    src={video.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    height={340}
                    title={video.title}
                  />
                </div>
                <p className="text-white/50 text-sm text-center mt-3 group-hover:text-white/80 transition-colors">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
