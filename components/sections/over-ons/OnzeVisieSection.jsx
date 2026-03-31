import { VisieRow } from "@/components/ui/VisieRow";

export function OnzeVisieSection() {
  const visieItems = [
    { label: "Technische nauwkeurigheid" },
    { label: "Praktische uitvoerbaarheid" },
    { label: "Heldere communicatie" },
    { label: "Afspraak = afspraak" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mt-8 text-center text-[3rem] font-extrabold  leading-[0.98] tracking-[0] text-black md:text-[4rem] lg:text-[80px] lg:leading-[78px]">
          Onze visie
        </h2>

        <div className="mx-auto mt-4 max-w-[44rem] space-y-1 text-center text-[20px] font-normal leading-[26px] tracking-[-0.01em] text-black">
          <p>
            Wij geloven dat goed tekenwerk de basis vormt van een efficiente
            staalproductie. Fouten in de engineeringfase kosten tijd, geld en
            frustratie op de werkvloer.
          </p>
          <p>Daarom werken wij met een sterke focus op</p>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3">
          {visieItems.map((item) => (
            <VisieRow key={item.label} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
