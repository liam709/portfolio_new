// src/components/About.js

import React from "react";
{/*             <a
              href="Liam_Kelly_CV.pdf"
              download="Liam_Kelly"
              className="contact-btn inline-flex text-white about border-1 py-3 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg mx-2">
              Download CV
            </a> */}
export default function Info() {
  return (
    <section id="info">
      <div>
      </div>
      <div className="flex flex-col text-white mb-6  ">
        <div className="flex flex-col md:mb-0">
          <p className="text-5xl mb-5">
          Liam Kelly
          </p>
          <h2 className="mb-5 text-3xl">Software Developer</h2>
          <div>
          </div>
          <div className="">
           I'm a Programmer based out of St. John's, NL.
          </div>
          <div>
            <p>I like building things on the web!</p>
          </div>
        </div>
      </div>
    </section>
  );
}