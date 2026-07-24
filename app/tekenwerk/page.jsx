import { TekenwerkenCard } from "@/components/sections/tekenwerken/TekenwerkenCard";
import { tekenwerkenProducts } from "@/lib/data/tekenwerken-data";
import VectorDivider from "@/components/ui/VectorDivider";

export const metadata = {
  title:
    "Diensten | Stek+ | Werkplaatstekeningen Staalconstructie | Montage en NC Bestanden ",
  keywords: [
    "staalconstructie tekenwerk",
    "Tekla Structures tekenwerk",
    "werkplaats tekeningen staal",
    "montagetekeningen staalconstructie",
    "productietekeningen staal",
    "NC bestanden staalconstructie",
    "DXF bestanden staal",
    "STP bestanden staalconstructie",
    "staalbouw tekeningen",
    "technisch tekenbureau staal",
    "werkplaatstekeningen staalconstructie",
    "montagetekeningen staalconstructie",
    "nc bestanden staalconstructie",
    "stalen trap tekeningen",
    "industriele hal tekeningen staal",
    "Tekla Structures",
  ],
  description:
    "STEK+ verzorgt staalconstructie tekenwerk van 3D modelleren in Tekla Structures tot werkplaats-, montage- en productietekeningen, inclusief NC, DXF en STP export voor staalproductie. STEK+ verzorgt werkplaatstekeningen staalconstructie,montagetekeningen en NC bestanden in Tekla Structures. Van stalen trap tekeningen tot industriele hal tekeningen staal, productieklaar geleverd.",
};

export default function DienstenPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Page header */}
      <section className="pt-20 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          Onze diensten
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-4xl mx-auto text-center leading-relaxed">
          Wij ondersteunen staalproductiebedrijven met professioneel en
          nauwkeurig tekenwerk voor uiteenlopende projecten. Dankzij onze brede
          ervaring kunnen wij zowel grootschalige als kleinschalige
          staalconstructies efficiënt uitwerken.
        </p>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-4xl mx-auto text-center leading-relaxed">
          Onze werkplaatstekeningen staalconstructie vormen de basis van elk
          project. Elk onderdeel krijgt een eigen werkplaatstekening met exacte
          maatvoering, boutgaten, lasnaadsymbolen en materiaalspecificatie,
          zodat de werkvloer zonder vragen kan produceren. Naast
          werkplaatstekeningen leveren wij ook montagetekeningen
          staalconstructie voor de montageploeg op locatie, inclusief
          boutspecificaties en hijspunten.
        </p>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-4xl mx-auto text-center leading-relaxed">
          Voor de productie exporteren wij nc bestanden staalconstructie
          rechtstreeks vanuit het Tekla model, zodat CNC machines direct kunnen
          worden aangestuurd zonder handmatige invoer. Wij leveren stalen trap
          tekeningen voor zowel utiliteit als woningbouw, en industriele hal
          tekeningen staal voor bedrijfshallen, distributiecentra en loodsen
          door heel Nederland.
        </p>
      </section>

      {/* 6 cards, gap-10 between each */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="gap-10">
          {tekenwerkenProducts.map((item) => (
            <TekenwerkenCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <VectorDivider align="right" />
    </main>
  );
}
