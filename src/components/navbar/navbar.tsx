"use client"

import React from "react";
import Image from "next/image";
import { images } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Drawer from "./drawer";

import { useTranslations, useLocale } from "next-intl";

import LanguageSelect from "./languageSelect";

function Navbar() {
  const t = useTranslations("common");
  const locale = useLocale();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Drawer isOpen={isOpen} toggle={toggle} />
      <nav className="absolute top-0 left-0 w-full z-10 p-4 bg-transparent">
        <div className="max-w-[1100px] mx-auto">
          <Button
            onClick={toggle}
            className="text-white lg:hidden sm:flex mt-[10px] ml-2 w-[50px] h-[50px] bg-[#1e293b]"
            variant="secondary"
            size="icon"
          >
            <FontAwesomeIcon icon={faBars} className="text-[20px]" />
          </Button>

          <div className="absolute top-4 right-4 lg:hidden xl:hidden">
            <div className="flex flex-row gap-4 items-center text-white">
              <Image src={images.logo} alt="Logo" width={120} height={20} />

              <LanguageSelect />
            </div>
          </div>

          <div className="items-center justify-between hidden lg:flex">
            <div className="flex items-center">
              <Image src={images.logo} alt="Logo" width={150} height={50} />
            </div>
            <div className="text-white w-full max-w-[900px]">
              <div className="mb-[10px] flex flex-row items-center justify-between">
                <div className="uppercase text-2xl font-medium">
                  {t("navigation.title")}
                </div>
                <LanguageSelect />
              </div>

              <div className="flex flex-row justify-between text-[14px] font-semibold uppercase gap-6">
                <Link href={t("navigation.about.url")} className="whitespace-nowrap">
                  {t("navigation.about.text")}
                </Link>
                <Link href={t("navigation.product.url")} className="whitespace-nowrap">
                  {t("navigation.product.text")}
                </Link>
                <Link href={t("navigation.paradigm.url")} className="whitespace-nowrap">
                  {t("navigation.paradigm.text")}
                </Link>
                <Link href={t("navigation.technology.url")} className="whitespace-nowrap">
                  {t("navigation.technology.text")}
                </Link>
                <Link href={t("navigation.benefits.url")} className="whitespace-nowrap">
                  {t("navigation.benefits.text")}
                </Link>
                <Link href={t("navigation.references.url")} className="whitespace-nowrap">
                  {t("navigation.references.text")}
                </Link>
                <Link href={t("navigation.contact.url")} className="whitespace-nowrap">
                  {t("navigation.contact.text")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
