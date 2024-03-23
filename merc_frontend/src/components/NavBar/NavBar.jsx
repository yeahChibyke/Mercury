import React, { useEffect, useState } from "react";
import logo from "../../assets/images/m_fe_logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import "./NavBar.css";
import { UserAuth } from "../../context/AuthContext";
import InteractModal from "../Modals/InteractModal";

export default function NavBar() {
  // navigate
  const navigate = useNavigate();

  // user functions decalred
  const { user, logOut } = UserAuth();

  // state for modal
  const [modal, setModal] = useState();

  // states for mobile and nav
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // logout function
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  // handle the  interactive modal
  const handleInteract = () => {
    setModal(!modal);
  };

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

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.open("https://docs.angle.money/overview/readme", "_blank");
  };

  return (
    <>
      <InteractModal
        title="Confirm"
        subtitle="Are you sure you want to Logout?"
        logout={handleLogout}
        close={handleInteract}
        classes={modal ? "show-interact" : ""}
      ></InteractModal>
      <header
        className={`px-[1rem] md:px-[5rem] pt-[2rem] pb-[1rem] sticky top-0 left-0 right-0 z-[500] ${
          isScrolled || showNav ? "scroll" : ""
        }`}
      >
        <nav className="w-full flex justify-between items-center">
          <div className="w-[50%]">
            <div
              className={`w-fit border-[2px] border-[#000] rounded-full relative z-[10] ${
                isScrolled || showNav ? "border-[#ffff]" : ""
              }`}
            >
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
            className={`font-quicksand w-[50%] flex md:justify-end md:items-center md:gap-[5rem] ${
              isMobile &&
              `fixed w-full items-end justify-around gap-[rem] text-white bg-[#354845] ${
                showNav
                  ? `left-0 right-0 top-0 px-2 h-[12rem] from-up pb-[1rem] gap-[0.8rem] opacity-[100%] ${
                      isScrolled && "text-white bg-[#354845]"
                    }`
                  : "top-[-50%] opacity-[0]"
              }`
            }`}
          >
            <li className="font-[500] w-fit under">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li
              onClick={handleClick}
              className="font-[500] under w-fit whitespace-nowrap cursor-pointer"
            >
              DOCS
            </li>
            {user?.email ? (
              <li
                className={`font-[500] w-fit whitespace-nowrap rounded-full border-[2px] border-black py-[0.3rem] px-[1rem] ${
                  (isMobile || isScrolled) && "border border-white"
                }`}
              >
                <NavLink to="/account">ACCOUNT</NavLink>
              </li>
            ) : (
              <li
                className={`font-[500] w-fit whitespace-nowrap rounded-full border-[2px] border-black py-[0.3rem] px-[1rem] ${
                  (isMobile || isScrolled) && "border border-white"
                }`}
              >
                <NavLink to="/signin">SIGN IN</NavLink>
              </li>
            )}
            {user?.email ? (
              <li
                onClick={handleInteract}
                className={`font-[500] w-fit cursor-pointer whitespace-nowrap rounded-full py-[0.3rem] px-[1rem] border-[2px] border-black bg-black text-white ${
                  (isMobile || isScrolled) &&
                  "bg-white border-white text-[#354845]"
                }`}
              >
                LOG OUT
              </li>
            ) : (
              <li
                className={`font-[500] w-fit whitespace-nowrap rounded-full py-[0.3rem] px-[1rem] border-[2px] border-black bg-black text-white ${
                  (isMobile || isScrolled) &&
                  "bg-white border-white text-[#354845]"
                }`}
              >
                <NavLink to="/signup">SIGN UP</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
