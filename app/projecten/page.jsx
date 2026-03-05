export const metadata = { title: "Onze Projecten | Stek+" };

import ProjectenClient from "@/components/sections/projecten/ProjectenClient";

export default function ProjectenPage() {
  return (
    <main className="bg-white min-h-screen">
      <ProjectenClient />
    </main>
  );
}
