import React from "react";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";



export default function App() {

  const URI = "https://liam709.github.io/portfolio_new/"
  return (

      <Router basename={URI}>
        {/**Todo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path = "resume" element = {<Resume/>}/>
        </Routes>
      </Router>

  );
}
