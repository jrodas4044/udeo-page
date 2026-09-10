import Image from "next/image";
import Link from "next/link";

const HomeIntro = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-udeo-charcoal">
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-udeo-charcoal via-udeo-charcoal/50 to-udeo-charcoal/20" />

      <div className="relative z-10 min-h-[92vh] flex items-end px-4 md:px-8 pt-28 pb-20 md:pb-28">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p
              className="hero-animate font-serif italic text-udeo-gold-light text-lg md:text-xl mb-5"
              style={{ animationDelay: "0s" }}
            >
              In Libertate Progressio
            </p>

            <h1
              className="hero-animate text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              style={{ animationDelay: "0.12s" }}
            >
              Ciencias Forenses e Investigación Criminal
            </h1>

            <p
              className="hero-animate text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ animationDelay: "0.24s" }}
            >
              Primera Facultad de Ciencias Forenses de Guatemala. Desde 2010
              formamos investigadores con rigor científico y compromiso ético.
            </p>

            <div
              className="hero-animate flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              style={{ animationDelay: "0.36s" }}
            >
              <Link
                href="/oferta-academica"
                className="inline-block bg-udeo-red hover:bg-udeo-red-dark text-white font-semibold py-3.5 px-8 rounded-md transition-colors text-center"
              >
                Ver oferta académica
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors text-center"
              >
                Conocer la facultad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
