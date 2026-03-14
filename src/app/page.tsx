"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import HomeIntro from "@/components/HomeIntro";
import NavBar from "@/components/NavBar";
import FacultySection from "@/components/FacultySection";
import WhyStudySection from "@/components/WhyStudySection";
import AcademicOffersSection from "@/components/AcademicOffersSection";
export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeIntro />

      {/* Stats bar */}
      <div className="bg-udeo-red text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">14+</p>
              <p className="text-xs uppercase tracking-widest mt-2 text-white/75">Años de experiencia</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">5</p>
              <p className="text-xs uppercase tracking-widest mt-2 text-white/75">Programas académicos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">+3,000</p>
              <p className="text-xs uppercase tracking-widest mt-2 text-white/75">Graduados</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold">1°</p>
              <p className="text-xs uppercase tracking-widest mt-2 text-white/75">Facultad Forense en Guatemala</p>
            </div>
          </div>
        </div>
      </div>

      <FacultySection />

      <WhyStudySection />

      <AcademicOffersSection />

      {/* Contact Section */}
      <div id="contact" className="bg-udeo-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-udeo-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Contáctanos
              </p>
              <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight">
                ¿Listo para dar el <span className="text-udeo-gold">siguiente paso</span>?
              </h2>
              <p className="text-white/50 mt-4 text-base">
                Déjanos tus datos y un asesor se pondrá en contacto contigo.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
