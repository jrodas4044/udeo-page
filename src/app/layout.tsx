import "./globals.css";
import { Special_Elite } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HubSpotScript from "@/components/HubSpotScript";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Universidad De Occidente - Extensión Antonio Beristain",
  description: "Facultad de Ciencias Forenses e Investigación Criminal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={specialElite.className}>
        {children}

        <Footer />
        {/* Agrega el componente HubSpotScript */}
      </body>
    </html>
  );
}
