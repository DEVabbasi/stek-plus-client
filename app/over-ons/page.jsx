import OverHeroSection from "@/components/sections/over-ons/OverHeroSection";
import { OnzeVisieSection } from "@/components/sections/over-ons/OnzeVisieSection";
import { OnzeWerkwijzeSection } from "@/components/sections/over-ons/OnzeWerkwijzeSection";
import SamenwerkingSection from "@/components/sections/over-ons/SamenwerkingSection";

export const metadata = {
  title: "Over Ons | Stek+",
  description:
    "Stek+ is gespecialiseerd in het uitwerken van staalconstructies voor productiebedrijven.",
};

export default function OverOns() {
  return (
    <main>
      <OverHeroSection />
      <OnzeVisieSection />
      <OnzeWerkwijzeSection />
      <SamenwerkingSection />
    </main>
  );
}
