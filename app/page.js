import { HeroSection } from "@/components/sections/home/HeroSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { WaaromSection } from "@/components/sections/home/WaaromSection";
import { ContactSection } from "@/components/sections/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WaaromSection />
      <ContactSection />
    </>
  );
}
