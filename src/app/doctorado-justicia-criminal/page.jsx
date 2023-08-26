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
              Doctorado en Justicia Criminal
              <br /> y Ciencias Forenses
            </span>
          </h1>
          <div className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700 text-justify">
            <p class="mb-4">
              El Doctorado en Justicia Criminal y Ciencias Forenses es un
              programa integral diseñado para que los egresados propongan a la
              sociedad líneas estratégicas de acción a corto, mediano y largo
              plazo en política criminal y justicia, aplicando los métodos y
              técnicas de las Ciencias Forenses. Este programa será impartido
              por un selecto grupo de docentes internacionales, quienes actuarán
              como guías en cada investigación.
            </p>
            <p class="mb-4">
              Si estás comprometido en influir positivamente en la justicia y
              deseas explorar en profundidad las Ciencias Forenses, este
              doctorado es la oportunidad que has estado buscando. Únete a
              nosotros y sé parte de este programa de vanguardia que te
              preparará para marcar una diferencia significativa en el campo de
              la justicia y las ciencias forenses.
            </p>
            <h3 className="text-2xl my-6 font-bold">OBJETIVOS:</h3>
            <ul className="list-disc">
              <li>
                Liderar iniciativas de investigación conforme a la realidad
                social y cultural que atañe al acontecer político, científico y
                de justicia.
              </li>
              <li>
                Capacitar científicos generadores de conocimientos en cualquiera
                de las interdisciplinas que apoyen a la administración de
                justicia.
              </li>
              <li>
                Formular los métodos de investigación que permitan la evaluación
                y desarrollo de la política de justicia penal, orientados a
                diseñar estrategias en los retos globales de crimialidad.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-yellow-200 py-8 px-4 my-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 m-auto">
          <div>
            <h3 className="text-2xl mb-6 font-bold">LÍNEAS DE INVESTIGACIÓN</h3>
            <p>
              El postulante deberá realizar su investigación doctoral desde el
              inicio del programa sobre una de las siguientes problemáticas:
            </p>
            <ul className="list-disc mt-6 ml-4">
              <li class="mb-1">Prevención de la criminalidad.</li>
              <li class="mb-1">Modelos sociológicos del crimen.</li>
              <li class="mb-1">
                Políticas públicas relacionadas al delito y sus consecuencias.
              </li>
              <li class="mb-1">Modelos de atención victimal.</li>
              <li class="mb-1">Ciencias forenses.</li>
              <li class="mb-1">
                Las fuentes del derecho dentro del sistema de justicia.
              </li>
              <li class="mb-1">Modelos de humanización democrática.</li>
              <li class="mb-1">
                Economía y mercado análisis en materia criminal.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl mb-6 font-bold">LÍNEAS DE INVESTIGACIÓN</h3>
            <p>
              Al inicio del programa el postulante presentará una carta de
              exposición de motivos con los aspectos relevantes de su vida
              profesional incluyendo:
            </p>
            <ul className="list-disc mt-6 ml-4">
              <li class="mb-2">
                Título que acredite el grado de maestría en ciencias exactas,
                jurídicas, tecnológicas, humanísticas o afines.
              </li>
              <li class="mb-2">Título en grado de licenciatura.</li>
              <li class="mb-2">
                Méritos que puedan ser de interés en la valoración del
                candidato(a) a doctor.
              </li>
              <li class="mb-2">
                Propuesta de formulación de tesis en cinco páginas sobre un tema
                elegido de las líneas investigación propuestas que desea
                desarrollar durante el doctorado.
              </li>
              <li class="mb-2">
                Síntesis curricular en el cual se describan las investigaciones
                o publicaciones previas, si las hubiere.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container m-auto">
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-2">METODOLOGÍA DEL PROGRAMA:</h2>
          <p class="mb-4">
            Vinculamos a profesionales nacionales e internacionales orientados
            al estudio interdisciplinario que lleve a la producción de
            conocimientos desde contextos académicos y prácticos sobre los
            paradigmas de la criminalidad y justicia.
          </p>
          <p class="mb-4">
            El programa es impartido por un selecto grupo de docentes
            internacionales quienes serán las guías de cada investigación que
            proponga el doctorante.
          </p>
          <p class="mb-4">
            La Facultad de Ciencias Forenses e Investigación Criminal adoptó la
            metodología (ABI), para desarrollar competencias de aprendizaje
            analítica, lógica y creativa en el mundo del conocimiento.
          </p>
        </div>

        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">Fases de cada módulo:</h2>
          <ul class="list-disc ml-4 space-y-2 mb-4">
            <li>(IIM) Inducción Inicial del Módulo</li>
            <li>(ADC) Análisis y Desarrollo Crítico</li>
            <li>(MD) Medición Didáctica</li>
            <li>(CE) Conversatorio con el docente titular del módulo</li>
          </ul>
          <p>
            Cada módulo tiene una duración de seis semanas, donde se abordará la
            metodología descrita en modalidad semipresencial, con un seminario
            discursivo la última semana y visita del docente al grupo doctoral
            para desarrollar el ejercicio práctico del constructo.
          </p>
        </div>
      </div>

      <div className="w-full bg-yellow-200 py-8 px-4">
        <div className="mt-6 mb-8 container m-auto">
          <h1 className="text-3xl text-center font-bold text-gray-700 border-b border-yellow-400 pb-4">
            Pensum
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO I: Constructo de la conducta desviada
              </h2>
              <p>Teorías epistemológicas y criminológicas.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO II: Justicia penal especializada
              </h2>
              <p>El rol de la justicia criminal.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO III: Articulación de las ciencias forenses en el sistema
                de justicia
              </h2>
              <p>Estudio de casos.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO IV: Construcción de la política criminal de justicia
              </h2>
              <p>
                Victimal, restaurativa y adolescentes en conflicto con la ley.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO V: Construcción de política criminal de justicia
                preventiva, de seguridad y penitenciaria
              </h2>
              <p>Descripción del contenido del ciclo V.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO VI: Criminalidad corporativa
              </h2>
              <p>
                Doctrina, aspectos sustantivos y procesales, cooperación
                transnacional, políticas públicas en materia de prevención.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO VII: Cientificidad de las pruebas en el proceso
              </h2>
              <p>Componentes esenciales de las ciencias forenses.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO VIII: Construcción de escenarios en la cultura política
              </h2>
              <p>
                Estructuras institucionales, alianzas y luchas políticas
                (corrupción en los organismos del estado).
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO IX: Alternativas y cambios penales contemporáneos
              </h2>
              <p>Derecho comparado de políticas de justicia criminal.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">CICLO X: La economía</h2>
              <p>
                Condiciones económicas y sociales conducentes de criminalidad.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO XI: Geopolítica y gobernanza
              </h2>
              <p>Descripción del contenido del ciclo XI.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO XII: La comunidad social estratégica
              </h2>
              <p>El sistema de justicia ante la sociedad.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO XIII: Metodología de la investigación científica
              </h2>
              <p>Descripción del contenido del ciclo XIII.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h2 class="text-lg font-semibold mb-2">
                CICLO XIV: (Cursos filosóficos)
              </h2>
              <p>Descripción del contenido del ciclo XIV.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-auto my-8">
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-2">PERFIL DE EGRESO:</h2>
          <p class="mb-4">
            El Doctorado en Justicia Criminal y Ciencias Forenses tiene
            beneficios tangibles ya que posee el liderazgo académico nacional e
            internacional en las ciencias forenses; desde el 2012 con la
            creación de la primera Facultad de Ciencias Forenses e Investigación
            Criminal en Guatemala promovemos nuevos desafíos interdisciplinario
            con conciencia social que permita abordar la criminalidad y delitos
            existentes.
          </p>
          <p class="mb-4">
            Nuestros egresados profundizan los valores de la filosofía
            libertaria de nuestra casa de estudios en todos los campos del
            desarrollo humano; inspirando la formación de profesionales íntegros
            en actividades sustantivas que realicen acciones basadas en el
            espíritu solidario
          </p>
          <p class="mb-4">
            La Facultad de Ciencias Forenses e Investigación Criminal pionera en
            investigaciones promociona las experiencias y propuestas de nuestros
            egresados, asumiendo el compromiso de crear alianzas con el sector
            público y privado para la difusión de las tesis doctorales que
            permitan establecer lineamientos cientificos en el abordaje de la
            justicia, la equidad y la violencia
          </p>
          <h2 class="text-2xl font-semibold mb-2">Costos del programa:</h2>
          <p>
            <ul class="list-disc ml-4">
              <li class="mb-2">
                INSCRIPCIÓN POR CADA MÓDULO (18): <strong>Q500.00</strong> -
                Incluye libro físico del docente internacional tutor del módulo,
                guía programática metodológica y uso de plataforma.
              </li>
              <li class="mb-2">
                MENSUALIDADES (24): <strong>Q2,000.00</strong>
              </li>
              <li class="mb-2">
                INSCRIPCIÓN DE ANTEPROYECTO DE TESIS: <strong>Q1,000.00</strong>{" "}
                - Revisión y desarrollo de propuesta metodológica cuatro meses
                posterior a la inscripción.
              </li>
              <li class="mb-2">
                DEFENSA DE TESIS DOCTORAL: <strong>Q3,600.00</strong> - Proceso
                final.
              </li>
              <li class="mb-2">
                TRÁMITE DE GRADUACIÓN: <strong>Q2,000.00</strong> - Proceso
                final.
              </li>
            </ul>
          </p>
        </div>
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
