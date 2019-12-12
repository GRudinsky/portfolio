//depend: remove typewriter effect if not needed

import React from 'react'

import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
// import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <About />
        <Skills />
        <Projects />
      </div>
      
      
    </div>
  )
}

export default App
