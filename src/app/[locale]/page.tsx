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

import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

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
    { src: "/images/01.jpg", tooltip: "/images/muslo.png" },
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

      <h2 className="uppercase font-bold text-[30px] text-center mt-10" id="about">{t("plates")}</h2>

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
                src="/images/18.jpg"
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
            src="/images/15.jpg"
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
                    <h2 className="uppercase font-bold text-[30px]" id="about">{t("about.title")}</h2>
                  </div>
                  <Separator className="max-w-[100px] mt-[22px] mx-auto h-1 bg-black" />
                </div>

                <div className="text-[#d4a564] text-[20px] italic">
                {t("about.description")}
                </div>
              </div>

              <div>
                <Image src={images.quality} alt="" width={70} className="w-[70px]" />
              </div>
            </div>

            <div className="space-y-5 text-justify">
              <p>
                {t("about.one")}
              </p>

              <p>
                {t("about.two")}
              </p>
            </div>

            <Button
              onClick={handleLearnMoreClick}
              variant="ghost"
              className={`button-with-triangle border-black border mt-4 px-10 rounded-none bg-white text-black`}
            >
            {t("about.button.text")}
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
            {t("product.title")}
          </div>
          <div className="text-center text-[#d4a564] mt-1 text-[22px] italic lg:max-w-[540px] lg:mx-auto xs:mx-6">
            {t("product.description")}
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
                {t("product.one")}
              </p>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                  {t("product.two")}
                </p>
              </div>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                {t("product.three")}
                </p>
              </div>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                {t("product.four")}
                </p>
              </div>
            </div>

            <div className="mt-[40px] lg:max-w-[930px]">
              <div className="flex flex-row text-white">
                <FontAwesomeIcon icon={farCheckCircle} className="text-white text-4xl" />
                <p className="ml-2">
                  {t(("product.five"))}
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
                    <h2 className="uppercase font-bold text-[30px]" id="a-paradigm-shift">{t("paradigm.title")}</h2>
                  </div>
                  <Separator className="w-[100px] mt-[22px] mx-6 xs:hidden lg:flex h-1 bg-black" />
                </div>
              </div>
            </div>

            <div className="space-y-5 text-justify">
              <p>
                {t("paradigm.description")}
              </p>
            </div>

            <div className="mt-2 text-semibold text-[28px]  text-[#d4a564]">
              {t("paradigm.subtitle")}
              <Separator className="h-1 bg-[#d4a564]" />
            </div>

            <div className="mt-[20px] space-y-5">
              <div className="flex flex-row">
                <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
                <p className="ml-2 ">
                  {t("paradigm.one")}
                </p>
              </div>

              <div className="flex flex-row">
                <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
                <p className="ml-2 ">
                  {t("paradigm.two")}
                </p>
              </div>

              <div className="flex flex-row">
                <FontAwesomeIcon icon={fasCheckCircle} className="text-gray-900 text-2xl mt-1" />
                <p className="ml-2 ">
                {t("paradigm.three")}
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
                {t("technology.title")}
              </h3>

              <div className="text-justify space-y-5">
                <p className="text-[#d4a564] text-[24px] italic">
                {t("technology.description")}
                </p>

                <p className="text-white ">
                {t("technology.one")}
                </p>

                <Separator className="h-1 bg-[#d4a564]" />

                <p className="text-white ">
                {t("technology.two")}
                </p>
              </div>
            </div>

            <div className="xs:mt-[20px]">
              <Image src={images.tech} alt="" className="lg:max-w-[450px] xs:max-w-[320px] mx-auto" />

              <div className="text-justify mt-[20px] lg:mx-8 xs:mx-1">
                <p className="text-white">
                  {t("technology.three")}
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
            {t("benefits.title")}
            </div>
          </div>

          <div>
            <div className="grid lg:grid-cols-3 xs:mx-6">

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[20px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    {t("benefits.one.title")}
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    {t("benefits.one.content")}
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    {t("benefits.two.title")}
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    {t("benefits.two.content")}
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    {t("benefits.three.title")}
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    {t("benefits.three.content")}
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    {t("benefits.four.title")}
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    {t("benefits.four.content")}
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl mt-4" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    {t("benefits.five.title")}
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    {t("benefits.five.content")}
                  </p>
                </div>
              </div>
              {/**/}

              <div>
                <div className="flex flex-row text-[#d4a564] mt-[40px]">
                  <FontAwesomeIcon icon={farCheckCircle} className="text-[#d4a564] text-3xl" />
                  <p className="ml-2 text-[24px] max-w-[200px] leading-[30px] italic">
                    {t("benefits.six.title")}
                  </p>
                </div>

                <div className="text-justify mt-[20px]">
                  <p className="text-white lg:max-w-[290px]">
                    {t("benefits.six.content")}
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
                    {t("benefits.card.one.title")}
                  </div>
                </CardHeader>
                <CardContent className="mt-[-18px] flex-grow">
                  <p className="text-[16px]">
                    {t("benefits.card.one.content.one")}
                  </p>
                  <p className="mt-6 text-justify text-[16px]">
                    {t("benefits.card.one.content.two")}
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
                    {t("benefits.card.two.title")}
                  </div>
                </CardHeader>
                <CardContent className="mt-[-10px] flex-grow">
                  <p className="text-[16px] mt-[-10px]">
                    {t("benefits.card.two.content.one")}
                  </p>
                  <p className="mt-6 text-justify text-[16px]">
                    {t("benefits.card.two.content.two")}
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
            <h3 className="text-gray-900 font-semibold uppercase text-[30px]" id="references">{t("references.title")}</h3>
          </div>

          <div>
            <Separator className="lg:w-[780px] mt-[22px] ml-2 h-1 bg-gray-900" />
          </div>
        </div>

        <div className="text-[#d4a564] lg:text-[30px] xs:text-[20px] italic">
          {t("references.description")}
        </div>

        <div className="grid lg:grid-cols-2 mt-[20px]">
          <div>
            <div className="text-justify space-y-5">
              <p>
                {t("references.content.one")}
              </p>

              <p>
                {t("references.content.two")}
              </p>

              <p>
                {t("references.content.three")}
              </p>
            </div>

            <Button
              onClick={handleMoreInfoClick}
              variant="ghost"
              className={`button-with-triangle border-black border mt-4 px-10 rounded-none bg-white text-black`}
            >
              {t("references.button.text")}
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
                {t("flyer")}
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
                {t("contact.description")}
              </p>
            </div>

            <div className="xs:mt-[20px] lg:mt-0">
              <Card className="max-w-[300px] mx-auto bg-[#101b33] text-white">
                <CardContent>
                  <div>
                    <div className="mt-4">
                      <p className="text-[10px] ml-7">{t("contact.address")}</p>
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
                          <p className="text-[13px]">{t("contact.call-us")}</p>
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
                      <li><Link href={"/#references"}>{t("navigation.references.text")}</Link></li>
                      <li><Link href={"/#contact"}>{t("navigation.contact.text")}</Link></li>
                      <li><Link href={"/#our-product"}>{t("navigation.product.text")}</Link></li>
                      <li><Link href={"/#technology"}>{t("navigation.technology.text")}</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-row">
                  <div className="mr-2">
                    <Separator orientation="vertical" className="h-full w-[2px] bg-black" />
                  </div>

                  <div className="uppercase">
                    <ul className="list-none text-[14px] space-y-1">
                      <li><Link href={"/#a-paradigm-shift"}>{t("navigation.paradigm.text")}</Link></li>
                      <li><Link href={"/#about"}>{t("navigation.references.text")}</Link></li>
                      <li><Link href={"/#benefits"}>{t("navigation.benefits.text")}</Link></li>
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
              Powered by
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
