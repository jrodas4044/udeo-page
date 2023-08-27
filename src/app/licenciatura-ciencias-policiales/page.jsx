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
              Licenciatura en <br /> Ciencias Policiales
            </span>
          </h1>
          <div className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
            <p class="mb-4">
              Prepárate para sumergirte en el apasionante mundo de la aplicación
              de la ley y la seguridad ciudadana a través de nuestra
              Licenciatura en Ciencias Policiales. Este programa integral te
              brindará la oportunidad de adquirir una educación excepcional y
              formarte como un profesional altamente capacitado y ético en el
              campo policial.
            </p>
            <p class="mb-4">
              Nuestra licenciatura ofrece un equilibrio único entre teoría y
              práctica, lo que te permitirá desarrollar un profundo
              entendimiento de los principios legales, la ética y las tácticas
              necesarias para proteger y servir a la comunidad. Desde técnicas
              avanzadas de investigación hasta la gestión de crisis, obtendrás
              habilidades prácticas que te empoderarán para enfrentar los
              desafíos cambiantes de la seguridad pública.
            </p>
            <p class="mb-4">
              Nuestro equipo de docentes experimentados y profesionales de la
              aplicación de la ley te guiará a lo largo de tu trayecto
              educativo, proporcionándote conocimientos actualizados y
              perspicacia práctica. Además, tendrás la oportunidad de participar
              en ejercicios de simulación y casos de estudio en tiempo real,
              permitiéndote aplicar tus conocimientos en situaciones reales.
            </p>
            <p class="mb-4">
              Si eres una persona apasionada por el servicio comunitario, la
              justicia y la seguridad, y deseas desafíos emocionantes y
              gratificantes en tu carrera, nuestra Licenciatura en Ciencias
              Policiales es tu puerta de entrada a una profesión dinámica y
              valiosa. Únete a nosotros para explorar el camino hacia una
              carrera en la que marcarás una diferencia tangible en la sociedad
              y mantendrás la paz y el orden en nuestra comunidad.
            </p>
            <p class="text-center bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600">
              <a href="#contacto">
                ¡Inscríbete hoy y forja un futuro prometedor en la aplicación de
                la ley!
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-200 py-8 px-4 mt-6">
        <div className="mt-6 mb-8 container m-auto">
          <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-yellow-400 pb-4">
            Pensum
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Primer Cuatrimestre</h2>
              <ul class="list-disc ml-4">
                <li>Cosmovisión de la Cultura Maya, Garífuna y Xinca</li>
                <li>Estrategias de Prevención Criminal</li>
                <li>
                  Intervención Policial en Infancia y Adolescencia en Riesgo
                </li>
                <li>Urbanismo y Estrategias de Convivencia Ciudadana</li>
                <li>Seguridad Vial</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Segundo Cuatrimestre</h2>
              <ul class="list-disc ml-4">
                <li>La Actuación Policial en la Seguridad Colectiva</li>
                <li>Fenomenología Criminal de las Maras</li>
                <li>La Atención Policial a la Víctima</li>
                <li>Derecho de Policía</li>
                <li>Estadística Criminal</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Tercer Cuatrimestre</h2>
              <ul class="list-disc ml-4">
                <li>Migración y Trata de Personas</li>
                <li>Investigación Policial en Narcoactividad</li>
                <li>Informática Forense</li>
                <li>
                  Casuística Policial en Secuestros, Extorsiones y Sicariato
                </li>
                <li>Técnicas de Entrevista e Interrogatorio Policial</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Cuarto Cuatrimestre</h2>
              <ul class="list-disc ml-4">
                <li>Organización y Planeación en Inteligencia Criminal</li>
                <li>Nuevas Tecnologías de la Criminalidad</li>
                <li>
                  Análisis de Información Comunicacional y Lingüística Forense
                </li>
                <li>Investigación Policial en Violencia de Género</li>
                <li>Inteligencia Policial</li>
              </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">Quinto Cuatrimestre</h2>
              <ul class="list-disc ml-4">
                <li>Sistema Penitenciario</li>
                <li>Política Pública en Seguridad Privada</li>
                <li>Seguridad Turística y Ecológica</li>
                <li>Criminología de la Reacción Social</li>
                <li>Sistemas Operativos Policiales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="  mb-2">
        <div className="container m-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-policia/1.png"
              alt="Imagen 1"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-policia/2.jpg"
              alt="Imagen 2"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-policia/3.png"
              alt="Imagen 3"
              className="w-full"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <Image
              src="/fotos-policia/4.jpg"
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
