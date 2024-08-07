import React from "react";
import { images } from "@/constants"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <React.Fragment>
            <div className="relative z-10 max-w-[1100px] mx-auto mt-10 text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <img src={images.logo} alt="" className="w-40" />
                    </div>

                    <div>
                        <div className="mb-2">
                            <div className="uppercase text-2xl font-medium">Already cooked food</div>
                        </div>

                        <div className="flex flex-row justify-between gap-9 uppercase text-[14px] font-semibold">
                            <Link to={"/"}>About</Link>
                            <Link to={"/"}>Our Product</Link>
                            <Link to={"/"}>A paradigm shift</Link>
                            <Link to={"/"}>Technology</Link>
                            <Link to={"/"}>Benefits</Link>
                            <Link to={"/"}>References</Link>
                            <Link to={"/"}>Contact</Link>


                            <div className="flex flex-row gap-4 mt-[-15px] font-semibold">
                                <Separator orientation="vertical" className="h-[50px]" />
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
