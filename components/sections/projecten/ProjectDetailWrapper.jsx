"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDrawingById, clearCurrentProject } from "@/store/slices/projectenSlice";
import { ProjectDetailClient } from "./ProjectDetailClient";
import { DrawingContactSection } from "@/components/sections/home/DrawingContactSection";
import { ProjectDetailSkeleton } from "./ProjectDetailSkeleton";

/**
 * Wrapper component to handle the project detail data lifecycle.
 */
export function ProjectDetailWrapper({ id }) {
  const dispatch = useDispatch();
  const { currentProject, loading, error } = useSelector((state) => state.projecten);

  useEffect(() => {
    if (id) {
      dispatch(fetchDrawingById(id));
    }
    return () => {
      dispatch(clearCurrentProject());
    };
  }, [id, dispatch]);

  if (loading.detail && !currentProject) {
    return <ProjectDetailSkeleton />;
  }

  if (error.detail) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Project niet gevonden</h1>
        <p className="text-gray-500 mb-8">{error.detail}</p>
        <button 
          onClick={() => window.location.href = "/projecten"}
          className="text-[#1072B7] font-semibold hover:underline"
        >
          Terug naar overzicht
        </button>
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
