import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="card p-6  sm-w-full md:w-full lg:w-full ">
        {/*Card*/} 
          {projects.map((project) => (
            <a
              key={project.image}
              className="p-2 flex flex-col hover:bg-grn-800 rounded border-solid border-2 border-grn-600 mb-10 ">
              <div className="flex flex-col h-76">
                <h1 className=" mt-3 px-2 font-bold text-grn-200 ">{project.title}</h1>
                <h1 className="mt-3 px-2 overflow-hidden text-grn-300">{project.description}</h1>
                <h1 className="italic px-2 mt-3 text-grn-200">{project.subtitle}</h1>
                <div className='btn-group'>
                  {project.code_link != undefined &&
                    <a href={project.code_link} className="bg-grn-700 text-grn-200 inline-flex border-1 py-1 px-6 hover:bg-grn-300 hover:text-grn-800 rounded text-md mx-2 mt-5 mb-2">Code</a>
                  }
                  {project.demo_link != undefined &&
                    <a href={project.demo_link} className="bg-grn-700 text-grn-200 inline-flex border-1 py-1 px-6 hover:bg-grn-300 hover:text-grn-800 rounded text-md mx-2 mt-5 mb-2">Live Demo</a>
                  }
                </div>
              </div>
            </a>
          ))}
      </div>
    </section>
  );
}