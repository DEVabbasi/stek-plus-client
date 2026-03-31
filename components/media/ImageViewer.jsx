"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function ImageViewer({ src, alt, mode = "inline" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
        <ImageIcon className="mr-2 h-4 w-4" />
        Afbeelding niet beschikbaar
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
      {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-100" />}
      <div
        className={`absolute inset-0 transition-transform duration-300 ${
          mode === "lightbox" ? "scale-110" : "scale-100"
        }`}
      >
        <Image
          src={src}
          alt={alt || "Afbeelding"}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          onLoadingComplete={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  );
}
