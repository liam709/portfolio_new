import React from "react"
import Links from "./Links"
import Info from "./Info";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

export default function RightPanel() {
  
    return (
        <div className="right-panel flex flex-col bg-gray-800 md:w-1/2 sm:justify-center ">
            <About/>
            <Projects/>
            <Skills/>
            
        </div>
    )
}