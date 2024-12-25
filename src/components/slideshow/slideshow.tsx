"use client"

import React from "react"
import { Navbar } from "@/components"

function Slideshow() {
  return (
    <React.Fragment>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Navbar con z-index alto para que quede encima del video */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Video de fondo */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/spot.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contenido encima del video */}
        <div className="absolute z-30 flex items-center justify-center w-full h-full">
          <img
            src="/hero.png"
            alt="Slide 1"
            className="w-[500px] absolute top-28 left-1/2 transform -translate-x-1/2"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Slideshow
