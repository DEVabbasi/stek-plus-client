import Image from "next/image";

const items = [
  { icon: "Black.svg", title: "Stalen trappen &\nbordessen" },
  { icon: "Black-1.svg", title: "Industriële hallen &\noverkappingen" },
  { icon: "Black-2.svg", title: "Staalframes &\nmachinebouw" },
  { icon: "Black-3.svg", title: "Kolommen &\nbalkenconstructies" },
  { icon: "Black-4.svg", title: "Gevelbekleding\n& puien" },
  { icon: "Black-5.svg", title: "Bijzondere\nstaalbouwconstructies" },
];

export function TekenwerkSection() {
  return (
    <section className="bg-brand py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-white leading-[1.1] tracking-[-0.02em]">
          Tekenwerk voor<br />elk Staalbouwproject
        </h2>
        <p className="text-md md:text-md text-center text-white mt-4 max-w-2xl mx-auto leading-relaxed">
          of het nu gaat om een complexe industriële constructie of een nauwkeurig uitgewerkte stalen trap, wij leveren technisch
          tekenwerk voor uiteenlopende staalbouwprojecten. van eenvoudige staalframes tot grote industriële hallen: onze tekeningen
          zijn altijd productie- en montageklaar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-white/30 rounded-xl p-6 flex flex-col gap-4"
            >
              <Image
                src={`/icons/tekenwerkIcons/${item.icon}`}
                alt={item.title}
                width={36}
                height={36}
                className="object-contain brightness-0 invert border border-white/60 rounded-sm p-2"
              />
              <h3 className="text-base font-bold text-white leading-snug whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
