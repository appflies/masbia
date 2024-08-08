"use client"

import React from "react"
import Image from "next/image"
import { images } from "@/constants"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

function Slideshow() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="absolute w-full top-0 bg-black"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem key="1">
          <div className="w-full max-h-[680px]">
            <Card className="rounded-none">
              <CardContent className="flex aspect-square items-center justify-center max-h-[700px] w-full">
                <Image src={images.slide1} alt="Slide 1" className="absolute w-full h-full object-cover" />
                <span className="text-4xl font-semibold relative mt-[100px]">
                  <Image src={images.hero} alt="" className="w-[500px]" />
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem key="2">
          <div className="w-full max-h-[600px]">
            <Card className="rounded-none">
              <CardContent className="flex aspect-square items-center justify-center max-h-[700px] w-full">
                <Image src={images.slide2} alt="Slide 2" className="absolute w-full h-full object-cover" />
                <span className="text-4xl font-semibold relative mt-[100px]">
                  <Image src={images.hero} alt="" className="w-[500px]" />
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem key="3">
          <div className="w-full max-h-[600px]">
            <Card className="rounded-none">
              <CardContent className="flex aspect-square items-center justify-center max-h-[700px] w-full">
                <Image src={images.slide3} alt="Slide 3" className="absolute w-full h-full object-cover" />
                <span className="text-4xl font-semibold relative mt-[100px]">
                  <Image src={images.hero} alt="" className="w-[500px]" />
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default Slideshow
