import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Username from "../../components/Username/Username";
import { FaEdit } from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";
import EditForm from "../../components/EditForm/EditForm";
import { ethers } from "ethers";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

export default function Account() {
  const [defaultAccount, setDefaultAccount] = useState("");
  const [walletStatus, setWalletStatus] = useState();

  const { user } = UserAuth();

  // request a wallet to connect to
  const requestWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      walletChanged(accounts);
    } catch (error) {
      console.log(error.message);
    }
  };

  // wallet change handler
  const walletChanged = (incoming) => {
    setDefaultAccount(incoming);
    setWalletAddress(incoming);
    // connectWallet();
  };

  //save wallet address to firestore
  const setWalletAddress = (address) => {
    const userRef = doc(db, "users", user?.email);
    setDoc(userRef, {
      wallet: address,
    });
  };

  //get wallet address from firestore
  

  // const connectWallet = async () => {
  //   if (!window.ethereum) {
  //     await requestWallet();
  //   }
  //   const provider = new ethers.WebSocketProvider(window.ethereum);
  //   console.log(provider);
  // };

  return (
    <>
      <div className="relative z-[10] w-full h-full pt-[10rem] flex flex-col justify-center items-center">
        <div className="w-fit border-[2px] border-[#000] rounded-full absolute top-8 left-[4%]">
          <NavLink
            to="/"
            className={"flex justify-center items-center p-[0.5rem]"}
          >
            <FiArrowLeft size={20} /> <span className="font-[500]">Home</span>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-start w-[90%] max-w-[30rem] mb-[5rem] bg-[#000000a6] text-white p-[1rem] rounded-xl">
          <p className="text-5xl font-[500] mb-[2rem]">
            Hello! <Username />
          </p>
          <p className="px-[0.7rem] py-[0.3rem] rounded-full flex justify-center items-center">
            <FaEdit className="mr-[0.5rem]" /> Edit Username
          </p>
          <EditForm />
          <div className="mt-[1rem]">
            <h3>Wallet Address:</h3>
            <p>{defaultAccount}</p>
            <h3>Wallet Status:</h3>
            <p>{walletStatus}</p>
          </div>
        </div>
        <CustomButton
          onclick={requestWallet}
          title="Connect Wallet"
          classes={"hero-btn transit"}
        />
      </div>
    </>
  );
}
