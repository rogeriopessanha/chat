
import React, { useState } from "react";
import Add from '../img/icons/retrato.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Registro = () => {
    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const nome = e.target[0].value
        const email = e.target[1].value
        const senha = e.target[2].value
        const file = e.target[3].files[0]

        try {

            const res = await createUserWithEmailAndPassword(auth, email, senha)

            const storageRef = ref(storage, nome);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(

                (error) => {
                    setErr(true)
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(async (downloadURL) => {
                            await updateProfile(res.user, {
                                nome,
                                photoURL: downloadURL,
                            })
                            await setDoc(doc(db, 'users', res.user.uid), {
                                uid: res.user.uid,
                                nome,
                                email,
                                photoURL: downloadURL
                            })
                        });
                }
            );
        } catch (err) {
            setErr(true)
        }

    }

    return (
        <div className="form-Container">
            <div className="form-box">

                <span className="logo">Bate Papo</span>
                <span className="titulo">Cadastrar</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input style={{ display: 'none' }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Adicione sua foto</span>
                    </label>
                    <button>Cadastre-se</button>
                    {err && <span>Deu algum erro</span>}
                </form>
                <p>Já tem uma conta? Login</p>
            </div>
        </div>
    )
}

export default Registro