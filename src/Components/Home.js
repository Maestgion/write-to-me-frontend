import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div className='h-[100vh]  ' style={{
        backgroundImage: "linear-gradient(to bottom left, #0F172A 0%, #162F49 20%, #0F172A 100%)",
      }}>
      
      <Navbar/>
      <div className='flex justify-center items-center h-[80vh]'>
         

              <div className=" w-[30vw] bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-col items-center py-12 gap-10">

                <div className='text-2xl text-white font-extrabold '>
                  <p className='text-center'>Welcome </p>
                  <p>to the dev community⭐</p>
                </div>

                <div className='flex gap-10 '>
                    <button className="font-bold text-xl rounded-full bg-gray-400 backdrop-filter backdrop-blur-sm text-white  py-2 px-auto w-[10vw] hover:bg-[#0F172A] ">
                      Login
                    </button>
                    
                    <button className="font-bold text-xl rounded-full bg-gray-400 backdrop-filter backdrop-blur-sm text-white  py-2 px-auto w-[10vw]  hover:bg-[#0F172A]">
                      Sign up
                    </button>
                    
                    
                </div>

                
                
              </div>
           
      </div>
      

      
    </div>
    
    </>
  )
}

export default Home