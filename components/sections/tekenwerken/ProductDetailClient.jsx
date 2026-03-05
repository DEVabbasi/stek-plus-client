"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { MediaLightbox } from "@/components/ui/MediaLightbox";
import { MediaThumbnail } from "@/components/ui/MediaThumbnail";
import { BrandButton } from "@/components/ui/BrandButton";

export function ProductDetailClient({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);

  const heroItem = product.media[activeIndex] ?? product.media[0];
  const thumbnails = product.media.slice(0, 4);

  const handleThumbnailClick = (item, index) => {
    setActiveIndex(index);
    if (item.type === "video") {
      setLightboxItem(item);
    }
  };

  const handleHeroClick = () => {
    setLightboxItem(heroItem);
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT — Media Gallery */}
          <div className="w-full lg:w-[52%] flex flex-col gap-3">
            {/* Hero media */}
            <button
              onClick={handleHeroClick}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 group"
              aria-label="Vergroten"
            >
              <Image
                src={heroItem.thumbnail ?? heroItem.src}
                alt={heroItem.alt ?? product.title}
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

            {/* Thumbnails row */}
            <div className="grid grid-cols-3 gap-3">
              {thumbnails.slice(0, 3).map((item, index) => (
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

          {/* RIGHT — Product Info */}
          <div className="w-full lg:w-[48%] flex flex-col justify-start pt-2">
            {/* Category pill */}
            <span
              className="self-start inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
              style={{ background: "linear-gradient(271.53deg, #88C8F7 5.9%, #1072B7 77.5%)" }}
            >
              {product.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mt-3">
              {product.title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* CTA */}
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

      {/* Lightbox rendered using portal positioning */}
      <MediaLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
