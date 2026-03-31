import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandButton } from "@/components/ui/BrandButton";

export function HeroSection() {
  return (
    <section className="hero-section flex min-h-[calc(100vh-80px)] items-center bg-brand px-4 sm:px-6 md:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 py-10 sm:gap-10 sm:py-12 md:gap-12 md:py-14 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-14 lg:py-16">
        <div className="order-1 space-y-5 text-center text-white sm:space-y-6 sm:text-left lg:ml-6 lg:max-w-[42rem]">
          <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
            <h1 className="hero-title hero-display-primary max-w-[11ch]">
              Specialisten In Staalconstructie
            </h1>
            <h2 className="hero-subtitle hero-display-secondary max-w-[10ch] opacity-90">
              Tekenwerk
            </h2>
          </div>
          <p className="hero-body text-sm sm:text-base md:text-lg lg:text-xl max-w-[42rem] mx-auto sm:mx-0 leading-relaxed  pt-2">
            Wij ondersteunen staalproductiebedrijven met nauwkeurige,
            productieklare staalconstructietekeningen. Betrouwbaar, flexibel en
            technisch sterk onderbouwd.
          </p>
          <Link href="/#contact">
            <Button className="hero-cta bg-white text-[#1072B7] hover:bg-gray-50 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold h-auto mt-4 w-full sm:w-auto">
              Neem contact met ons op of vraag een offerte aan
            </Button>
          </Link>
        </div>

        <div className="relative order-2 flex justify-center lg:justify-end">
          <div className="hero-image-frame relative">
            <Image
              src="/images/heroSectionImage.png"
              alt="Steel Construction 3D Model"
              fill
              className="hero-image object-contain object-center"
              priority
              loading="eager"
              quality={90}
              sizes="(min-width: 1024px) 48rem, (min-width: 768px) 42rem, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
