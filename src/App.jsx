import React from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './Pages/HeroSection/HeroSection'
import About from './Pages/About/About'
import EducationSection from './Pages/EducationSection/EducationSection'
import SkillSection from './Pages/SkillSection/SkillSection'
import Projects from './Pages/Projects/Projects'
import Contacts from './Pages/Contacts/Contacts'
import Footer from './Pages/Footer/Footer'


function App() {

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* add some content here for testing */}
        <h1 className="text-black">Hello world</h1>
      </main>
      <Footer />
    </>
  )
}

export default App

