import React from "react";
import TestimonialCard from "./TestimonialCard";
import test1 from "../../assets/images/userTest1.jpg";
import test2 from "../../assets/images/userTest2.jpg";
import test3 from "../../assets/images/userTest3.jpg";
import test4 from "../../assets/images/userTest4.jpg";

export default function Testimonial () {
  const data = [
    {
      img: test1,
      title: "Anita Kun",
      subtitle: "Crypto Analyst",
      comment: "Email alerts are really fast, Love this! Really Secure",
    },
    {
      img: test2,
      title: "Mark McClay",
      subtitle: "IT Student",
      comment: "Technology behind Mercury is really awesome",
    },
    {
      img: test3,
      title: "David Richards",
      subtitle: "Business Mentor",
      comment: "Surely a good thing to be part of this",
    },
    {
      img: test4,
      title: "Stella Johnson",
      subtitle: "Student",
      comment:
        "Mercury is truly a user-focused product. They respond to my complaints immediately.",
    },
  ];

  return (
    <>
      <div className="relative z-[10] w-full py-[3rem] px-[1rem] md:px-[5rem] xl:px-[10rem] flex flex-col justify-center items-center">
        <p className="text-5xl font-[500] text-center mb-[2rem]">
          What Our Users Say
        </p>
        <div className="w-full max-w-[80rem]  flex flex-wrap justify-around items-center">
          {data.map((each, index) => (
            <TestimonialCard key={index} {...each} />
          ))}
        </div>
      </div>
    </>
  );
}
