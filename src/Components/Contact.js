import React from 'react'
import BasicCard from './BasicCard'
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { GiBurningPassion } from "react-icons/gi";
import Navbar from './Navbar';
import { useEffect, useState } from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({});

  

  const callContactPage= async ()=> {

  try{
    const res = await fetch("/getdata", {
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log(data)

    setUserData(data)

    if(!data===200)
    {
      throw new Error(data.error)
    }

  }catch(e){
    console.log(e)
  }

    

  }

  useEffect(() => {
        callContactPage();
  }, [])
  

  return (
    <>  

    <div  className=' flex flex-col h-[100vh] gap-6'  style={{
        backgroundImage: "linear-gradient(to bottom left, #0F172A 0%, #162F49 20%, #0F172A 100%)",
      }}>
      <Navbar/>

       {/* container */}
       <div className='px-10 flex flex-col items-center gap-16'>
           

           {/* basic cards */}
   
           <div className='flex gap-20'>
               <BasicCard icon={<HiDevicePhoneMobile/>} title={"Phone"} data={userData.phone}/>
               <BasicCard icon={<MdOutlineMailOutline/>} title={"Email"} data={userData.email} />
               <BasicCard icon={<GiBurningPassion/>} title={'Passion'} data={userData.passion} />
           </div>
   
           {/* contact form */}
   
          <div className='w-[70vw] p-10 flex flex-col justify-start bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl border border-gray-100 gap-6'>
   
             <div>
               <p className='text-2xl font-semibold text-white'>Get in Touch</p>
             </div>
   
          <form action='/' className='flex flex-col gap-10 justify-center  '>
   
           <div className='w-full caret-white flex gap-10'>
             <input type="text" value={userData.name} className='bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl outline-none px-8 py-4 placeholder-white w-[20vw] text-white' placeholder='Your Name'  />
             <input type="email" value={userData.email} className='bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl outline-none px-8 py-4 placeholder-white w-[20vw] text-white' placeholder='Your Email'  />
             <input type="tel" value={userData.phone} className='bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl outline-none px-8 py-4 placeholder-white w-[20vw] text-white' placeholder='Your Number'  />
           </div>
   
           <textarea name="message" id="msg" cols="30" rows="8" className='bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl outline-none placeholder-white caret-white text-white px-8 py-4'></textarea>
   
         </form>
          </div>
           
   
         </div>
    </div>
 
     
    </>
  )
}

export default Contact