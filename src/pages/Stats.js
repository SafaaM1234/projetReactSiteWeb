import React from 'react';
import { FaBuilding, FaUsers, FaChartBar, FaHandshake, FaClock, FaGlobe } from 'react-icons/fa';
import './Stats.css'; 


const statsData = [
  {
    id: 1,
    title: "Fondation",
    value: "2014",
    icon: <FaBuilding />,
  },
  {
    id: 2,
    title: "Jeunes mobilisés",
    value: "1000",
    icon: <FaUsers />,
  },
  {
    id: 3,
    title: "Projets développés",
    value: "40",
    icon: <FaChartBar />,
  },
  {
    id: 4,
    title: "Bénéficiaires impactés",
    value: "500",
    icon: <FaHandshake />,
  },
  {
    id: 5,
    title: "Heures de formations dispensées",
    value: "3000",
    icon: <FaClock />,
  },
  {
    id: 6,
    title: "Objectifs durables touchés",
    value: "13",
    icon: <FaGlobe />,
  },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {statsData.map(stat => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
