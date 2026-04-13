import Image from "next/image";
import { cn } from "@/lib/utils";

export default function VectorDivider({ align = "left" }) {
  const isLeft = align === "left";

  return (
    <div className="relative h-[112px] w-full overflow-hidden bg-white md:h-[144px]">
      <div
        className={cn(
          "absolute z-10 h-[54px] w-[96px] md:h-[72px] md:w-[128px]",
          isLeft
            ? "left-[28px] top-[4px] md:left-[44px] md:top-[6px]"
            : "right-[28px] top-[4px] scale-x-[-1] md:right-[44px] md:top-[6px]"
        )}
      >
        <Image
          src="/icons/VectorD2.svg"
          alt=""
          fill
          className="object-contain object-left-top"
        />
      </div>

      <div
        className={cn(
          "absolute z-20 h-[54px] w-[96px] md:h-[72px] md:w-[128px]",
          isLeft
            ? "left-[92px] top-[52px] md:left-[124px] md:top-[68px]"
            : "right-[92px] top-[52px] scale-x-[-1] md:right-[124px] md:top-[68px]"
        )}
      >
        <Image
          src="/icons/vectorDesign1.svg"
          alt=""
          fill
          className="object-contain object-left-top"
        />
      </div>
    </div>
  );
}
