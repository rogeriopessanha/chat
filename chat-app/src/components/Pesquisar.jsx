

import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc, } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";


const Pesquisar = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "usuario"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {

        await setDoc(doc(db, "chats", combinedId), { mensagens: [] });

        await updateDoc(doc(db, "usuarioChats", currentUser.uid), {
          [combinedId + ".usuarioChatInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "usuarioChats", user.uid), {
          [combinedId + ".usuarioChatInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
  };
  return (
    <div className="pesquisar">
      <div className="form-Pesquisar">
        <input
          type="text"
          placeholder="Procure seus contatos"
          // onKeyDown={handleKey}
          onKeyUp={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>Usuario não encontrado!</span>}
      {user && (
        <div className="usuarioChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="usuarioChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pesquisar;