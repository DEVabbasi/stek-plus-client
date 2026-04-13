"use client";

import MediaCarousel from "@/components/media/MediaCarousel";
import { BrandButton } from "@/components/ui/BrandButton";
import { cn } from "@/lib/utils";

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
  const scrollToDrawingContact = () => {
    const target = document.getElementById("drawing-contact");
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col gap-3 lg:w-[52%]">
          <MediaCarousel items={project.media || []} title={project.title} />
        </div>

        <div className="flex w-full flex-col justify-start pt-2 lg:w-[48%]">
          <span
            className={cn(
              "self-start inline-block rounded-full px-3 py-1 text-xs font-semibold",
              getCategoryStyles(project.category),
            )}
          >
            {project.categoryLabel}
          </span>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-black md:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-black md:text-base">
            {project.description}
          </p>

          <p className="mt-6 text-sm font-medium text-black">
            Interesse in soortgelijk werk?
          </p>
          <div className="mt-3">
            <BrandButton size="lg" fullWidth onClick={scrollToDrawingContact}>
              Vraag een offerte aan
            </BrandButton>
          </div>
        </div>
      </div>
    </section>
  );
}
