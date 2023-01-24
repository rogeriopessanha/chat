
import React from 'react'
import Add from '../img/perfil/pic1.png'

export const BarraNavegacao = () => {
  return (
    <div className="barraNavegacao">
      <span className="logo">Bate Papo</span>
      <div className="usuario">
        <img src={Add} alt="" />
        <span>Rogerio</span>
        <button>Sair</button>
      </div>
    </div>
  )
}

export default BarraNavegacao