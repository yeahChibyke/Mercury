import React from "react";
import signupicon from "../../assets/images/icons8signup.png";
import walleticon from "../../assets/images/icons8wallet.png";
import emailicon from "../../assets/images/icons8email.png";

export default function HowItWorks() {
  return (
    <>
      <div className="z-[10] w-full px-[1rem] md:px-[5rem] xl:w-[80%] mt-[5rem] lg:mt-[15rem] flex flex-col justify-center items-center">
        <p className="text-5xl font-[500] mb-[3rem]">How It Works</p>
        <div className="bg-[#000000a6] rounded-xl w-full md:w-[80%] flex flex-col gap-10 md:gap-0 md:flex-row flex-wrap justify-around items-center py-[2rem]">
          <div className="text-white flex flex-col gap-5 justify-center items-center w-[11rem] h-[10rem]">
            <div>
              <img src={signupicon} alt="" className="w-full h-auto" />
            </div>
            <p>Sign Up</p>
          </div>
          <div className="text-white flex flex-col gap-5 justify-center items-center w-[11rem] h-[10rem]">
            <div>
              <img src={walleticon} alt="" className="w-full h-auto" />
            </div>
            <p>Connect Wallet</p>
          </div>
          <div className="text-white flex flex-col gap-5 justify-center items-center w-[11rem] h-[10rem]">
            <div>
              <img src={emailicon} alt="" className="w-full h-auto" />
            </div>
            <p className="text-center whitespace-nowrap">Get Email Notifications</p>
          </div>
        </div>
      </div>
    </>
  );
}
