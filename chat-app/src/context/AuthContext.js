
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [usuarioAtual, setUsuarioAtual] = useState({})

    useEffect(() =>{
        const unsub = onAuthStateChanged(auth, (user) =>{
            setUsuarioAtual(user)
            console.log(user)
        });

        return () =>{
            unsub()
        };
    }, []);

    return(
    <AuthContext.Provider value={{usuarioAtual}}>
        {children}
    </AuthContext.Provider>
    )

}