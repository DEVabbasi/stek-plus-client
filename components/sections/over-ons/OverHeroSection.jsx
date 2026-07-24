"use client";
import Image from "next/image";

export default function OverHeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand min-h-70 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 h-full relative z-10">
        {/* LEFT — text block */}
        <div className="w-full md:w-[60%] text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Over Stek+
          </h1>
          <p className="text-sm md:text-base text-white/90 mt-4 leading-relaxed max-w-xl">
            Stek+ is gespecialiseerd in het uitwerken van staalconstructies voor
            productiebedrijven. Wij ondersteunen organisaties die behoefte
            hebben aan betrouwbare, technisch sterke tekeningen die direct
            geschikt zijn voor productie en montage. Wat begon als zelfstandig
            tekenwerk is inmiddels uitgegroeid tot een flexibele
            samenwerkingsstructuur waarin wij capaciteit kunnen opschalen
            wanneer projecten daar om vragen.
          </p>
          <p className="text-sm md:text-base text-white/90 mt-4  max-w-xl">
            Steeds meer staalproducenten kiezen ervoor om tekenwerk uitbesteden
            staalbouw structureel onderdeel te maken van hun bedrijfsvoering. In
            plaats van een eigen tekenkamer volledig te belasten tijdens
            piekperiodes, schakelen zij een externe tekenpartner staalbouw in
            die meebeweegt met de planning en capaciteit van het moment.
          </p>
          <p className="text-sm md:text-base text-white/90 mt-4  max-w-xl">
            Als technisch tekenbureau metaalconstructie combineren wij
            technische kennis met praktijkervaring binnen de staalproductie. Ons
            flexibel tekenbureau staal past zich volledig aan uw standaarden,
            sjablonen en werkwijze aan, zodat samenwerken vanaf de eerste
            tekening soepel verloopt. Bedrijven die op zoek zijn naar een
            betrouwbaar tekenbureau staalconstructie kiezen voor STEK+ vanwege
            korte communicatielijnen en heldere afspraken.
          </p>
        </div>

        {/* RIGHT — floating value cards */}
        <div className="w-full md:w-[50%] flex flex-col items-end gap-4 md:gap-5 relative">
          {/* Optional Background Image */}
          <Image
            src="/images/overonsHero.png"
            alt=""
            width={1400}
            height={1400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-cover "
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
