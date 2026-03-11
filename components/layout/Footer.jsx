import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Container } from "./Container";

const footerLinks = {
  snelkoppelingen: [
    { name: "Home", href: "/" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Diensten", href: "/tekenwerken" },
    { name: "Projecten", href: "/projecten" },
    { name: "Contact", href: "/#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#88C8F7] to-[#1072B7] text-white py-16 md:py-20">
      <Container>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Image
              src="/icons/footerLogo.svg"
              alt="STEK+ Logo"
              width={160}
              height={48}
              className="w-40 h-auto"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Specialisten In Het Tekenen Van Staalconstructies Betrouwbaar
              Flexibel En Technisch Goed Onderlegd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Snelkoppelingen</h3>
            <ul className="space-y-4">
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

          {/* Contact & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Adres</h3>
              <p className="text-sm">Bulksestraat 17, 4031JW Ingen</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">
                Volg Ons Op Socialmedia
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1072B7] transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1072B7] transition-all"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1072B7] transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">KVK Nummer</h3>
              <p className="text-sm">95072526</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                BTW Identificatienummer
              </h3>
              <p className="text-sm">NL006946783B3</p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-white/30 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Stek+ Staaltechnisch Tekenburo. Alle
          rechten voorbehouden.
        </div>
      </Container>
    </footer>
  );
}
