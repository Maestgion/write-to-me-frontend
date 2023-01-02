import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';



const Logout = () => {

    const navigate = useNavigate();

    const {state, dispatch} = useContext(UserContext)

    const userLogout = async () =>{

      try{
        const res = await fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            },
        });

        const data = await res.json();

        

        if(data)
        {
            navigate("/")
            dispatch({type:"USER", payload:false})
        }
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