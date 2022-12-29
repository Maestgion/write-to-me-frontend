import React from "react";
import { ImCancelCircle } from "react-icons/im";

const SignupModal = ({closeModal}) => {

    const handleOnClick = () => {
        closeModal(false)
    }


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
          action="/"
          className="w-[30vw]   border rounded-xl flex flex-col gap-8 items-center justify-center px-8 py-8 bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 -z-10"
        >
          <p className="text-2xl text-center text-white">
            Sign up to connect...
          </p>

          <input
            type="text"
            placeholder="Your Name"
            className="py-3 px-8 outline-none  min-w-full rounded-xl bg-gray-400 placeholder-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl"
          />
          <input
            type="text"
            placeholder="Profession"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="py-3 px-8 outline-none bg-gray-400 placeholder-white min-w-full rounded-xl"
          />

          

          <button className="rounded-xl bg-gray-400 min-w-[12vw]  hover:bg-[#0F172A]">
            <p className="font-Monsterrat text-white  p-2 tracking-wide font-bold lg:font-normal">
              Register
            </p>
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupModal;