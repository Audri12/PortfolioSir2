import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Shared/Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
     
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout