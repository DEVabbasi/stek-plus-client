import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-brand px-6 md:px-10 flex items-center">
      <div className="max-w-8xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-16 ">
        {/* Left Content */}
        <div className="text-white space-y-5 mt-4 ml-6">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight">
            Specialisten In Staalconstructie
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-7xl font-light italic opacity-90">
            Tekenwerk
          </h2>
          <p className="text-base md:text-lg max-w-150 leading-relaxed opacity-90">
            Wij ondersteunen staalproductiebedrijven met nauwkeurige,
            productieklare staalconstructietekeningen. Betrouwbaar, flexibel en
            technisch sterk onderbouwd.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#1072B7] hover:bg-gray-50 px-8 py-6 text-base font-semibold rounded-xl h-auto mt-4">
              Neem contact met ons op of vraag om offerte aan
            </Button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/images/heroSectionImage.png"
            alt="Steel Construction 3D Model"
            width={650}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
