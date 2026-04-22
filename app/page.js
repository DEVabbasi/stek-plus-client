import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { WaaromSection } from "@/components/sections/home/WaaromSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { HashScrollHandler } from "@/components/home/HashScrollHandler";
import VectorDivider from "@/components/ui/VectorDivider";
import { TekenwerkSection } from "@/components/sections/home/TekenwerkSection";
import { UwContructieSection } from "@/components/sections/home/UwContructieSection";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <HeroSection />
      <VectorDivider align="left" />
      <ServicesSection />
      <VectorDivider align="right" />
      <TekenwerkSection />
      <VectorDivider align="left" />
      <WaaromSection />
      <VectorDivider align="right" />
      <UwContructieSection />
      <VectorDivider align="left" />
      <ContactSection />
      <VectorDivider align="right" />
    </>
  );
}
