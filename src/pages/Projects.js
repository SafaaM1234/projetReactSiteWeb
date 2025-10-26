import React, {useState} from "react";
import './Projects.css';

import project1Img from '../images/Projets/projet1.png';
import project2Img from '../images/Projets/projet2.png';
import project3Img from '../images/Projets/projet3.png';
import project4Img from '../images/Projets/projet4.png';
import project5Img from '../images/Projets/projet5.png';
import project6Img from '../images/Projets/projet6.png';
import project7Img from '../images/Projets/projet7.png';
import project8Img from '../images/Projets/projet8.png';
import project9Img from '../images/Projets/projet9.png';
import project10Img from '../images/Projets/projet10.png';
import project11Img from '../images/Projets/projet11.png';



 function Projects() {
    const[showDescriptions, setShowDescriptions] =useState(false);

    const Bprojets=() =>{
        setShowDescriptions(!showDescriptions);
        
    };
    
      const projects = [
    {
      id: 1,
      title: 'Voltainos',
      description: ' Avec sa solution énergétique durable, VOLTAINOS combine l’énergie éolienne avec la technologie piézo électrique pour une production d’électricité flexible et durable..',
      image: project1Img,
        },
    {
      id: 2,
      title: 'Uniride',
      description: ' une application mobile optimise le transport étudiant au Maroc avec covoiturage adaptatif, promouvant mobilité durable, économique et sécurisée.',
      image: project2Img,
          },
    {
      id: 3,
      title: 'Sitauti',
      description: ' Une plateforme interactive dédiée à l’autisme, offrant divers moyens de soutien aux autistes, leurs familles et aidants,répondant à un besoin social urgent.',
      image: project3Img,
          },
    {
      id: 4,
      title: 'Reskin',
      description: ' Face au gaspillage alimentaire et à l’impact néfaste des cosmétiques industriels sur l’environnement, Reskin transforme ces résidus en cosmétiques durables. En recyclantles déchets alimentaires, l’entreprise réduit l’empreinte carbone et crée des produits respectueux de la peau et de la planète, répondant ainsi aux attentes des consommateurs éco-conscients.',
      image: project4Img,
          },
    {
      id: 5,
      title: 'Potrinov',
      description: 'POTRINOV réinvente l’art de la poterie en alliant savoir-faire traditionnel et innovation moderne. Avec des créations uniques et un service digital en cours de finalisation, nous offrirons à nos partenaires une visibilité authentique et engageante. Ce projet vise à soutenir un artisanat durable et éco-responsable, tout en promettant une expérience enrichissante pour tous.',
      image: project5Img,
          },
    {
      id: 6,
      title: 'Enbo',
      description: 'propose des boîtes écologiques à trois couches, faites de matériaux recyclés, pour protéger les produits et assurer leur traçabilité.',
      image: project6Img,
          },
    {
      id: 7,
      title: 'Educlass mingle',
      description: ' un site web intégrant réseaux sociaux et étude, facilitant l’apprentissage, la révision et la communication simultanément pour les utilisateurs.',
      image: project7Img,
          },
    {
      id: 8,
      title: 'Bottle 3D',
      description: ' projet vise à collecter et traiter les bouteilles en plastique pour les recycler en filaments utilisables dans les imprimantes 3D.',
      image: project8Img,
          },
    {
      id: 9,
      title: 'Bistrokabb',
      description: 'le câprier, trésor nutritionnel souvent négligé au Maroc, est mis en lumière par Bistrolabb. En créant des produits alimentaires sains et variés à base de câpres, cette initiative soutient les producteurs locaux, valorise le savoir-faire artisanal et crée des opportunités économiques pour les femmes, tout en ravivant la cuisine marocaine traditionnelle.',
      image: project9Img,
          },
    {
      id: 10,
      title: 'Botaba',
      description: ' projet vise à collecter et traiter les bouteilles en plastique pour les recycler en filaments utilisables dans les imprimantes 3D.',
      image: project10Img,
          },
    {
      id: 11,
      title: 'Biogazify',
      description: ' projet vise à convertir du biogaz issu de déchets organiques en une source d’énergie pratique pour la cuisine.',
      image: project11Img,
      
    }
    
  ];
    return(
        <section className="projects" id="projets">
            <h3 className="projects-title">Nos Projets</h3>
            <button className="info" onClick={Bprojets}>
            {showDescriptions?"Masquer les informations ":"Pour plus d'information clicker ici !"} 
            </button>
        <div className="projects-container"> 
            {projects.map((project) => (
              <div className="projet-container-card" key={project.id}>
                <div className="projet-card" key={project.id}>
                    <img src={project.image} alt={project.title} className="projet-image" />
                    <h3 className="projet-title">{project.title}</h3>
                    <div className="projet-card-description"> 
                      
                       {showDescriptions ? (<p className="projet-description">{project.description}</p>):""} 
                    
                    </div> 
                </div>
              </div>
                
            ))} 
            

        </div>
        
        </section>

    );
}
export default Projects;