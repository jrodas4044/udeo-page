import "./globals.css";
import type { Metadata } from "next";
import { Jost, Fraunces } from "next/font/google";
import Footer from "@/components/footer";
import Script from "next/script";

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const fraunces = Fraunces({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://udeoberistain.edu.gt"),
  title: {
    default: "UDEO Ext. Beristain | Ciencias Forenses e Investigación Criminal",
    template: "%s | UDEO Ext. Beristain",
  },
  description:
    "Primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala. +3,000 graduados desde 2010. Técnico, Licenciaturas, Maestría y Doctorado.",
  keywords: [
    "ciencias forenses Guatemala",
    "investigación criminal",
    "criminalística",
    "UDEO",
    "licenciatura forense",
    "maestría investigación criminal",
    "doctorado justicia criminal",
  ],
  openGraph: {
    type: "website",
    locale: "es_GT",
    siteName: "UDEO Ext. Antonio Beristain",
    title: "UDEO Ext. Beristain | Ciencias Forenses e Investigación Criminal",
    description:
      "Primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala. +3,000 graduados desde 2010.",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "UDEO Ext. Antonio Beristain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDEO Ext. Beristain | Ciencias Forenses",
    description:
      "Primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala.",
    images: ["/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Universidad de Occidente, Extensión Antonio Beristain",
  alternateName: "UDEO Ext. Beristain",
  url: "https://udeoberistain.edu.gt",
  logo: "https://udeoberistain.edu.gt/logo.png",
  email: "informacion@udeoberistain.edu.gt",
  telephone: "+502 2458-4551",
  foundingDate: "2010",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2ª Calle 31-38, Interior Colegio Montecarmelo, Calzada Doroteo Guamuch Flores",
    addressLocality: "Guatemala",
    addressCountry: "GT",
  },
  sameAs: [
    "https://www.facebook.com/UniversidadDeOccidenteExtensionAntonioBeristain",
    "https://www.instagram.com/antonio_beristain_udeo/",
    "https://www.youtube.com/@udeoberistain5063",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${jost.variable} ${fraunces.variable} ${jost.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        <Footer />
        <>
          <Script id="zoho-salesiq-config">{`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}</Script>
          <Script
            id="zsiqscript"
            src="https://salesiq.zohopublic.com/widget?wc=siqc095d68cdb0e985f9d1266e7b565969896d5611595ca0163f8e3279d4ba82e29"
            defer
          ></Script>
          <Script
            id="infocrim-chat-widget"
            src="https://infocrim.turingh.solutions/chat/widget.js"
            data-key="pk_6mUqCeTJAx3yTalyFqB3g2RmC6ZFjNRXvQB2r"
            strategy="lazyOnload"
          />
        </>
      </body>
    </html>
  );
}
