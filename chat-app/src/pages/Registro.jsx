
import React, { useState } from "react";
import Add from '../img/icons/retrato.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Registro = () => {
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const senha = e.target[2].value
        const file = e.target[3].files[0]

        try {

            const res = await createUserWithEmailAndPassword(auth, email, senha)

            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);


            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        
                        await setDoc(doc(db, "usuario", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        
                        await setDoc(doc(db, "usuarioChats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };

    return (
        <div className="form-Container">
            <div className="form-box">

                <span className="logo">Bate Papo</span>
                <span className="titulo">Cadastrar</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input required style={{ display: 'none' }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Adicione sua foto</span>
                    </label>
                    <button disabled={loading}>Cadastre-se</button>
                    {loading && "Fazendo upload e compactando a imagem, aguarde..."}
                    {err && <span>Deu algum erro</span>}
                </form>
                <p>Já tem uma conta? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Registro