import React, { useEffect, useState } from "react";
import logo from "../../assets/images/m_fe_logo.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import "./NavBar.css";

export default function NavBar() {
  // states for mobile and nav
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // to check if the screen width is mobile size (less than 768px)
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth > 768) {
      setShowNav(false);
    }
  };

  // Run the checkIsMobile function on component mount and resize
  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // toggle nav function
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <header>
        <nav className="w-full flex justify-between items-center">
          <div className="w-[50%]">
            <div className="w-fit border-[2px] border-[#000] rounded-full">
              <img src={logo} alt="logo.jpg" className="w-full h-auto" />
            </div>
          </div>
          <button
            className="md:hidden fixed right-[4%] top-[8%] z-[2] transform scale-[1.2]"
            onClick={toggleNav}
          >
            {showNav ? <FiX /> : <FaBars />}
          </button>
          <ul
            className={`transit font-quicksand w-[50%] flex md:justify-end md:items-center md:gap-[10rem] ${
              isMobile &&
              `fixed w-[9rem] flex-col gap-[1rem] ${
                showNav ? "right-0" : "right-[-50%]"
              }`
            }`}
          >
            <li className="font-[600] w-fit">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="font-[600] w-fit">
              <NavLink to="/documentation">DOCS</NavLink>
            </li>
            <li className="font-[600] w-fit">
              <NavLink to="/support">SUPPORT</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
