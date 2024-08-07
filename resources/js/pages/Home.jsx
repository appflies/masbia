import React from "react";
import { images } from "@/constants"
import { Navbar, Slideshow } from "@/components";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const HomePage = () => {
    return (
        <React.Fragment>
            <Slideshow />
            <Navbar />

            <div className="mt-[480px] max-w-[1100px] mx-auto">
                <div className="grid grid-cols-2 pt-[130px] pb-[50px]">
                    <div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <div className="flex flex-row">
                                    <h2 className="uppercase font-bold text-[30px]">About us</h2>
                                    <Separator className="max-w-[300px] mt-[22px] ml-2 h-1" />
                                </div>

                                <div className="text-[#d4a564] text-[22px] italic">
                                    Over 50 Years of Excellence in Kosher Products
                                </div>
                            </div>

                            <div>
                                <img src={images.quality} alt="" className="w-[77px]" />
                            </div>
                        </div>

                        <div className="pt-3 space-y-5 text-justify">
                            <p>
                                MASBIA is a company dedicated to developing and commercializing
                                technology applied to foods of animal origin, to reach markets regardless
                                of cold chains and thus facilitate better nutrition for a larger number of
                                people.
                            </p>

                            <p>
                                MASBIA promotes sustainable solutions consisting of protein foods,
                                ready for consumption, safe, and that do not need refrigeration to be
                                preserved after processing.
                            </p>
                        </div>

                        <Button
                            variant="outlined"
                            className={`button-with-triangle border-black border mt-4 px-10 rounded-none bg-white text-black`}
                        >
                            Learn more
                        </Button>
                    </div>

                    <div>
                        <img src={images.about} alt="" className="max-w-[450px] mx-auto" />
                    </div>
                </div>
            </div>

            <div className="relative py-[100px]">
                <img src={images.product} alt="product" className="absolute w-full h-full object-cover" />

                <div className="z-10 relative pt-[70px] max-w-[1100px] mx-auto">
                    <div className="text-white text-center uppercase">
                        Our product & process
                    </div>

                    <div className="text-center text-white">
                        Ready-to-eat animal protein That does not require a cold
                        Chain and free of pathogens
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomePage;
