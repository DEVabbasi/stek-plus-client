import OverHeroSection from "@/components/sections/over-ons/OverHeroSection";
import { OnzeVisieSection } from "@/components/sections/over-ons/OnzeVisieSection";
import { OnzeWerkwijzeSection } from "@/components/sections/over-ons/OnzeWerkwijzeSection";
import SamenwerkingSection from "@/components/sections/over-ons/SamenwerkingSection";
import VectorDivider from "@/components/ui/VectorDivider";

export const metadata = {
  title: "Over Stek+ | Tekenwerk Uitbesteden Staalbouw | Technisch Tekenbureau",
  keywords: [
    "tekenwerk uitbesteden staalbouw",
    "technisch tekenbureau",
    "metaalconstructie",
    "externe tekenpartner staalbouw",
    "flexibel tekenbureau staal",
    "betrouwbaar tekenbureau staalconstructie",
    "staalconstructie tekenwerk",
    "Stek Plus tekenwerk",
  ],
  description:
    "Wilt u tekenwerk uitbesteden staalbouw? STEK+ is een technisch tekenbureau metaalconstructie en werkt als externe tekenpartner voorstaalproducenten in Nederland. Flexibel, betrouwbaar en schaalbaar.",
};

export default function OverOns() {
  return (
    <main>
      <OverHeroSection />
      <VectorDivider align="left" />
      <OnzeVisieSection />
      <OnzeWerkwijzeSection />
      <SamenwerkingSection />
      <VectorDivider align="right" />
    </main>
  );
}
