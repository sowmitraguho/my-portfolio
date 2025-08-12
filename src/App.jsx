import React from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './Pages/HeroSection/HeroSection'
import About from './Pages/About/About'
import EducationSection from './Pages/EducationSection/EducationSection'
import SkillSection from './Pages/SkillSection/SkillSection'
import ProjectsSection from './Pages/Projects/ProjectsSection'

import Footer from './Pages/Footer/Footer'
import MessageMeSection from './Pages/Contacts/MessageMeSection'


function App() {

  return (
    <>
      <HeroSection />
      <About />
      <EducationSection />
      <SkillSection />
      <ProjectsSection />
      <MessageMeSection />
      <Footer />
    </>
  )
}

export default App

