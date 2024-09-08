import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-cardboard-dark text-white">
      <footer className="mx-auto px-4 py-12 container">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Logo UDEO"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-manila-light">
              La Universidad de Occidente basa el núcleo de su filosofía en el
              respeto y observancia de los derechos y libertades de cada
              individuo. Nuestros mentores son Mises y Hayek.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="mb-4 font-bold text-2xl text-cardboard-light">
              Contacto
            </h3>
            <div className="space-y-2">
              <p>
                <strong className="text-cardboard-lighter">Email:</strong>{" "}
                informacion@udeoberistain.edu.gt
              </p>
              <p>
                <strong className="text-cardboard-lighter">PBX:</strong> +(502)
                2458-4551
              </p>
              <p className="text-sm">
                2ª Calle 31-38 Oficinas Interior del Colegio Montecarmelo
                Calzada Doroteo Guamuch Flores Guatemala, Guatemala.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-2xl text-cardboard-light">
              Oferta Académica
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tecnico-auditor-forense"
                  className="hover:text-cardboard-light transition-colors"
                >
                  Técnico Universitario Auditor Forense en Investigaciones
                  Criminales
                </Link>
              </li>
              <li>
                <Link
                  href="/licenciatura-investigacion-criminal"
                  className="hover:text-cardboard-light transition-colors"
                >
                  Licenciatura en Investigación Criminal y Seguridad
                </Link>
              </li>
              <li>
                <Link
                  href="/maestria-investigacion-criminal"
                  className="hover:text-cardboard-light transition-colors"
                >
                  Maestría en Investigación Criminal
                </Link>
              </li>
              <li>
                <Link
                  href="/doctorado-justicia-criminal"
                  className="hover:text-cardboard-light transition-colors"
                >
                  Doctorado en Justicia Criminal y Ciencias Forenses
                </Link>
              </li>
              <li>
                <Link
                  href="/licenciatura-ciencias-policiales"
                  className="hover:text-cardboard-light transition-colors"
                >
                  Licenciatura en Ciencias Policiales
                </Link>
              </li>
              <li>
                <Link
                  href="/diplomados"
                  className="hover:text-cardboard-light transition-colors"
                >
                  Diplomados
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-cardboard-darker py-4 text-center">
        <p className="text-manila-light text-sm">
          Facultad de Ciencias Forenses e Investigación Criminal - Universidad
          de Occidente - Extensión Antonio Beristain. Todos los derechos
          reservados.
        </p>
        <p className="mt-2 text-cardboard-light text-xs">
          Desarrollado por{" "}
          <a
            href="https://www.jonhathanrodas.com/"
            className="hover:text-manila-light transition-colors"
          >
            JRL
          </a>
        </p>
      </div>
    </div>
  );
}
