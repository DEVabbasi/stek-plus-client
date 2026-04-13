import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-section relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-[#0d4f86]">
      <div className="absolute inset-0">
        <Image
          src="/images/newHero.png"
          alt="Staalconstructie achtergrond"
          fill
          priority
          loading="eager"
          quality={90}
          className="object-cover object-[72%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,114,183,0.92)_0%,rgba(16,114,183,0.9)_18%,rgba(38,137,214,0.78)_30%,rgba(62,157,227,0.45)_42%,rgba(91,175,237,0.12)_56%,rgba(16,114,183,0.02)_68%,rgba(16,114,183,0)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-[radial-gradient(circle_at_24%_44%,rgba(124,192,246,0.62)_0%,rgba(92,173,236,0.44)_30%,rgba(64,149,222,0.18)_52%,rgba(16,114,183,0)_74%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(0deg,rgba(94,174,236,0.32)_0%,rgba(94,174,236,0.12)_36%,rgba(94,174,236,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,31,53,0.12)_0%,rgba(7,31,53,0.16)_100%)]" />
        <div className="absolute inset-0 md:hidden bg-[linear-gradient(180deg,rgba(10,58,99,0.4)_0%,rgba(10,58,99,0.32)_36%,rgba(10,58,99,0.42)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-5 py-14 sm:px-7 sm:py-16 md:px-10 md:py-20 lg:min-h-[calc(100vh-80px)] lg:px-12 lg:py-24">
        <div className="w-full max-w-[36rem] space-y-5 text-left text-white sm:space-y-6 lg:ml-6 lg:max-w-[40rem]">
          <div className="space-y-1 sm:space-y-3 md:space-y-4">
            <h1 className="hero-title hero-display-primary text-[clamp(3rem,4.4vw+1rem,4.9rem)] leading-relaxed sm:max-w-[15ch]">
              Specialisten In Staalconstructie
            </h1>
            <h2 className="hero-subtitle hero-display-secondary max-w-[8ch] text-[clamp(2.8rem,4vw+0.85rem,4.6rem)] leading-[1.03] opacity-95 sm:max-w-[9ch]">
              Tekenwerk
            </h2>
          </div>
          <p className="hero-body mx-0 max-w-116 pt-1 text-sm leading-[1.8] text-white/92 sm:text-[15px] md:text-base lg:text-md">
            Wij ondersteunen staalproductiebedrijven met nauwkeurige,
            productieklare staalconstructietekeningen. Betrouwbaar, flexibel en
            technisch sterk onderbouwd.
          </p>
          <Link href="/#contact">
            <Button className="hero-cta mt-5 h-auto w-full rounded-none bg-white px-6 py-5 text-[14px] font-bold text-[#1072B7] shadow-none hover:bg-gray-100 sm:w-auto sm:min-w-60 sm:px-7 sm:py-5 sm:text-[14px] md:px-8 md:py-6 md:text-[16px] lg:px-9 lg:py-7 lg:text-[19px]  lg:leading-relaxed">
              Neem contact met ons op of vraag een offerte aan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
