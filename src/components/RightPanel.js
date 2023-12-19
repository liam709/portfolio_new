import React from "react"
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

export default function RightPanel() {
  
    return (
        <div className="right-panel flex flex-col md:w-1/2">
            <About/>
            <Projects/>
            <Skills/>    
        </div>
    )
}