import React from "react";
import { projects } from "../data";


export default function Projects() {
  return (

    <section id="projects" className="section">
      <div className="card p-6">
        {/*Card*/} 
          {projects.map((project) => (
            <a
              key={project.image}
              className="p-2 flex hover:bg-slate-700 rounded border-solid border-2 border-slate-500 h-80 mb-5">

              <div className="flex flex-col w-full h-76">
                <h1 className=" mt-3 px-2 text-black font-bold text-slate-400">{project.title}</h1>
                <h1 className="mt-5 px-2 overflow-hidden text-white">{project.description}</h1>
                <h1 className="italic px-2 text-black underline mt-3 text-slate-600">{project.subtitle}</h1>
                <div className='btn-group'>
                  {project.code_link != undefined &&
                    <a href={project.code_link} className="bg-slate-200 inline-flex border-1 py-1 px-6 hover:bg-slate-600 rounded text-md mx-2 mt-10 mb-2">Code</a>
                  }
                  {project.demo_link != undefined &&
                    <a href={project.demo_link} className="bg-slate-200 inline-flex border-1 py-1 px-6 hover:bg-slate-600 rounded text-md my-1 mb-2">Live Demo</a>
                  }
                </div>
              </div>
            </a>

          ))}
  
      </div>


    </section>
  );
}