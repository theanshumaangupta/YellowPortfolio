import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Home from './components/Home'
import Scrollbar from './components/Scrollbar'
import Resume from './components/Resume'

function App() {

  const scrollRef = useRef(null)
  return (
    <div className="h-screen flex flex-col font-livic bg-red-800 relative">
      <Navbar />
      <div
        ref={scrollRef}
        className="flex-1 flex relative overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
      >
        <div className="z-[4] absolute w-[500vw] h-[500vw] rounded-full bg-black top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2"></div>

        <Home />
        <About />
        <Skills />
        <Resume/>
      </div>

      {/* Custom Scrollbar */}
      <Scrollbar scrollRef={scrollRef} />
    </div>
  )
}

export default App;