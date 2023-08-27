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
              Licenciatura en <br />
              Investigación Criminal y Seguridad
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
            La Licenciatura en Investigación Criminal y Seguridad te brindará
            las habilidades esenciales para enfrentar los desafíos en el ámbito
            de la justicia y la seguridad. Los graduados estarán equipados para
            llevar a cabo análisis precisos de la criminalidad, utilizando
            recursos tecnológicos para auditar la evidencia circunstancial y
            esclarecer eventos que amenacen la paz social.
          </p>

          <p className="text-lg font-normal mt-4 text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
            Nuestro programa fomenta la adquisición continua de conocimientos en
            investigación criminal, promoviendo la responsabilidad y la ética en
            cada paso. Los estudiantes desarrollarán la capacidad de aplicar
            rigurosamente metodologías científicas en sus investigaciones,
            impulsados por un espíritu de curiosidad y creatividad. La
            planificación, la organización y el trabajo en equipo serán ejes
            fundamentales de tu formación, respaldados por una actitud crítica y
            un fuerte sentido de servicio a la comunidad. Prepárate para
            convertirte en un profesional capaz de marcar la diferencia en la
            seguridad y el orden social.
          </p>
        </div>
      </div>

      <div className="w-full bg-yellow-200 py-8 px-4 mt-6">
        <div className="mt-6 mb-8 container m-auto">
          <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-yellow-400 pb-4">
            Pensum
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Primer Semestre</h2>
              <ul class="list-disc ml-4">
                <li>Metodología para la Elaboración De Tesis</li>
                <li>Investigación de Estructuras Criminales</li>
                <li>Fundamentos de Seguridad</li>
                <li>Documentoscopía y Grafotecnia</li>
                <li>
                  Análisis De Información Comunicacional y Lingüística Forense
                </li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Segundo Semestre</h2>
              <ul class="list-disc ml-4">
                <li>Seguridad Criminal Operacional</li>
                <li>Sociología Criminal</li>
                <li>Técnicas de Entrevista e Interrogatorio Forenses</li>
                <li>Proyecciones Estratégicas de la Política Criminal</li>
                <li>Administración de Seguridad y Riesgo</li>
                <li>
                  Mecánica de Hechos Simulación Virtual, Posición
                  Víctima-Victimario
                </li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Tercer Semestre</h2>
              <ul class="list-disc ml-4">
                <li>
                  Dirección y Administración de Unidades Especializadas en
                  Investigación de Delitos
                </li>
                <li>Accidentología Vial</li>
                <li>Investigaciones en Seguridad Bancaria</li>
                <li>Retórica y Oratoria Forense</li>
                <li>
                  Metodología de la Investigación Científica en Dictámenes
                  Periciales
                </li>
                <li>
                  Praxeología Criminal I. Ejercicio Profesional Supervisado
                </li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Cuarto Semestre</h2>
              <ul class="list-disc ml-4">
                <li>Organización y Planeación en Inteligencia Criminal</li>
                <li>Informática Forense</li>
                <li>Seguridad e Inteligencia Criminal</li>
                <li>Teoría y Manejo de Casos en el Proceso Penal Acusatorio</li>
                <li>Victimodogmática</li>
                <li>
                  Praxeología Criminal II. Ejercicio Profesional Supervisado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="  mb-2">
        <div className="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-lic/1.jpg"
              alt="Imagen 1"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-lic/2.jpg"
              alt="Imagen 2"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-lic/3.jpg"
              alt="Imagen 3"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-lic/4.jpg"
              alt="Imagen 4"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>

      <div className="bg-yellow-200">
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
