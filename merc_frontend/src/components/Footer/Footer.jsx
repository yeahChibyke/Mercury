import React from "react";
import svg from "../../assets/svg/lines.svg";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full relative z-[10]">
        <img src={svg} alt="" />
        <div className="relative z-[10] w-full px-[1rem] xl:px-[20rem] pb-[3rem] bg-[#354845] text-white flex justify-around items-start">
          <div className="w-[30%]">
            <p className="font-merienda text-[20px] mb-[1rem]">Mercury</p>
            <ul className="flex flex-col gap-5 text-sm">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li className="cursor-pointer">Angle Docs</li>
            </ul>
          </div>
          <div className="w-[30%]">
            <p className="font-merienda text-[20px] mb-[1rem]">Goal</p>
            <p className="font-[300] text-sm max-w-[200px]">
              Mercury is committed to empowering users with timely and relevant
              market insights and transaction-related details through a
              user-friendly notification system.
            </p>
          </div>
          <div>
            <p className="font-merienda text-[20px] mb-[1rem]">Socials</p>
            <ul className="text-sm">
              <li className="py-5  flex gap-3 justify-start items-center">
                <FaInstagram size={15} />
                Instagram
              </li>
              <li className="py-5  flex gap-3 justify-start items-center">
                <FaTwitter size={15} />
                Twitter
              </li>
              <li className="py-5  flex gap-3 justify-start items-center">
                <FaFacebook size={15} />
                Facebook
              </li>
              <li className="py-5  flex gap-3 justify-start items-center">
                <FaLinkedin size={15} />
                LinkedIn
              </li>
            </ul>
          </div>
          <form className="p-[1rem] md:flex flex-col absolute hidden bottom-0 left-[19%] w-[20%] min-w-[20rem]">
            <input type="text" className="px-[1rem] py-[0.5rem] text-black rounded-lg" placeholder="Enter Email..."/>
            <button className="mt-[1rem] bg-black py-[0.5rem] w-[10rem] rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}
