import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ogalandlord from "./Projects/Ogalandlord";
import MONEY from "./Projects/Money";
import KEEPFIT from "./Projects/Fitness";
import EDUSWIFT from "./Projects/Eduswift";
import LandmarkHousing from "./Projects/LandmarkHousing";
import Retroresume from "./Projects/Retroresume";
import Investaholic from "./Projects/Ivestaholic";
import Artinict from "./Projects/Artinict";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element= { <Home/>} />
            <Route path="/about" element= { <About/>} />
            <Route path="/projects" element= { <Projects/> } />
            <Route path="/contact" element= { <Contact/> } />
            <Route path="/ogalandlord" element= { <Ogalandlord/> } />
            <Route path="/money" element= { <MONEY/> } />
            <Route path="/keepfitt" element= { <KEEPFIT/> } />
            <Route path="/eduswift" element= { <EDUSWIFT/> } />
            <Route path="/landmark" element= { <LandmarkHousing/> } />
            <Route path="/retroresume" element= { <Retroresume/> } />
            <Route path="/investaholic" element= { <Investaholic/> } />
            <Route path="/artinict" element= { <Artinict/> } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;