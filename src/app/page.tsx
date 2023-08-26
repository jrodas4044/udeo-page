"use client";

import Offerts from "@/components/offert";
import Image from "next/image";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Carousel className="w-full hidden md:block" style={{ height: "500px" }}>
        <Image alt="..." width={1400} height={500} src="/hero2.png" />

        <Image alt="..." width={1400} height={500} src="/hero3.png" />
      </Carousel>

      <Carousel className="w-full sm:hidden" style={{ height: "150px" }}>
        <Image alt="..." width={1400} height={500} src="/hero2.png" />

        <Image alt="..." width={1400} height={500} src="/hero3.png" />
      </Carousel>

      <div className="container  m-auto flex items-center justify-center py-24 px-8">
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-700 from-yellow-400">
              Facultad de Ciencias Forenses <br /> e Investigación Criminal
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700">
            La Facultad de ciencias forenses e investigación criminal está
            comprometida con la sociedad en darle a nuestros estudiantes una
            educación integral de la más alta calidad tanto a nivel pregrado,
            posgrado, maestría y doctorado, basada en valores cristianos, éticos
            y la filosofía de la escuela austriaca de economía, creando espacios
            que estimulen la formación, el debate, la crítica, el estudio
            científico, aportando los conocimientos de las diferentes ciencias
            que contribuyan a la prevención de hechos que transgredan la paz del
            ser humano.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center  justify-center mb-24">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hj8skiBG2KU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      <div className="w-full flex flex-col  md:flex-row items-center justify-center m-auto p-4 bg-yellow-200">
        <div className="flex-1 p-6">
          <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-gray-200 pb-4">
            ¿Por qué estudiar en <br /> UDEO ext. Antonio Beristain?
          </h1>
          <p className="mt-6">
            Descubre la excelencia académica en la primera Facultad de Ciencias
            Forenses e Investigación Criminal de Guatemala. Nuestros programas
            únicos, impartidos por los mejores expertos del país, te brindarán
            los conocimientos y habilidades necesarios para destacarte en el
            apasionante campo de la investigación criminal. Con una
            infraestructura especializada y enfoque práctico, te garantizamos
            una formación integral y las mejores oportunidades laborales.
          </p>
          <h2 className="text-center mt-6 text-xl font-bold text-gray-700 ">
            ¡Únete a nosotros y sé parte de la vanguardia en la lucha por la
            justicia!
          </h2>
        </div>

        <div>
          <Image
            src="/1.png"
            width={600}
            height={600}
            alt="UDEO  Ext .BERISTAIN"
            className="h-full"
          />
        </div>
      </div>

      <div className="container m-auto mb-8 p-4">
        <div className="mt-6 mb-8">
          <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-yellow-400 pb-4">
            Oferta Académica
          </h1>
        </div>
        <Offerts />
      </div>
    </div>
  );
}
