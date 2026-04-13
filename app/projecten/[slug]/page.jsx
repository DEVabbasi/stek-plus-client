// src/app/projecten/[slug]/page.jsx
import { ProjectDetailWrapper } from "@/components/sections/projecten/ProjectDetailWrapper";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Project Details | Stek+`,
    description: `Bekijk de details van dit technische tekenproject.`,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  return (
    <main className="bg-white min-h-screen">
      <ProjectDetailWrapper slug={slug} />
    </main>
  );
}