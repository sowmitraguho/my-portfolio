import React from 'react'

import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/> 
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className="bg-primary">Download Resume</Button>
    </div>
    </>
  )
}

export default App
