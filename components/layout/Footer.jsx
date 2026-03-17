import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";
import { Container } from "./Container";

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
    <footer className="relative overflow-hidden bg-brand text-white py-16 md:py-20">
      <Container width>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col justify-between gap-10 sm:col-span-2 lg:col-span-1">
            <Image
              src="/icons/footerLogo.svg"
              alt="STEK+ Staaltechnisch Tekenburo"
              width={160}
              height={48}
              className="w-60 h-auto"
            />
            <p className="text-sm font-bold leading-relaxed max-w-sm">
              Specialisten In Het Tekenen Van Staalconstructies Betrouwbaar
              Flexibel En Technisch Goed Onderlegd.
            </p>
          </div>

          {/* Column 2: Snelkoppelingen */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Snelkoppelingen</h3>
            <ul className="space-y-3">
              {footerLinks.snelkoppelingen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:underline transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Adres */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Adres</h3>
            <p className="text-sm leading-relaxed">
              Bulksestraat 17, 4031JW Ingen
            </p>
          </div>

          {/* Column 4: Social + KVK + BTW */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">
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
              <h3 className="font-semibold text-lg mb-2">KVK Nummer</h3>
              <p className="text-sm">95272526</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                BTW-Identificatienummer
              </h3>
              <p className="text-sm">NL005142783B3</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
