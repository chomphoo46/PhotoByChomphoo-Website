import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="app">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main>
        {currentSection === 'home' && <Hero />}
        {currentSection === 'gallery' && <Gallery />}
        {currentSection === 'about' && <About />}
        {currentSection === 'contact' && <Contact />}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
