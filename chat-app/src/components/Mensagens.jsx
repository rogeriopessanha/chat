
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useState, useEffect } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Mensagem from './Mensagem'

const Mensagens = () => {

  const [mensagens, setMensagens] = useState([])
  const {data} = useContext(ChatContext)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) =>{
      doc.exists() && setMensagens(doc.data().mensagens)
    })

    return()=>{
      unSub()
    }
  }, [data.chatId])

  console.log(mensagens)

  return (
    <div className="mensagens">
      {mensagens.map((m)=>(
        <Mensagem mensagem={m} key={m.id} />
      ))}
    </div>
  )
}

export default Mensagens