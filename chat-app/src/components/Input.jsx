
import React from 'react'
import Foto from '../img/icons/picture.png'
import Grampo from '../img/icons/grampo.png'

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Escreva sua mensagem' />
      <div className="enviar">
        
      <label htmlFor='file'>
          <img src={Foto} alt="" />
        </label>

        <img src={Grampo} alt="" />
        <input type="text" style={{display:'none'}} id='file' />
        
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Input