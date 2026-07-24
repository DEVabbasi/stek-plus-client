export const metadata = {
  title:
    "Projecten | Stek+ Portfolio Staal- en Metaalconstructie | Staalconstructie Projecten Nederland | Portfolio | STEK+",
  keywords: [
    "staalconstructie projecten",
    "staalbouw portfolio",
    "technische tekeningen staal",
    "3D modellen metaalconstructie",
    "Tekla Structures projecten Nederland",
    "staalconstructie projecten nederland",
    "staalconstructie referentieprojecten",
    "tekla structures projecten staalbouw",
    "stalen trap project tekeningen"
  ],
  description:
    "Bekijk staalconstructie projecten nederland uitgewerkt door STEK+. Van stalen trap project tekeningen tot industriele hallen, alle referentieprojecten in Tekla Structures gemodelleerd.",
};

import ProjectenClient from "@/components/sections/projecten/ProjectenClient";

export default function ProjectenPage() {
  return (
    <main className="bg-white min-h-screen">
      <ProjectenClient />
    </main>
  );
}
