import React from "react";
import Info from "./Info";
import Navbar from "./Navbar";
import Links from "./Links";

export default function LeftPanel() {

    return (
        <div className="left-side flex flex-col lg:justify-around lg:fixed md:fixed md:justify-around justify-around lg:mx-12 h-screen p-4">
            <Info />
            <Navbar/>
            <Links/>
        </div>
    )
}
