import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import ScrollToTop from "@/components/home/ScrollToTop";
import { Beacon } from "@/components/Beacon";
const helveticaNowDisplay = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowDisplay-LightIta.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/helveticanowdisplay-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helveticanowdisplay-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helveticanowdisplay-blackita.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-now",
  display: "swap",
});

export const metadata = {
  title:
    "STEK+ | Tekenbureau Staalbouw | Technisch Tekenbureau voor Staalconstructie",
  description:
    "STEK+ is een ervaren tekenbureau staalbouw in Nederland. Wij verzorgen werkplaats- en montagetekeningen in Tekla Structures voor constructiebedrijven en staalproducenten. Snel, nauwkeurig enbetrouwbaar.",
  keywords: [
    "tekenbureau staalbouw",
    "tekenburo staalconstructie",
    "staalbouwkundig",
    "tekenbureau",
    "technisch tekenbureau staalbouw",
    "werkplaatstekeningen",
    "staalbouw",
    "Tekla Structures",
    "staalconstructie tekenpartner",
    "Stek Plus tekenburo",
    "staalconstructie",
    "Tekla Structures",
    "engineering bureau",
    "staalbouw",
    "stalen trap",
    "constructiebedrijf",
  ],
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
export default function RootLayout({ children }) {
  return (
    <html lang="nl" translate="no" className={helveticaNowDisplay.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="Kac9LI0OveKPsyTRXH5XO2tiUGNcnycIjHG-44ZbGiM"
        />
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${helveticaNowDisplay.variable} font-sans antialiased`}>
        <Beacon />
        <Providers>
          <Header />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
