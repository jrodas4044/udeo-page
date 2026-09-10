import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta Académica",
  description:
    "Técnico, licenciaturas, maestría, doctorado y diplomados en ciencias forenses e investigación criminal. Impartidos por fiscales, peritos e investigadores activos en Guatemala.",
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
