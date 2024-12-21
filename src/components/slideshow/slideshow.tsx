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
import { Navbar } from "@/components"

function Slideshow() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <React.Fragment>
      <div className="relative w-screen h-full p-0 max-h-[680px] min-h-[480px] overflow-hidden">
        <Navbar />
        <Carousel
          plugins={[plugin.current]}
          className="absolute w-full h-full min-h-[480px] p-0 m-0"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem key="1" className="min-h-[480px]">
              <Card className="w-full h-full p-0 m-0 rounded-none h-full min-h-[480px]">
                <CardContent className="w-full h-full p-0 m-0 relative min-h-[480px]">
                  <Image
                    src={images.slide1}
                    alt="Slide 1"
                    className="w-screen h-full object-cover"
                  />
                  <span className="flex justify-center items-center h-full absolute top-0 left-0 w-full">
                    <Image
                      src={images.hero}
                      alt="Hero 1"
                      className="w-[500px] xs:pb-[100px] xl:pb-[200px] xs:pt-[30%] lg:pt-[0px] xl:pt-0 xl:-mt-24 xs:mx-3"
                    />
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem key="2" className="min-h-[480px]">
              <Card className="w-full h-full p-0 m-0 rounded-none min-h-[480px]">
                <CardContent className="w-full h-full p-0 m-0 relative min-h-[480px]">
                  <Image
                    src={images.slide2}
                    alt="Slide 2"
                    className="w-screen h-full object-cover"
                  />
                  <span className="flex justify-center items-center h-full absolute top-0 left-0 w-full">
                    <Image
                      src={images.hero}
                      alt="Hero 2"
                      className="w-[500px] xs:pb-[100px] xl:pb-[200px] xs:pt-[30%] lg:pt-[0px] xl:pt-0 xl:-mt-24 xs:mx-3"
                    />
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem key="3" className="min-h-[480px]">
              <Card className="w-full h-full p-0 m-0 rounded-none min-h-[480px]">
                <CardContent className="w-full h-full p-0 m-0 relative min-h-[480px]">
                  <Image
                    src={images.slide3}
                    alt="Slide 3"
                    className="w-screen h-full object-cover"
                  />
                  <span className="flex justify-center items-center h-full absolute top-0 left-0 w-full">
                    <Image
                      src={images.hero}
                      alt="Hero 3"
                      className="w-[500px] xs:pb-[100px] xl:pb-[200px] xs:pt-[30%] lg:pt-[0px] xl:pt-0 xl:-mt-24 xs:mx-3"
                    />
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </React.Fragment>
  )
}

export default Slideshow
