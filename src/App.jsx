import React from 'react'
import './App.css'
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
    </div>
  )
}

export default App
