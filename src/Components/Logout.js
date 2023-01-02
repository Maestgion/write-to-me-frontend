import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const Logout = () => {

    const navigate = useNavigate();

    const userLogout = async () =>{

      try{
        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
        });

        const data = await res.json();

        const error = ()=>{
            
           throw new Error(data.error);
        }

        data ? navigate("/") : error()

        console.log(data)

      }catch(e){
        console.log(e);
      }

    }

    

    useEffect(
        userLogout()
        
        ,[])

    

  return (
    <div>
        hgfkjhgf
    </div>
  )
}

export default Logout