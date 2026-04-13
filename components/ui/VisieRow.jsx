import { Check } from "lucide-react";

export function VisieRow({ label }) {
  return (
    <div
      className="group flex cursor-default items-center justify-between border border-gray-200 bg-white px-6 py-6 text-black transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[var(--brand-blue)] hover:to-[var(--brand-light-blue)] hover:text-white"
    >
      <span className="text-xl font-medium md:text-2xl">{label}</span>

      <div
        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] transition-all duration-300 group-hover:bg-white"
      >
        <Check
          className="h-4 w-4 stroke-[3] text-white transition-colors duration-300 group-hover:text-[var(--brand-blue)]"
        />
      </div>
    </div>
  );
}
