import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <div className="relative overflow-hidden bg-udeo-charcoal">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-udeo-charcoal via-udeo-charcoal/60 to-udeo-charcoal/30" />
      <Image
        src="/escudo.png"
        alt=""
        aria-hidden
        width={520}
        height={520}
        className="absolute right-4 md:right-16 -bottom-24 w-[320px] md:w-[520px] opacity-[0.08] pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white leading-[1.05]">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
