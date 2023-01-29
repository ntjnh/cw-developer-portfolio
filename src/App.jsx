import React from 'react'
import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Logos />
      <Projects />
      <About />
    </div>
  )
}

export default App
