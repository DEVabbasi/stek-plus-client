"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import MediaRenderer from "./MediaRenderer";

export default function MediaLightbox({ items, open, startIndex = 0, onOpenChange }) {
  const [index, setIndex] = useState(startIndex);
  const total = items?.length || 0;

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open || total < 2) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, total]);

  const goPrev = () => {
    if (total < 2) return;
    setIndex((i) => (i - 1 + total) % total);
  };
  const goNext = () => {
    if (total < 2) return;
    setIndex((i) => (i + 1) % total);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-none p-6">
        <DialogTitle>
          <VisuallyHidden>Media viewer</VisuallyHidden>
        </DialogTitle>
        <DialogDescription>
          <VisuallyHidden>Bekijk media in volledig scherm.</VisuallyHidden>
        </DialogDescription>
        <div className="relative w-full">
          {total > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center"
                aria-label="Vorige"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center"
                aria-label="Volgende"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="w-full max-h-[80vh]">
            <MediaRenderer item={items?.[index]} mode="lightbox" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
