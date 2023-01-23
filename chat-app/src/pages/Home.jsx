
import React from "react";
import BarraLateral from '../components/BarraLateral'
import Chat from '../components/Chat'

const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <BarraLateral/>
                <Chat/>
            </div>
        </div>
    )
}

export default Home