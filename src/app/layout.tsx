import "./globals.css";
import type { Metadata } from "next";
import { Jost, Fraunces } from "next/font/google";
import Header from "@/components/header";
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
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "UDEO Ext. Antonio Beristain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UDEO Ext. Beristain | Ciencias Forenses",
    description:
      "Primera Facultad de Ciencias Forenses e Investigación Criminal de Guatemala.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${jost.variable} ${fraunces.variable} ${jost.className}`}>
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
