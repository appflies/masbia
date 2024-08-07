import React from "react";
import { Navbar, Slideshow } from "@/components"

const HomePage = () => {
    return (
        <React.Fragment>
            <Slideshow />
            <Navbar />
            <h1 className="text-red-900">title</h1>
        </React.Fragment>
    );
}

export default HomePage
