import Image from "next/image";
import { VisieRow } from "@/components/ui/VisieRow";

export function OnzeVisieSection() {
  const visieItems = [
    { label: "Technische nauwkeurigheid", isActive: true },
    { label: "Praktische uitvoerbaarheid" },
    { label: "Heldere communicatie" },
    { label: "Afspraak = afspraak" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-16 px-4">
      {/* Vector Design Top Left */}
      <div className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16">
        <Image src="/icons/vectorDesign1.svg" alt="" fill className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black mt-8">
          Onze visie
        </h2>

        <div className="text-center text-gray-600 text-sm md:text-base mt-4 max-w-xl mx-auto space-y-1">
          <p>Wij geloven dat goed tekenwerk de basis vormt van een efficiënte staalproductie. fouten in de engineeringfase kosten tijd, geld en frustratie op de werkvloer.</p>
          <p>Daarom werken wij met een sterke focus op</p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto w-full divide-y divide-gray-200 border border-gray-200">
          {visieItems.map((item) => (
            <VisieRow key={item.label} label={item.label} isActive={item.isActive} />
          ))}
        </div>
      </div>
    </section>
  );
}
