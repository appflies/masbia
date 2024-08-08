import React from "react";
import Image from "next/image"
import { images } from "@/constants";
import { Navbar, Slideshow } from "@/components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as farCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle as fasCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card"

const HomePage = () => {
  return (
    <React.Fragment>
      <Slideshow />
      <Navbar />

      <div className="mt-[480px] max-w-[1100px] mx-auto" id="about">
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
          <div className="text-white text-center uppercase font-bold text-[32px] mt-4" id="our-product">
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

      <div className="relative z-10 max-w-[1100px] mx-auto text-black my-[100px]">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex flex-row">
              <h3 className="font-semibold text-[30px]" id="a-paradigm-shift">
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

      <div className="relative pt-[130px] overflow-hidden mb-[-120px]">
        <Image src={images.technology} alt="product" className="absolute w-full h-full object-cover" />

        <div className="relative z-10 max-w-[1000px] mx-auto text-black mt-[100px] mb-[100px]">
          <div className="flex justify-center mt-[-50px]">
            <Image src={images.nature} alt="" width={70} className="w-[70px]" />
          </div>

          <div className="grid grid-cols-2 mt-[50px]">
            <div className="mt-[-45px]">
              <div className="flex flex-row">
                <h3 className="font-semibold text-[32px] uppercase text-white" id="technology">
                  The technology
                </h3>
                <Separator className="max-w-[150px] mt-[22px] ml-2 mr-1 h-1 bg-white" />
              </div>

              <div className="text-[#d4a564] text-[24px] italic max-w-[450px] text-justify">
                With ionization, food becomes healthier
                and longer-lasting
              </div>

              <p className="text-white mt-4 text-justify max-w-[450px]">
                Some forty countries have incorporated this technology
                into their food codes to process more than 200 various
                foods or preparations. In Argentina, there are 25 years of
                experience operating the radiant unit
              </p>
              <Separator className="h-1 bg-[#d4a564] max-w-[91%]" />

              <p className="text-white mt-4 text-justify max-w-[450px]">
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

            <div className="grid mt-[-28px] justify-items-end ml-8">
              <Image src={images.tech} alt="" className="max-w-[480px]" />

              <p className="text-white mt-4 text-justify max-w-[480px] mx-auto">
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

      <div className="relative overflow-hidden">
        <Image src={images.benefits} alt="product" className="absolute w-full h-full object-cover" />

        <div className="relative z-10 mt-[70px] mb-[100px]">
          <div className="flex justify-center">
            <Image src={images.world} alt="" width={70} className="w-[70px]" />
          </div>

          <div className="text-center text-white text-[40px] mt-2 font-semibold" id="benefits">
            Benefits
          </div>

          <div className="grid grid-cols-3 text-white max-w-[1000px] mx-auto">

            <div>
              <div>
                <div className="flex flex-row mt-4 text-[#d4a564] max-w-[270px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Do not require
                    Cold chain
                  </p>
                </div>

                <p className="text-justify mt-4 max-w-[290px]">
                  It can be stored for up to one year at
                  room temperature. environment
                  without the need for any refrigeration
                </p>
              </div>


              <div className="pt-10">
                <div className="flex flex-row mt-4 text-[#d4a564]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Harmless
                  </p>
                </div>

                <p className="text-justify mt-4 max-w-[290px]">
                  Free of pathogens, that is, incapable
                  of generating diseases and retains
                  the properties original foods
                </p>
              </div>
            </div>

            <div>
              <div className="max-w-[270px] mx-auto">
                <div className="flex flex-row mt-4 text-[#d4a564]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Ready for the
                    consumption
                  </p>
                </div>

                <p className="text-justify mt-4 max-w-[290px]">
                  Cooked and packaged meat that
                  maintains its tenderness and
                  original flavor
                </p>
              </div>


              <div className="pt-10 max-w-[270px] mx-auto">
                <div className="flex flex-row mt-4 text-[#d4a564]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Solutions
                  </p>
                </div>

                <p className="text-justify mt-4 max-w-[290px]">
                  It provides safe animal protein
                  options in situations never before
                  imagined, such as school meals,
                  food for inmunosupressed
                  patients, rations for mountaineers,
                  long trips without refrigeration, etc.
                </p>
              </div>
            </div>

            <div>
              <div className="max-w-[270px] mx-auto">
                <div className="flex flex-row mt-4 text-[#d4a564]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Lower costs
                    of distribution
                  </p>
                </div>

                <p className="text-justify mt-4 max-w-[300px]">
                  Does not require refrigerated
                  transportation, safe in cases of
                  power outage and minimize waste
                </p>
              </div>


              <div className="pt-10 max-w-[270px] mx-auto">
                <div className="flex flex-row mt-4 text-[#d4a564]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    Without
                    Borders
                  </p>
                </div>

                <p className="text-justify mt-4 max-w-[300px]">
                  Thank you to your characteristics
                  innovative allows bring nutritious
                  food to anyone Place of the world. In
                  form of plans social assistance,
                  rations for the army, humanitarian
                  missions, etc. original foods
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[130px] max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 gap-10">
              <div className="relative flex flex-col">
                <Card className="flex flex-col h-full">
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
                      The SDGs (Sustainable Development Goals) are 17 global
                      objectives established in 2015 by the General Assembly of
                      the United Nations, which should be achieved by 2030. It is
                      worth highlighting the positive impact that long-life meat
                      brings to these SDGs and sustainability in general.
                    </p>

                    <p className="mt-6 text-justify text-[16px]">
                      From a socio-environmental point of view, having animal
                      protein that does not require a cold chain while maintaining
                      its properties for at least 6 months at room temperature
                      becomes a product capable of providing quality food to
                      dispersed communities, far from centers of distribution and
                      consumption, or difficult to access by terrestrial means, or
                      that do not have energy for preservation and/or freezing of
                      food, in addition to avoiding outbreaks of ETAs (Diseases
                      Transmitted by Food)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative flex flex-col">
                <Card className="flex flex-col h-full">
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
                      One thing to keep in mind regarding safety and healthiness is
                      that 85% of chicken comes from whole plants, unfrozen and
                      uncut. However, consumption is split evenly: 50% cut and
                      50% whole. The fact is that chicken is cut into pieces in some
                      supermarkets and butcher shops, which goes to the detriment
                      of quality control and good preservation of the meat
                    </p>

                    <p className="mt-6 text-justify text-[16px]">
                      The reason for this is twofold: on the one hand, some chicken
                      parts can be sold at prices practically at cost, as is the case
                      with &quot;leg and thigh,&quot; and on the other, the commercialization
                      of chicken without freezing avoids the high costs not only of
                      freezing to -18°C (IQF: individually quick frozen) but also of
                      transport and storage in the cold chain
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto pt-[70px] mb-[80px]">
        <div className="flex flex-row">
          <div>
            <h3 className="text-gray-900 font-semibold uppercase text-[30px]" id="references">References</h3>
          </div>

          <div>
            <Separator className="w-[780px] mt-[22px] ml-2 h-1 bg-gray-900" />
          </div>
        </div>

        <div className="text-[#d4a564] text-[30px] italic">
          There are no health risks for those who consume irradiated food;
          on the contrary, it means that the product has an optimal health level
        </div>

        <div className="grid grid-cols-2">
          <div>
            <h4 className="text-justify text-[20px] mt-4">
              Food irradiation (the application of ionizing radiation to food) is a technology that improves the safety and shelf life of food by reducing or eliminating microorganisms and insects.
            </h4>

            <p className="mt-4 text-normal text-[16px] text-justify">
              Irradiation does not affect macronutrients, such as proteins, fats and
              carbohydrates carbon, nor in inerals.
            </p>
            <p className="text-[16px] text-justify">
              Like pasteurized milk and canned fruits and vegetables, irradiation
              causes food is safer for the consumer.
            </p>

            <Button
              variant="ghost"
              className={`button-with-triangle border-black border mt-6 px-10 rounded-none bg-white text-black`}
            >
              Learn more
            </Button>
          </div>

          <div>
            <div>
              <Image src={images.references} alt="" className="max-w-[450px] mx-auto mt-[20px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pb-[70px]">
        <Image src={images.endorse} alt="product" className="absolute w-full h-full object-cover" />

        <div className="relative z-10 pt-[70px] max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 text-white">
            <div>
              <div className="text-[18px]">
                To endorse, approve, and hold the products produced, <span className="font-bold">MASBIA</span> has the support of prestigious institutions:
              </div>
              <Image src={images.endorseLeft} alt="" className="w-full mt-4 pr-4" />
            </div>

            <div>
              <Image src={images.endorseRight} alt="" className="w-full pl-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pb-[70px]">
        <Image src={images.contact} alt="product" className="absolute w-full h-full object-cover" />
        <div className="relative z-10 pt-[70px] max-w-[1000px] mx-auto">
          <div className="grid grid-cols-3 gap-4 text-gray-900">

            <div id="contact">
              <div className="flex flex-row justify-between gap-4">
                <div>
                  <Image src={images.logo} alt="" width={150} className="" />
                </div>

                <div>
                  <Image src={images.foodcard} alt="" width={200} className="" />
                </div>
              </div>

              <p className="mt-4 text-justify text-[14px]">
                MASBIA is a company dedicated to developing and
                commercialize technology applied to foods of
                animal origin, to reach the markets regardless
                of cold chains and thus facilitate better nutrition
                for a senior number of people
              </p>
            </div>

            <div>
              <Card className="max-w-[300px] mx-auto">
                <CardContent>
                  <div>
                    <div className="mt-4">
                      <p className="text-[10px] ml-7">Address</p>
                      <div className="flex flex-row">
                        <FontAwesomeIcon icon={farCheckCircle} className="mt-1 text-[18px]" />
                        <div className="ml-2">
                          <p className="text-[13px]">Arce 441 3° F </p>
                          <p className="text-[13px]">Ciudad de Buenos Aires, Argentina</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-row">
                        <FontAwesomeIcon icon={farCheckCircle} className="mt-3 text-[18px]" />
                        <div className="ml-2">
                          <p className="text-[13px]">Call Us</p>
                          <p className="text-[13px]">+54 11 49373697</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-row">
                        <FontAwesomeIcon icon={farCheckCircle} className="mt-1 text-[18px]" />
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
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row">
                  <div className="mr-2">
                    <Separator orientation="vertical" className="h-full w-[2px] bg-black" />
                  </div>

                  <div className="uppercase">
                    <ul className="list-none text-[14px] space-y-1">
                      <li>References</li>
                      <li>Contact</li>
                      <li>Our Product</li>
                      <li>Technology</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mr-2">
                    <Separator orientation="vertical" className="h-full w-[2px] bg-black" />
                  </div>

                  <div className="uppercase">
                    <ul className="list-none text-[14px] space-y-1">
                      <li>A Paradigm Shift</li>
                      <li>About Us</li>
                      <li>Benefits</li>
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

          <div className="flex flex-row justify-between mt-3">
            <div>
              All rights reserved © MASBIA Group
            </div>

            <div>
              Developed by Appflies
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
