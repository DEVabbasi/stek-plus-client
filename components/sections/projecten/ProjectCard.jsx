"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { BrandButton } from "@/components/ui/BrandButton";
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

export function ProjectCard({ project }) {
  const heroItem = project.media[0];

  return (
    <article
      className="group relative flex min-h-[160px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-transparent hover:shadow-md sm:flex-row"
    >
      <div className="relative min-h-[200px] w-full flex-shrink-0 bg-gray-100 sm:min-h-[160px] sm:w-[45%]">
        {heroItem && (
          <>
            <Image
              src={heroItem.thumbnail || heroItem.src}
              alt={heroItem.alt || project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            {heroItem.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <Play className="ml-0.5 h-5 w-5 fill-[#1072B7] text-[#1072B7]" />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex w-full flex-col justify-center gap-3 p-5 md:p-6 sm:w-[55%]">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-block rounded-full px-3 py-0.5 text-xs font-semibold",
              getCategoryStyles(project.category),
            )}
          >
            {project.categoryLabel}
          </span>
        </div>

        <h2 className="text-base font-bold leading-snug text-black md:text-lg">
          {project.title}
        </h2>

        <p className="max-h-10 overflow-hidden text-xs leading-relaxed text-gray-500 line-clamp-2 md:text-sm">
          {project.description}
        </p>

        <div className="mt-3">
          <Link href={`/projecten/${project.slug}`}>
            <BrandButton size="sm">Details bekijken</BrandButton>
          </Link>
        </div>
      </div>
    </article>
  );
}
