import React from "react"
import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"

export default function Home() {
    return (
        <div className="flex flex-col justify-evenly sm:container lg:container md:container selection:bg-gray-200 selection:text-grn-70">
            <div className="grid "><LeftPanel/></div>
            <div className="grid md:justify-items-end"><RightPanel/></div>
        </div>
     
    )
}