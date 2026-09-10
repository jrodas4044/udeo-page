import Image from "next/image";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

const benefits = [
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Actualización constante",
    desc: "Mantente al día con las últimas tendencias y avances en ciencias forenses e investigación criminal.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Horarios flexibles",
    desc: "Programas diseñados para profesionales en activo, con modalidades presencial y virtual.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    title: "Expertos del campo",
    desc: "Cada diplomado es impartido por profesionales activos en el ámbito forense y criminal.",
  },
  {
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: "Certificación oficial",
    desc: "Obtén reconocimiento académico avalado por la Universidad de Occidente.",
  },
];

const photos = [
  { src: "/fotos-diplomado/1.jpg", caption: "Actividades académicas" },
  { src: "/fotos-diplomado/2.jpg", caption: "Laboratorio forense" },
  { src: "/fotos-diplomado/3.jpg", caption: "Diplomados y eventos" },
  { src: "/fotos-diplomado/4.jpg", caption: "Comunidad estudiantil" },
];

export default function Page() {
  return (
    <div>
      <NavBar />
      <PageHero
        title="Diplomados"
        subtitle="Educación continua de alta calidad para profesionales que buscan especializarse en ciencias forenses."
      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
                Especialización forense para{" "}
                profesionales en activo
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  En la Facultad de Ciencias Forenses e Investigación Criminal ofrecemos una amplia variedad de diplomados diseñados para enriquecer tus habilidades. Desde técnicas forenses y análisis criminal hasta gestión de seguridad y prevención delictiva.
                </p>
                <p>
                  Nuestros programas son impartidos por expertos en cada campo, garantizando una experiencia educativa de alta calidad que te empoderará para marcar la diferencia en tu carrera.
                </p>
              </div>
              <a href="#contact" className="inline-block mt-8 bg-udeo-red hover:bg-udeo-red-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Solicitar información
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white border border-black/10 rounded-md p-5">
                  <div className="text-udeo-red mb-3">{b.icon}</div>
                  <h3 className="text-gray-900 text-sm mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-gray-900">Vida Académica</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="group relative rounded-md overflow-hidden aspect-square">
                <Image src={photo.src} alt={photo.caption} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover" />
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
