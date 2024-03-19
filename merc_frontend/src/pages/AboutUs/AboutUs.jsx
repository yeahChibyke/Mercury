import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import AboutUsCard from "./AboutUsCard";
import problem from "../../assets/images/problem.png";
import solution from "../../assets/images/solution.png";
import challenge from "../../assets/images/challenge.png";

export default function AboutUs() {
  const data = [
    {
      img: problem,
      title: "The Problem",
      content:
        "Customers of the agEUR stablecoin, despite its popularity, are experiencing a lack of comprehensive information about their financial transactions. Specifically, users are seeking insights into market opportunities for arbitrage and trading in highly liquid assets, open positions, fluctuations, and active orders.",
    },
    {
      img: challenge,
      title: "The Challenge",
      content:
        "Users of agEUR require reliable alerts and insights into market opportunities. They need to understand market shifts promptly, monitor open positions and orders, and gain visibility into their financial credits and debits.",
    },
    {
      img: solution,
      title: "Our Solution",
      content:
        "Mercury is addressing user needs by providing a user-centric notification system. This system quickly informs agEUR holders about various market opportunities and provides crucial transaction-related details. Information is gathered from Mercury's analysis of all connected agEUR-holding wallets and active markets where agEUR is traded.",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="z-[10] relative w-full px-[1rem] md:px-[5rem] flex justify-center items-center">
        <div className="w-full xl:w-[80%] mt-[5rem] flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-[2rem]">About Us</h1>
          <p className="text-3xl w-full max-w-[300px] flex justify-center items-center whitespace-nowrap bg-[#000000a6] px-[5rem] rounded-xl text-white">
            Our Mission
          </p>
          <p className="mt-[1rem] text-lg text-center max-w-[400px]">
            To provide Instantaneous alerts for informed financial
            decision-making.
          </p>
          <div className="w-full mt-[5rem] flex flex-wrap justify-around items-center">
            {data.map((each, index) => (
                <AboutUsCard key={index} {...each}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
