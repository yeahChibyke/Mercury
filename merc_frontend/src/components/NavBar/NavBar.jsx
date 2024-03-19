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

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`px-[1rem] md:px-[5rem] pt-[2rem] pb-[1rem] sticky top-0 left-0 right-0 z-[500] ${isScrolled ? "scroll" : ""}`}>
        <nav className="w-full flex justify-between items-center">
          <div className="w-[50%]">
            <div className={`w-fit border-[2px] border-[#000] rounded-full ${isScrolled ? "border-[#ffff]" : ""}`}>
              <NavLink to="/">
              <img src={logo} alt="logo.jpg" className="w-full h-auto" />
              </NavLink>
            </div>
          </div>
          <button
            className="md:hidden fixed right-[7%] md:top-[11%] z-[2] transform scale-[1.2]"
            onClick={toggleNav}
          >
            {showNav ? <FiX /> : <FaBars />}
          </button>
          <ul
            className={`transit font-quicksand w-[50%] flex md:justify-end md:items-center md:gap-[5rem] ${
              isMobile &&
              `fixed w-[9rem] flex-col gap-[1rem] ${
                showNav ? `right-0 top-0 px-2 h-[9.1rem] gap-[0.8rem] ${isScrolled && "text-white bg-[#024e57f1]"}` : "right-[-50%]"
              }`
            }`}
          >
            <li className="font-[500] w-fit">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="font-[500] w-fit whitespace-nowrap">
              <NavLink to="/aboutus">ABOUT US</NavLink>
            </li>
            <li className="font-[500] w-fit">
              <NavLink to="/documentation">DOCS</NavLink>
            </li>
            <li className="font-[500] w-fit">
              <NavLink to="/support">SUPPORT</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
