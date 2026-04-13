"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Play, Box, FileCode2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MediaRenderer from "./MediaRenderer";
import { cn } from "@/lib/utils";

const IMAGE_FORMATS = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
  "svg",
  "avif",
  "heic",
]);
const VIDEO_FORMATS = new Set(["mp4", "mov", "webm", "avi", "mkv"]);
const MODEL_FORMATS = new Set(["glb", "gltf", "obj", "stl", "fbx"]);
const CAD_FORMATS = new Set(["dwg", "dxf", "step", "stp", "iges", "igs"]);

const getExtension = (url) => {
  if (!url) return "";
  const clean = url.split("?")[0].split("#")[0];
  const parts = clean.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
};

const getMediaMeta = (item) => {
  const url = item?.url || item?.src || "";
  const resourceType = item?.resourceType || item?.type || "raw";
  const format = (item?.format || getExtension(url) || "").toLowerCase();
  const thumbnail = item?.thumbnail || item?.url || item?.src || "";
  return { url, resourceType, format, thumbnail };
};

const detectType = ({ resourceType, format }) => {
  if (IMAGE_FORMATS.has(format)) return "image";
  if (VIDEO_FORMATS.has(format)) return "video";
  if (MODEL_FORMATS.has(format)) return "model";
  if (CAD_FORMATS.has(format)) return "cad";
  if (resourceType === "image") return "image";
  if (resourceType === "video") return "video";
  return "unknown";
};

export default function MediaCarousel({ items = [], title = "Media" }) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => api.off("select", onSelect);
  }, [api]);

  const metaList = useMemo(() => items.map(getMediaMeta), [items]);

  const handleKeyDown = (e) => {
    if (!api) return;
    if (e.key === "ArrowRight") api.scrollNext();
    if (e.key === "ArrowLeft") api.scrollPrev();
  };

  return (
    <div className="flex flex-col gap-4">
      <Carousel
        setApi={setApi}
        className="w-full"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Media carousel"
      >
        <CarouselContent>
          {items.map((item, index) => {
            const meta = metaList[index];
            const type = detectType(meta);

            return (
              <CarouselItem key={`${meta.url}-${index}`}>
                <div className="relative">
                  {current === index || type === "image" || type === "video" ? (
                    <MediaRenderer item={item} />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400">
                      Voorvertoning niet beschikbaar
                    </div>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {items.length > 1 && (
          <>
            <CarouselPrevious className="bg-white/90 hover:bg-white" />
            <CarouselNext className="bg-white/90 hover:bg-white" />
          </>
        )}
      </Carousel>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{items.length > 0 ? `${current + 1} / ${items.length}` : "0 / 0"}</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {items.map((item, index) => {
          const meta = metaList[index];
          const type = detectType(meta);
          const isActive = current === index;
          const thumbUrl = meta.thumbnail || meta.url;
          const thumbExt = getExtension(thumbUrl);
          const canShowThumb = IMAGE_FORMATS.has(thumbExt);

          return (
            <button
              key={`thumb-${meta.url}-${index}`}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "relative h-16 w-24 overflow-hidden rounded-lg border transition-all",
                isActive
                  ? "border-[#1072B7] ring-2 ring-[#1072B7]/20"
                  : "border-gray-200 hover:border-gray-300"
              )}
              aria-label={`Ga naar ${index + 1}`}
            >
              {type === "image" || (type === "video" && canShowThumb) ? (
                <Image
                  src={thumbUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-100">
                  {type === "model" ? (
                    <Box className="h-4 w-4 text-gray-500" />
                  ) : (
                    <FileCode2 className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              )}
              {type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow">
                    <Play className="ml-0.5 h-3 w-3 fill-[#1072B7] text-[#1072B7]" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
