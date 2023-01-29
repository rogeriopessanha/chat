
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

export const Mensagem = ({mensagem}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagem]);

  return (
    <div 
    ref={ref}
    className={`mensagem ${mensagem.senderId === currentUser.uid && 'dono'}`}>

      <div className="mensagemInfo">
        <img 
        src={mensagem.senderId === currentUser.uid 
          ? currentUser.photoURL 
          : data.user.photoURL} alt="" />
          
        <span>Agora</span>
      </div>

      <div className="mensagemConteudo">
        <p>{mensagem.text}</p>
        {mensagem.img && <img src={mensagem.img} alt="" />}
      </div>
    </div>
  )
}

export default Mensagem