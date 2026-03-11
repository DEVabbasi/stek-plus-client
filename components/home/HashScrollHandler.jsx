"use client";
import { useEffect } from "react";

export function HashScrollHandler() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);
  return null;
}
