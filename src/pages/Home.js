import React from "react"
import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"

export default function Home() {
    return (
        <div className="container mx-auto my-auto">
            <div className="grid md:justify-items-start"><LeftPanel/></div>
            <div className="grid md:justify-items-end"><RightPanel/></div>
        </div>
     
    )
}