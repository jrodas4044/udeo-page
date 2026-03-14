"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = "text-white/90 hover:text-white transition-colors font-semibold text-sm";

  return (
    <nav className="absolute top-0 right-0 left-0 z-50 bg-transparent py-4">
      <div className="mx-auto px-6 container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo UDEO"
              width={130}
              height={45}
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop links */}
          <div className="md:flex items-center space-x-6 hidden">
            <Link href="/" className={linkClass}>Inicio</Link>
            <Link href="/oferta-academica" className={linkClass}>Oferta Académica</Link>
            <Link href="/about" className={linkClass}>Sobre Nosotros</Link>
            <a
              href="#contact"
              className="bg-udeo-red hover:bg-udeo-red-dark text-white text-sm font-bold py-2 px-5 rounded-full transition-colors duration-200 shadow-sm"
            >
              Inscríbete
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-lg px-4 py-3 space-y-1 border-t border-gray-100">
          <Link
            href="/"
            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold text-sm transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/oferta-academica"
            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold text-sm transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Oferta Académica
          </Link>
          <Link
            href="/about"
            className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 font-semibold text-sm transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
          <div className="pt-2 pb-1">
            <a
              href="#contact"
              className="block text-center bg-udeo-red hover:bg-udeo-red-dark text-white font-bold py-3 px-4 rounded-full transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscríbete
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
