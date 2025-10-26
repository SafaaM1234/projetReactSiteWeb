import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import eventImg1 from '../images/Events/Hackathon.JPG'
import eventImg2 from '../images/Events/jour d integration.jpg'
import eventImg3 from '../images/Events/8 Mars.JPG'
import eventImg4 from '../images/Events/Compétition.JPG'
import eventImg5 from '../images/Events/Compétition Phase des Ligues.JPG'
import './Events.css';


function Events(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    const events = [
    {
      id: 1,
      title: 'Hackathon 2023',
      date: '15 décembre 2023',
      
      description: 'Du 15 au 17 décembre 2023, notre équipe a participé au Méga Hackathon Panafricain, où nous avons eu l’opportunité de développer des idées de projets innovants en un temps limité, démontrant notre créativité et notre capacité à relever des défis dans un cadre compétitif.',
      image: eventImg1 ,
    },
    {
      id: 2,
      title: 'Journée d’Intégration',
      date: '5 Septembre 2025',
      
      description: 'La journée de lancement et d’intégration a permis de présenter le club Enactus FSBM tout en facilitant l’intégration des nouveaux membres à travers des jeux et des activités de cohésion. Un moment de partage et de convivialité, marquant le début d’une aventure collective.',
      image: eventImg2,
    },
    {
      id: 3,
      title: 'Journée 8 mars ',
      date: '09 mars 2024',
      
      description: 'L’événement "L’innovation au féminin : Explorer la science et l’entrepreneuriat" a mis en lumière le rôle des femmes dans ces deux domaines. Au programme : des panels sur les femmes leaders en sciences et l’entrepreneuriat, suivis d’un atelier sur le Brand Building. Des experts tels qu’Abdellah Zerhouni, Sanaâ Benahmed et Malika Izid ont partagé leurs expériences inspirantes, clôturant ainsi une journée riche en échanges et apprentissages.',
      image: eventImg3,
    },
    {
      id: 4,
      title: 'Demi finale ',
      date: '2024-2025',
      
      description: 'La fin d’une aventure, mais le début d’une autre. Nous aurions pu atteindre des sommets, mais les choses ne se passent pas toujours comme on l’aurait souhaité.L’histoire est en marche et nous sommes fiers d’être parmi les 12 meilleures équipes du Maroc, une première historique pour Enactus FSBM.The journey is ongoing.E la storia continua.',
      image:eventImg4 ,
    },
    {
      id: 5,
      title: 'Conférence Leadership',
      date: '29 juin 2024',
      
      description: ' En compétition à UIT Kenitra, Enactus FSBM a pris sa place méritée en tête, prouvant que la foi dépasse les statistiques. Malgré des chances qui semblaient minimes, c’est la confiance et l’esprit d’équipe qui ont dominé. Avec la certitude de se qualifier pour le prochain tour, chaque membre de l’équipe a fait preuve de détermination. Parce qu’en famille et entre coéquipiers, la force est décuplée, et ensemble, ils avancent vers de nouveaux défis avec la conviction que le meilleur est à venir.',
      image:eventImg5 ,
    }
    

  ];

  return(
    <div className="event">
            <h2 className="event-title"> Événements</h2>
            <ul className="event-list">
                {events.map((event) => (
                    <li key={event.id} className="event-card" data-aos="fade-up">
                        <img src={event.image} alt={event.title} className="event-image" />
                        <h3 className="event-name">{event.title}</h3>
                        <p className="event-date">{event.date}</p>
                        
                        <p className="event-description">{event.description}</p>
                    </li>
                ))}
            </ul>
    </div>
  );
}
export default Events;
