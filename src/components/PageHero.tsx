import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-udeo-charcoal via-gray-900 to-udeo-red-dark"
      style={{ minHeight: "42vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-udeo-charcoal via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-udeo-red-dark/30 via-transparent to-udeo-red/20" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center px-4 md:px-8 text-center"
        style={{ minHeight: "42vh" }}
      >
        <div className="max-w-4xl w-full">
          <p className="text-udeo-gold font-semibold text-xs uppercase tracking-widest mb-3">
            UDEO · Ext. Antonio Beristain
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
