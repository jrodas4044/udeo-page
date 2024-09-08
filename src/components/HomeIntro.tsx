import { useEffect, useState } from "react";
import TypewriterTitle from "./TypewriterTitle";

const HomeIntro = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-manila-folder min-h-screen overflow-hidden">
      <div
        className="top-0 left-0 absolute bg-[url('/textures/paper-texture.png')] opacity-40 w-full h-full"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>
      <div className="top-0 left-0 absolute bg-gradient-to-br from-manila-light via-manila-folder to-manila-dark opacity-30 w-full h-full"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-manila-shadow"></div>
      <div className="relative z-10 flex flex-col justify-center items-center p-8 min-h-screen">
        <div className="border-police-stamp bg-manila-light shadow-lg p-8 border-t-8 rounded-lg w-full max-w-4xl">
          <TypewriterTitle
            text="Expediente: Facultad de Ciencias Forenses e Investigación Criminal"
            delay={100}
          />
          <div className="bg-white bg-opacity-70 shadow-inner mb-12 p-4 rounded-lg">
            <p className="font-semibold text-2xl text-cardboard-dark text-center">
              14 años formando a los mejores
              <br />
              investigadores criminales del país
            </p>
          </div>
        </div>
        <div className="mt-8 crime-tape">
          <span className="mt-6 mb-4 font-bold text-police-stamp">
            ¡Atención! Solo los valientes cruzan esta línea para luchar por la
            justicia en Guatemala.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
