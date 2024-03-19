import React from "react";

export default function TestimonialCard({
  img,
  title = "Title",
  subtitle = "Subtitle",
  comment,
}) {
  return (
    <>
      <div className="w-full md:w-[25rem] max-w-[30rem] h-[15rem] relative shadow-2xl m-5 bg-[#000000a6] text-white">
        <div className="absolute top-[5%] left-[5%] flex w-[20rem] items-center">
          <div className="left-[10%] overflow-hidden rounded-[50%] w-[6rem] h-[6rem]">
            <img src={img} alt=".jpg" />
          </div>
          <div className="h-fit ml-[1rem] flex flex-col justify-start">
            <p className="py-1 font-[700] text-[17px]">{title}</p>
            <p className="py-1 font-[400] text-[16px]">{subtitle}</p>
          </div>
        </div>
        <p className="absolute w-fit left-[5%] top-[60%] text-sm md:text-[14px] font-merienda">
          "{comment}"
        </p>
      </div>
    </>
  );
}
