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
    <section className="section-padding bg-[#f5f7fa] relative overflow-hidden">
      {/* Vector Images */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-0 opacity-40">
        <Image
          src="/icons/vectorDesign2.svg"
          alt=""
          width={100}
          height={100}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-0 opacity-40">
        <Image
          src="/icons/vectorDesign2.svg"
          alt=""
          width={100}
          height={100}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"
          loading="lazy"
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Onze diensten
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <Link href="/tekenwerken" key={service.id} className="block">
              <Card
                className={cn(
                  "p-6 sm:p-8 md:p-10 relative group cursor-pointer transition-all rounded-2xl shadow-md hover:shadow-xl h-full",
                  service.active
                    ? "bg-brand text-white"
                    : "bg-white text-gray-900 hover:bg-gradient-to-br hover:from-[#88c8f7] hover:to-[#1072b7] hover:text-white"
                )}
              >
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="text-xs sm:text-sm font-medium tracking-wider opacity-70">
                    STEK+
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-tight min-h-[3rem]">
                    {service.title}
                  </h3>
                  <div className="flex justify-start pt-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src="/icons/CustomArrowBlack.svg"
                        alt="Arrow Icon"
                        width={16}
                        height={16}
                        className={cn(
                          "transform transition-all duration-300 group-hover:translate-x-1",
                          service.active
                            ? "[filter:brightness(0)_invert(1)]"
                            : "group-hover:[filter:brightness(0)_invert(1)]"
                        )}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
