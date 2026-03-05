import { tekenwerkenProducts } from "@/lib/data/tekenwerken-data";
import { TekenwerkenCard } from "@/components/sections/tekenwerken/TekenwerkenCard";

export const metadata = { title: "Tekenwerk | Stek+" };

export default function TekenwerkenPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">
          Onze diensten
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-2xl mx-auto text-center leading-relaxed">
          Wij ondersteunen staalproductiebedrijven met professioneel en nauwkeurig tekenwerk voor uiteenlopende projecten. dankzij onze brede ervaring kunnen wij zowel grootschalige als kleinschalige staalconstructies efficiënt uitwerken.
        </p>
      </section>

      {/* Product Cards List */}
      <section className="px-4 pb-20 max-w-5xl mx-auto space-y-8">
        {tekenwerkenProducts.map((product) => (
          <TekenwerkenCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
