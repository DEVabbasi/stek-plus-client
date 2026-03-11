"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a <Carousel>")
  return context
}

function Carousel({
  opts,
  plugins,
  orientation = "horizontal",
  className,
  children,
  setApi,
  ...props
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )

  React.useEffect(() => {
    if (!emblaApi || !setApi) return
    setApi(emblaApi)
  }, [emblaApi, setApi])

  return (
    <CarouselContext.Provider value={{ emblaRef, emblaApi, orientation }}>
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }) {
  const { emblaRef, orientation } = useCarousel()
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

function CarouselPrevious({ className, variant = "secondary", size = "icon", ...props }) {
  const { emblaApi } = useCarousel()
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("absolute left-3 top-1/2 -translate-y-1/2", className)}
      onClick={() => emblaApi?.scrollPrev()}
      aria-label="Vorige"
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  )
}

function CarouselNext({ className, variant = "secondary", size = "icon", ...props }) {
  const { emblaApi } = useCarousel()
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("absolute right-3 top-1/2 -translate-y-1/2", className)}
      onClick={() => emblaApi?.scrollNext()}
      aria-label="Volgende"
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
