"use client";
import { useRouter, usePathname } from "next/navigation";

export function useContactScroll() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    if (pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return { scrollToContact };
}
