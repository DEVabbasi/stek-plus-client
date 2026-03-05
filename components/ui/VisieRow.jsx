import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function VisieRow({ label, isActive = false }) {
  return (
    <div
      className={cn(
        "group flex items-center justify-between px-6 py-5 border border-gray-200 cursor-default transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-[var(--brand-blue)] hover:to-[var(--brand-blue-light)] hover:border-transparent hover:text-white",
        isActive
          ? "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-light)] text-white border-transparent"
          : "bg-white text-black"
      )}
    >
      <span className="text-base md:text-lg font-medium">{label}</span>
      <CheckCircle
        className={cn(
          "w-6 h-6 transition-colors duration-300",
          isActive
            ? "text-white"
            : "text-[var(--brand-blue)] group-hover:text-white"
        )}
        strokeWidth={2.5}
      />
    </div>
  );
}
