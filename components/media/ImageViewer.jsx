"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, ImageIcon } from "lucide-react";

export default function ImageViewer({ src, alt, mode = "inline" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (hasError) {
    return (
      <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        <ImageIcon className="w-4 h-4 mr-2" />
        Afbeelding niet beschikbaar
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <button
        onClick={() => setIsZoomed((prev) => !prev)}
        className="absolute z-10 right-3 top-3 rounded-full bg-white/90 p-2 text-gray-700 shadow-md hover:bg-white"
        aria-label={isZoomed ? "Uitzoomen" : "Inzoomen"}
      >
        {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
      </button>
      <div
        className={`absolute inset-0 transition-transform duration-300 ${
          mode === "lightbox" || isZoomed ? "scale-110" : "scale-100"
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
