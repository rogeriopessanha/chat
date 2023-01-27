
import React, {useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const BarraNavegacao = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="barraNavegacao">
      <span className="logo">Bate Papo</span>
      <div className="usuario">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Sair</button>
      </div>
    </div>
  )
}

export default BarraNavegacao