import { projecten } from "@/lib/data/projecten-data";
import { notFound } from "next/navigation";
import { ProjectDetailClient } from "@/components/sections/projecten/ProjectDetailClient";
import { ContactSection } from "@/components/sections/home/ContactSection";

export function generateStaticParams() {
  return projecten.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projecten.find((p) => p.id === id);
  return { title: project ? `${project.title} | Stek+` : "Project | Stek+" };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projecten.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="bg-white min-h-screen">
      <ProjectDetailClient project={project} />
      <ContactSection
        preselectedDienst={
          project.subcategory.includes("staalconstructies")
            ? "staalconstructies"
            : project.subcategory.includes("trappen")
            ? "trappen"
            : "hekwerken"
        }
        title="Vul uw gegevens in"
      />
    </main>
  );
}
