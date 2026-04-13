"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandButton } from "@/components/ui/BrandButton";
import { useContactScroll } from "@/hooks/useContactScroll";

export function TekenwerkenCard({ product }) {
  const { scrollToContact } = useContactScroll();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 max-w-7xl mx-auto">
      {/* LEFT -- Image panel */}
      <div className="bg-[#f8f9fa] flex items-center justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
        <div className="relative w-full aspect-video lg:aspect-auto lg:h-full ">
          {(() => {
            const displayImage = product.media?.[0]?.src || product.imageSrc;
            if (!displayImage) return null;
            return (
              <Image
                src={displayImage}
                alt={product.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            );
          })()}
        </div>
      </div>

      {/* RIGHT -- Content panel */}
      <div className="bg-white p-6 sm:p-8 lg:p-8 xl:p-10 flex flex-col justify-center">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
          {product.title}
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed">
          {product.subtitle}
        </p>

        <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
          {product.bulletPoints.map((point, index) => (
            <li
              key={index}
              className="text-sm sm:text-base text-gray-700 flex items-start gap-2"
            >
              <span className="text-[#1072B7] font-semibold mt-0.5 shrink-0">
                &bull;
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div>
          <Link href="/#contact" onClick={scrollToContact}>
            <BrandButton size="lg" className="px-10 sm:px-8 w-full sm:w-auto">
              Aanvragen
            </BrandButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
