"use client";

import NavBar from "@/components/NavBar";
import Offerts from "@/components/offert";
import ContactForm from "@/components/ContactForm";

export default function OfertaAcademica() {
  return (
    <div>
      <NavBar />
      <div className="pt-28">
        <div className="container m-auto p-4 mt-6">
          <h1 className="mb-12 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-udeo-red-dark from-udeo-red">
              Oferta Académica
            </span>
          </h1>
          <p className="text-center text-gray-700 text-lg max-w-3xl m-auto mb-8">
            Conoce nuestros programas académicos en ciencias forenses e
            investigación criminal. Formación integral de la más alta calidad a
            nivel técnico, licenciatura, maestría y doctorado.
          </p>
        </div>

        <div className="container m-auto mb-8 p-4">
          <Offerts />
        </div>

        <div className="relative bg-udeo-red overflow-hidden">
          <div className="top-0 left-0 absolute bg-[url('/textures/cardboard-texture.png')] opacity-10 w-full h-full"></div>
          <div className="top-0 left-0 absolute bg-gradient-to-br from-udeo-red-dark via-udeo-red to-udeo-red-light opacity-30 w-full h-full"></div>
          <div className="relative z-10 m-auto p-8 container">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-center text-white/80 mb-6">
              Completa el formulario y un asesor se pondrá en contacto contigo.
            </p>
            <div className="bg-white/90 shadow-inner p-6 rounded-lg max-w-2xl m-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
