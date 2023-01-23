

import React from "react";

const Login = () => {
    return(
        <div className="form-Container">
            <div className="form-box">

                <span className="logo">Bate Papo</span>
                <span className="titulo">Login</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <button>Login</button>
                </form>
                <p>Não tem uma conta? Cadastre-se</p>
            </div>
        </div>
    )
}

export default Login