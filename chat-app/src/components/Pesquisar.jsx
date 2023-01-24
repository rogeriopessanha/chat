
import React from 'react'
import Add from '../img/perfil/pic2.png'

export const Pesquisar = () => {
  return (
    <div className="pesquisar">
      <div className="form-Pesquisar">
        <input type="text" placeholder='Procure seus contatos'/>
      </div>

      <div className="usuarioChat">
        <img src={Add} alt="" />
        <div className="usuarioChatInfo">
          <span>Maria</span>
        </div>
      </div>
    </div>
  )
}

export default Pesquisar