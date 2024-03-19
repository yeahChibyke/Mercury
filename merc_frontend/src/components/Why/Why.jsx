import React from "react";

export default function Why() {
  return (
    <>
      <div className="relative z-[10] w-full mt-[5rem] py-[3rem] px-[1rem] md:px-[5rem] xl:px-[10rem] flex flex-col justify-center items-center bg-[#000000a6] text-white ">
        <p className="text-5xl font-[500] text-center mb-[2rem]">
          Why Use Mercury?
        </p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 w-full justify-around items-start">
          <p className="w-full lg:w-[40%] text-[20px] p-[1rem]">
            As the premier wallet notification system designed for the agEUR
            ecosystem, Mercury diligently observes agEUR-related transactions
            within connected wallets, delivering instantaneous alerts to
            hodl-ers through email notifications.
          </p>
          <p className="w-full lg:w-[40%] text-[20px] p-[1rem]">
            With the upcoming Mercury version 2, our enhanced system will not
            only track all markets and exchanges where agEUR is actively traded,
            identifying potential market opportunities, but will also keep a
            watchful eye on the broader DeFi landscape for news beneficial to
            agEUR holders. These insights will be seamlessly relayed to our
            users through automated email notifications, ensuring they stay
            informed about relevant developments.
          </p>
        </div>
      </div>
    </>
  );
}
