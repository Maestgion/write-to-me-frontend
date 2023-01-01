import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className='h-[100vh]' style={{
      backgroundImage: "linear-gradient(to bottom left, #0F172A 0%, #162F49 20%, #0F172A 100%)",
    }}>

      <Navbar/>

      <div className=' w-[50vw] p-10 bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-xl mx-auto my-[10vw] grid grid-cols-2  place-items-center align-items-center'>

        <div className='flex flex-col gap-4 font-bold text-white text-2xl '>
          <p>
            User Id 
          </p>
          <p>
            Name
          </p>
          <p>
            Phone
          </p>
          <p>
            Email
          </p>
          <p>
            Passion
          </p>
        </div>

        <div className="flex flex-col gap-4 font-bold text-white text-2xl">
          <p>kjhgf234567</p>
          <p>Krishna</p>
          <p>98765433356</p>
          <p>Krishna@universe.com</p>
          <p>Creation</p>
        </div>
      </div>
    
    </div>
  )
}

export default About