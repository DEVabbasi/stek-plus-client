import Image from "next/image";

export default function OverHeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand min-h-[280px] py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 h-full relative z-10">
        {/* LEFT — text block */}
        <div className="w-full md:w-[60%] text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Over Stek+
          </h1>
          <p className="text-sm md:text-base text-white/90 mt-4 leading-relaxed max-w-md">
            Stek+ is gespecialiseerd in het uitwerken van staalconstructies voor
            productiebedrijven. Wij ondersteunen organisaties die behoefte
            hebben aan betrouwbare, technisch sterke tekeningen die direct
            geschikt zijn voor productie en montage. Wat begon als zelfstandig
            tekenwerk is inmiddels uitgegroeid tot een flexibele
            samenwerkingsstructuur waarin wij capaciteit kunnen opschalen
            wanneer projecten daar om vragen.
          </p>
        </div>

        {/* RIGHT — floating value cards */}
        <div className="w-full md:w-[40%] flex flex-col items-end gap-4 md:gap-5 relative">
          {/* Optional Background Image */}
          <Image
            src="/images/overonsHero.png"
            alt=""
            width={300}
            height={300}
            className="w-auto"
          />
        </div>
      </div>
    </section>
  );
}
