import React from "react";
import './Team.css';
function Team() {
  const teamMembers = [
     {
      id: 1,
      name: 'Younes Tooumi',
      role: 'Team Leader',
      photo: require('../images/Equipe/younes-pic.png'),
    },
    {
      id: 2,
      name: 'Maryam Badri',
      role: 'Vice Team Leader',
      photo: require('../images/Equipe/maryam-pic.png'),
    },
    {
      id: 3,
      name: 'Wiam Aboutara Belrhiti',
      role: 'Vice President Project',
      photo: require('../images/Equipe/wiam-pic.png'),
    },
    {
    id: 4,
      name: 'Basma Jawhar',
      role: 'Event Managert',
      photo: require('../images/Equipe/basma-pic.png'),
    },
    {
      id: 5,
      name: 'Imane Ouazzani Chahdi',
      role: 'Head Of Partnerships',
      photo: require('../images/Equipe/imane-pic.png'),
    },
    {
      id: 6,
      name: 'Ammar Massaoudi',
      role: 'Communication Manager',
      photo: require('../images/Equipe/ammar-pic.png'),
    },
    {
    id: 7,
      name: 'Hind Zaky',
      role: 'Human Ressources Manager',
      photo: require('../images/Equipe/hind-pic.png'),
    },
    {
      id: 8,
      name: 'Adbelwadoud El Barouji',
      role: 'Treasurer',
      photo: require('../images/Equipe/abdelwadoud-pic.png'),
    }
  ];

  return (
    <section className="team-section" id="team">
        <div className="team">
      <h1 className="team-title">Notre Équipe</h1>
      <p className="team-description">
        Notre équipe est composée d'étudiants passionnés et engagés, prêts à
        relever les défis sociaux et environnementaux de notre époque. Nous
        croyons fermement que l'entrepreneuriat peut être un puissant moteur de
        changement positif.
      </p>
      <div className="team-grid">
       {teamMembers.map((member)=>(
          <div className="team-card" key={member.id}>
            <img src={member.photo} alt={member.name} className="team-member-photo" />
            <h3 className="team-member-name">{member.name}</h3> 
            <p className="team-member-role">{member.role}</p>

          </div>
       ))}
      </div>
    </div>
    </section>
  
  );
}
export default Team;