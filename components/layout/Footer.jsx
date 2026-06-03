import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  snelkoppelingen: [
    { name: "Home", href: "/" },
    { name: "Over Ons", href: "/over-ons" },
    { name: "Diensten", href: "/tekenwerk" },
    { name: "Contact", href: "/#contact" },
    { name: "Projecten", href: "/projecten" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/STEK/61572920711320/?locale=nl_NL",
    icon: "/icons/footerIcons/fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/stek_plus/",
    icon: "/icons/footerIcons/insta.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@stekplus",
    icon: "/icons/footerIcons/tiktok.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/stek-plus/",
    icon: "/icons/footerIcons/linkedin.svg",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand py-14 text-white sm:py-16 md:py-20">
      <section className="w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto grid w-full max-w-[1760px] grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-[minmax(320px,0.96fr)_minmax(170px,0.34fr)_minmax(220px,0.42fr)_minmax(360px,0.62fr)] lg:items-start lg:gap-x-14 xl:gap-x-16">
          <div className="flex flex-col gap-7 sm:col-span-2 lg:col-span-1 lg:max-w-[28rem]">
            <Link href="/" className="flex items-center z-10">
              <Image
                src="/icons/footerLogo.svg"
                alt="STEK+ Staaltechnisch Tekenburo"
                width={279}
                height={121}
                className="h-auto w-[220px] sm:w-[250px] lg:w-[278.83px]"
              />
            </Link>
            <p className="mt-2 max-w-[20rem] text-[17px] font-semibold leading-[1.28] tracking-normal text-white sm:max-w-[22rem] md:text-[18px] lg:mt-3 lg:max-w-[24rem] lg:text-[22px] lg:leading-[29px]">
              Specialisten In Het Tekenen Van Staalconstructies Betrouwbaar
              Flexibel En Technisch Goed Onderlegd.
            </p>
          </div>

          <div className="sm:justify-self-start lg:self-start">
            <h3 className="mb-3 text-[18px] font-bold leading-[1.25] text-white lg:mb-4 lg:text-[20px] lg:leading-[1.3]">
              Snelkoppelingen
            </h3>
            <ul className="space-y-2 lg:space-y-2.5">
              {footerLinks.snelkoppelingen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium leading-[1.2] tracking-[-0.01em] text-white transition-all hover:underline md:text-[15px] lg:text-[16px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:justify-self-start lg:self-start space-y-8 sm:col-span-2 lg:col-span-1 ">
            <h3 className="mb-3 text-[18px] font-bold leading-[1.25] text-white lg:mb-4 lg:text-[20px] lg:leading-[1.3]">
              Adres
            </h3>
            <p className="max-w-[16rem] text-[14px] font-medium leading-[1.25] tracking-[-0.01em] text-white md:text-[15px] lg:text-[16px]">
              Bulksestraat 17, 4031JW Ingen
            </p>{" "}
            <h3 className="mb-3 text-[18px] font-bold leading-[1.25] text-white lg:mb-4 lg:text-[20px] lg:leading-[1.3]">
              E-mail
            </h3>
            <p
              mailto="info@stek-plus.nl"
              className="max-w-[16rem] text-[14px] font-medium leading-[1.25] tracking-[-0.01em] text-white md:text-[15px] lg:text-[16px]"
            >
              info@stek-plus.nl
            </p>{" "}
            <h3 className="mb-3 text-[18px] font-bold leading-[1.25] text-white lg:mb-4 lg:text-[20px] lg:leading-[1.3]">
              Telefoon
            </h3>
            <p className="max-w-[16rem] text-[14px] font-medium leading-[1.25] tracking-[-0.01em] text-white md:text-[15px] lg:text-[16px]">
              +31 6 10992534
            </p>
          </div>

          <div className="space-y-8 sm:col-span-2 lg:col-span-1 lg:justify-self-start">
            <div>
              <h3 className="mb-3 text-[18px] font-bold leading-[1.25] text-white lg:mb-4 lg:text-[20px] lg:leading-[1.3]">
                Volg Ons Op Socialmedia
              </h3>
              <div className="flex gap-2.5 lg:gap-3">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.name}
                    href={socialLink.href}
                    aria-label={socialLink.name}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-transparent transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(16,114,183,0.2)] lg:h-10 lg:w-10"
                  >
                    <Image
                      src={socialLink.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-[15px] w-[15px] object-contain transition-all duration-300 [filter:brightness(0)_invert(1)] group-hover:[filter:invert(31%)_sepia(92%)_saturate(1117%)_hue-rotate(184deg)_brightness(90%)_contrast(93%)] lg:h-4 lg:w-4"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2.5 text-[18px] font-bold leading-[1.25] text-white lg:mb-3 lg:text-[20px] lg:leading-[1.3]">
                KVK Nummer
              </h3>
              <p className="text-[14px] font-medium leading-[1.25] tracking-[-0.01em] text-white md:text-[15px] lg:text-[16px]">
                95272526
              </p>
            </div>

            <div>
              <h3 className="mb-2.5 text-[18px] font-bold leading-[1.25] text-white lg:mb-3 lg:text-[20px] lg:leading-[1.3]">
                BTW-Identificatienummer
              </h3>
              <p className="text-[14px] font-medium leading-[1.25] tracking-[-0.01em] text-white md:text-[15px] lg:text-[16px]">
                NL005142783B31
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
