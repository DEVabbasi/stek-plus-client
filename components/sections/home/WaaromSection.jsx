import Image from "next/image";

export function WaaromSection() {
  const items = [
    {
      icon: "/icons/warromSectionIcons/GroupEnvaring.svg",
      label: "Ervaring Binnen Staalproductie",
    },
    {
      icon: "/icons/warromSectionIcons/Felxibele.svg",
      label: "Flexibele Inzet (Tijdelijk of Structureel)",
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
      label: "Praktische Oplossingen",
    },
    {
      icon: "/icons/warromSectionIcons/Snelle levering van tekenwerk.svg",
      label: "Snelle Levering Tekenwerk",
    },
  ];

  return (
    <section className="relative overflow-visible bg-brand w-full py-12 md:py-14 px-4 text-white">
      {/* Background Decorator - Overlapping the section below */}
      <div className="absolute -bottom-10 left-0 w-32 h-32 md:w-44 md:h-44 z-20 pointer-events-none">
        <Image 
          src="/icons/vectorDesign1.svg" 
          alt="" 
          width={176} 
          height={176} 
          className="object-contain" 
        />
      </div>

      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white">
          Waarom met ons samenwerken?
        </h2>
        
        <div className="border-t border-white/20 mt-6 mb-8 mx-auto w-full max-w-4xl"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="w-7 h-7 relative flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.label} 
                  width={28} 
                  height={28} 
                  className="brightness-0 invert object-contain" 
                />
              </div>
              <span className="text-white text-[11px] md:text-xs font-medium leading-tight text-center max-w-[140px] uppercase tracking-wider opacity-90">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-white/80 italic text-sm md:text-base mt-10 font-light">
          &quot;Wij functioneren als verlengstuk van uw organisatie.&quot;
        </p>
      </div>
    </section>
  );
}
