import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wallet from "../../assets/images/cryptowallet.png";
import protocol from "../../assets/images/cryptoprotocol.png";
import setting from "../../assets/images/cryptosettings.png";
import double from "../../assets/svg/double.svg";
import "./Monitor.css";

export default function Monitor() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000); // Change this value to adjust the interval (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="z-[10] bg-[#000000a6] text-white relative w-full px-[1rem] md:px-[5rem] pt-[2rem] flex flex-col justify-center items-center">
        <p className="text-5xl mb-[2rem] text-center font-[500]">
          What It Monitors
        </p>
        <div className="w-full mt-[1rem] flex flex-wrap justify-around items-center">
          <div className="w-full max-w-[30rem] h-[15rem] slide rounded-xl overflow-x-hidden">
            <Slider ref={sliderRef} {...settings} className="h-full p-[1rem]">
              <div className="flex flex-col justify-center items-center relative">
                <h3 className="text-2xl mb-[1rem] font-[400] text-center">
                  With Customizable <br /> Notifications
                </h3>
                <div className="flex justify-center items-center">
                  <img src={setting} alt="" />
                </div>
                {/* <p className="absolute font-[300] w-[30%] top-0 z-[10] right-0 text-center">
                  Transactions Balances <hr />
                  Price fluctuations allowance and transactions in/out
                </p> */}
              </div>
              <div className="flex flex-col justify-center items-start relative">
                <h3 className="text-2xl mb-[2rem] font-[400]">agEUR Wallet</h3>
                <div>
                  <img src={wallet} alt="" />
                </div>
                <p className="absolute font-[300] w-[40%] top-0 z-[10] right-0 text-center">
                  Transactions Balances <hr />
                  Price fluctuations allowance and transactions in/out
                </p>
              </div>
              <div className="flex flex-col justify-center items-start relative">
                <h3 className="text-2xl mb-[2rem] font-[400]">Protocols</h3>
                <div>
                  <img src={protocol} alt="" />
                </div>
                <p className="absolute font-[300] w-[40%] top-0 z-[10] right-0 text-center">
                  Changes To The Digital Landscape <hr />
                  Anytime agEUR gets bridged to another protocol or another LP
                  gets opened
                </p>
              </div>
              {/* Add more slides as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
