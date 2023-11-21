import React, { useState, useRef, useEffect } from "react";
import "../styles.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: .60, rootMargin: "0px" } // Adjust the rootMargin as needed
    );
    // Loop over all sections
    document.querySelectorAll(".section").forEach((section, index) => {
      observer.current.observe(section);
      // Set the first section to active initially
      if (index === 0) {
        setActiveSection(section.id);
      }
    });
  }, []);

  return (
    <div className="nav flex">
      <nav className="flex flex-col text-2xl h-52">
        <a href="#about" className={activeSection === "about" ? "active" : "text-grn-300"}>
          About
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : "text-grn-300"}>
          Projects
        </a>
        <a href="#skills" className={activeSection === "skills" ? "active" : "text-grn-300"}>
          Skills
        </a>
        
      </nav>
    </div>
  );
}
