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
              Maestría en <br /> Investigación Criminal
            </span>
          </h1>

          <div className="w-full flex  items-center justify-center mb-8">
            <div>
              <a
                href="https://drive.google.com/file/d/1HYarbjdo_fnudAOoMCcKXUrvsREFSYJn/view?usp=drive_link"
                target="_blank"
                className="font-bold px-4 py-2 text-lg bg-gray-800 text-yellow-200  hover:bg-yellow-200 hover:text-gray-800 rounded-full"
              >
                Descargar Folleto
              </a>
            </div>
          </div>

          <div className="text-lg mt-4 font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
            <p className="mb-4">
              Sumérgete en el mundo de la investigación criminal avanzada con
              nuestra Maestría en Investigación Criminal. Diseñada para aquellos
              que buscan convertirse en líderes en el campo de la justicia y la
              seguridad, esta maestría te brindará las habilidades, el
              conocimiento y la perspicacia necesarios para abordar los desafíos
              más apremiantes de nuestra sociedad.
            </p>
            <h3 class="text-2xl font-bold mb-4">Perfil de Egreso</h3>
            <p class="mb-4">
              Después de completar la Maestría en Investigación Criminal,
              estarás listo para establecer conexiones valiosas con
              instituciones en el ámbito de la justicia, así como para
              embarcarte en una carrera independiente como asesor privado o
              consultor especializado. Tus conocimientos en estrategias,
              inteligencia y prevención delictiva serán altamente demandados en
              una variedad de contextos.
            </p>
            <p class="mb-4">
              Tus habilidades abarcarán una amplia gama de áreas clave:
            </p>
            <ul class="list-disc pl-8 mb-4">
              <li class="mb-2">
                Análisis e Interpretación de Indicios: Serás capaz de analizar y
                dar sentido a las pistas y pruebas, desentrañando la verdad
                detrás de los incidentes.
              </li>
              <li class="mb-2">
                Reconstrucción de Hechos: Podrás reconstruir meticulosamente los
                eventos pasados, proporcionando claridad y comprensión en
                situaciones complejas.
              </li>
              <li class="mb-2">
                Investigaciones de Campo en Investigación Criminal: Estarás
                equipado para llevar a cabo investigaciones en el terreno,
                recopilando información crucial para resolver casos.
              </li>
              <li class="mb-2">
                Diseño de Programas de Prevención Criminal: Contribuirás a la
                sociedad diseñando programas efectivos que reduzcan el riesgo de
                delitos y promuevan la seguridad.
              </li>
              <li class="mb-2">
                Diseño de Estrategias de Seguridad: Desarrollarás estrategias
                sólidas para garantizar la seguridad en diferentes entornos.
              </li>
              <li class="mb-2">
                Investigación en Delitos Bancarios: Serás un experto en
                investigar y abordar delitos financieros y bancarios.
              </li>
              <li class="mb-2">
                Acciones de Seguridad e Integridad en Investigación Criminal:
                Garantizarás que las investigaciones se realicen con integridad
                y en un entorno seguro.
              </li>
              <li class="mb-2">
                Asesoría en Servicios de Inteligencia: Tu experiencia te
                permitirá asesorar en el ámbito de la inteligencia,
                contribuyendo a la toma de decisiones fundamentadas.
              </li>
              <li class="mb-2">
                Planificación y Operación de Servicios de Inteligencia: Serás
                capaz de planificar y dirigir operaciones de inteligencia con
                eficacia.
              </li>
            </ul>

            <p className="text-center text-2xl text-bold  my-8">
              Prepárate para tener un impacto significativo en la justicia, la
              seguridad y la prevención delictiva en una variedad de roles y
              escenarios profesionales.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-200 py-8 px-4">
        <div className="mt-6 mb-8 container m-auto">
          <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-yellow-400 pb-4">
            Pensum
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Primer Semestre</h2>
              <ul class="list-disc ml-4">
                <li>
                  Historia de las ciencias forenses y la investigación criminal
                </li>
                <li>Ética, Cultura y Valores</li>
                <li>
                  Axiomas de la investigación criminal, método científico
                  aplicado en la reconstrucción de un hecho
                </li>
                <li>
                  Análisis de la conducta desviada criminológica, Semiología
                  criminal
                </li>
                <li>Proceso económico I</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Segundo Semestre</h2>
              <ul class="list-disc ml-4">
                <li>
                  Fundamentación legal de la argumentación pericial y forense
                </li>
                <li>Sistemas de identificación criminalísticos</li>
                <li>
                  Aplicación de las ciencias: biológicas, químicas, físicas y
                  fisiológicas a la investigación criminal, cadena de custodia
                </li>
                <li>
                  El uso de la informática y las telecomunicaciones en la
                  investigación criminal
                </li>
                <li>Proceso económico II</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Tercer Semestre</h2>
              <ul class="list-disc ml-4">
                <li>Seminario de tesis I</li>
                <li>Medicina forense, Lesionología, Sexología forense</li>
                <li>Filosofía social de Mises</li>
                <li>
                  Investigación Técnica judicial: laboratorio casuística I
                </li>
                <li>
                  Métodos de investigación criminal aplicados al manejo de
                  crisis en casos de secuestro
                </li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Cuarto Semestre</h2>
              <ul class="list-disc ml-4">
                <li>Filosofía Social de Hayek</li>
                <li>Investigación de Delitos Económicos y Financieros</li>
                <li>Seminario de Tesis II</li>
                <li>Procesos de Inteligencia e Investigación Criminal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-auto mt-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white  rounded-lg shadow">
            <div class="embed-responsive">
              <iframe
                className="w-full"
                src="https://www.youtube.com/embed/fa9kZibb8nM"
                allowfullscreen
                height={350}
              ></iframe>
            </div>
          </div>

          <div class="bg-white  rounded-lg shadow">
            <div class="embed-responsive">
              <iframe
                className="w-full"
                src="https://www.youtube.com/embed/AS5nNBHOk3U"
                allowfullscreen
                height={350}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-200 mt-8">
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
