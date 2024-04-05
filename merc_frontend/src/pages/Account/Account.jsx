import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Username from "../../components/Username/Username";
import { FaCheckCircle, FaEdit, FaExclamationCircle } from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";
import EditForm from "../../components/EditForm/EditForm";
import { ethers } from "ethers";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { FaCircleCheck } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import AlertModal from "../../components/Modals/AlertModal";

export default function Account() {
  // state for wallet that will be displayed
  const [defaultAccount, setDefaultAccount] = useState();

  // state for connection status
  const [connected, setConnected] = useState(false);

  // state to handle connection logo
  const [logo, setLogo] = useState(false);

  // state for wallet balance
  // const [balance, setBalance] = useState(0);

  // state to format address
  const [showFullAddress, setShowFullAddress] = useState(false);

  //state for alert modal
  const [alert, setAlert] = useState(false);

  // state for mood of alertt modal, good news or bad news
  const [bad, setBad] = useState(false);

  // state for alert modal title and subtitle
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");

  const { user } = UserAuth();

  // request a wallet to connect to
  const requestWallet = async () => {
    try {
      if (!connected) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const message = "Connect Your MetaMask to Enjoy Mercury!";
        const sig = await signer.signMessage(message);
        ethers.verifyMessage(message, sig);
        console.log(address);
        walletChanged(address);
      } else {
        window.ethereum.selectedAddress = null;
        setConnected(false);
        setTitle("Alert!");
        setSubitle("Wallet is Connected..");
        setBad(true);
        handleModal();
      }
    } catch (error) {
      // console.log(error.message);
      setTitle("Alert!");
      if (
        error.message ==
        "Cannot set property selectedAddress of #<f> which has only a getter"
      ) {
        setSubitle("Wallet Already Connected");
      } else if (error.message) {
        setSubitle("Operation Stopped/Cancelled unexpectedly");
      }
      setBad(true);
      handleModal();
    }
  };

  // wallet change handler
  const walletChanged = (incoming) => {
    setDefaultAccount(incoming);
    setWalletAddress(incoming);
    setTitle("Success!");
    setSubitle("Wallet Connected..");
    setBad(false);
    handleModal();
  };

  //save wallet address to firestore
  const setWalletAddress = (address) => {
    const userRef = doc(db, "users", user?.email);
    updateDoc(userRef, {
      wallet: address,
    });
  };

  //get wallet address from firestore
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setDefaultAccount(doc.data()?.wallet);
    });
  });

  // status for wallet
  useEffect(() => {
    if (!defaultAccount) {
      setConnected(false);
    } else {
      setConnected(true);
      setLogo(true);
    }
  });

  // format wallet address
  const formatAddress = (here) => {
    if (!showFullAddress && defaultAccount) {
      return `${here?.substring(0, 6)}...${here?.substring(here?.length - 4)}`;
    }
    return here;
  };

  // handle modal
  const handleModal = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <>
      <AlertModal
        title={title}
        subtitle={subtitle}
        classes={alert ? "show-modal" : ""}
      >
        {bad ? (
          <FaExclamationCircle size={32} color="red" />
        ) : (
          <FaCheckCircle size={32} color="limegreen" />
        )}
      </AlertModal>
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
            <h3>Wallet Status:</h3>
            <p className="flex gap-2 items-center mb-5">
              {connected ? "Connected" : "Not Connected"}
              {logo ? (
                <FaCircleCheck size={20} color="green" />
              ) : (
                <FaMinusCircle size={20} color="red" />
              )}
            </p>
            <h3>Wallet Address:</h3>
            <p className="text-green-300">{formatAddress(defaultAccount)}</p>
            {defaultAccount && (
              <button
                className="text-sm bg-black px-[2rem] py-[0.2rem] rounded-xl mt-2 w-[6rem] flex justify-center items-center"
                onClick={() => setShowFullAddress(!showFullAddress)}
              >
                {showFullAddress ? "Reduce" : "Extend"}
              </button>
            )}
            {/* <h3>Balance:</h3>
            <p>{balance} ETH</p> */}
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
