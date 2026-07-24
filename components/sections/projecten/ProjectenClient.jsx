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
      <p className="text-center text-gray-500 text-sm md:text-base mt-3 max-w-4xl mx-auto">
        Bekijk ons portfolio met technische tekeningen en 3d-modellen.
      </p>
      <p className="text-center text-gray-500 text-sm md:text-base mt-3 max-w-4xl mx-auto">
        Onze staalconstructie projecten nederland laten zien hoe wij
        uiteenlopende opdrachten uitwerken, van kleine maatwerkoplossingen tot
        omvangrijke industriële constructies. Elk van onze staalconstructie
        referentieprojecten is volledig gemodelleerd in Tekla Structures en
        productieklaar opgeleverd aan de klant.
      </p>{" "}
      <p className="text-center text-gray-500 text-sm md:text-base mt-3 max-w-4xl mx-auto">
        Bekijk hieronder een aantal tekla structures projecten staalbouw waaraan
        wij hebben gewerkt, waaronder stalen trap project tekeningen voor
        woningbouw en utiliteit, bedrijfshallen en bijzondere staalconstructies.
        Deze projecten geven een goed beeld van de nauwkeurigheid en het
        detailniveau waarmee STEK+ werkt.
      </p>
      {/* Tabs */}
      <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div className="mx-auto flex min-w-max flex-nowrap gap-1 rounded-full bg-gray-100 p-1 min-h-11 sm:w-fit">
          {categories.length > 0
            ? categories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200",
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
                  className="h-8 w-24 shrink-0 animate-pulse rounded-full bg-gray-200"
                />
              ))}
        </div>
      </div>
      {/* Main Content Area */}
      <div className="mt-8">{content}</div>
    </div>
  );
}
