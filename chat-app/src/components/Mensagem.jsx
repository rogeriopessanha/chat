
import React from 'react'
import Foto from '../img/perfil/pic1.png'
import Foto2 from '../img/perfil/pic2.png'

export const Mensagem = () => {
  return (
    <div className="mensagem">
      <div className="mensagemInfo">
        <img src={Foto} alt=""  />
        <span>Agora</span>
      </div>

      {/* <div className="mensagemConteudo">
        <p>Olá</p>
        <img src={Foto2} alt="" />
      </div> */}
    </div>
  )
}

export default Mensagem