"use client";

import Link from "next/link";
import MediaCarousel from "@/components/media/MediaCarousel";
import { BrandButton } from "@/components/ui/BrandButton";
import { useContactScroll } from "@/hooks/useContactScroll";
import { cn } from "@/lib/utils";

// Extracted styles from static data logic but made dynamic
const getCategoryStyles = (category) => {
  const styles = {
    staalconstructies: "bg-[#1072B7] text-white",
    trappen: "bg-[#3fa0e0] text-white",
    hekwerken: "bg-[#64b5e8] text-white",
    overige: "bg-gray-500 text-white",
  };
  if (!category) return styles.overige;
  if (styles[category]) return styles[category];
  if (category.includes("trappen")) return styles.trappen;
  if (category.includes("hekwerken")) return styles.hekwerken;
  if (category.includes("staal")) return styles.staalconstructies;
  return styles.overige;
};

export function ProjectDetailClient({ project }) {
  const { scrollToContact } = useContactScroll();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* LEFT - Media Gallery */}
        <div className="w-full lg:w-[52%] flex flex-col gap-3">
          <MediaCarousel items={project.media || []} title={project.title} />
        </div>

        {/* RIGHT - Project Info */}
        <div className="w-full lg:w-[48%] flex flex-col justify-start pt-2">
          <span
            className={cn(
              "self-start inline-block px-3 py-1 text-xs font-semibold rounded-full",
              getCategoryStyles(project.category)
            )}
          >
            {project.categoryLabel}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mt-3">
            {project.title}
          </h1>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
            {project.description}
          </p>

          <p className="text-sm text-gray-500 mt-6 font-medium">
            Interesse in soortgelijk werk?
          </p>
          <div className="mt-3">
            <Link href="/#contact" onClick={scrollToContact} className="block w-full">
              <BrandButton size="lg" fullWidth>
                Vraag een offerte aan
              </BrandButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
