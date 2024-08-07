import React from "react"
import { images } from "@/constants"

function Slideshow() {
    return (
        <React.Fragment>
            <div className="absolute w-full top-0">
                <img src={images.slide1} alt="Slide 1" className="w-full max-h-[600px]" />
            </div>
        </React.Fragment>
    )
}

export default Slideshow
