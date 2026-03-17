import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function VisieRow({ label, isActive = false }) {
  return (
    <div
      className={cn(
        "group flex items-center justify-between px-6 py-6 cursor-default transition-all duration-300",
        isActive
          ? "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-light-blue)] text-white border border-transparent"
          : "bg-white text-black border border-gray-200 hover:bg-gradient-to-r hover:from-[var(--brand-blue)] hover:to-[var(--brand-light-blue)] hover:border-transparent hover:text-white"
      )}
    >
      <span className="text-xl md:text-2xl font-medium">{label}</span>

      {/* Filled circle checkmark */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
          isActive
            ? "bg-white"
            : "bg-[var(--brand-blue)] group-hover:bg-white"
        )}
      >
        <Check
          className={cn(
            "w-4 h-4 transition-colors duration-300",
            isActive
              ? "text-[var(--brand-blue)] stroke-[3]"
              : "text-white stroke-[3] group-hover:text-[var(--brand-blue)]"
          )}
        />
      </div>
    </div>
  );
}
