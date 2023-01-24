
import React from "react";
import Add from '../img/icons/retrato.png'

const Registro = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        const nome = e.target[0].value
        const email = e.target[1].value
        const senha = e.target[2].value
        const file = e.target[3].value
    }

    return(
        <div className="form-Container">
            <div className="form-box">

                <span className="logo">Bate Papo</span>
                <span className="titulo">Cadastrar</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <input style={{display:'none'}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Adicione sua foto</span>
                    </label>
                    <button>Cadastre-se</button>
                </form>
                <p>Já tem uma conta? Login</p>
            </div>
        </div>
    )
}

export default Registro