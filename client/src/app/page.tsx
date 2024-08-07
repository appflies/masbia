import React from "react";
import Image from "next/image"
import { images } from "@/constants";
import { Navbar, Slideshow } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle as fasCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
                <div className="flex flex-row justify-between">
                  <div>
                    <h2 className="uppercase font-bold text-[30px]">About us</h2>
                  </div>

                  <div>
                    <Separator className="w-[270px] mt-[22px] ml-2 h-1 bg-gray-900" />
                  </div>
                </div>

                <div className="text-[#d4a564] text-[20px] italic">
                  Over 50 Years of Excellence in Kosher Products
                </div>
              </div>

              <div>
                <Image src={images.quality} alt="" width={70} className="w-[70px]" />
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
              variant="ghost"
              className={`button-with-triangle border-black border mt-4 px-10 rounded-none bg-white text-black`}
            >
              Learn more
            </Button>
          </div>

          <div>
            <Image src={images.about} alt="" className="max-w-[450px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="relative py-[100px] overflow-hidden">
        <Image src={images.product} alt="product" className="absolute w-full h-full object-cover" />

        <div className="relative z-10 pt-[70px] max-w-[1100px] mx-auto">
          <div className="text-white text-center uppercase font-bold text-[32px] mt-4">
            Our product & process
          </div>

          <div className="text-center text-[#d4a564] mt-1 text-[22px] italic max-w-[540px] mx-auto">
            Ready-to-eat animal protein that does not require a cold
            chain and is free of pathogens
          </div>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto mt-6">
          <div className="relative flex items-center">
            <div className="absolute left-0 right-0 top-1/2 border-t border-dotted border-white -translate-y-1/2 z-0 mt-[-6px]"></div>

            <div className="flex justify-between items-center relative w-[750px] mx-auto z-10">
              <div className="relative z-20 bg-transparent">
                <Image src={images.beef} alt="" className="w-[70px] h-[70px] flex-shrink-0" />
              </div>
              <div className="relative z-20 bg-transparent">
                <Image src={images.seafood} alt="" className="w-[70px] h-[70px] flex-shrink-0" />
              </div>
              <div className="relative z-20 bg-transparent">
                <Image src={images.chicken} alt="" className="w-[70px] h-[70px] flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto mt-[50px] text-white">
          <div className="flex flex-row max-w-[900px]">
            <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
            <p className="ml-2 ">
              Process that allows animal meat to be preserved in such a way that it does not require a cold chain for storage or
              transportation
            </p>
          </div>

          <div className="flex flex-row max-w-[1000px] mt-8">
            <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
            <p className="ml-2">
              Long Life Meat is free of organisms harmful to health and can last up to 6 months at room temperature. It is safe, nutritious,
              tasty, durable, and versatile.
            </p>
          </div>

          <div className="flex flex-row max-w-[930px] mt-8">
            <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
            <p className="ml-2">
              This technological innovation, patented in various countries around the world, is achieved through cold pasteurization.
            </p>
          </div>

          <div className="flex flex-row max-w-[930px] mt-8">
            <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
            <p className="ml-2">
              Long Life Meat comes vacuum-packed, ready to consume or to be used as an ingredient in any type of preparation.
            </p>
          </div>

          <div className="flex flex-row max-w-[1000px] mt-8">
            <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
            <p className="ml-2">
              MASBIA products have already been tested and approved in terms of their organoleptic characteristics and health
              conditions for consumption.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto text-black mt-[100px] mb-[100px]">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex flex-row">
              <h3 className="font-semibold text-[30px]">
                A PARADIGM SHIFT
              </h3>
              <Separator className="max-w-[250px] mt-[22px] ml-2 h-1 bg-gray-900" />
            </div>
            <p className="italic text-[20px] text-justify">
              The exceptional characteristics of the product, the new
              possibilities it offers, and the way it would affect consumer
              habits mean a paradigm change in terms of the conservation
              of meat and the way it is stored and transported, achieving a
              sustainable process
            </p>

            <div className="mt-2 text-semibold text-[28px] text-[#d4a564]">
              The needs that give rise to MASBIA are:
              <Separator className="h-1 bg-[#d4a564]" />
            </div>

            <div className="flex flex-row max-w-[900px] mt-4 text-justify">
              <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
              <p className="ml-2 ">
                The contribution to the safety of meat (whether poultry, pork, or
                bovine) through ionization.
              </p>
            </div>

            <div className="flex flex-row max-w-[900px] mt-4 text-justify">
              <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
              <p className="ml-2 ">
                A product that does not require a cold chain, both in terms of
                practicality in its conservation and to combat hunger by delivering
                foods with a high concentration of proteins to areas where the cold
                chain is precarious or non-existent.
              </p>
            </div>

            <div className="flex flex-row max-w-[900px] mt-4 text-justify">
              <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
              <p className="ml-2 ">
                The reduction in the generation of greenhouse gases (GHG), since
                ionization requires less energy than traditional cooking, and cold
                storage energy is not required for transportation, conservation, and
                display for consumption.
              </p>
            </div>
          </div>

          <div>
            <Image src={images.paradigm} alt="" className="max-w-[450px] mx-auto" />
          </div>
        </div>
      </div>



      <div className="relative py-[100px] overflow-hidden">
        <Image src={images.technology} alt="product" className="absolute w-full h-full object-cover" />
        <div className="relative z-10 max-w-[1100px] mx-auto text-black mt-[100px] mb-[100px]">
          asdasd
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
