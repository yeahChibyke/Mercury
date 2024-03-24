import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Username from "../../components/Username/Username";
import { FaEdit } from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";
import EditForm from "../../components/EditForm/EditForm";

export default function Account() {
  return (
    <>
      <div className="relative z-[10] w-full h-full pt-[10rem] flex flex-col justify-center items-center">
        <div className="w-fit border-[2px] border-[#000] rounded-full absolute top-8 left-[4%]">
          <NavLink
            to="/"
            className={"flex justify-center items-center p-[0.5rem]"}
          >
            <FiArrowLeft size={20} /> <span className="font-[500]">Home</span>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-start w-[90%] max-w-[30rem] mb-[5rem] bg-[#000000a6] text-white p-[1rem] rounded-xl">
          <p className="text-5xl font-[500] mb-[2rem]">
            Hello! <Username />
          </p>
          <p className="px-[0.7rem] py-[0.3rem] rounded-full flex justify-center items-center">
            <FaEdit className="mr-[0.5rem]" /> Edit Username
          </p>
          <EditForm />
        </div>
        <CustomButton title="Connect Wallet" classes={"hero-btn transit"}/>
      </div>
    </>
  );
}
