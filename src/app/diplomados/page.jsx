"use client";

import { Tabs } from "flowbite-react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Card } from "flowbite-react";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div>
      <div className="container m-auto items-center justify-center pt-24  px-8 pb-2">
        <div>
          <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-yellow-700 from-yellow-400">
              Diplomados
            </span>
          </h1>
          <div className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
            <p class="mb-4">
              En un mundo en constante evolución, la educación continua se ha
              convertido en un pilar esencial para el crecimiento profesional y
              el desarrollo personal. Mantenerse actualizado con las últimas
              tendencias y avances en cualquier campo es crucial para garantizar
              el éxito y la relevancia en el entorno laboral actual. La
              educación continua no solo amplía los conocimientos existentes,
              sino que también fomenta la adquisición de nuevas habilidades y
              perspectivas, lo que se traduce en profesionales altamente
              competitivos y adaptativos.
            </p>
            <p class="mb-4">
              Una de las principales ventajas de la educación continua es su
              capacidad para profesionalizar aún más a los individuos en sus
              respectivas áreas. Los cursos y diplomados diseñados
              específicamente para profesionales en activo brindan la
              oportunidad de profundizar en temas especializados y aplicar ese
              conocimiento de manera directa en el entorno laboral. Este enfoque
              práctico permite a los profesionales abordar desafíos reales con
              soluciones informadas y efectivas, lo que eleva la calidad del
              trabajo y contribuye a un progreso sostenible en la carrera.
            </p>
            <p class="mb-4">
              En la Facultad de Ciencias Forenses e Investigación Criminal,
              estamos comprometidos con la excelencia educativa a través de una
              amplia variedad de cursos y diplomados diseñados para enriquecer
              tus habilidades y conocimientos. Desde cursos especializados en
              técnicas forenses y análisis criminal hasta diplomados en gestión
              de seguridad y prevención delictiva, ofrecemos una plataforma
              integral para la actualización y el desarrollo continuo. Nuestros
              programas son impartidos por expertos en cada campo, garantizando
              una experiencia educativa de alta calidad que te empoderará para
              marcar la diferencia en la sociedad y en tu carrera.
            </p>
            <p class="text-center bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600">
              ¡Descubre nuestros cursos y diplomados y eleva tu perfil
              profesional hoy mismo!
            </p>
          </div>
        </div>
      </div>

      <div className="  mb-2">
        <div className="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/1.jpg"
              alt="Imagen 1"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/2.jpg"
              alt="Imagen 2"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/3.jpg"
              alt="Imagen 3"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-diplomado/4.jpg"
              alt="Imagen 4"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-200 mt-6">
        <div className="container m-auto  py-8">
          <h2 className="text-gray-900 text-2xl font-bold text-center">
            Solicitar más información
          </h2>
          <hr />
          <div className="mt-6">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}
