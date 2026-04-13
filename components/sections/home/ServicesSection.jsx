import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    initial: "01",
    title: "Aanvraag & offerte",
  },
  {
    id: 2,
    initial: "02",
    title: "Tekeningen & berekeningen bestuderen",
  },
  {
    id: 3,
    initial: "03",
    title: "3D modelleren in Tekla Structures",
  },
  {
    id: 4,
    initial: "04",
    title: "Overzichtstekeningen maken",
  },
  {
    id: 5,
    initial: "05",
    title: "Controle & revisie",
  },
  {
    id: 6,
    initial: "06",
    title: "Werkplaats- en montagetekeningen",
  },
  {
    id: 7,
    initial: "07",
    title: "NC/DXF/STP bestanden exporteren",
  },
  {
    id: 8,
    initial: "08",
    title: "Gestructureerd aanleveren aan klant",
  },
];

function ServiceCard({ service, mobile = false }) {
  const hoverClasses = mobile
    ? ""
    : "md:hover:-translate-y-1 md:hover:border-transparent md:hover:bg-[linear-gradient(271.53deg,#88C8F7_5.9%,#1072B7_77.5%)] md:hover:shadow-[0_18px_40px_rgba(16,114,183,0.24)]";

  return (
    <Link href="/tekenwerk" className="block h-full">
      <Card
        className={cn(
          "group h-[11.25rem] rounded-none border border-[#eceae7] bg-[#f8f7f5] px-6 pt-4 pb-5 shadow-none transition-all duration-300",
          "sm:h-[10.6rem] sm:px-6 sm:pt-4 sm:pb-5 lg:h-[11.2rem] lg:px-6 lg:pt-4 lg:pb-5",
          hoverClasses,
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between">
            <span
              className={cn(
                "font-sans text-[1.25rem] leading-none font-bold tracking-[-0.03em] text-[#d3d3d3]",
                "sm:text-[2.1rem] lg:text-[2.1rem]",
                !mobile &&
                  "md:transition-colors md:duration-300 md:group-hover:text-white",
              )}
            >
              {service.initial}
            </span>

            <Image
              src="/icons/CustomArrowBlack.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              className={cn(
                "mt-0.5 h-3.5 w-3.5 shrink-0 object-contain",
                "sm:h-4 sm:w-4",
                !mobile &&
                  "md:transition-all md:duration-300 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5 md:group-hover:[filter:brightness(0)_invert(1)]",
              )}
            />
          </div>

          <div className="mt-auto pr-3">
            <h3
              className={cn(
                "var(--font-helvetica-now) text-[24px] leading-6 font-bold tracking-[-0.03em] text-black",
                "max-w-[14ch] text-balance ",
                !mobile &&
                  "md:transition-colors md:duration-300 md:group-hover:text-white",
              )}
            >
              {service.title}
            </h3>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24 lg:py-28">
      <Container className="relative z-10">
        <div className="mb-10 text-center md:mb-12 lg:mb-16">
          <h2 className="text-5xl font-black leading-[0.95] text-black sm:text-6xl md:text-7xl lg:text-[80px]">
            Van aanvraag tot oplevering
          </h2>
        </div>

        <div className="sm:hidden">
          <Carousel
            opts={{ align: "start", loop: false }}
            className="mx-auto w-full max-w-[22rem]"
            aria-label="Services carousel"
          >
            <CarouselContent className="-ml-3">
              {services.map((service) => (
                <CarouselItem key={service.id} className="basis-[86%] pl-3">
                  <ServiceCard service={service} mobile />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-5 flex items-center justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 rounded-none border border-[#e5e5e5] bg-white text-black shadow-none hover:bg-white" />
              <CarouselNext className="static translate-y-0 rounded-none border border-[#e5e5e5] bg-white text-black shadow-none hover:bg-white" />
            </div>
          </Carousel>
        </div>

        <div className="mx-auto hidden max-w-[1140px] grid-cols-2 gap-4 sm:grid lg:grid-cols-4 lg:gap-[14px]">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
