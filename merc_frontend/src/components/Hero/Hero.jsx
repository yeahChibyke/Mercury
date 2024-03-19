import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Hero.css";
import planets from "../../assets/images/planetshero.png";

export default function Hero() {
  const handleClick = () => {
    window.open(
      "https://github.com/0xBcamp/Victory-janus-dragon/blob/main/README.md",
      "_blank"
    );
  };

  return (
    <>
      <header className="z-[10] w-full px-[1rem] md:px-[5rem] xl:w-[80%] mt-[5rem] lg:mt-[15rem] flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-5xl font-aboreto font-[600] gradient-text mb-10 merc-big">
            MERCURY
          </h1>
          <hr className="rule" />
          <br />
          <hr className="rule" /> <br />
          <hr className="rule" />
          <br />
          <p className="text-2xl text-center lg:text-left mb-10 relative empty">
            Leading Wallet Notification System for agEUR Hodl-ers.
          </p>
          <div>
            <CustomButton
              title="SIGN UP"
              classes={"transit hero-btn text-lg py-[10px] px-[40px]"}
            />
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center">
          <div
            onClick={handleClick}
            className="w-full cursor-pointer relative flex justify-end planet-ring mt-[3rem] lg:mt-0 transit"
          >
            <img src={planets} alt="" className="planet" />
            <p className="absolute left-7 top-[45%] text-[20px] font-[500] font-merienda">Learn more</p>
          </div>
        </div>
      </header>
    </>
  );
}
