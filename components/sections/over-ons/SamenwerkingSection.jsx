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
        <p className="text-sm md:text-base text-black leading-relaxed">
          Wij geloven in langdurige samenwerkingen gebaseerd op vertrouwen en
          kwaliteit. Door korte communicatielijnen en duidelijke afspraken
          zorgen wij voor continuïteit in uw projecten.
        </p>

        {/* Paragraph 2 */}
        <p className="text-sm md:text-base text-black leading-relaxed -mt-1">
          Bent u op zoek naar een betrouwbare partner in staalconstructie
          tekenwerk? Wij maken graag kennis om te bespreken hoe wij uw
          organisatie kunnen ondersteunen. Maak kennis met ons.
        </p>

        <div className="w-full mt-2">
          <Link href="/#contact" className="w-full">
            <BrandButton
              size="lg"
              fullWidth
              className="uppercase tracking-widest bg-brand"
            >
              MAAK KENNIS MET ONS
              <Image
                src="/icons/CustomArrowBlack.svg"
                alt=""
                width={14}
                height={14}
                className="h-[14px] w-[14px] brightness-0 invert"
              />
            </BrandButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
