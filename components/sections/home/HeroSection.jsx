import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-section relative isolate flex min-h-screen items-center overflow-hidden bg-[#071f35] -mt-[92px] md:-mt-[100px] lg:-mt-[112px]">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,53,0.95)_0%,rgba(10,46,78,0.92)_15%,rgba(16,72,120,0.82)_28%,rgba(22,90,148,0.55)_42%,rgba(40,120,180,0.2)_56%,rgba(16,114,183,0.05)_68%,rgba(16,114,183,0)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-[radial-gradient(circle_at_24%_44%,rgba(60,130,190,0.45)_0%,rgba(40,100,160,0.32)_30%,rgba(20,70,120,0.15)_52%,rgba(7,31,53,0)_74%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(0deg,rgba(7,31,53,0.4)_0%,rgba(10,46,78,0.18)_36%,rgba(16,72,120,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,31,53,0.3)_0%,rgba(7,31,53,0.22)_100%)]" />
        <div className="absolute inset-0 md:hidden bg-[linear-gradient(180deg,rgba(7,31,53,0.55)_0%,rgba(7,31,53,0.45)_36%,rgba(7,31,53,0.55)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-375 items-center px-5 pt-24 pb-14 sm:px-7 sm:pt-28 sm:pb-16 md:px-10 md:pt-28 md:pb-20 lg:min-h-screen lg:px-12 lg:pt-32 lg:pb-24">
        <div className="w-full text-left text-white sm:space-y-6 lg:ml-6">
          <div className=" sm:space-y-3 md:space-y-3 lg:space-y-2">
            <h1 className="hero-title hero-display-primary hero-text-shadow  leading-[90px] sm:max-w-[15ch]">
              Specialisten
            </h1>
            <h2 className="hero-subtitle hero-display-secondary hero-text-shadow leading-[90px]  sm:max-w-[15ch]">
              In Staalconstructie
            </h2>
            <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xxl font-bold text-white max-w-3xl">
              Tekenburo & Engineering Bureau
            </p>
          </div>
          <ul className="hero-body mx-0 max-w-116 space-y-3 pt-1 text-white sm:space-y-4">
            <li className="flex items-center gap-3 text-md sm:text-[15px] md:text-base lg:text-lg">
              <Image
                src="/icons/heroCheck1.svg"
                alt=""
                width={26}
                height={26}
                className="h-9 w-9 md:p-2 bg-white rounded-full text-[var(--brand-blue)] md:h-8 md:w-8 "
              />
              <span>
                Specialist in staalconstructies, 3D modelleren met Tekla
                Structures
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm sm:text-[15px] md:text-base lg:text-lg">
              <Image
                src="/icons/heroCheck1.svg"
                alt=""
                width={26}
                height={26}
                className="h-9 w-9 md:p-2 bg-white rounded-full text-[var(--brand-blue)] md:h-8 md:w-8 "
              />
              <span>Snel, nauwkeurig en betrouwbaar tekenwerk</span>
            </li>
          </ul>
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
