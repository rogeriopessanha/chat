
import React, {useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from './context/AuthContext'

export const BarraNavegacao = () => {
  const {usuarioAtual} = useContext(AuthContext)
  return (
    <div className="barraNavegacao">
      <span className="logo">Bate Papo</span>
      <div className="usuario">
        <img src={usuarioAtual.fotoURL} alt="" />
        <span>{usuarioAtual.nome}</span>
        <button onClick={() => signOut(auth)}>Sair</button>
      </div>
    </div>
  )
}

export default BarraNavegacao