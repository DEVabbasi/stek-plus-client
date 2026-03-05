import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Container } from "../layout/Container";

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
    title: "Dxf, dwg en step files",
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
      <div className="absolute top-8 left-8 z-0 opacity-40">
        <Image
          src="/icons/vectorDesign2.svg"
          alt=""
          width={100}
          height={100}
          className="w-20 h-20 md:w-28 md:h-28"
        />
      </div>
      <div className="absolute bottom-8 right-8 z-0 opacity-40">
        <Image
          src="/icons/vectorDesign2.svg"
          alt=""
          width={100}
          height={100}
          className="w-20 h-20 md:w-28 md:h-28"
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Onze diensten
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`card-service p-8 md:p-10 relative group cursor-pointer ${
                service.active
                  ? "bg-brand text-white"
                  : "bg-[#f2f2f2] text-gray-900"
              }`}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="text-sm font-medium tracking-wider opacity-70">
                  STEK+
                </div>
                <h3 className="text-lg md:text-xl font-semibold leading-tight min-h-[3rem]">
                  {service.title}
                </h3>
                <div className="flex justify-start pt-2">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/icons/CustomArrowBlack.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
