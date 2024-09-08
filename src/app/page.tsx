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

      <div className="flex items-center">
        <div className="w-full">
          <div className="flex md:flex-row flex-col gap-8 m-auto p-4 container">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="mb-4 font-extrabold text-2xl text-gray-900 md:text-3xl lg:text-4xl">
                <span className="bg-clip-text bg-gradient-to-r from-cardboard-dark to-cardboard-light text-transparent">
                  Facultad de Ciencias Forenses <br /> e Investigación Criminal
                </span>
              </h1>
              <p className="bg-cardboard-lighter bg-opacity-70 shadow-inner p-4 rounded-lg font-normal text-cardboard-darker text-sm lg:text-base">
                La Facultad de ciencias forenses e investigación criminal está
                comprometida con la sociedad en darle a nuestros estudiantes una
                educación integral de la más alta calidad tanto a nivel
                pregrado, posgrado, maestría y doctorado, basada en valores
                cristianos, éticos y la filosofía de la escuela austriaca de
                economía, creando espacios que estimulen la formación, el
                debate, la crítica, el estudio científico, aportando los
                conocimientos de las diferentes ciencias que contribuyan a la
                prevención de hechos que transgredan la paz del ser humano.
              </p>
            </div>
            <div className="flex flex-col justify-center md:w-1/2">
              <div className="gap-4 grid grid-cols-2 m-16">
                <div className="relative col-span-2 bg-white shadow-md p-3 rounded-lg transform rotate-1">
                  <div className="top-0 left-0 absolute bg-yellow-100 opacity-20 w-full h-full"></div>
                  <Image
                    src="/fotos-portada/1.jpg"
                    alt="Imagen principal"
                    className="border-4 border-white w-full"
                    width={100}
                    height={60}
                    layout="responsive"
                  />
                  <p className="mt-2 font-bold text-gray-700 text-sm">
                    Indicio #1
                  </p>
                </div>
                <div className="relative bg-white shadow-md p-2 rounded-lg transform -rotate-2">
                  <div className="top-0 left-0 absolute bg-yellow-100 opacity-20 w-full h-full"></div>
                  <Image
                    src="/fotos-portada/2.jpg"
                    alt="Imagen 2"
                    className="border-4 border-white w-full"
                    width={150}
                    height={200}
                  />
                  <p className="mt-2 font-bold text-gray-700 text-sm">
                    Indicio #2
                  </p>
                </div>
                <div className="relative bg-white shadow-md p-2 rounded-lg transform rotate-2">
                  <div className="top-0 left-0 absolute bg-yellow-100 opacity-20 w-full h-full"></div>
                  <Image
                    src="/fotos-portada/3.jpg"
                    alt="Imagen 3"
                    className="border-4 border-white w-full"
                    width={150}
                    height={200}
                  />
                  <p className="mt-2 font-bold text-gray-700 text-sm">
                    Indicio #3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-cardboard-light overflow-hidden">
        <div className="top-0 left-0 absolute bg-[url('/textures/cardboard-texture.png')] opacity-30 w-full h-full"></div>
        <div className="top-0 left-0 absolute bg-gradient-to-br from-cardboard-darker via-cardboard to-cardboard-light opacity-40 w-full h-full"></div>
        <div className="relative z-10 flex md:flex-row flex-col justify-center items-center m-auto p-8 w-full">
          <div className="flex-1 bg-cardboard-lighter bg-opacity-70 shadow-inner p-6 rounded-lg">
            <h1 className="border-cardboard-darker pb-4 border-b font-bold text-3xl text-cardboard-darker text-center">
              ¿Por qué estudiar en <br /> UDEO ext. Antonio Beristain?
            </h1>
            <p className="mt-6 text-cardboard-dark">
              Descubre la excelencia académica en la primera Facultad de
              Ciencias Forenses e Investigación Criminal de Guatemala. Nuestros
              programas únicos, impartidos por los mejores expertos del país, te
              brindarán los conocimientos y habilidades necesarios para
              destacarte en el apasionante campo de la investigación criminal.
              Con una infraestructura especializada y enfoque práctico, te
              garantizamos una formación integral y las mejores oportunidades
              laborales.
            </p>
            <h2 className="mt-6 font-bold text-cardboard-darker text-center text-xl">
              ¡Únete a nosotros y sé parte de la vanguardia en la lucha por la
              justicia!
            </h2>
          </div>

          <div className="relative bg-white shadow-xl mt-8 md:mt-0 md:ml-8 p-4 rounded-lg transform -rotate-3">
            <div className="top-0 left-0 absolute bg-cardboard-lighter opacity-20 w-full h-full"></div>
            <Image
              src="/1.png"
              width={600}
              height={600}
              alt="UDEO Ext. BERISTAIN"
              className="border-4 border-white w-full h-full object-cover"
            />
            <p className="mt-2 font-bold text-cardboard-darker text-sm">
              Indicio #4
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto mb-8 p-4 container">
        <div className="mt-6 mb-8">
          <h1 className="mb-4 font-extrabold text-2xl text-gray-900 md:text-3xl lg:text-4xl">
            <span className="bg-clip-text bg-gradient-to-r from-cardboard-dark to-cardboard-light text-transparent">
              Oferta Académica
            </span>
          </h1>
        </div>
        <Offerts />
      </div>

      <div className="relative border-2 border-gray-800 bg-manila w-full">
        <div className="absolute inset-0 bg-[url('/texture/folder-texture.png')] opacity-30"></div>
        <div className="top-0 left-1/2 absolute border-2 border-gray-800 bg-manila bg-red-800 rounded-b-lg w-32 h-8 transform -translate-x-1/2"></div>
        <div className="m-auto py-8 container">
          <h2 className="mt-4 font-bold text-2xl text-center text-gray-900 uppercase">
            Informe de Solicitud de Información
          </h2>
          <hr className="border-gray-800 my-4 border-t-2" />
          <div className="border-gray-400 bg-white opacity-90 shadow-md mt-6 p-6 border">
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
