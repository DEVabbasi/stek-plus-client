"use client";

import Image from "next/image";
import Link from "next/link";
import { categoryPillStyles } from "@/lib/data/projecten-data";
import { BrandButton } from "@/components/ui/BrandButton";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }) {
  const heroImage = project.media.find((m) => m.type === "image");

  return (
    <div className="flex flex-col sm:flex-row border border-gray-200 rounded-xl overflow-hidden hover:border-transparent hover:shadow-md transition-all duration-200 min-h-[160px]">
      {/* LEFT — Image */}
      <div className="relative w-full sm:w-[45%] min-h-[160px] bg-gray-100 flex-shrink-0">
        {heroImage && (
          <Image
            src={heroImage.src}
            alt={heroImage.alt ?? project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 45vw"
          />
        )}
      </div>

      {/* RIGHT — Content */}
      <div className="w-full sm:w-[55%] p-5 md:p-6 flex flex-col justify-center gap-1 bg-white">
        {/* Category pill */}
        <span
          className={cn(
            "self-start inline-block px-3 py-0.5 text-xs font-semibold rounded-full",
            categoryPillStyles[project.categoryColor]
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
          <Link href={`/projecten/${project.id}`}>
            <BrandButton size="sm">Details bekijken</BrandButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
