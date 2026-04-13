// src/components/sections/projecten/ProjectDetailWrapper.jsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrawingBySlug, clearCurrentProject } from "@/store/slices/projectenSlice";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { DrawingContactSection } from "@/components/sections/home/DrawingContactSection";
import { ProjectDetailSkeleton } from "./ProjectDetailSkeleton";
import Link from "next/link";

export function ProjectDetailWrapper({ slug }) {
  const dispatch = useDispatch();
  const { currentProject, loading, error } = useSelector((state) => state.projecten);

  useEffect(() => {
    if (slug) {
      dispatch(fetchDrawingBySlug(slug));
    }
    return () => {
      dispatch(clearCurrentProject());
    };
  }, [slug, dispatch]);

  if (loading.detail && !currentProject) {
    return <ProjectDetailSkeleton />;
  }

  if (error.detail) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Project niet gevonden</h1>
        <p className="text-gray-500 mb-8">{error.detail}</p>
        <Link href="/projecten" className="text-[#1072B7] font-semibold hover:underline">
          Terug naar overzicht
        </Link>
      </div>
    );
  }

  if (!currentProject) return null;

  return (
    <>
      <ProjectDetailClient project={currentProject} />
      <DrawingContactSection
        drawingId={currentProject.id}
        preselectedDienst={currentProject.category}
      />
    </>
  );
}