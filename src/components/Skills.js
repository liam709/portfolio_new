import React from "react";
import { dev_skills, libs, tools } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">

      <div className="container px-5 py-6 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl font-medium title-font card-text mb-4 mt-12 underline">
            Programming and Development
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {dev_skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/6 w-full">
              <div className="nav rounded flex p-4 h-full items-center bg-slate-400 h-2/3">
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-5 py-6 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl font-small title-font card-text mb-4 underline">
            Libraries and Frameworks
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {libs.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/6 w-full ">
              <div className="nav rounded flex p-4 h-full items-center bg-slate-400 h-2/3">
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container px-5 py-6 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl  font-small title-font card-text mb-4 underline">
            Tools and Platforms
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {tools.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/6 w-full">
              <div className="nav rounded flex p-4 h-full items-center bg-slate-400 h-2/3">
                <span className="title-font font-medium text-black">
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