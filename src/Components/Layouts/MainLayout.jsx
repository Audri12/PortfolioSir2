import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Shared/Navbar/Navbar'
import HomeBanner from '../Home/HomeBanner'
import About from '../About/About'

import Project from '../Event/Event'
import About2 from '../About/About2'

const MainLayout = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <About></About>
       
        <Project></Project>
        <About2></About2>
    </div>
  )
}

export default MainLayout