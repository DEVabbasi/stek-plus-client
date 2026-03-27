import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";

const services = [
  {
    id: 1,
    title: "3d modelleren van staalconstructies",
  },
  {
    id: 2,
    title: "Werkplaats-tekeningen",
  },
  {
    id: 3,
    title: "Montage- en overzichts tekeningen",
  },
  {
    id: 4,
    title: "Nc, dwg, dxf & step files",
  },
  {
    id: 5,
    title: "Revisiewerk en optimalisatie",
  },
  {
    id: 6,
    title: "Capiciteits ondersteuning bij piek-belasting",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24 lg:py-28">
      <Container className="relative z-10">
        <div className="mb-10 text-center md:mb-12 lg:mb-16">
          <h2 className="text-5xl font-black leading-[0.95] text-black sm:text-6xl md:text-7xl lg:text-[80px]">
            Onze diensten
          </h2>
        </div>

        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          {services.map((service) => (
            <Link href="/tekenwerk" key={service.id} className="block">
              <Card
                className="group flex min-h-[14rem] flex-col justify-between rounded-none border border-[#e8e8e8] bg-[#f5f4f2] p-6 shadow-[0_12px_32px_rgba(17,17,17,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-[linear-gradient(271.53deg,#88C8F7_5.9%,#1072B7_77.5%)] hover:shadow-[0_18px_40px_rgba(16,114,183,0.24)] sm:min-h-[15rem] sm:p-7 lg:min-h-[15.25rem] lg:p-7"
              >
                <div className="space-y-5">
                  <div className="text-[11px] font-light uppercase leading-none tracking-[0.38em] text-black/70 transition-colors duration-300 group-hover:text-white/85 sm:text-[12px]">
                    STEK+
                  </div>
                  <h3 className="max-w-[14ch] text-[24px] font-bold leading-[1.08] tracking-[-0.03em] text-black transition-colors duration-300 group-hover:text-white sm:max-w-[13ch] sm:text-[26px] lg:max-w-[14ch] lg:text-[28px]">
                    {service.title}
                  </h3>
                </div>
                <div className="flex justify-start pt-7 sm:pt-8">
                  <Image
                    src="/icons/CustomArrowBlack.svg"
                    alt="Arrow Icon"
                    width={26}
                    height={26}
                    className="h-[22px] w-[22px] transition-all duration-300 group-hover:translate-x-1 group-hover:[filter:brightness(0)_invert(1)] sm:h-[24px] sm:w-[24px]"
                    loading="lazy"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
