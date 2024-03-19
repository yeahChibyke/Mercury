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
          <h1 className="text-5xl mb-[2rem] font-[500]">About Us</h1>
          <p className="text-3xl w-full max-w-[300px] flex justify-center items-center whitespace-nowrap bg-[#000000a6] px-[5rem] rounded-xl text-white">
            Our Mission
          </p>
          <p className="mt-[1rem] text-lg text-center max-w-[400px]">
            To provide Instantaneous alerts for informed financial
            decision-making.
          </p>
          <div className="w-full mt-[5rem] flex flex-wrap justify-around items-center">
            {data.map((each, index) => (
              <AboutUsCard key={index} {...each} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-[10] w-full mt-[2rem] py-[3rem] px-[1rem] md:px-[5rem] xl:px-[10rem] flex flex-col justify-center items-center bg-[#000000a6] text-white ">
        <p className="text-5xl font-[500] text-center mb-[2rem]">
          Why It Matters
        </p>
        <div className="w-full flex flex-wrap justify-around items-center px-5 gap-[3rem]">
          <div className="w-full h-[20rem] lg:w-[20rem] flex flex-col justify-center items-center p-5 border rounded-xl">
            <p className="text-center text-[20px] mb-[1rem]">
              REAL TIME AWARENESS
            </p>
            <p className="text-center font-[300] text-[15px]">
              Mercury ensures that agEUR holders remain informed about
              activities within their wallets without the need for constant
              manual checks. This proves particularly valuable in situations
              such as security breaches, as users can promptly respond to
              real-time updates and take immediate action.
            </p>
          </div>
          <div className="w-full h-[20rem] lg:w-[20rem] flex flex-col justify-center items-center p-5 border rounded-xl">
            <p className="text-center text-[20px] mb-[1rem]">
              INFORMED FINANCIAL DECISSION MAKING
            </p>
            <p className="text-center font-[300] text-[15px]">
              The insights provided by Mercury empower agEUR holders to make
              well-informed financial decisions. Whether it's identifying
              arbitrage opportunities, managing liquidity, executing swaps,
              navigating bridges between protocols, or monitoring open positions
              on DEXs, users can leverage this information for strategic
              advantage.
            </p>
          </div>
          <div className="w-full h-[20rem] lg:w-[20rem] flex flex-col justify-center items-center p-5 border rounded-xl">
            <p className="text-center text-[20px] mb-[1rem]">
              MARKET FLEXIBILITY
            </p>
            <p className="text-center font-[300] text-[15px]">
              By monitoring fiat markets for price updates, Mercury equips
              holders with the ability to respond promptly to market
              fluctuations. In the event of prices falling below a user's
              preferred threshold, they can make timely decisions to convert or
              withdraw their funds.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
