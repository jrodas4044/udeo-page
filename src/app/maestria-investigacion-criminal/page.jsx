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

      <div className="mt-6 mb-8 container m-auto">
        <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-yellow-400 pb-4">
          Pensum
        </h1>
      </div>

      <div className="container m-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center p-4">
        <Card className="h-full" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            1er Semestre
          </h5>
          <ul className="list-disc">
            <li>Fundamentos del derecho</li>
            <li>Principios de la investigación técnica forense</li>
            <li>Anatomía forense</li>
            <li>
              Planimetría, técnicas audiovisuales y documentación judicial
            </li>
            <li>Criminalística I</li>
          </ul>
        </Card>

        <Card className="h-full" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            2do Semestre
          </h5>
          <ul className="list-disc">
            <li>Desviología Criminológica</li>
            <li>Técnicas especiales de Investigación</li>
            <li>Oratoria y lenguaje forense</li>
            <li>Razón y fe</li>
            <li>Sistemas de identificación criminal y Lofoscopía</li>
          </ul>
        </Card>

        <Card className="h-full" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            3er Semestre
          </h5>
          <ul className="list-disc">
            <li>Auditoria forense I</li>
            <li>
              Estudio de la Constitución Política de la República de Guatemala
            </li>
            <li>Tanatología forense</li>
            <li>Proceso Económico I</li>
            <li>Investigación criminal, análisis de casos</li>
            <li>Fotografía Audiovisual y Forense</li>
          </ul>
        </Card>

        <Card className="h-full" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            4to Semestre
          </h5>
          <ul className="list-disc">
            <li>Auditoria forense II</li>
            <li>Rastros biológicos y química forense</li>
            <li>La evidencia criminal y el valor probatorio</li>
            <li>Proceso económico II</li>
            <li>Psicología criminal</li>
          </ul>
        </Card>

        <Card className="h-full" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            5to Semestre
          </h5>
          <ul className="list-disc">
            <li>
              Evidencia criminalística en documentos, protocolos forenses y
              otros formatos
            </li>
            <li>Antropología criminal guatemalteca</li>
            <li>Física forense, pruebas balísticas y explosivos</li>
            <li>Filosofía social de Hayek</li>
            <li>Laboratorio de Investigación criminal</li>
            <li>Laboratorio de auditoria forense&nbsp;&nbsp;</li>
          </ul>
        </Card>

        <Card className="h-full" href="#">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            6to Semestre
          </h5>
          <ul className="list-disc">
            <li>Filosofía Social de Mises -El perito en el proceso penal</li>
            <li>Análisis delictivo, gestión de calidad forense</li>
            <li>Técnicas de redacción de informes</li>
            <li>Auditoria forense financiera</li>
            <li>
              Procesamiento del escenario criminal. Ejercicio profesional
              supervisado
            </li>
          </ul>
        </Card>
      </div>

      <div className="bg-yellow-300 w-full p-6">
        <Tabs.Group
          aria-label="Default tabs"
          style="default"
          className="container m-auto items-center justify-center"
        >
          <Tabs.Item active title="Requisitos">
            <ul className="list-disc">
              <li>Currículum Vitae.</li>
              <li>Cierre de Pensum Diversificado.</li>
              <li>Carta de Exposición de Motivos.</li>
              <li>
                Fotostática de título de Diversificado con sello de la
                contraloría general de cuentas, SAT y 3 fotocopias.&nbsp;
              </li>
              <li>Fotocopias del DPI.</li>
              <li>
                Certificación de nacimiento emitida por RENAP reciente y 3
                fotocopias.
              </li>
              <li>
                4 fotografías tamaño cédula a color, reciente con ropa formal.
              </li>
              <li>Carencia de antecedentes penales y policiacos</li>
            </ul>
          </Tabs.Item>
          <Tabs.Item title="Costos">
            <ul className="list-disc">
              <li>
                Inscripción normal Q650 (Pregunta pro nuestras promociones)
              </li>
              <li>Mensualidad Q700</li>
              <li>Biblioteca Virtual Q10</li>
            </ul>
          </Tabs.Item>
          <Tabs.Item title="Horario">
            <strong>Jornada Vespertina:</strong> <br />
            Martes, miércoles y jueves 17:00 a 21:00 hrs. <br />
            <strong>Jornada Sabatina</strong>
            <br />
            8:00 a 18:00 hrs
          </Tabs.Item>
          <Tabs.Item title="Duración">
            <p>
              El Técnico universitario Auditor Forense tiene una duración de 3
              años, una vez terminado puedes continuar tus estudios con
              Licenciatura en Investigación Criminal y seguridad, la cual tiene
              una duración de 2 años
            </p>
          </Tabs.Item>
        </Tabs.Group>
      </div>
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
  );
}
