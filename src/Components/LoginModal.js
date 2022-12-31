import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

const LoginModal = ({ closeModal }) => {

 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')


  const handleSubmit = async (e) =>{
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 400 || !data) 
    {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    } 
    else 
    {
      window.alert(" Login Successful");
      console.log("Login Successful");
    }

  }
  
  const handleOnClick = () => {
    closeModal(false);
  };
 
  return (
    <>
      <div className="flex justify-center items-center absolute  right-[32vw]  bg-[rgba(200, 200, 200)] backdrop-filter backdrop-blur-sm   ">
        {/* parent div */}

        <button
          className="relative left-[29vw] bottom-[22vh]"
          onClick={handleOnClick}
        >
          <ImCancelCircle className="text-white text-xl hover:text-red-500" />
        </button>
        {/* Modal div */}
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="w-[30vw] h-[50vh] border rounded-xl flex flex-col gap-10 items-center justify-center px-8 bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 -z-10 text-white"
        >
          <p className="text-2xl text-center text-white">
            Sign in to continue...
          </p>

          <input
            required
            type="email"
            placeholder="Your Email"
            className="py-3 px-8 outline-none  min-w-full rounded-xl bg-gray-400 placeholder-white caret-white"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />

          <input
            required
            type="password"
            placeholder="Password"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl caret-white"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />

          <button
            type="submit"
            className="rounded-xl bg-gray-400 min-w-[12vw]  hover:bg-[#0F172A]"
          >
            <p className="text-white  p-2 tracking-wide font-bold ">Login</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginModal;
