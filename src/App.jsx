import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeBanner from './Components/Home/HomeBanner'
import MainLayout from './Components/Layouts/MainLayout'

function App() {


  return (
    <>
      <HomeBanner></HomeBanner>
      <MainLayout></MainLayout>
    </>
  )
}

export default App
