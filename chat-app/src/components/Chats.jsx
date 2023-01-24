
import React from 'react'
import Add from '../img/perfil/pic2.png'

export const Chats = () => {
  return (
    <div className="chats">
      <div className="usuarioChat">
        <img src={Add} alt="" />
        <div className="usuarioChatInfo">
          <span>Maria</span>
          <p>Olá, mundo</p>
        </div>
      </div>

      <div className="usuarioChat">
        <img src={Add} alt="" />
        <div className="usuarioChatInfo">
          <span>Maria</span>
          <p>Olá, </p>
        </div>
      </div>

      <div className="usuarioChat">
        <img src={Add} alt="" />
        <div className="usuarioChatInfo">
          <span>Maria</span>
          <p> mundo</p>
        </div>
      </div>

    </div>
    
  )
}

export default Chats