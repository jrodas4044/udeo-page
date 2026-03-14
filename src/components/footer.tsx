import Image from "next/image";
import Link from "next/link";

const programs = [
  { label: "Técnico Auditor Forense", href: "/tecnico-auditor-forense" },
  { label: "Lic. Investigación Criminal y Seguridad", href: "/licenciatura-investigacion-criminal" },
  { label: "Lic. Ciencias Policiales", href: "/licenciatura-ciencias-policiales" },
  { label: "Maestría en Investigación Criminal", href: "/maestria-investigacion-criminal" },
  { label: "Doctorado en Justicia Criminal", href: "/doctorado-justicia-criminal" },
  { label: "Diplomados", href: "/diplomados" },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Oferta Académica", href: "/oferta-academica" },
  { label: "Sobre Nosotros", href: "/about" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <div>
      {/* Diagonal top divider */}
      <div className="h-12 bg-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-udeo-charcoal"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </div>

      <footer className="bg-udeo-charcoal text-white">
        <div className="container mx-auto px-4 md:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1 — Brand */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.png"
                alt="Logo UDEO"
                width={140}
                height={48}
                className="mb-5"
              />
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Primera Facultad de Ciencias Forenses e Investigación Criminal
                de Guatemala. Formando investigadores íntegros desde 2010.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/10 hover:bg-udeo-red rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-5">
                Navegación
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-udeo-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-udeo-red rounded-full group-hover:w-2 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Programs */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-5">
                Oferta Académica
              </h3>
              <ul className="space-y-3">
                {programs.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="text-white/60 hover:text-udeo-gold text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-udeo-red rounded-full group-hover:w-2 transition-all duration-200 flex-shrink-0" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-5">
                Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-udeo-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <a href="mailto:informacion@udeoberistain.edu.gt" className="text-white/70 hover:text-udeo-gold text-sm transition-colors duration-200">
                      informacion@udeoberistain.edu.gt
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-udeo-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">PBX</p>
                    <a href="tel:+50224584551" className="text-white/70 hover:text-udeo-gold text-sm transition-colors duration-200">
                      +(502) 2458-4551
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-udeo-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-udeo-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Dirección</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      2ª Calle 31-38, Interior Colegio Montecarmelo,
                      Calzada Doroteo Guamuch Flores, Guatemala.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Facultad de Ciencias Forenses e Investigación Criminal — Universidad de Occidente, Ext. Antonio Beristain. Todos los derechos reservados.
            </p>
            <p className="text-white/30 text-xs flex-shrink-0">
              Desarrollado por{" "}
              <a
                href="https://www.jonhathanrodas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-udeo-gold transition-colors"
              >
                JRL
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
