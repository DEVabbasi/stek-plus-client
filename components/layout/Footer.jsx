import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";

const footerLinks = {
  snelkoppelingen: [
    { name: "Home", href: "/" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Diensten", href: "/tekenwerken" },
    { name: "Contact", href: "/#contact" },
    { name: "Portefeuille", href: "/projecten" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white py-14 sm:py-16 md:py-20">
      <section className="w-full px-5 sm:px-8 md:px-10 lg:px-8 xl:px-14">
        <div className="mx-auto grid w-full max-w-360 grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(150px,0.75fr)_minmax(185px,0.9fr)_minmax(240px,1fr)] lg:gap-x-8 xl:gap-x-12">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col justify-between gap-6  pr-0 sm:col-span-2 lg:col-span-1 lg:pl-2 xl:pl-4">
            <Image
              src="/icons/footerLogo.svg"
              alt="STEK+ Staaltechnisch Tekenburo"
              width={160}
              height={48}
              className="h-auto w-50 sm:w-54 lg:w-66"
            />
            <p className="max-w-[18rem] text-sm font-bold leading-relaxed sm:max-w-sm">
              Specialisten In Het Tekenen Van Staalconstructies Betrouwbaar
              Flexibel En Technisch Goed Onderlegd.
            </p>
          </div>

          {/* Column 2: Snelkoppelingen */}
          <div className="sm:justify-self-start lg:justify-self-center">
            <h3 className="mb-4 text-lg font-semibold">Snelkoppelingen</h3>
            <ul className="space-y-2.5">
              {footerLinks.snelkoppelingen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Adres */}
          <div className="sm:justify-self-start lg:-ml-3">
            <h3 className="mb-2 text-lg font-semibold">Adres</h3>
            <p className="max-w-[14rem] text-sm leading-relaxed">
              Bulksestraat 17, 4031JW Ingen
            </p>
          </div>

          {/* Column 4: Social + KVK + BTW */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1 lg:justify-self-end">
            <div>
              <h3 className="mb-3 text-lg font-semibold">
                Volg Ons Op Socialmedia
              </h3>
              <div className="flex gap-3">
                <a
                  href=""
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1072B7] transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href=""
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1072B7] transition-all"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href=""
                  aria-label="TikTok"
                  className="group w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white transition-all"
                >
                  <img
                    src="/icons/tiktok.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px] transition-all [filter:brightness(0)_invert(1)] group-hover:[filter:invert(30%)_sepia(80%)_saturate(600%)_hue-rotate(185deg)_brightness(90%)]"
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">KVK Nummer</h3>
              <p className="text-sm">95272526</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">
                BTW-Identificatienummer
              </h3>
              <p className="text-sm">NL005142783B3</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
