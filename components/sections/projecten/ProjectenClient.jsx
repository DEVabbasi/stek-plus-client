"use client";

import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchAllDrawings,
  setActiveCategory,
  selectProjectenState,
  selectFilteredProjects,
} from "@/store/slices/projectenSlice";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";
import { cn } from "@/lib/utils";

export default function ProjectenClient() {
  const dispatch = useDispatch();
  const { categories, activeCategory, loading, error } =
    useSelector(selectProjectenState);
  const filteredProjects = useSelector(selectFilteredProjects);

  // Initial data fetch
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllDrawings());
  }, [dispatch]);

  // Performance optimized tab switcher
  const handleTabChange = useCallback(
    (id) => {
      dispatch(setActiveCategory(id));
    },
    [dispatch],
  );

  // Memoized content rendering
  const content = useMemo(() => {
    if (loading.items || loading.categories) {
      return (
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      );
    }

    if (error.items || error.categories) {
      return (
        <div className="text-center py-16">
          <p className="text-red-500 font-medium">
            Oeps! Er ging iets mis bij het laden van de projecten.
          </p>
          <button
            onClick={() => {
              dispatch(fetchCategories());
              dispatch(fetchAllDrawings());
            }}
            className="mt-4 text-[#1072B7] font-semibold hover:underline"
          >
            Probeer het opnieuw
          </button>
        </div>
      );
    }

    if (filteredProjects.length === 0) {
      return (
        <p className="text-center text-gray-400 py-16 text-sm">
          Geen projecten gevonden in deze categorie.
        </p>
      );
    }

    return (
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }, [loading, error, filteredProjects, dispatch]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black">
        Onze projecten
      </h1>
      <p className="text-center text-black text-sm md:text-base mt-3 max-w-lg mx-auto">
        Bekijk ons portfolio met technische tekeningen en 3d-modellen.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mt-8 overflow-x-auto pb-1">
        <div className="flex bg-gray-100 rounded-full p-1 gap-1 flex-nowrap min-h-[44px]">
          {categories.length > 0
            ? categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    "focus:outline-none focus:ring-2 focus:ring-[#1072B7] focus:ring-offset-1",
                    activeCategory === tab.id
                      ? "bg-white text-gray-900 font-semibold shadow-sm"
                      : "text-gray-500 hover:text-gray-700",
                  )}
                >
                  {tab.label}
                </button>
              ))
            : // Placeholder tabs while loading
              [...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-24 h-8 bg-gray-200 rounded-full animate-pulse"
                />
              ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-8">{content}</div>
    </div>
  );
}
