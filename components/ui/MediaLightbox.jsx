"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function MediaLightbox({ item, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
    >
      {/* Close button top-right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
        aria-label="Sluiten"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Media container — stop propagation so clicking media doesn't close */}
      <div
        className="relative w-[90vw] max-w-4xl max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          <div className="relative w-full h-[70vh]">
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        ) : (
          <video
            src={item.src}
            poster={item.thumbnail}
            controls
            autoPlay
            className="w-full max-h-[70vh] rounded-lg"
          >
            Your browser does not support video playback.
          </video>
        )}
      </div>
    </div>
  );
}
