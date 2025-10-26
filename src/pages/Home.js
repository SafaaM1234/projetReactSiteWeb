import React from "react";
// import Navbar from './Navbar';
import photo from "../images/Acceuil/enactus1.png";
import enactus from "../images/Acceuil/enactus2.png";
import './Home.css'
export function Home(){
    return(
        <div className="home">
            {/* <Navbar/> */}
            <h1 className="bienvenue">Bienvenue sur le site d’Enactus FSBM  </h1>
            <h1 className="description">l’espace où l’innovation portée par les étudiants génère un impact durable et significatif</h1>
        </div>
    );
}


