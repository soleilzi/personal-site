import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeroBar from './components/HeroBar'
import Home from './pages/Home'

const App = () => {
  return (
    <div style={{ transform: "scale(1.1)", transformOrigin: "top left", width: "90vw", height: "90vh" }}>
      <HeroBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App