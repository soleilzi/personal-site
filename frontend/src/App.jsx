import React from 'react'
import HeroBar from './components/HeroBar'
import Home from './pages/Home'

const App = () => {
  return (
    <div style={{ transform: "scale(1.1)", transformOrigin: "top left", width: "90vw", height: "90vh" }}>
      <HeroBar />
      <Home />
    </div>
  )
}

export default App