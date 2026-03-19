import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "3d modelleren van staalconstructies",
    active: false,
  },
  {
    id: 2,
    title: "Werkplaats-tekeningen",
    active: true,
  },
  {
    id: 3,
    title: "Montage- en overzichts tekeningen",
    active: false,
  },
  {
    id: 4,
    title: "Nc, dwg, dxf & step files",
    active: false,
  },
  {
    id: 5,
    title: "Revisiewerk en optimalisatie",
    active: false,
  },
  {
    id: 6,
    title: "Capiciteits ondersteuning bij piek-belasting",
    active: false,
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24 lg:py-28">
      <Container className="relative z-10">
        <div className="mb-10 text-center md:mb-12 lg:mb-16">
          <h2 className="text-5xl font-extrabold leading-none text-black sm:text-6xl md:text-7xl lg:text-[88px]">
            Onze diensten
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <Link href="/tekenwerk" key={service.id} className="block">
              <Card
                className={cn(
                  "group flex min-h-[18rem] flex-col justify-between rounded-none border border-[#f3f3f3] bg-[#fcfcfc] p-10 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[19rem] lg:min-h-[20.25rem]",
                  service.active
                    ? "border-transparent bg-[linear-gradient(271.53deg,#88C8F7_5.9%,#1072B7_77.5%)] text-white"
                    : "text-black hover:border-transparent hover:bg-[linear-gradient(271.53deg,#88C8F7_5.9%,#1072B7_77.5%)] hover:text-white"
                )}
              >
                <div className="space-y-5">
                  <div
                    className={cn(
                      "text-[16px] font-light uppercase leading-none tracking-[0.45em] transition-colors duration-300",
                      service.active ? "text-white" : "text-black group-hover:text-white"
                    )}
                  >
                    STEK+
                  </div>
                  <h3
                    className={cn(
                      "max-w-[10ch] text-[28px] font-bold leading-[1.18] transition-colors duration-300",
                      service.active ? "text-white" : "text-black group-hover:text-white"
                    )}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="flex justify-start pt-8">
                  <Image
                    src="/icons/CustomArrowBlack.svg"
                    alt="Arrow Icon"
                    width={26}
                    height={26}
                    className={cn(
                      "h-[26px] w-[26px] transition-all duration-300 group-hover:translate-x-1",
                      service.active
                        ? "[filter:brightness(0)_invert(1)]"
                        : "group-hover:[filter:brightness(0)_invert(1)]"
                    )}
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
