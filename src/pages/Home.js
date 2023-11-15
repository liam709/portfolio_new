import React from "react"
import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"

export default function Home() {
    return (
        <div className="container mx-auto my-auto selection:bg-gray-200 selection:text-grn-700">
            <div className="grid md:justify-items-start mx-auto lg:ml-20"><LeftPanel/></div>
            <div className="grid md:justify-items-end mx-auto"><RightPanel/></div>
        </div>
     
    )
}