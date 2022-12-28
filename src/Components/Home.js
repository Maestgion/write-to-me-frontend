import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div className='h-[100vh]' style={{
        backgroundImage: "linear-gradient(to bottom left, #0F172A 0%, #162F49 20%, #0F172A 100%)",
      }}>
      
      <Navbar/>
      <Outlet/>
    </div>
    
    </>
  )
}

export default Home