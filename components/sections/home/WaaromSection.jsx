import Image from "next/image";

export function WaaromSection() {
  const items = [
    {
      icon: "/icons/warromSectionIcons/GroupEnvaring.svg",
      label: ["Ervaring Binnen", "Staalproductie"],
    },
    {
      icon: "/icons/warromSectionIcons/Felxibele.svg",
      label: ["Flexibele Inzet (Tijdelijk, Structureel of Langdurig)"],
    },
    {
      icon: "/icons/warromSectionIcons/Snelle.svg",
      label: ["Snelle", "Communicatie"],
    },
    {
      icon: "/icons/warromSectionIcons/Hoge.svg",
      label: ["Hoge", "Leverbetrouwbaarheid"],
    },
    {
      icon: "/icons/warromSectionIcons/Meedenken.svg",
      label: ["Meedenken In", "Praktische Oplossingen"],
    },
    {
      icon: "/icons/warromSectionIcons/Snelle levering van tekenwerk.svg",
      label: ["Snelle Levering Van", "Tekenwerk"],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-brand px-4 py-14 text-white md:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="relative z-10 mx-auto max-w-[1960px]">
        <h2 className="mx-auto max-w-[13ch] text-center text-[clamp(2.35rem,4.8vw,5rem)] font-black leading-[1.04] tracking-[-0.05em] text-white sm:max-w-none">
          Waarom met ons samenwerken?
        </h2>
        <p className="mt-3 text-center text-[11px] font-light text-white/90 md:mt-4 md:text-sm">
          Betrouwbare Partner In Tekenwerk
        </p>

        <div className="mx-auto mt-10 max-w-[1920px] md:mt-12 lg:mt-14">
          <div className="px-2 py-1 sm:px-8 md:border-y md:border-white/45 md:px-10 md:py-4 lg:px-12 xl:px-[38px]">
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-6 lg:gap-x-12 xl:gap-x-16">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex min-w-0 flex-col items-center text-center"
                >
                  <div className="relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]">
                    <Image
                      src={item.icon}
                      alt={item.label.join(" ")}
                      width={44}
                      height={44}
                      className="h-8 w-8 brightness-0 invert object-contain md:h-9 md:w-9 lg:h-11 lg:w-11"
                    />
                  </div>
                  <span className="mt-4 max-w-[19ch] text-[12px] font-light leading-[1.35] text-white/92 md:mt-5 md:text-[13px] lg:text-[15px]">
                    {item.label.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-[12px] font-light text-white/92 md:mt-14 md:text-sm">
          Wij functioneren als verlengstuk van uw organisatie.
        </p>
      </div>
    </section>
  );
}
