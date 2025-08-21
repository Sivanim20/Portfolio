import React,{ useState } from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Preloader from "./Preloader";
const App = () => {
   const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      {isLoading && <Preloader duration={2400} onComplete={() => setIsLoading(false)} />}
      {/* Your actual site */}
      {!isLoading && (
        <main>
           <Navbar/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </main>
      )}
    </div>
  )
}

export default App