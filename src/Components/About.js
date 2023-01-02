import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!data.status === 200) {
        throw new Error(data.error);
      }
    } catch (e) {
      console.log(e);
      navigate("/");
      // window.alert("Please login to access the Page");
    }
  };

  useEffect(() => {
    callAboutPage();
    // no async in useEffect
  }, []);

  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom left, #0F172A 0%, #162F49 20%, #0F172A 100%)",
      }}
    >
      <Navbar />

      <div className=" w-[50vw] p-10 bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 rounded-xl mx-auto my-[10vw] grid grid-cols-2  place-items-center align-items-center">
        <div className="flex flex-col gap-4 font-bold text-white text-2xl ">
          <p>User Id</p>
          <p>Name</p>
          <p>Phone</p>
          <p>Email</p>
          <p>Passion</p>
        </div>

        <div className="flex flex-col gap-4 font-bold text-white text-2xl ">
          <p>{userData._id}</p>
          <p>{userData.name}</p>
          <p>{userData.phone}</p>
          <p>{userData.email}</p>
          <p>{userData.passion}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
