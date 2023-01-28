
// import React, { useContext, useState } from 'react'
// // import Add from '../img/perfil/pic2.png'
// import { db } from '../firebase'
// import { AuthContext } from '../context/AuthContext'
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   setDoc,
//   doc,
//   // updateDoc,
//   // serverTimestamp,
//   // getDoc,
// } from 'firebase/firestore'
// // import { async } from '@firebase/util';

// const Pesquisar = () => {

//   const [username, setUsername] = useState('');
//   const [user, setUser] = useState(null);
//   const [err, setErr] = useState(false);

//   const { currentUser } = useContext(AuthContext)

//   const handleSearch = async () => {
//     const q = query(
//       collection(db, 'usuario'),
//       where('displayName', '==', username)
//     );

//     try {

//       const querySnapshot = await getDocs(q)
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data())
//       });
//     } catch (err) {
//       setErr(true)
//     }

//   };

//   const handleKey = (e) => {
//     e.code === 'Enter' && handleSearch()
//   }

//   const handleSelect = async () => {
//     const combinedId = currentUser.uid > user.uid
//       ? currentUser.uid + user.uid
//       : user.uid + currentUser.uid;
//       try{

//         const res = await getDocs(db, 'chats', combinedId);
//         if (!res.exists()) {
//           await setDoc(doc(db, 'chats', combinedId), {mensagens: []})


//         }
//       }catch(err){

//       }
//   }

//   return (
//     <div className="pesquisar">
//       <div className="form-Pesquisar">
//         <input type="text" placeholder='Procure seus contatos' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
//       </div>

//       {err && <span>Usuario não encontrado</span>}
//       {user && <div className="usuarioChat" onClick={handleSelect}>
//         <img src={user.photoURL} alt="" />
//         <div className="usuarioChatInfo">
//           <span>{user.displayName}</span>
//         </div>
//       </div>}
//     </div>
//   )
// }

// export default Pesquisar



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
  getDoc,
} from "firebase/firestore";
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
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "usuarioChat", currentUser.uid), {
          [combinedId + ".usuarioChatInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "usuarioChat", user.uid), {
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
          onKeyDown={handleKey}
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