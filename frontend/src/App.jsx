import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Services from './pages/Services'
import Pandits from './pages/Pandits'
import ServiceDetails from './pages/ServiceDetails'
import PanditDetails from './pages/PanditDetails'

const App = () => {
  return (
    <>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/our-pujas' element={<Services />} />
          <Route path='/our-pandits' element={<Pandits />} />
          <Route path='/puja-details' element={<ServiceDetails />} />
          <Route path='/pandit-details' element={<PanditDetails />} />
        </Route>

        {/* Auth Routes (no layout) */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App