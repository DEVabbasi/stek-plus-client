"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function MediaThumbnail({ item, onClick, className, isActive }) {
  return (
    <button
      onClick={() => onClick(item)}
      className={cn(
        "relative overflow-hidden rounded-md cursor-pointer group",
        "ring-2 transition-all duration-200",
        isActive ? "ring-[#1072B7]" : "ring-transparent hover:ring-[#88C8F7]",
        className
      )}
      aria-label={item.type === "video" ? "Video afspelen" : "Afbeelding bekijken"}
    >
      <Image
        src={item.thumbnail ?? item.src}
        alt={item.alt ?? ""}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="200px"
      />
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
            <Play className="w-4 h-4 text-[#1072B7] fill-[#1072B7] ml-0.5" />
          </div>
        </div>
      )}
    </button>
  );
}
