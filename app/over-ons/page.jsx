import OverHeroSection from "@/components/sections/over-ons/OverHeroSection";
import { OnzeVisieSection } from "@/components/sections/over-ons/OnzeVisieSection";
import { OnzeWerkwijzeSection } from "@/components/sections/over-ons/OnzeWerkwijzeSection";
import SamenwerkingSection from "@/components/sections/over-ons/SamenwerkingSection";
import VectorDivider from "@/components/ui/VectorDivider";

export const metadata = {
  title: "Over Stek+ | Technisch Tekenbureau voor Metaalconstructie",
  keywords: [
    "technisch tekenbureau",
    "tekenwerk uitbesteden",
    "metaalconstructie",
    "staalconstructie tekenwerk",
    "Stek Plus tekenwerk",
  ],
  description:
    "Stek+ is een technisch tekenbureau gespecialiseerd in metaalconstructie en staalconstructie. Ontdek hoe wij uw tekenwerk uitbesteden eenvoudig, betrouwbaar en schaalbaar maken",
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
