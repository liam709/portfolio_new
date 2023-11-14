import React from "react";
import Info from "./Info";
import Navbar from "./Navbar";
import Links from "./Links";

export default function LeftPanel() {

    return (
        <div className="left-side flex flex-col lg:h-screen lg:justify-evenly md:justify-evenly lg:fixed md:fixed p-12 ml-10 ">
            <Info />
            <Navbar/>
            <Links/>
        </div>
    )
}
