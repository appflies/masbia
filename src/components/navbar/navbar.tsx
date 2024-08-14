"use client"

import React from "react";
import Image from "next/image"
import { images } from "@/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Drawer from "./drawer"

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Drawer isOpen={isOpen} toggle={toggle} />
      <nav className="absolute top-0 left-0 w-full z-10 p-4 bg-transparent">
        <div className="max-w-[1040px] mx-auto">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden sm:flex mt-[10px] ml-2 w-[50px] h-[50px]"
            variant="secondary"
            size="icon"
          >
            <FontAwesomeIcon icon={faBars} className="text-[20px]" />
          </Button>
          <div className="items-center justify-between hidden lg:flex">
            <div className="flex items-center">
              <Image src={images.logo} alt="Logo" width={150} height={50} />
            </div>
            <div className="text-white">
              <div className="mb-[10px] flex flex-row">
                <div className="uppercase text-2xl font-medium">Already cooked food</div>

                <div>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16px] mt-[10px] ml-4" />
                </div>

                <Button variant="cart" size="icon" className="ml-4 mt-[3px] h-[30px] w-[30px]">
                  <FontAwesomeIcon icon={faShoppingCart} className="text-[12px]" />
                </Button>
              </div>

              <div className="flex flex-row justify-between gap-9 uppercase text-[14px] font-semibold">
                <Link href={"/#about"}>About</Link>
                <Link href={"/#our-product"}>Our Product</Link>
                <Link href={"/#a-paradigm-shift"}>A paradigm shift</Link>
                <Link href={"/#technology"}>Technology</Link>
                <Link href={"/#benefits"}>Benefits</Link>
                <Link href={"/#references"}>References</Link>
                <Link href={"/#contact"}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
