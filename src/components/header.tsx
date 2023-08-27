import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-lx m-0 ">
      <nav className="flex items-center justify-between p-4">
        <a href="/">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="UDEO BERISTAIN"
          />
        </a>
        <ul className="flex space-x-4 text-yellow-200">
          <li className="py-2 px-4">
            <Link href="/" className="font-bold hover:text-white">
              Inicio
            </Link>
          </li>
          <li className=" py-2 px-4">
            <Link href="/about" className="font-bold hover:text-white">
              Acerca de
            </Link>
          </li>
          <li className=" py-2 px-4">
            <Link href="#offerts" className="font-bold hover:text-white">
              Carreras
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
