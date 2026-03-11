import { TekenwerkenCard } from "@/components/sections/tekenwerken/TekenwerkenCard";
import { tekenwerkenProducts } from "@/lib/data/tekenwerken-data";

export const metadata = { title: "Diensten | Stek+" };

export default function DienstenPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Page header */}
      <section className="pt-20 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          Onze diensten
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto text-center leading-relaxed">
          Wij ondersteunen staalproductiebedrijven met professioneel en
          nauwkeurig tekenwerk voor uiteenlopende projecten. Dankzij onze brede
          ervaring kunnen wij zowel grootschalige als kleinschalige
          staalconstructies efficiënt uitwerken.
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
    </main>
  );
}
