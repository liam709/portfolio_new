import React from "react";
import { dev_skills, libs, tools } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container px-5 py-6 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl font-medium title-font text-grn-200 mb-4  ">
            Programming and Development
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2-mx-2 ">
          {dev_skills.map((skill) => (
            <div key={skill} className="p-2 w-2/6 h-16">
              <div className="nav rounded flex p-4 h-full items-center h-2/3 hover:bg-grn-800 rounded border-solid border-2 border-grn-600 ">
                <span className="text-grn-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-5 py-6 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-grn-200 ">
            Libraries and Frameworks
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {libs.map((skill) => (
            <div key={skill} className="p-2 w-2/6 h-16">
              <div className="nav rounded flex p-4 h-full items-center h-2/3 hover:bg-grn-800 rounded border-solid border-2 border-grn-600">
                <span className="text-grn-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-5 py-6 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-grn-200 mb-4">
            Tools and Platforms
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {tools.map((skill) => (
            <div key={skill} className="p-2 w-2/6 h-16">
              <div className="nav rounded flex p-4 h-full items-center h-2/3 hover:bg-grn-800 rounded border-solid border-2 border-grn-600">
                <span className="text-grn-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}