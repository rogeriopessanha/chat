

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const senha = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    };

    return (
        <div className="form-Container">
            <div className="form-box">

                <span className="logo">Bate Papo</span>
                <span className="titulo">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button>Login</button>
                    {err && <span>Deu algum erro</span>}
                </form>
                <p>Não tem uma conta? <Link to='/registro' className="link">Cadastre-se</Link></p >
            </div>
        </div>
    )
}

export default Login