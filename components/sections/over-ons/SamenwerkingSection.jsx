import Image from "next/image";
import Link from "next/link";
import { BrandButton } from "@/components/ui/BrandButton";
import { ArrowRight } from "lucide-react";

export default function SamenwerkingSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-4">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          Samenwerking
        </h2>

        {/* Paragraph 1 */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
          Wij geloven in langdurige samenwerkingen gebaseerd op vertrouwen en
          kwaliteit. door korte communicatielijnen en duidelijke afspraken
          zorgen wij voor continuïteit in uw projecten.
        </p>

        {/* Paragraph 2 */}
        <p className="text-sm md:text-base text-gray-500 leading-relaxed -mt-1">
          Bent u op zoek naar een betrouwbare partner in staalconstructie
          tekenwerk? wij maken graag kennis om te bespreken hoe wij uw
          organisatie kunnen ondersteunen. maak kennis met ons.
        </p>

        <div className="w-full mt-2">
          <Link href="/#contact" className="w-full">
            <BrandButton
              size="lg"
              fullWidth
              className="uppercase tracking-widest bg-brand rounded-md"
            >
              MAAK KENNIS MET ONS
              <ArrowRight className="w-4 h-4 ml-1" />
            </BrandButton>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 pointer-events-none">
        <Image
          src="/icons/vectorDesign2.svg"
          alt=""
          fill
          className="object-contain object-bottom-right"
        />
      </div>
    </section>
  );
}
