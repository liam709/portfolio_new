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
      { threshold: .60, rootMargin: "0px"} // Adjust the rootMargin as needed
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
    <div className="nav flex flex col">
      <nav className="py-1 flex flex-col bg-gray-800 text-xl">
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
          Skills
        </a>
      </nav>
    </div>
  );
}
