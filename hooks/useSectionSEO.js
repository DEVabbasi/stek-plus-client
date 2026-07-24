"use client";
import { useEffect, useRef } from "react";

export function useSectionSEO({ title, description, keywords }) {
  const ref = useRef(null);
  const original = useRef({});

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    original.current = {
      title: document.title,
      description: metaDescription?.getAttribute("content") || "",
      keywords: metaKeywords?.getAttribute("content") || "",
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.title = title;
          const md = document.querySelector('meta[name="description"]');
          if (md) md.setAttribute("content", description);
          const mk = document.querySelector('meta[name="keywords"]');
          if (mk) mk.setAttribute("content", keywords);
        } else {
          document.title = original.current.title;
          const md = document.querySelector('meta[name="description"]');
          if (md) md.setAttribute("content", original.current.description);
          const mk = document.querySelector('meta[name="keywords"]');
          if (mk) mk.setAttribute("content", original.current.keywords);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [title, description, keywords]);

  return ref;
}