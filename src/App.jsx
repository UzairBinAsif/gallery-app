import React from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App