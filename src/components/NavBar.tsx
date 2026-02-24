"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 right-0 left-0 z-50 fixed bg-udeo-red shadow-lg text-white">
      <div className="mx-auto px-4 container">
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <Image src="/logo.png" alt="Logo UDEO" width={150} height={50} />
          </Link>
          <div className="md:flex space-x-6 hidden">
            <Link
              href="/"
              className="hover:text-udeo-gold-light transition-colors font-semibold"
            >
              Inicio
            </Link>
            <Link
              href="/oferta-academica"
              className="hover:text-udeo-gold-light transition-colors font-semibold"
            >
              Oferta Académica
            </Link>
            <Link
              href="/about"
              className="hover:text-udeo-gold-light transition-colors font-semibold"
            >
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-udeo-red-dark px-4 py-3 space-y-1">
          <Link
            href="/"
            className="block py-3 px-4 rounded-lg hover:bg-udeo-red transition-colors font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <div className="border-t border-white/20"></div>
          <Link
            href="/oferta-academica"
            className="block py-3 px-4 rounded-lg hover:bg-udeo-red transition-colors font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Oferta Académica
          </Link>
          <div className="border-t border-white/20"></div>
          <Link
            href="/about"
            className="block py-3 px-4 rounded-lg hover:bg-udeo-red transition-colors font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
