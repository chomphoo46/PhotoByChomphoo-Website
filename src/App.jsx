import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PhotoDetail from "./components/PhotoDetail";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="app">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <main>
        {currentSection === "home" && (
          <Hero setCurrentSection={setCurrentSection} />
        )}
        {currentSection === "gallery" && (
          <Gallery 
            setCurrentSection={setCurrentSection} 
            setSelectedPhoto={setSelectedPhoto} 
          />
        )}
        {currentSection === "photoDetail" && (
          <PhotoDetail 
            photo={selectedPhoto} 
            setCurrentSection={setCurrentSection} 
          />
        )}
        {currentSection === "packages" && <Packages />}
        {currentSection === "about" && <About />}
        {currentSection === "contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
