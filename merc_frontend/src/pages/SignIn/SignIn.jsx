import React from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FiArrowLeft } from "react-icons/fi";

export default function SignIn() {
  return (
    <>
      <div className="relative z-[10] w-full h-full">
        <div className="w-fit border-[2px] border-[#000] rounded-full absolute top-8 left-[4%]">
          <NavLink
            to="/"
            className={"flex justify-center items-center p-[0.5rem]"}
          >
            <FiArrowLeft size={20} /> <span className="font-[500]">Home</span>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center pt-[10rem]">
          <p className="text-5xl font-[500] text-center mb-[2rem]">Sign In</p>
          <form
            action=""
            className="w-[90%] rounded-xl max-w-[30rem] p-[2rem] flex flex-col justify-center items-center bg-[#000000a6] text-white"
          >
            <div className="w-full max-w-[40rem] mb-[0.5rem]">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                id="username"
                type="text"
                placeholder="Enter Username"
                className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
              />
            </div>
            <div className="w-full max-w-[40rem] mb-[0.5rem]">
              <label htmlFor="psword">Password:</label>
              <br />
              <input
                id="psword"
                type="password"
                placeholder="Enter Password"
                className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
              />
            </div>
            <div>
              <CustomButton
                title="Log In"
                classes={"mt-[2rem] mb-[2rem]"}
              />
            </div>
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup" className={"underline"}>Sign Up</NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
