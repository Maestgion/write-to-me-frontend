import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <div className="flex flex-row px-10 py-4 justify-between items-center text-white " >

          {/* logo */}

          <div >
           <FaConnectdevelop className="text-5xl  font-extrabold cursor-pointer hover:animate-spin"/>
           
          </div>

        {/* list */}

          <div>
            <ul className="flex gap-8 text-xl font-bold list-none">
              <li>
                <NavLink to="/about" className="hover:animate-pulse" >About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:animate-pulse">Contact</NavLink>
              </li>
           
            </ul>
          </div>

        </div>
    </>
  );
};

export default Navbar;
