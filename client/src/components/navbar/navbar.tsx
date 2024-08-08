import React from "react";
import Image from "next/image"
import { images } from "@/constants"
import { Separator } from "@/components/ui/separator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button"
import Link from "next/link";

function Navbar() {
  return (
    <React.Fragment>
      <div className="relative z-10 max-w-[1100px] mx-auto mt-10 text-white">
        <div className="flex justify-between items-center">
          <div>
            <Image src={images.logo} alt="" className="w-40" />
          </div>

          <div>
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


              <div className="flex flex-row gap-4 mt-[-15px] font-semibold">
                <Separator orientation="vertical" className="h-[50px] w-[2px] bg-white" />
                <div className="flex flex-col text-[11px]">
                  <div>
                    ENG
                  </div>
                  <div>
                    CAST
                  </div>
                  <div>
                    HEB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar
