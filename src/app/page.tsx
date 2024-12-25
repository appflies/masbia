"use client"

import React from "react"
import Image from "next/image";
import { images } from "@/constants"
import { Header } from "@/components"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle as fasCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Fab from '@mui/material/Fab';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  const handleClickWhatsApp = () => {
    window.open("https://api.whatsapp.com/send/?phone=1149373697", "_blank");
  }

  const handleLearnMoreClick = () => {
    window.open("https://drive.google.com/file/d/1D0ncaHCUCfCNJ14OpHcKoXSR-9nIj1aC/view", "_blank");
  };

  const handleMoreInfoClick = () => {
    window.open("https://drive.google.com/file/d/1ZXAWP_hGWw_vaGLkGGW4eZq9WiJVXi3R/view", "_blank");
  };

  const image = [
    { src: "/images/01.jpg", tooltip: "/images/beef.png" },
    { src: "/images/02.jpg", tooltip: "/images/muslo.png" },
    { src: "/images/04.jpg", tooltip: "/images/weenie.png" },
    { src: "/images/06.jpg", tooltip: "/images/cow.png" },
    { src: "/images/09.jpg", tooltip: "/images/burguer.png" },
    { src: "/images/11.jpg", tooltip: "/images/hotdog.png" },
    { src: "/images/13.jpg", tooltip: "/images/albondiga.png" },
    { src: "/images/22.jpeg", tooltip: "/images/beef.png" },
  ];

  const [visibleTooltip, setVisibleTooltip] = React.useState<number | null>(null);

  return (
    <React.Fragment>
      <Header />

      <h2 className="uppercase font-bold text-[30px] text-center mt-10" id="about">Our plates</h2>

      <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mt-6">
        <div
          className="relative"
          onMouseEnter={() => setVisibleTooltip(0)}
          onMouseLeave={() => setVisibleTooltip(null)}
        >
          <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
            <img
              src={image[0].src}
              className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
              alt="image 1"
            />
          </div>
          {visibleTooltip === 0 && (
            <div
              id="tooltip-0"
              className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[0px]"
            >
              <img
                src={image[0].tooltip}
                alt="Tooltip"
                className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
              />
              <img
                src="/images/15.jpg"
                alt="Tooltip"
                className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
              />
            </div>
          )}
        </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(1)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
        <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
          <img
            src={image[1].src}
            className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
            alt="image 2"
          />
        </div>
        {visibleTooltip === 1 && (
          <div
            id="tooltip-1"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-40px]"
          >
            <img
              src={image[1].tooltip}
              alt="Tooltip"
              className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />

            <img
              src="/images/18.jpg"
              alt="Tooltip"
              className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(2)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
        <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
          <img
            src={image[2].src}
            className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
            alt="image 3"
          />
        </div>
        {visibleTooltip === 2 && (
          <div
            id="tooltip-2"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-80px]"
          >
            <img
              src={image[2].tooltip}
              alt="Tooltip"
              className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />

            <img
              src="/images/19.jpg"
              alt="Tooltip"
              className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(3)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
        <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
          <img
            src={image[3].src}
            className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
            alt="image 4"
          />
        </div>
        {visibleTooltip === 3 && (
          <div
            id="tooltip-3"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-120px]"
          >
            <img
              src={image[3].tooltip}
              alt="Tooltip"
              className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />

            <img
              src="/images/17.jpg"
              alt="Tooltip"
              className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(4)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
        <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
          <img
            src={image[4].src}
            className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
            alt="image 5"
          />
        </div>
        {visibleTooltip === 4 && (
          <div
            id="tooltip-4"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-160px]"
          >
            <img
              src={image[4].tooltip}
              alt="Tooltip"
              className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />

            <img
              src="/images/21.jpg"
              alt="Tooltip"
              className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(5)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
        <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
          <img
            src={image[5].src}
            className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
            alt="image 6"
          />
        </div>
        {visibleTooltip === 5 && (
          <div
            id="tooltip-4"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-200px]"
          >
            <img
              src={image[5].tooltip}
              alt="Tooltip"
              className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />

            <img
              src="/images/16.jpg"
              alt="Tooltip"
              className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(6)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
        <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
          <img
            src={image[6].src}
            className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
            alt="image 5"
          />
        </div>
        {visibleTooltip === 6 && (
          <div
            id="tooltip-4"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-240px]"
          >
            <img
              src={image[6].tooltip}
              alt="Tooltip"
              className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />

            <img
              src="/images/20.jpg"
              alt="Tooltip"
              className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
            />
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setVisibleTooltip(7)}
        onMouseLeave={() => setVisibleTooltip(null)}
      >
      <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full">
      <img
        src={image[7].src}
        className="object-cover w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded-full"
        alt="image 5"
      />
      </div>
        {visibleTooltip === 7 && (
          <div
            id="tooltip-4"
            className="absolute top-full mt-2 z-50 bg-gray-800 rounded-lg p-2 shadow-none left-[-280px]"
          >
          <img
            src={image[7].tooltip}
            alt="Tooltip"
            className="object-cover max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
          />

          <img
            src="/images/22.jpeg"
            alt="Tooltip"
            className="object-cover mt-2 w-full max-w-[300px] lg:max-w-[500px] max-h-[200px] lg:max-h-[300px] rounded-lg"
          />
          </div>
        )}
      </div>

    </div>

      <div className="max-w-[1100px] mx-auto mt-[70px] mb-[0px]">
        <div className="grid lg:grid-cols-2 xs:mx-6">
          <div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="flex flex-row">
                  <div>
                    <h2 className="uppercase font-bold text-[30px]" id="about">About us</h2>
                  </div>
                  <Separator className="max-w-[100px] mt-[22px] mx-auto h-1 bg-black" />
                </div>

                <div className="text-[#d4a564] text-[20px] italic">
                  Over 50 Years of Excellence in Kosher Products
                </div>
              </div>

              <div>
                <Image src={images.quality} alt="" width={70} className="w-[70px]" />
              </div>
            </div>

            <div className="space-y-5 text-justify">
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
              onClick={handleLearnMoreClick}
              variant="ghost"
              className={`button-with-triangle border-black border mt-4 px-10 rounded-none bg-white text-black`}
            >
              Learn more
            </Button>
          </div>

          <div className="sm:mt-[60px] xs:mt-[50px]">
            <Image src={images.about} alt="" className="lg:max-w-[450px] xs:max-w-[320px] mx-auto" />
          </div>
        </div>
      </div>

      {/**/}

      <div className="relative mt-[0px] pt-[70px]">
        <Image src={images.product} alt="product" className="absolute w-full h-full object-cover" />
        <div className="max-w-[1100px] mx-auto z-10 relative mb-[70px]">
          <div className="text-white text-center uppercase font-bold text-[32px] pt-[70px]" id="our-product">
            Our product & process
          </div>
          <div className="text-center text-[#d4a564] mt-1 text-[22px] italic lg:max-w-[540px] lg:mx-auto xs:mx-6">
            Ready-to-eat animal protein that does not require a cold
            chain and is free of pathogens
          </div>

          <div className="relative lg:max-w-[630px] sm:max-w-[630px] xs:max-w-[80%] mx-auto">
            <div className="absolute left-0 right-0 top-1/2 border-t border-dotted border-white -translate-y-1/2 z-0 mt-[70px]"></div>
          </div>

          <div className="flex justify-between items-center xs:mx-6 lg:max-w-[750px] sm:max-w-[750px] sm:mx-auto lg:mx-auto mt-[40px]">
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

          <div className="mt-[40px] xs:mx-6 lg:max-w-[1000px]">
            <div className="flex flex-row text-white">
              <FontAwesomeIcon icon={farCheckCircle} className="text-4xl" />
              <p className="ml-2 ">
                Process that allows animal meat to be preserved in such a way that it does not require a cold chain for storage or
                transportation
              </p>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                  Long Life Meat is free of organisms harmful to health and can last up to 6 months at room temperature. It is safe, nutritious,
                  tasty, durable, and versatile.
                </p>
              </div>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                  This technological innovation, patented in various countries around the world, is achieved through cold pasteurization.
                </p>
              </div>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                  Long Life Meat comes vacuum-packed, ready to consume or to be used as an ingredient in any type of preparation.
                </p>
              </div>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                  MASBIA products have already been tested and approved in terms of their organoleptic characteristics and health
                  conditions for consumption.
                </p>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto py-[70px]">
        <div className="grid lg:grid-cols-2 xs:mx-6">
          <div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="flex flex-row">
                  <div>
                    <h2 className="uppercase font-bold text-[30px]" id="a-paradigm-shift">A paradigm shift</h2>
                  </div>
                  <Separator className="w-[100px] mt-[22px] mx-6 xs:hidden lg:flex h-1 bg-black" />
                </div>
              </div>
            </div>

            <div className="space-y-5 text-justify">
              <p>
                The exceptional characteristics of the product, the new
                possibilities it offers, and the way it would affect consumer
                habits mean a paradigm change in terms of the conservation
                of meat and the way it is stored and transported, achieving a
                sustainable process
              </p>
            </div>

            <div className="mt-2 text-semibold text-[28px]  text-[#d4a564]">
              The needs that give rise to MASBIA are:
              <Separator className="h-1 bg-[#d4a564]" />
            </div>

            <div className="mt-[20px] space-y-5">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
                <p className="ml-2 ">
                  The contribution to the safety of meat (whether poultry, fish, or
                  bovine) through ionization.
                </p>
              </div>

              <div className="flex flex-row">
                <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
                <p className="ml-2 ">
                  A product that does not require a cold chain, both in terms of
                  practicality in its conservation and to combat hunger by delivering
                  foods with a high concentration of proteins to areas where the cold
                  chain is precarious or non-existent.
                </p>
              </div>

              <div className="flex flex-row">
                <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
                <p className="ml-2 ">
                  The reduction in the generation of greenhouse gases (GHG), since
                  ionization requires less energy than traditional cooking, and cold
                  storage energy is not required for transportation, conservation, and
                  display for consumption.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:mt-[60px] xs:mt-[50px]">
            <Image src={images.paradigm} alt="" className="lg:max-w-[450px] xs:max-w-[320px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="relative pb-[30px]">
        <Image src={images.product} alt="product" className="absolute w-full h-full object-cover" />

        <div className="max-w-[1100px] mx-auto z-10 relative mb-[70px]">
          <div className="flex justify-center pt-[50px]">
            <Image src={images.nature} alt="" width={70} className="w-[70px]" />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-8 xs:mx-6 mt-[20px]">
            <div>
              <h3 className="font-semibold text-[32px] uppercase text-white" id="technology">
                The technology
              </h3>

              <div className="text-justify space-y-5">
                <p className="text-[#d4a564] text-[24px] italic">
                  With ionization, food becomes healthier
                  and longer-lasting
                </p>

                <p className="text-white ">
                  Some forty countries have incorporated this technology
                  into their food codes to process more than 200 various
                  foods or preparations. In Argentina, there are 25 years of
                  experience operating the radiant unit
                </p>

                <Separator className="h-1 bg-[#d4a564]" />

                <p className="text-white ">
                  lonization treatment does not produce effluents. A
                  decrease in the microbiological content of food reduces
                  logistics costs and costs due to rejection and waste.
                  Betier conservation without the need for cold, increases the
                  competitiveness of food products in the world market.
                  This method, with more than 40 years of studies and tests,
                  is supported by reports of the joint FAO/WHO/IAEA Expert
                  Commitiee (International Food and Agriculture, Health and
                  Atomic Energy of the United Nations), from the years 1981,
                  1991, 1999, according to the fact that they do not produce
                  nutritional changes significant, neither teratogenic nor
                  mutagenic, and not carcinogenic, due to the effect of
                  ionization.
                </p>
              </div>
            </div>

            <div className="xs:mt-[20px]">
              <Image src={images.tech} alt="" className="lg:max-w-[450px] xs:max-w-[320px] mx-auto" />

              <div className="text-justify mt-[20px] lg:mx-8 xs:mx-1">
                <p className="text-white">
                  This method, with more than 40 years of studies and tests, is
                  supported by reports of the joint FAO/WHO/IAEA Expert
                  Committee (International Food and Agriculture, Health and
                  Atomic Energy of the United Nations), from the years 1981,
                  1991, 1999, according to the fact that they do not produce
                  nutritional changes significant, neither teratogenic nor
                  mutagenic, and not carcinogenic, due to the effect of ionization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**/}
      <div className="relative pb-[70px]">
        <Image src={images.benefits} alt="product" className="absolute w-full h-full object-cover" />

        <div className="max-w-[1100px] mx-auto z-10 relative mb-[70px]">
          <div className="pt-[50px]">
            <div className="flex justify-center">
              <Image src={images.world} alt="" width={70} className="w-[70px]" />
            </div>
            <div className="text-center text-white text-[40px] mt-2 font-semibold" id="benefits">
              Benefits
            </div>
          </div>

          <div>
            <div className="grid lg:grid-cols-3 xs:mx-6">

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[20px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Do not require
                    Cold chain
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    It can be stored for up to one year at
                    room temperature. environment
                    without the need for any refrigeration
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Harmless
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    Free of pathogens, that is, incapable
                    of generating diseases and retains
                    the properties original foods
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Ready for the
                    consumption
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    Cooked and packaged meat that
                    maintains its tenderness and
                    original flavor
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Solutions
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    It provides safe animal protein
                    options in situations never before
                    imagined, such as school meals,
                    food for inmunosupressed
                    patients, rations for mountaineers,
                    long trips without refrigeration, etc.
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Lower costs
                    of distribution
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    Does not require refrigerated
                    transportation, safe in cases of
                    power outage and minimize waste
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Without
                    Borders
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    Thank you to your characteristics
                    innovative allows bring nutritious
                    food to anyone Place of the world. In
                    form of plans social assistance,
                    rations for the army, humanitarian
                    missions, etc. original foods
                  </p>
                </div>
              </div>
              {/**/}
            </div>
            {/**/}
          </div>

        </div>
        {/**/}
        <div className="max-w-[1100px] mx-auto py-[70px]">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative flex flex-col h-full">
              <Card className="flex flex-col h-full bg-[#101b33] text-white">
                <CardHeader>
                  <Image
                    src={images.plant}
                    alt=""
                    className="absolute top-[-80px] left-1/2 transform -translate-x-1/2"
                  />
                  <div className="text-center text-[24px] uppercase font-semibold">
                    sdg sustainability
                  </div>
                </CardHeader>
                <CardContent className="mt-[-18px] flex-grow">
                  <p className="text-[16px]">
                    The SDGs (Sustainable Development Goals) are 17 global objectives established in 2015 by the General Assembly of
                    the United Nations, which should be achieved by 2030. It is worth highlighting the positive impact that long-life meat
                    brings to these SDGs and sustainability in general.
                  </p>
                  <p className="mt-6 text-justify text-[16px]">
                    From a socio-environmental point of view, having animal protein that does not require a cold chain while maintaining
                    its properties for at least 6 months at room temperature becomes a product capable of providing quality food to
                    dispersed communities, far from centers of distribution and consumption, or difficult to access by terrestrial means, or
                    that do not have energy for preservation and/or freezing of food, in addition to avoiding outbreaks of ETAs (Diseases
                    Transmitted by Food)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex flex-col h-full xs:mt-[50px] lg:mt-0">
              <Card className="flex flex-col h-full bg-[#101b33] text-white">
                <CardHeader>
                  <Image
                    src={images.heart}
                    alt=""
                    className="absolute top-[-60px] left-1/2 transform -translate-x-1/2"
                  />
                  <div className="text-center text-[24px] uppercase font-semibold">
                    health and safety
                  </div>
                </CardHeader>
                <CardContent className="mt-[-10px] flex-grow">
                  <p className="text-[16px] mt-[-10px]">
                    One thing to keep in mind regarding safety and healthiness is that 85% of chicken comes from whole plants, unfrozen and
                    uncut. However, consumption is split evenly: 50% cut and 50% whole. The fact is that chicken is cut into pieces in some
                    supermarkets and butcher shops, which goes to the detriment of quality control and good preservation of the meat
                  </p>
                  <p className="mt-6 text-justify text-[16px]">
                    The reason for this is twofold: on the one hand, some chicken parts can be sold at prices practically at cost, as is the case
                    with &quot;leg and thigh,&quot; and on the other, the commercialization of chicken without freezing avoids the high costs not only of
                    freezing to -18°C (IQF: individually quick frozen) but also of transport and storage in the cold chain
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/**/}
      </div>

      <div className="max-w-[1100px] lg:mx-auto xs:mx-6 mt-[70px] mb-[60px]">
        <div className="flex flex-row">
          <div>
            <h3 className="text-gray-900 font-semibold uppercase text-[30px]" id="references">References</h3>
          </div>

          <div>
            <Separator className="lg:w-[780px] mt-[22px] ml-2 h-1 bg-gray-900" />
          </div>
        </div>

        <div className="text-[#d4a564] lg:text-[30px] xs:text-[20px] italic">
          There are no health risks for those who consume ionized food;
          on the contrary, it means that the product has an optimal health level
        </div>

        <div className="grid lg:grid-cols-2 mt-[20px]">
          <div>
            <div className="text-justify space-y-5">
              <p>
                Food ionization (the application of ionizing food) is a technology that improves the safety and shelf life of food by reducing or eliminating microorganisms and insects.
              </p>

              <p>
                Ionization does not affect macronutrients, such as proteins, fats and
                carbohydrates carbon, nor in inerals.
              </p>

              <p>
                Like pasteurized milk and canned fruits and vegetables, ionization
                causes food is safer for the consumer.
              </p>
            </div>

            <Button
              onClick={handleMoreInfoClick}
              variant="ghost"
              className={`button-with-triangle border-black border mt-4 px-10 rounded-none bg-white text-black`}
            >
              More information
            </Button>
          </div>

          <div className="lg:mt-[0px] xs:mt-[50px]">
            <Image src={images.references} alt="" className="lg:max-w-[450px] xs:max-w-[320px] mx-auto" />
          </div>
        </div>
      </div>

      <div className="relative">
        <Image src={images.endorse} alt="product" className="absolute w-full h-full object-cover" />

        <div className="max-w-[1100px] mx-auto z-10 relative py-[70px]">
          <div className="grid lg:grid-cols-2">
            <div className="text-white xs:ml-3">
              <div className="text-[18px]">
                To endorse, approve, and hold the products produced, <span className="font-bold">MASBIA</span> has the support of prestigious institutions:
              </div>
              <Image src={images.endorseLeft} alt="" className="w-full mt-4 pr-4" />
            </div>

            <div>
              <Image src={images.endorseRight} alt="" className="w-full lg:pl-4 xs:mt-[20px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image src={images.contact} alt="product" className="absolute w-full h-full object-cover" />

        <div className="max-w-[1100px] mx-auto z-10 relative py-[70px]">
          <div className="grid lg:grid-cols-3">
            <div id="contact">
              <div className="flex flex-row justify-between gap-4 mx-6 lg:mx-0">
                <div className="max-w-[150px] w-full">
                  <Image src={images.logo} alt="" width={100} className="w-full" />
                </div>

                <div className="w-[180px]">
                  <Image src={images.foodcard} alt="" width={200} className="w-full" />
                </div>
              </div>

              <p className="mt-4 text-justify text-[14px] xs:mx-6 lg:mx-0">
                MASBIA is a company dedicated to developing and
                commercialize technology applied to foods of
                animal origin, to reach the markets regardless
                of cold chains and thus facilitate better nutrition
                for a senior number of people
              </p>
            </div>

            <div className="xs:mt-[20px] lg:mt-0">
              <Card className="max-w-[300px] mx-auto bg-[#101b33] text-white">
                <CardContent>
                  <div>
                    <div className="mt-4">
                      <p className="text-[10px] ml-7">Address</p>
                      <div className="flex flex-row">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-[18px]" />
                        <div className="ml-2">
                          <p className="text-[13px]">Arce 441 3° F </p>
                          <p className="text-[13px]">Ciudad de Buenos Aires, Argentina</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-row">
                        <FontAwesomeIcon icon={faPhone} className="mt-3 text-[18px]" />
                        <div className="ml-2">
                          <p className="text-[13px]">Call Us</p>
                          <p className="text-[13px]">+54 11 49373697</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-row">
                        <FontAwesomeIcon icon={faEnvelope} className="mt-1 text-[18px]" />
                        <div className="ml-2">
                          <p className="text-[13px] mt-[2px]">export@masbiagroup.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Separator className="h-1 bg-[#d4a564]" />
                </CardFooter>
              </Card>
            </div>

            <div className="flex items-center h-full">
              <div className="grid grid-cols-2 gap-4 xs:mx-12 xs:mt-[20px] lg:mx-0 lg:mt-0">
                <div className="flex flex-row">
                  <div className="mr-2">
                    <Separator orientation="vertical" className="h-full w-[2px] bg-black" />
                  </div>

                  <div className="uppercase">
                    <ul className="list-none text-[14px] space-y-1">
                      <li><Link href={"/#references"}>References</Link></li>
                      <li><Link href={"/#contact"}>Contact</Link></li>
                      <li><Link href={"/#our-product"}>Our Product</Link></li>
                      <li><Link href={"/#technology"}>Technology</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mr-2">
                    <Separator orientation="vertical" className="h-full w-[2px] bg-black" />
                  </div>

                  <div className="uppercase">
                    <ul className="list-none text-[14px] space-y-1">
                      <li><Link href={"/#a-paradigm-shift"}>A Paradigm Shift</Link></li>
                      <li><Link href={"/#about"}>About Us</Link></li>
                      <li><Link href={"/#benefits"}>Benefits</Link></li>
                      <li>
                        Shop
                        <FontAwesomeIcon icon={faShoppingCart} className="text-[16px] ml-1" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Separator className="h-1 bg-[#000000]" />
          </div>

          <div className="flex lg:flex-row xs:flex-col xs:text-center lg:text-left justify-between mt-3">
            <div>
              All rights reserved © MASBIA Group
            </div>

            <div>
              Developed by Appflies
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Fab
          onClick={handleClickWhatsApp}
          sx={{
            backgroundColor: "#25D366", // Verde oficial de WhatsApp
            "&:hover": {
              backgroundColor: "#25D366", // Elimina el efecto hover manteniendo el mismo color
            },
          }}
        >
          <FontAwesomeIcon icon={faWhatsapp} color="#ffffff" className="text-[32px]" />
        </Fab>
      </div>
    </React.Fragment >
  )
}
