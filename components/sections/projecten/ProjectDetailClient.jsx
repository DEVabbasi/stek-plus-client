"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { categoryPillStyles } from "@/lib/data/projecten-data";
import { MediaLightbox } from "@/components/ui/MediaLightbox";
import { MediaThumbnail } from "@/components/ui/MediaThumbnail";
import { BrandButton } from "@/components/ui/BrandButton";
import { cn } from "@/lib/utils";

export function ProjectDetailClient({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);

  const heroItem = project.media[activeIndex] ?? project.media[0];

  const handleThumbnailClick = (item, index) => {
    setActiveIndex(index);
    if (item.type === "video") setLightboxItem(item);
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT — Media Gallery */}
          <div className="w-full lg:w-[52%] flex flex-col gap-3">
            <button
              onClick={() => setLightboxItem(heroItem)}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 group"
              aria-label="Vergroten"
            >
              <Image
                src={heroItem.thumbnail ?? heroItem.src}
                alt={heroItem.alt ?? project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority
              />
              {heroItem.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 text-[#1072B7] fill-[#1072B7] ml-1" />
                  </div>
                </div>
              )}
            </button>

            <div className="grid grid-cols-3 gap-3">
              {project.media.slice(0, 3).map((item, index) => (
                <div key={index} className="relative h-24">
                  <MediaThumbnail
                    item={item}
                    onClick={(i) => handleThumbnailClick(i, index)}
                    isActive={activeIndex === index}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Project Info */}
          <div className="w-full lg:w-[48%] flex flex-col justify-start pt-2">
            <span
              className={cn(
                "self-start inline-block px-3 py-1 text-xs font-semibold rounded-full",
                categoryPillStyles[project.categoryColor]
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
              <BrandButton size="lg" fullWidth>
                Vraag een offerte aan
              </BrandButton>
            </div>
          </div>
        </div>
      </section>

      <MediaLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
