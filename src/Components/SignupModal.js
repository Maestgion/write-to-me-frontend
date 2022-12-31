import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

const SignupModal = ({ closeModal }) => {


  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    passion: "",
    password: "",
    cnfPassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const { name, email, phone, passion, password, cnfPassword } = inputs;

    // window.alert(name)
      
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        passion,
        password,
        cnfPassword,
      }),

    });

    const data = await res.json();

    if (data.status === 422 || !data) 
    {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } 
    else 
    {
      window.alert(" Registration Successful");
      console.log("Registration Successful");
    }


  };

  const handleOnClick = () => {
    closeModal(false);
  };

  return (
    <>
      <div className="flex justify-center items-center absolute -top-[11.5rem] left-[32vw]  bg-[rgba(200, 200, 200)] backdrop-filter backdrop-blur-sm   ">
        {/* parent div */}

        <button
          className="relative left-[29vw] bottom-[40vh]"
          onClick={handleOnClick}
        >
          <ImCancelCircle className="text-white text-xl hover:text-red-500" />
        </button>
        {/* Modal div */}
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="w-[30vw]  border rounded-xl flex flex-col gap-8 items-center justify-center px-8 py-8 bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 -z-10 text-white"
        >
          <p className="text-2xl text-center text-white">
            Sign up to connect...
          </p>

          <input
            
            type="text"
            placeholder="Your Name"
            className="py-3 px-8 outline-none  min-w-full rounded-xl bg-gray-400 placeholder-white  caret-white"
            required
            name="name"
            value={inputs.name}
            onChange={handleInputs}
          />

          <input
            
            type="email"
            placeholder="Your Email"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl caret-white"
            required
            name="email"
            value={inputs.email}
            onChange={handleInputs}
          />
          <input
            
            type="tel"
            placeholder="Mobile Number"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl caret-white"
            required
            name="phone"
            value={inputs.phone}
            onChange={handleInputs}
          />
          <input
            
            type="text"
            placeholder="Passion"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl caret-white"
            required
            name="passion"
            value={inputs.passion}
            onChange={handleInputs}
          />
          <input
            
            type="password"
            placeholder="Password"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl caret-white"
            required
            name="password"
            value={inputs.password}
            onChange={handleInputs}
          />
          <input
            
            type="password"
            placeholder="Confirm Password"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl caret-white"
            required
            name="cnfPassword"
            value={inputs.cnfPassword}
            onChange={handleInputs}
          />

          <button
            type="submit"
            className="rounded-xl bg-gray-400 min-w-[12vw]  hover:bg-[#0F172A]"
           
          >
            <p className=" text-white  p-2 tracking-wide font-bold ">
              Register
            </p>
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupModal;
