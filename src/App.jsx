import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App