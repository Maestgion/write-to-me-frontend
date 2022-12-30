import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
        <div className='h-[100vh] flex flex-col  justify-center items-center gap-10' style={{
        backgroundImage: "linear-gradient(to bottom left, #0F172A 0%, #162F49 20%, #0F172A 100%)",
      }}>

            <div className='w-[30vw] p-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-center text-white text-3xl font-bold rounded-xl'>

                <p>Error 404</p>
                <p>Page not found😭😭😭</p>

            </div>

            <button className='py-4 px-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10  text-center text-white text-xl font-bold rounded-full hover:bg-[#0F172A]'>
                <Link to="/">Back to Home Page</Link>
            </button>

        </div>
    </>
  )
}

export default Error