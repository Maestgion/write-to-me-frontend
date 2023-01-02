import React, { useContext } from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {

  const {state, dispatch} = useContext(UserContext)
  const notify=()=>{

   
  }
  return (
    <>
    {
       state ? 
       <div className="flex flex-row px-10 py-4 justify-between items-center text-white " >

{/* logo */}

<NavLink to="/">
 <FaConnectdevelop className="text-5xl  font-extrabold cursor-pointer hover:animate-spin"/>
 
</NavLink>

{/* list */}

<div>
  <ul className="flex gap-12 text-xl font-bold list-none">
    <li>
      <NavLink to="/" className="hover:animate-pulse" >Home</NavLink>
    </li>
    <li>
      <NavLink to="/about" className="hover:animate-pulse" >About</NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="hover:animate-pulse">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/logout" className="hover:animate-pulse" onClick={notify}>Logout</NavLink>
    </li>

    
 
  </ul>
</div>

</div>
    :
    <div className="flex flex-row px-10 py-4 justify-between items-center text-white " >

{/* logo */}

<NavLink to="/">
 <FaConnectdevelop className="text-5xl  font-extrabold cursor-pointer hover:animate-spin"/>
 
</NavLink>

{/* list */}

<div>
  <ul className="flex gap-12 text-xl font-bold list-none">
    <li>
      <NavLink to="/" className="hover:animate-pulse" >Home</NavLink>
    </li>
    <li>
      <NavLink to="/about" className="hover:animate-pulse" >About</NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="hover:animate-pulse">Contact</NavLink>
    </li>
 
  </ul>
</div>

</div>
}
    </>
  );
};

export default Navbar;
