 import React from 'react';
import photo from "../images/Acceuil/enactus1.png";
import enactus from "../images/Acceuil/enactus2.png";
import Stats from './Stats'; 
import './About.css';
 function About(){
    return(
    <div className="about">
            
        <div className="us">
            <h1>ENACTUS FSBM</h1>
            <br/>
            <img src={photo} alt="enactus" className="photo"/>
            <p>Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté.</p>
        </div>
        
         <div className="us" id="mission">
            <img src={enactus} alt="enactus" className="enactusmission"/>
                <h1>Notre Objectif</h1>
                <br/>         
                <p>Enactus fsbm a pour mission de mobiliser les étudiants pour devenir des leaders engagés en réalisant des projets innovants qui offrent des solutions durables aux défis sociaux et environnementaux.</p>
        </div>
        <div className="us" id="vision">
            <h1>Notre Impact</h1>
            <Stats />
        </div>
        
    </div>
    );
}
export default About;

