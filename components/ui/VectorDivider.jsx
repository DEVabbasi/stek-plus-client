import Image from "next/image";
import { cn } from "@/lib/utils";

export default function VectorDivider({ align = "left" }) {
  const isLeft = align === "left";

  return (
    <div className="relative h-[104px] w-full overflow-hidden bg-white">
      <div
        className={cn(
          "absolute top-0 z-10 h-[76px] w-[122px]",
          isLeft ? "left-0" : "right-0 scale-x-[-1]"
        )}
      >
        <Image
          src="/icons/VectorD2.svg"
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>

      <div
        className={cn(
          "absolute top-[36px] z-20 h-[62px] w-[98px]",
          isLeft ? "left-[44px]" : "right-[44px] scale-x-[-1]"
        )}
      >
        <Image
          src="/icons/vectorDesign1.svg"
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  );
}
