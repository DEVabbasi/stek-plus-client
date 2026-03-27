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
    <section className="relative w-full overflow-hidden bg-brand px-4 py-16 text-white md:py-20 lg:py-24 2xl:py-28">
      <div className="container-custom relative z-10 max-w-[1840px]">
        <h2 className="mx-auto max-w-[12ch] text-center text-[clamp(2.9rem,5.7vw,5.45rem)] font-black leading-[1.04] tracking-[-0.045em] text-white sm:max-w-none">
          Waarom met ons samenwerken?
        </h2>
        <p className="mt-5 text-center text-sm font-light text-white/88 md:mt-4 md:text-base">
          Betrouwbare Partner In Tekenwerk
        </p>

        <div className="mx-auto mt-12 max-w-[1380px] md:mt-14 lg:mt-16">
          <div className="border-y border-white/55 px-4 py-4 sm:px-6 md:px-8 lg:px-10">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:gap-x-10 lg:grid-cols-6 lg:gap-x-12 xl:gap-x-14">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex min-w-0 justify-center"
                >
                  <div className="relative flex h-8 w-8 items-center justify-center md:h-9 md:w-9">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={22}
                      height={22}
                      className="h-5 w-5 brightness-0 invert object-contain md:h-[22px] md:w-[22px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-6 px-2 text-center sm:grid-cols-3 md:mt-6 md:gap-x-10 lg:grid-cols-6 lg:gap-x-12 xl:gap-x-14">
            {items.map((item, index) => (
              <div
                key={index}
                className="mx-auto flex max-w-[15ch] items-start justify-center text-center"
              >
                <span className="text-[13px] font-light leading-[1.4] text-white/92 md:text-[14px] lg:text-[15px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-sm font-light text-white/90 md:mt-16 md:text-base">
          Wij functioneren als verlengstuk van uw organisatie.
        </p>
      </div>
    </section>
  );
}
