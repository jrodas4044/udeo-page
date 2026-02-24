"use client";

import Offerts from "@/components/offert";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import ContactForm from "@/components/ContactForm";
import HomeIntro from "@/components/HomeIntro";
import FingerPrintCard from "@/components/FingerPrintCard";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeIntro />

      {/* Faculty Description Section */}
      <div className="min-h-[calc(100vh-4rem)] flex items-center bg-white py-8 md:py-12">
        <div className="container m-auto px-4 md:px-8">
          <div className="flex md:flex-row flex-col gap-8 md:gap-12 items-center">
            {/* Text side */}
            <div className="md:w-1/2">
              <div className="border-l-4 border-udeo-red pl-6 mb-4">
                <p className="text-udeo-red font-semibold text-sm uppercase tracking-widest mb-1">
                  Nuestra Facultad
                </p>
                <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight">
                  Ciencias Forenses e{" "}
                  <span className="text-udeo-red">Investigación Criminal</span>
                </h2>
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                La Facultad de ciencias forenses e investigación criminal está
                comprometida con la sociedad en darle a nuestros estudiantes una
                educación integral de la más alta calidad tanto a nivel
                pregrado, posgrado, maestría y doctorado, basada en valores
                cristianos, éticos y la filosofía de la escuela austriaca de
                economía.
              </p>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                Creamos espacios que estimulen la formación, el debate, la
                crítica y el estudio científico, aportando los conocimientos de
                las diferentes ciencias que contribuyan a la prevención de
                hechos que transgredan la paz del ser humano.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-udeo-red font-bold hover:text-udeo-red-dark transition-colors group text-sm"
              >
                Conocer más sobre nosotros
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Photos side — compact grid */}
            <div className="md:w-1/2">
              <div className="gap-3 grid grid-cols-2 max-w-lg mx-auto">
                <div className="col-span-2 bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/fotos-portada/1.jpg"
                    alt="Imagen principal"
                    className="w-full h-40 md:h-52 object-cover"
                    width={600}
                    height={300}
                  />
                </div>
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/fotos-portada/2.jpg"
                    alt="Imagen 2"
                    className="w-full h-32 md:h-40 object-cover"
                    width={300}
                    height={200}
                  />
                </div>
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/fotos-portada/3.jpg"
                    alt="Imagen 3"
                    className="w-full h-32 md:h-40 object-cover"
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ¿Por qué estudiar? Section */}
      <div className="bg-udeo-gold-pale py-16 md:py-20">

        <div className="container m-auto px-4 md:px-8">
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-udeo-red font-semibold text-sm uppercase tracking-widest mb-3">
              Tu futuro empieza aquí
            </p>
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
              ¿Por qué estudiar en <br className="hidden md:block" />
              <span className="text-udeo-red">UDEO ext. Antonio Beristain</span>?
            </h2>
          </div>

          <div className="flex md:flex-row flex-col gap-8 items-center">
            {/* Benefits grid */}
            <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-udeo-red/20 transition-all duration-300">
                <div className="w-10 h-10 bg-udeo-red rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Pioneros en Guatemala</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Primera Facultad de Ciencias Forenses e Investigación Criminal del país.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-udeo-red/20 transition-all duration-300">
                <div className="w-10 h-10 bg-udeo-gold rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Expertos del País</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Programas impartidos por los mejores profesionales en investigación criminal.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-udeo-red/20 transition-all duration-300">
                <div className="w-10 h-10 bg-udeo-red rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Enfoque Práctico</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Infraestructura especializada y formación práctica en ciencias forenses.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-udeo-red/20 transition-all duration-300">
                <div className="w-10 h-10 bg-udeo-gold rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Oportunidades Laborales</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Formación integral que te abre las puertas al competitivo campo forense.</p>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-2/5">
              <div className="shadow-xl rounded-xl overflow-hidden">
                <Image
                  src="/1.png"
                  width={500}
                  height={600}
                  alt="UDEO Ext. BERISTAIN"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="/oferta-academica"
              className="inline-block bg-udeo-red text-white font-bold py-3 px-8 rounded-full hover:bg-udeo-red-dark transition-colors duration-300 shadow-lg text-lg"
            >
              ¡Únete a la vanguardia por la justicia!
            </a>
          </div>
        </div>
      </div>

      <div className="m-auto mb-8 p-4 container">
        <div className="mt-6 mb-8">
          <h1 className="mb-4 font-extrabold text-2xl text-gray-900 md:text-3xl lg:text-4xl">
            <span className="bg-clip-text bg-gradient-to-r from-udeo-red to-udeo-red-dark text-transparent">
              Oferta Académica
            </span>
          </h1>
        </div>
        <Offerts />
      </div>

      <div className="relative border-2 border-gray-800 bg-manila w-full">
        <div className="absolute inset-0 bg-[url('/texture/folder-texture.png')] opacity-30"></div>
        <div className="top-0 left-1/2 absolute border-2 border-gray-800 bg-udeo-red rounded-b-lg w-20 md:w-32 h-6 md:h-8 transform -translate-x-1/2"></div>
        <div className="m-auto px-4 md:px-0 py-6 md:py-8 container">
          <h2 className="mt-4 font-bold text-lg md:text-2xl text-center text-gray-900 uppercase">
            Informe de Solicitud de Información
          </h2>
          <hr className="border-gray-800 my-4 border-t-2" />
          <div className="border-gray-400 bg-white opacity-90 shadow-md mt-6 p-3 md:p-6 border">
            <div className="mb-4 text-gray-700 text-sm">
              <p>Número de caso: #INF-2023-001</p>
              <p>Fecha: {new Date().toLocaleDateString()}</p>
              <p>Departamento: Admisiones</p>
            </div>
            <div className="mb-4">
              <h3 className="mb-2 font-bold text-lg">
                Declaración del solicitante:
              </h3>
              <ContactForm></ContactForm>
            </div>
            <div className="mt-4 text-gray-500 text-xs">
              <p>
                Este documento es confidencial y está sujeto a investigación.
              </p>
              <p>Universidad De Occidente - Extensión Antonio Beristain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
