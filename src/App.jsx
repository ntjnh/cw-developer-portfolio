import React from 'react'
import './App.css'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App text-grey">
      <Navbar />
      <Hero />
      <Logos />
      <Projects />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
