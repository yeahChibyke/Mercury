import React from "react";
import svg from "../../assets/svg/lines.svg";

export default function Footer() {
  return (
    <>
      <div className="w-full relative z-[10]">
        <img src={svg} alt="" />
        <div className="relative z-[10] w-full bg-[#354845] text-white flex flex-col justify-center items-center">
            FOOTER
        </div>
      </div>
    </>
  );
}
