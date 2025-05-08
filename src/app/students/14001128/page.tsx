"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function StudentCard() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Función para manejar el efecto 3D en hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    // Obtener la fecha actual formateada
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(now.toLocaleDateString("es-ES", options));

    const timer = setTimeout(() => {
      // Redireccionar a la página de inicio después de 5 minutos
      router.push("/");
    }, 5 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [router]);

  // Calcular rotación 3D basada en la posición del mouse
  const rotateX = isFlipped ? 180 : (mousePosition.y - 0.5) * 10;
  const rotateY = isFlipped ? 0 : (mousePosition.x - 0.5) * -10;

  return (
    <main className="bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 min-h-screen">
      <Header />

      {/* Partículas de fondo (simuladas con elementos fijos) */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="z-10 relative px-4 py-16">
        <div className="relative mx-auto max-w-3xl">
          {/* Efecto holograma superior */}
          <motion.div
            className="-top-10 left-1/2 absolute bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent blur-md w-80 h-6 -translate-x-1/2 transform"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Texto de credencial oficial */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-bold text-white text-3xl tracking-wide">
              CREDENCIAL OFICIAL
              <span className="block mt-1 font-light text-cyan-300 text-xs tracking-widest">
                UNIVERSIDAD DE OCCIDENTE
              </span>
            </h1>
          </motion.div>

          {/* Tarjeta con efecto 3D */}
          <motion.div
            ref={cardRef}
            className="relative perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsFlipped(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="w-full h-full transition-all duration-500 ease-out preserve-3d"
              style={{
                transform: isFlipped
                  ? `rotateY(180deg)`
                  : `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Cara frontal */}
              <div className="absolute inset-0 backface-hidden">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-[0_10px_50px_rgba(0,200,255,0.3)] border border-white/10 rounded-2xl overflow-hidden">
                  {/* Efecto holograma */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-60"
                    animate={{
                      background: [
                        "linear-gradient(to top right, rgba(6, 182, 212, 0.1), transparent, rgba(168, 85, 247, 0.1))",
                        "linear-gradient(to top right, rgba(168, 85, 247, 0.1), transparent, rgba(6, 182, 212, 0.1))",
                        "linear-gradient(to top right, rgba(6, 182, 212, 0.1), transparent, rgba(168, 85, 247, 0.1))",
                      ],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />

                  {/* Patrón de seguridad */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-white/50 text-xs"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                      >
                        UdeO
                      </div>
                    ))}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="z-10 relative p-8">
                    {/* Encabezado con efecto de brillo */}
                    <div className="relative flex justify-between items-center mb-8 pb-4 border-white/10 border-b">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(6, 182, 212, 0)",
                            "0 0 15px rgba(6, 182, 212, 0.5)",
                            "0 0 0 rgba(6, 182, 212, 0)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="p-1 rounded-full"
                      >
                        <Image
                          src="/logo.png"
                          alt="Logo UdeO"
                          width={100}
                          height={50}
                          className="drop-shadow-glow object-contain"
                        />
                      </motion.div>

                      <div className="text-right">
                        <h1 className="font-bold text-gradient-gold text-xl">
                          Universidad de Occidente
                        </h1>
                        <div className="flex justify-end items-center gap-2">
                          <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse"></div>
                          <p className="text-cyan-300 text-sm">
                            Credencial Digital Activa
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="gap-8 grid grid-cols-1 md:grid-cols-12">
                      {/* Columna izquierda con foto */}
                      <div className="flex flex-col items-center md:col-span-5">
                        <div className="group relative mb-6">
                          {/* Efecto de brillo en la esquina */}
                          <motion.div
                            className="-top-1 -right-1 z-0 absolute bg-cyan-400 blur-md rounded-full w-6 h-6"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />

                          {/* Marco holográfico */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-75 group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(6,182,212,0.7)] rounded-lg transition duration-1000 blur filter"></div>

                          {/* Foto con overlay de seguridad */}
                          <div className="relative shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-2 border-white/20 rounded-lg overflow-hidden">
                            <div className="z-10 absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 mix-blend-overlay"></div>
                            <Image
                              src="/14001128.png"
                              alt="Foto del estudiante"
                              width={240}
                              height={320}
                              className="z-0 object-cover"
                              style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(20px)",
                              }}
                            />

                            {/* Marca de agua */}
                            <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
                              <p className="font-bold text-white text-xl rotate-45 transform">
                                UDEO
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Insignia de carnet */}
                        <motion.div
                          className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm px-4 py-3 border border-yellow-500/30 rounded-lg w-full"
                          whileHover={{ scale: 1.03 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="bg-yellow-400 rounded-full w-3 h-3 animate-pulse"></div>
                              <p className="font-medium text-white">
                                ID ESTUDIANTE
                              </p>
                            </div>
                            <p className="font-bold text-yellow-300 tracking-widest">
                              14001128
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Columna derecha con información */}
                      <div className="relative md:col-span-7 text-white">
                        {/* Línea decorativa vertical */}
                        <div className="top-0 left-0 absolute bg-gradient-to-b from-cyan-500 to-blue-900 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded-full w-1 h-full"></div>

                        <div className="space-y-4 pl-5">
                          <motion.div
                            className="bg-white/5 hover:bg-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur-sm p-4 border-cyan-500 border-l-4 rounded-lg transition-all"
                            whileHover={{
                              x: 5,
                              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                            }}
                          >
                            <h2 className="flex items-center gap-2 font-semibold text-cyan-300 text-xs uppercase tracking-wider">
                              <span className="inline-block bg-cyan-400 rounded-full w-2 h-2"></span>
                              Nombre
                            </h2>
                            <p className="mt-1 font-bold text-white text-2xl">
                              JONHATHAN ROLANDO
                            </p>
                          </motion.div>

                          <motion.div
                            className="bg-white/5 hover:bg-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur-sm p-4 border-purple-500 border-l-4 rounded-lg transition-all"
                            whileHover={{
                              x: 5,
                              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                            }}
                          >
                            <h2 className="flex items-center gap-2 font-semibold text-purple-300 text-xs uppercase tracking-wider">
                              <span className="inline-block bg-purple-400 rounded-full w-2 h-2"></span>
                              Apellidos
                            </h2>
                            <p className="mt-1 font-bold text-white text-2xl">
                              RODAS LOPEZ
                            </p>
                          </motion.div>

                          <motion.div
                            className="bg-white/5 hover:bg-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur-sm p-4 border-blue-500 border-l-4 rounded-lg transition-all"
                            whileHover={{
                              x: 5,
                              boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                            }}
                          >
                            <h2 className="flex items-center gap-2 font-semibold text-blue-300 text-xs uppercase tracking-wider">
                              <span className="inline-block bg-blue-400 rounded-full w-2 h-2"></span>
                              Carrera
                            </h2>
                            <p className="mt-1 font-bold text-white text-xl">
                              LICENCIATURA EN CIENCIAS POLICIALES
                            </p>
                          </motion.div>

                          <div className="gap-4 grid grid-cols-2">
                            <motion.div
                              className="bg-white/5 hover:bg-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur-sm p-4 border-indigo-500 border-l-4 rounded-lg transition-all"
                              whileHover={{
                                y: -3,
                                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                              }}
                            >
                              <h2 className="flex items-center gap-2 font-semibold text-indigo-300 text-xs uppercase tracking-wider">
                                <span className="inline-block bg-indigo-400 rounded-full w-2 h-2"></span>
                                Ciclo
                              </h2>
                              <p className="mt-1 font-bold text-white text-xl">
                                10
                              </p>
                            </motion.div>

                            <motion.div
                              className="bg-white/5 hover:bg-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.2)] backdrop-blur-sm p-4 border-pink-500 border-l-4 rounded-lg transition-all"
                              whileHover={{
                                y: -3,
                                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                              }}
                            >
                              <h2 className="flex items-center gap-2 font-semibold text-pink-300 text-xs uppercase tracking-wider">
                                <span className="inline-block bg-pink-400 rounded-full w-2 h-2"></span>
                                Vigencia
                              </h2>
                              <p className="mt-1 font-bold text-white text-sm">
                                15-01-2025 / 30-07-2025
                              </p>
                            </motion.div>
                          </div>

                          {/* QR Code ficticio */}
                          <div className="flex justify-end mt-4">
                            <div className="relative bg-white shadow-[0_5px_15px_rgba(0,0,0,0.3)] p-1 rounded-md w-16 h-16">
                              <div className="gap-0.5 grid grid-cols-4 grid-rows-4 w-full h-full">
                                {[...Array(16)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`${
                                      Math.random() > 0.7
                                        ? "bg-black"
                                        : "bg-transparent"
                                    }`}
                                  ></div>
                                ))}
                              </div>
                              <div className="absolute inset-0 flex justify-center items-center opacity-30">
                                <p className="font-bold text-[6px] text-black">
                                  UDEO
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pie de la credencial */}
                    <div className="flex justify-between items-center mt-8 pt-4 border-white/10 border-t text-sm">
                      <div className="flex items-center gap-1 text-white/70">
                        <div className="bg-green-500 rounded-full w-1 h-1"></div>
                        <p>Acceso: {currentDate}</p>
                      </div>
                      <p className="font-medium text-gradient-cyan">
                        CREDENCIAL DIGITAL
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cara trasera */}
              <div
                className="absolute inset-0 backface-hidden"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-[0_10px_50px_rgba(0,0,0,0.5)] p-8 border border-white/10 rounded-2xl h-full">
                  <div>
                    <div className="flex justify-between items-center mb-6 pb-4 border-white/10 border-b">
                      <h2 className="font-bold text-gradient-gold text-xl">
                        Información Adicional
                      </h2>
                      <Image
                        src="/logo.png"
                        alt="Logo UdeO"
                        width={80}
                        height={40}
                        className="opacity-70 object-contain"
                      />
                    </div>

                    <div className="space-y-4 mt-4 text-white">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h3 className="mb-2 font-medium text-cyan-300 text-sm">
                          Nota Importante
                        </h3>
                        <p className="text-white/80 text-sm">
                          Esta credencial es la identificación oficial del
                          estudiante y debe presentarse para todos los trámites
                          académicos.
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg">
                        <h3 className="mb-2 font-medium text-cyan-300 text-sm">
                          Contacto
                        </h3>
                        <p className="text-white/80 text-sm">
                          Departamento Académico: academia@udeo.edu.gt
                        </p>
                        <p className="text-white/80 text-sm">
                          Soporte Técnico: soporte@udeo.edu.gt
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-white/50 text-xs text-center">
                    <p>
                      Presiona la tarjeta para volver a la información principal
                    </p>
                    <p className="mt-2">
                      © {new Date().getFullYear()} Universidad de Occidente.
                      Todos los derechos reservados.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Instrucciones */}
          <motion.div
            className="mt-6 text-white/60 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="mb-1">
              Esta credencial es válida únicamente en formato digital.
            </p>
            <p className="text-cyan-300 text-xs">
              Haz clic en la credencial para ver información adicional
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer con autenticidad */}
      <motion.div
        className="right-0 bottom-0 left-0 fixed bg-black/30 backdrop-blur-sm p-2 border-white/10 border-t text-white/50 text-xs text-center"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Documento digital autenticado • Universidad de Occidente •{" "}
        {new Date().getFullYear()}
      </motion.div>
    </main>
  );
}

// Agregar estilos globales a través de CSS-in-JS
const styles = `
  .text-gradient-gold {
    background: linear-gradient(to right, #f59e0b, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  
  .text-gradient-cyan {
    background: linear-gradient(to right, #06b6d4, #0ea5e9);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  
  .drop-shadow-glow {
    filter: drop-shadow(0 0 5px rgba(6, 182, 212, 0.5));
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
`;

// Inyectar estilos en el componente
if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}
