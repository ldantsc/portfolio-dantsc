import { useState } from 'react'
import Home from "../src/pages/home/home"
import AboutMe from "../src/pages/about-me/about-me"
import Skills from "../src/pages/skills/skills"
import Projects from "../src/pages/projects/projects"
import Contact from "../src/pages/contact/contact"
import './App.css'

function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
