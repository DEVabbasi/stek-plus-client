import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-brand px-4 sm:px-6 md:px-10 flex items-center">
      <div className="max-w-8xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-16">
        {/* Left Content */}
        <div className="text-white space-y-4 md:space-y-5 lg:ml-6 order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
            Specialisten In Staalconstructie
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl font-light italic opacity-90">
            Tekenwerk
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed opacity-90 pt-2">
            Wij ondersteunen staalproductiebedrijven met nauwkeurige,
            productieklare staalconstructietekeningen. Betrouwbaar, flexibel en
            technisch sterk onderbouwd.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#1072B7] hover:bg-gray-50 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold rounded-xl h-auto mt-4 w-full sm:w-auto">
              Neem contact met ons op of vraag om offerte aan
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative order-1 lg:order-2">
          <Image
            src="/images/heroSectionImage.png"
            alt="Steel Construction 3D Model"
            width={650}
            height={450}
            className="w-full h-auto"
            priority
            loading="eager"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
