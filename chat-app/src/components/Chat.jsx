import React, {useContext} from 'react'
import Cam from '../img/icons/cam.png'
import Add from '../img/icons/add-usuario.png'
import Mais from '../img/icons/pontinhos.png'
import Mensagens from './Mensagens'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

  const {data} = useContext(ChatContext)

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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