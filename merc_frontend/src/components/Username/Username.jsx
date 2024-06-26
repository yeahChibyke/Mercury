import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Username() {
  const { user } = UserAuth();

  //state for username
  const [username, setUsername] = useState([]);

  //snapshot to get username
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setUsername(doc.data()?.username);
    });
  }, [user]);

  return (
    <>
      <div>
        <h2>{username}</h2>
      </div>
    </>
  );
}
