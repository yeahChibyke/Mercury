import React from "react";
import "./AboutUs.css";

export default function AboutUsCard({
  img,
  title = "Title",
  content = "Lorem Ipsum",
}) {
  return (
    <>
      <div className="transit card w-[23rem] h-[18rem] mb-[5rem] relative rounded-xl text-white p-[1rem] bg-[#000000a6]">
        <div className="w-[80px] h-[80px] absolute top-[-15%] left-[39%] rounded-full overflow-hidden bg-white border-[2px] border-black">
          <img src={img} alt={img} className="w-full h-auto transform scale-[1]"/>
        </div>
        <p className="font-[600] text-center mt-[1.5rem]">{title}</p>
        <p className="mt-[1.rem] text-center font-[300]">{content}</p>
      </div>
    </>
  );
}
