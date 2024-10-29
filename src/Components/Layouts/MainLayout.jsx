import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Shared/Navbar/Navbar'
import HomeBanner from '../Home/HomeBanner'
import About from '../About/About'

const MainLayout = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <About></About>
    </div>
  )
}

export default MainLayout