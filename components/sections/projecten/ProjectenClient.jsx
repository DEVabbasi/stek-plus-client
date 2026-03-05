"use client";

import { useState } from "react";
import { projecten } from "@/lib/data/projecten-data";
import { tabConfig } from "@/lib/data/projecten-tabs";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export default function ProjectenClient() {
  const [activeTab, setActiveTab] = useState("productie");
  const [activeSubcat, setActiveSubcat] = useState("productie-staalconstructies");

  const currentTabConfig = tabConfig.find((t) => t.id === activeTab);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const firstSubcat = tabConfig.find((t) => t.id === tabId).subcategories[0].id;
    setActiveSubcat(firstSubcat);
  };

  const filtered = projecten.filter(
    (p) => p.tab === activeTab && p.subcategory === activeSubcat
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Page title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black">
        Onze projecten
      </h1>
      <p className="text-center text-gray-500 text-sm md:text-base mt-3 max-w-lg mx-auto">
        Bekijk ons portfolio met technische tekeningen en 3d-modellen.
      </p>

      {/* Outer tab row — Productie / Tekenwerk */}
      <div className="flex justify-center flex-wrap gap-2 mt-8">
        {tabConfig.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1072B7] focus:ring-offset-1",
              activeTab === tab.id
                ? "text-white border border-transparent"
                : "bg-white border border-gray-300 text-gray-600 hover:border-[#1072B7] hover:text-[#1072B7]"
            )}
            style={
              activeTab === tab.id
                ? { background: "linear-gradient(271.53deg, #88C8F7 5.9%, #1072B7 77.5%)" }
                : {}
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Inner subcategory row */}
      <div className="flex justify-center flex-wrap gap-3 mt-4">
        {currentTabConfig.subcategories.map((subcat) => (
          <button
            key={subcat.id}
            onClick={() => setActiveSubcat(subcat.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1072B7] focus:ring-offset-1",
              activeSubcat === subcat.id
                ? "text-white border border-transparent"
                : "bg-white border border-gray-200 text-gray-500 hover:border-[#1072B7] hover:text-[#1072B7]"
            )}
            style={
              activeSubcat === subcat.id
                ? { background: "linear-gradient(271.53deg, #88C8F7 5.9%, #1072B7 77.5%)" }
                : {}
            }
          >
            {subcat.label}
          </button>
        ))}
      </div>

      {/* Project cards list */}
      <div className="mt-8 space-y-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16 text-sm">
            Geen projecten gevonden in deze categorie.
          </p>
        )}
      </div>
    </div>
  );
}
