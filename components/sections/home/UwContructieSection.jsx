import React from "react";
import Image from "next/image";

export const UwContructieSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src="/icons/UWbg.png"
        alt="Uw Constructiebedrijf Centraal"
        className="w-full h-auto object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-black text-white leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl xl:text-7xl">
          Uw Constructiebedrijf Centraal
        </h1>
        <p className="text-md md:text-md text-white mt-4 max-w-2xl leading-relaxed">
          Wij werken uitsluitend voor constructiebedrijven en staalproducenten
          die behoefte hebben aan betrouwbaar, schaalbaar tekenwerk. Als vaste
          externe tekenpartner passen wij ons volledig aan uw werkwijze aan,
          zodat u zich kunt richten op productie en montage.
        </p>
        <p className="text-md md:text-md text-white mt-3 max-w-2xl leading-relaxed">
          Van kleinschalige constructiebedrijven tot grote staalproducenten: wij
          bieden maatwerk in capaciteit, planning en communicatie. Continuïteit
          in uw productieproces staat bij ons altijd voorop.
        </p>
      </div>
    </section>
  );
};
