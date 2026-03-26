import Image from "next/image";

export function WaaromSection() {
  const items = [
    {
      icon: "/icons/warromSectionIcons/GroupEnvaring.svg",
      label: "Ervaring Binnen Staalproductie",
    },
    {
      icon: "/icons/warromSectionIcons/Felxibele.svg",
      label: "Flexibele Inzet (Tijdelijk Of Structureel)",
    },
    {
      icon: "/icons/warromSectionIcons/Snelle.svg",
      label: "Snelle Communicatie",
    },
    {
      icon: "/icons/warromSectionIcons/Hoge.svg",
      label: "Hoge Leverbetrouwbaarheid",
    },
    {
      icon: "/icons/warromSectionIcons/Meedenken.svg",
      label: "Meedenken In Praktische Oplossingen",
    },
    {
      icon: "/icons/warromSectionIcons/Snelle levering van tekenwerk.svg",
      label: "Snelle Levering Van Tekenwerk",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-brand px-4 py-14 text-white md:py-16 lg:py-20 2xl:py-24">
      <div className="container-custom relative z-10 max-w-[1840px]">
        <h2 className="mx-auto max-w-[15ch] text-center text-[clamp(2.85rem,6vw,5rem)] font-black uppercase leading-[0.975] tracking-[-0.05em] text-white">
          Waarom met ons samenwerken?
        </h2>
        <p className="mt-4 text-center text-sm font-light text-white/88 md:text-base">
          Betrouwbare Partner In Tekenwerk
        </p>

        <div className="relative mx-auto mt-10 max-w-[1757px] md:mt-12 lg:mt-14">
          <div className="hidden md:block md:border-t md:border-white/45" />
          <div className="pointer-events-none absolute left-0 right-0 top-[1.2rem] hidden border-t border-white/45 md:block lg:top-[1.35rem] 2xl:top-[1.5rem]" />
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 pt-0 sm:grid-cols-3 md:gap-x-6 md:gap-y-10 md:pt-5 lg:grid-cols-6 lg:gap-x-8 lg:pt-6 2xl:gap-x-10">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-4 text-center md:gap-5"
              >
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-transparent md:h-10 md:w-10 lg:h-11 lg:w-11">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={22}
                    height={22}
                    className="h-[18px] w-[18px] brightness-0 invert object-contain md:h-[20px] md:w-[20px] lg:h-[22px] lg:w-[22px]"
                  />
                </div>
                <span className="max-w-[12ch] text-center text-[12px] font-light leading-[1.35] text-white/92 sm:max-w-[14ch] md:text-[13px] lg:max-w-[15ch] lg:text-[15px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-sm font-light text-white/90 md:mt-14 md:text-base">
          Wij functioneren als verlengstuk van uw organisatie.
        </p>
      </div>
    </section>
  );
}
