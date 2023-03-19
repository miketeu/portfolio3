import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ProjectGallery from "./components/pages/ProjectGallery";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Header from "./components/pages/Header";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="portfolio3/">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="portfolio3/Home/" element ={<Home/>} />
       {  /* <Route path="/portfolio3/Home" element={<Home />} />*/ }


          <Route path="portfolio3/Header/" element={<Header />} />
          <Route path="portfolio3/ProjectGallery/" element={<ProjectGallery />} />
          <Route path="portfolio3/Project/" element={<Project />} />
          {/* Define a route that will have descendant routes */}
          <Route path="portfolio3/contact/*" element={<Contact/>} />
        
        </Routes>
      </div>
    </Router>
  );
}



export default App;
