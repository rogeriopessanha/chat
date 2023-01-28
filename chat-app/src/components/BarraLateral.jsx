 import React from 'react'
 import BarraNavegacao from './BarraNavegacao'
 import Pesquisar from './Pesquisar'
 import Chats from './Chats'
 
 const BarraLateral = () => {
   return (
     <div className="barraLateral">
      <BarraNavegacao/>
      <Pesquisar/>
      <Chats/>
     </div>
   )
 }
 
 export default BarraLateral