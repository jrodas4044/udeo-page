import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 right-0 left-0 z-50 fixed bg-cardboard-dark text-white">
      <div className="mx-auto px-4 container">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image src="/logo.png" alt="Logo UDEO" width={150} height={50} />
          </Link>
          <div className="md:flex space-x-4 hidden">
            <Link href="/" className="hover:text-cardboard-light">
              Inicio
            </Link>
            <Link
              href="/oferta-academica"
              className="hover:text-cardboard-light"
            >
              Oferta Académica
            </Link>
            <Link href="/About" className="hover:text-cardboard-light">
              Sobre Nosotros
            </Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 sm:px-3 pt-2 pb-3">
            <Link href="/" className="block hover:text-cardboard-light">
              Inicio
            </Link>
            <Link
              href="/oferta-academica"
              className="block hover:text-cardboard-light"
            >
              Oferta Académica
            </Link>
            <Link href="/about" className="block hover:text-cardboard-light">
              Sobre Nosotros
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
