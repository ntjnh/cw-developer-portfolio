import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Logos />
    </div>
  )
}

export default App
