// TODO: Add HelveticaNowDisplay font files to public/fonts/ and switch to next/font/local.
// See below for the exact localFont config to uncomment when files are ready.
//
// import localFont from "next/font/local";
// const helveticaNowDisplay = localFont({
//   src: [
//     { path: "../public/fonts/HelveticaNowDisplay-Regular.woff2",   weight: "400", style: "normal" },
//     { path: "../public/fonts/HelveticaNowDisplay-Medium.woff2",    weight: "500", style: "normal" },
//     { path: "../public/fonts/HelveticaNowDisplay-Bold.woff2",      weight: "700", style: "normal" },
//     { path: "../public/fonts/HelveticaNowDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
//   ],
//   variable: "--font-helvetica-now",
//   display: "swap",
// });
// Then in the return: <html className={helveticaNowDisplay.variable}>
//                     <body className={`${helveticaNowDisplay.variable} font-sans antialiased`}>

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";

// Temporary fallback — will be replaced by Helvetica Now Display local font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-helvetica-now", // Using same CSS var name so globals.css works immediately
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "STEK+ Staaltechnisch Tekenburo",
  description: "Specialisten in staalconstructie tekenwerk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
