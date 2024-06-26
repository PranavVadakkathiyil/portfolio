import React from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      {/*<Projects/>*/}
      {/*<Profile/>*/}
      {/*<Banner/>*/}
      {/*<Skills/>*/}
    </div>
  )
}

export default App