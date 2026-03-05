"use client";

import { cn } from "@/lib/utils";

export function BrandButton({
  children,
  className,
  size = "md",
  fullWidth = false,
  ...props
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "text-white font-semibold rounded-md",
        "transition-opacity duration-200 hover:opacity-90 active:opacity-80",
        "focus:outline-none focus:ring-2 focus:ring-[#1072B7] focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      style={{
        background: "linear-gradient(271.53deg, #88C8F7 5.9%, #1072B7 77.5%)",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
