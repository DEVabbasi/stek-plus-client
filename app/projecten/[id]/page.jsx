import { ProjectDetailWrapper } from "@/components/sections/projecten/ProjectDetailWrapper";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return { 
    title: `Project Details | Stek+`,
    description: `Bekijk de details van dit technische tekenproject.`
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;

  return (
    <main className="bg-white min-h-screen">
      <ProjectDetailWrapper id={id} />
    </main>
  );
}

