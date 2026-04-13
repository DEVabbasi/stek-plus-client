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
  // Find first hero item (image or video)
  const heroItem = project.media[0];

  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 rounded-xl overflow-hidden hover:border-transparent hover:shadow-md transition-all duration-200 min-h-[160px]">
      {/* LEFT — Media Wrapper */}
      <div className="relative w-full sm:w-[45%] min-h-[160px] bg-gray-100 flex-shrink-0">
        {heroItem && (
          <>
            <Image
              src={heroItem.thumbnail || heroItem.src}
              alt={heroItem.alt || project.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 45vw"
            />
            {heroItem.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-[#1072B7] fill-[#1072B7] ml-0.5" />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* RIGHT — Content */}
      <div className="w-full sm:w-[55%] p-5 md:p-6 flex flex-col justify-center gap-1 bg-white">
        {/* Category pill */}
        <span
          className={cn(
            "self-start inline-block px-3 py-0.5 text-xs font-semibold rounded-full",
            getCategoryStyles(project.category)
          )}
        >
          {project.categoryLabel}
        </span>

        <h2 className="text-base md:text-lg font-bold text-black mt-1 leading-snug">
          {project.title}
        </h2>

        <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-2 overflow-hidden max-h-10">
          {project.description}
        </p>

        <div className="mt-3">
          <Link href={`/projecten/${project.slug}`}>
            <BrandButton size="sm">Details bekijken</BrandButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
