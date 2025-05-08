import "./globals.css";
import { Special_Elite } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

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
        <>
          <Script id="zoho-salesiq-config">{`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}</Script>
          <Script
            id="zsiqscript"
            src="https://salesiq.zohopublic.com/widget?wc=siqc095d68cdb0e985f9d1266e7b565969896d5611595ca0163f8e3279d4ba82e29"
            defer
          ></Script>
        </>
      </body>
    </html>
  );
}
