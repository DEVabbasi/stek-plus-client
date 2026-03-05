import Image from "next/image";

export function OnzeWerkwijzeSection() {
  const werkwijzeItems = [
    {
      iconFile: "Black.svg",
      title: "Inschakelen bij capaciteitsproblemen",
      description: "Kom tussenbeide bij capaciteitstekorten om uw productie draaiende te houden.",
    },
    {
      iconFile: "Black-1.svg",
      title: "Ondersteunen bij grote of complexe projecten",
      description: "Ondersteun grote of complexe projecten die gespecialiseerde aandacht vereisen.",
    },
    {
      iconFile: "Black-2.svg",
      title: "Bijdragen aan optimalisaties",
      description: "Bijdragen aan optimalisaties voor een betere maakbaarheid.",
    },
    {
      iconFile: "Black-3.svg",
      title: "Flexibel inzetbaar",
      description: "Flexibel inzetbaar per project of periode indien nodig.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black">
          Onze werkwijze
        </h2>

        <p className="text-sm md:text-base text-center text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
          Wij werken als externe tekenpartner voor staalproductiebedrijven. dat betekent dat wij
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {werkwijzeItems.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-2xl bg-white p-5 md:p-6 flex flex-col gap-3"
            >
              <Image
                src={`/icons/OnzeSectionIcons/${item.iconFile}`}
                alt=""
                width={32}
                height={32}
                className="object-contain"
              />

              <h3 className="text-base font-bold text-black leading-snug">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm md:text-base mt-12 max-w-xl mx-auto leading-relaxed">
          Wij integreren waar nodig in uw bestaande processen en werken volgens uw standaarden en systemen.
        </p>
      </div>
    </section>
  );
}
