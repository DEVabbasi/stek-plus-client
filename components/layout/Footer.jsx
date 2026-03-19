import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";

const footerLinks = {
  snelkoppelingen: [
    { name: "Home", href: "/" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Diensten", href: "/tekenwerk" },
    { name: "Contact", href: "/#contact" },
    { name: "Portefeuille", href: "/projecten" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand py-14 text-white sm:py-16 md:py-20">
      <section className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[minmax(320px,0.96fr)_minmax(170px,0.34fr)_minmax(220px,0.42fr)_minmax(360px,0.62fr)] lg:items-start lg:gap-x-14 xl:gap-x-16">
          <div className="flex flex-col gap-7 sm:col-span-2 lg:col-span-1 lg:max-w-[28rem]">
            <Image
              src="/icons/footerLogo.svg"
              alt="STEK+ Staaltechnisch Tekenburo"
              width={279}
              height={121}
              className="h-auto w-[220px] sm:w-[250px] lg:w-[278.83px]"
            />
            <p className="max-w-[20rem] text-[22px] font-bold leading-[1.16] tracking-normal text-white sm:max-w-[22rem] lg:max-w-[24rem] lg:text-[30px] lg:leading-[35px]">
              Specialisten In Het Tekenen Van Staalconstructies Betrouwbaar
              Flexibel En Technisch Goed Onderlegd.
            </p>
          </div>

          <div className="sm:justify-self-start lg:self-start">
            <h3 className="mb-4 text-[22px] font-bold leading-[1.3] text-white lg:mb-5 lg:text-[25px] lg:leading-[38px]">
              Snelkoppelingen
            </h3>
            <ul className="space-y-2.5 lg:space-y-3">
              {footerLinks.snelkoppelingen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[17px] font-medium leading-[1.1] tracking-[-0.01em] text-white transition-all hover:underline lg:text-[20px] lg:leading-[22px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:justify-self-start lg:self-start">
            <h3 className="mb-4 text-[22px] font-bold leading-[1.3] text-white lg:mb-5 lg:text-[25px] lg:leading-[38px]">
              Adres
            </h3>
            <p className="max-w-[16rem] text-[17px] font-medium leading-[1.1] tracking-[-0.01em] text-white lg:text-[20px] lg:leading-[22px]">
              Bulksestraat 17, 4031JW Ingen
            </p>
          </div>

          <div className="space-y-8 sm:col-span-2 lg:col-span-1 lg:justify-self-start">
            <div>
              <h3 className="mb-4 text-[22px] font-bold leading-[1.3] text-white lg:mb-5 lg:text-[25px] lg:leading-[38px]">
                Volg Ons Op Socialmedia
              </h3>
              <div className="flex gap-2.5 lg:gap-3">
                <a
                  href=""
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 transition-all hover:bg-white hover:text-[#1072B7] lg:h-10 lg:w-10"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href=""
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 transition-all hover:bg-white hover:text-[#1072B7] lg:h-10 lg:w-10"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href=""
                  aria-label="TikTok"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/80 transition-all hover:bg-white lg:h-10 lg:w-10"
                >
                  <img
                    src="/icons/tiktok.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="h-[14px] w-[14px] transition-all [filter:brightness(0)_invert(1)] group-hover:[filter:invert(30%)_sepia(80%)_saturate(600%)_hue-rotate(185deg)_brightness(90%)]"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-[22px] font-bold leading-[1.3] text-white lg:mb-4 lg:text-[25px] lg:leading-[38px]">
                KVK Nummer
              </h3>
              <p className="text-[17px] font-medium leading-[1.1] tracking-[-0.01em] text-white lg:text-[20px] lg:leading-[22px]">
                95272526
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-[22px] font-bold leading-[1.3] text-white lg:mb-4 lg:text-[25px] lg:leading-[38px]">
                BTW-Identificatienummer
              </h3>
              <p className="text-[17px] font-medium leading-[1.1] tracking-[-0.01em] text-white lg:text-[20px] lg:leading-[22px]">
                NL005142783B3
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
