import React from 'react'
import Mensagens from './Mensagens'
import Input from './Input'
import Add from '../img/icons/add-usuario.png'
import Cam from '../img/icons/cam.png'
import Mais from '../img/icons/pontinhos.png'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Maria</span>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={Cam} alt="" />
          <img src={Mais} alt="" />
        </div>
      </div>
        <Mensagens/>
        <Input/>
    </div>
  )
}

export default Chat