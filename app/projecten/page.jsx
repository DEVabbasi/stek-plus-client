export const metadata = {
  title: "Projecten | Stek+ Portfolio Staal- en Metaalconstructie",
  keywords: [
    "staalconstructie projecten",
    "staalbouw portfolio",
    "technische tekeningen staal",
    "3D modellen metaalconstructie",
    "Tekla Structures projecten Nederland",
  ],
  description:
    "Bekijk het groeiende portfolio van Stek+. Technische tekeningen en 3D-modellen voor staal- en metaalconstructieprojecten, gerealiseerd met Tekla Structures.",
};

import ProjectenClient from "@/components/sections/projecten/ProjectenClient";

export default function ProjectenPage() {
  return (
    <main className="bg-white min-h-screen">
      <ProjectenClient />
    </main>
  );
}
