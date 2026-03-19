import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { WaaromSection } from "@/components/sections/home/WaaromSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { HashScrollHandler } from "@/components/home/HashScrollHandler";
import VectorDivider from "@/components/ui/VectorDivider";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <HeroSection />
      <VectorDivider align="left" />
      <ServicesSection />
      <VectorDivider align="right" />
      <WaaromSection />
      <VectorDivider align="left" />
      <ContactSection />
      <VectorDivider align="right" />
    </>
  );
}
