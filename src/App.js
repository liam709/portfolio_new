import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";

export default function App() {
  
  const URI = "/portfolio_new"
  
  return (

      <Router>
        {/**Todo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path = "resume" element = {<Resume/>}/>
        </Routes>
      </Router>

  );
}
