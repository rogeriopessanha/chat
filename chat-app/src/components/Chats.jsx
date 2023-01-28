
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'

const Chats = () => {

  const [chats, setChats] = useState([])
  const {currentUser} = useContext(AuthContext)

  useEffect(() =>{
    const getChats = ()=>{
      const unsub = onSnapshot(doc(db, 'usuarioChats', currentUser.uid), (doc) =>{
        setChats(doc.data())
      })
  
      return() => {
        unsub()
      }
    }

    currentUser.uid && getChats()
  }, [currentUser.uid])

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) =>(

      <div className="usuarioChat" key={chat[0]}>
        <img src={chat[1].usuarioChatInfo.photoURL} alt="" />
        <div className="usuarioChatInfo">
          <span>{chat[1].usuarioChatInfo.displayName}</span>
          <p>{chat[1].usuarioChatInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
    
  )
}

export default Chats