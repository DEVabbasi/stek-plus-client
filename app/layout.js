import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import ScrollToTop from "@/components/home/ScrollToTop";
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
  title: "Stek Plus Tekenburo voor Staalconstructie | Engineering Bureau",
  description:
    "Stek Plus is een gespecialiseerd tekenburo voor staalconstructie en staalbouw. Wij werken met Tekla Structures en leveren betrouwbaar tekenwerk als engineering bureau voor constructiebedrijven in Nederland.",
  keywords: [
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
