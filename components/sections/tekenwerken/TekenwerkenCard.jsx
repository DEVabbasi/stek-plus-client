"use client";

import Image from "next/image";
import Link from "next/link";
import { BrandButton } from "@/components/ui/BrandButton";

export function TekenwerkenCard({ product }) {
  const heroImage = product.media.find((m) => m.type === "image");

  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden min-h-[280px]">
      {/* LEFT — Image panel */}
      <div className="relative w-full md:w-[55%] min-h-[240px] md:min-h-[280px] bg-gray-100">
        {heroImage && (
          <Image
            src={heroImage.src}
            alt={heroImage.alt ?? product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        )}
      </div>

      {/* RIGHT — Content panel */}
      <div className="w-full md:w-[45%] p-8 flex flex-col justify-center gap-3 bg-white">
        <h2 className="text-xl md:text-2xl font-bold text-black">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.subtitle}</p>

        {/* Bullet list */}
        <ul className="space-y-1 mt-1">
          {product.bulletPoints.map((point) => (
            <li key={point} className="text-sm text-gray-700 flex items-start gap-1">
              <span className="text-gray-500">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Action button */}
        <div className="mt-4">
          <Link href={`/tekenwerk/${product.id}`}>
            <BrandButton size="md">Boek nu</BrandButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
