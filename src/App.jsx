import { useState } from 'react'

import './App.css'
import Main from './Component/Main.jsx'
import About from './Component/About.jsx'
import Navbar from './Component/Navbar.jsx'
import OverView from './Component/OverView.jsx'
import Project from './Component/Project.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
function App() {


  return (
    <>
      <div className='flex flex-col overflow-x-hidden'>
        <div className='absolute w-screen'>
            <Navbar/>
        </div>
        <div className='min-h-screen'>
          <div className='absolute'>
            <Main/>
          </div>
          <div className='relative'>
            <About/>
            <OverView/>
            <Project/>
            <Contact/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
