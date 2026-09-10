import Link from "next/link";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Página no encontrada" };

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <PageHero
        title="Página no encontrada"
        subtitle="La dirección que buscas no existe o fue movida. Te llevamos de regreso."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="bg-udeo-red hover:bg-udeo-red-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Ir al inicio
          </Link>
          <Link
            href="/oferta-academica"
            className="border border-black/15 hover:border-udeo-red text-gray-900 font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Ver oferta académica
          </Link>
        </div>
      </section>
    </div>
  );
}
