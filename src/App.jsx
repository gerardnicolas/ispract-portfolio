import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Learnings from './components/Learnings'
import AcadWork from './components/AcadWork'
import Reflection from './components/Reflection'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Learnings />
      <AcadWork />
      <Reflection />
      <Footer/>
    </div>
  )
}

export default App
