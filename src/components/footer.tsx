import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white flex justify-between items-center  flex-col md:flex-row border-t border-yellow-200 border-t-4">
        <div className="md:w-1/3 p-6">
          <p>
            La Universidad de Occidente basa el núcleo de su filosofía en el
            respeto y observancia de los derechos y libertades de cada
            individuo. Nuestros mentores son Mises y Hayek.
          </p>
        </div>
        <div className="md:w-1/3 p-6  my-6 border-l border-yellow-200">
          <div className="my-2">
            <strong>Email:</strong> informacion@udeoberistain.edu.gt
          </div>
          <div className="my-2">
            <strong>PBX:</strong> +(502) 2458-4550
          </div>
          <div className="my-2">
            2ª Calle 31-38 Oficinas Interior del Colegio Montecarmelo Calzada
            Doroteo Guamuch Flores Guatemala, Guatemala.
          </div>
        </div>
        <div className="md:w-1/3 p-6 flex flex-col items-center my-6 border-l border-yellow-200">
          <div>
            <h3 className="text-lx mb-6 font-bold text-yellow-200">
              Oferta Académica
            </h3>
          </div>
          <ul className="list-disc ml-4">
            <li className="mb-2">
              <Link
                href="/tecnico-auditor-forense"
                className="hover:text-yellow-200"
              >
                Técnico Universitario Auditor Forense en Investigaciones
                Criminales
              </Link>
            </li>

            <li className="mb-2">
              <Link
                href="/licenciatura-investigacion-criminal"
                className="hover:text-yellow-200"
              >
                Licenciatura en Investigación Criminal y Seguridad
              </Link>
            </li>

            <li className="mb-2">
              <Link
                href="/maestria-investigacion-criminal"
                className="hover:text-yellow-200"
              >
                Maestría en Investigación Criminal
              </Link>
            </li>

            <li className="mb-2">
              <Link
                href="/doctorado-justicia-criminal"
                className="hover:text-yellow-200"
              >
                Doctorado en Justicia Criminal y Ciencias Forenses
              </Link>
            </li>

            <li className="mb-2">
              <Link
                href="/licenciatura-ciencias-policiales"
                className="hover:text-yellow-200"
              >
                Licenciatura en Ciencias Policiales
              </Link>
            </li>

            <li className="mb-2">
              <Link href="/diplomados" className="hover:text-yellow-200">
                Diplomados
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bg-gray-900 text-white p-4 text-center">
        Facultad de Ciencias Forenses e Investigación Criminal - Universidad de
        Occidente - Extensión Antonio Beristain. Todos los derechos reservados.
      </div>
    </div>
  );
}
