import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import AlertModal from "../Modals/AlertModal";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function EditForm({ click }) {
  // user
  const { user } = UserAuth();

  //picking user data
  const userID = doc(db, "users", `${user?.email}`);

  // state for username
  const [username, setUsername] = useState("");

  //state for button
  const [btnDisabled, setBtnDisabled] = useState(true);

  //state for alert modal to
  const [alert, setAlert] = useState(false);

  // state for mood of alertt modal, good news or bad news
  const [bad, setBad] = useState(false);

  // state for alert modal title and subtitle
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "") {
      updateDoc(userID, {
        username: username,
      });
      setBad(false);
      setTitle("Success");
      setSubitle("Username changed");
      handleAlert();
      setUsername("");
    } else {
      setBad(true);
      setTitle("Error");
      setSubitle("Can not be empty");
      handleAlert();
    }
  };

  // handle modal alert
  const handleAlert = () => {
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
      <form onSubmit={handleSubmit} className="w-[80%] relative">
        <div className="w-full">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter New Username"
            autoComplete="on"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="text-black mt-[0.5rem] py-[0.5rem] px-[1rem] rounded-xl w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-black px-[0.7rem] py-[0.3rem] rounded-xl absolute top-[24%] right-[1%]"
        >
          Save
        </button>
      </form>
    </>
  );
}
