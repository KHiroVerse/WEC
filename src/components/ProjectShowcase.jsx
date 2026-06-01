import React from 'react';
import './ProjectShowcase.css';

const ProjectShowcase = ({ onViewMoreClick }) => {
  const projects = [
    {
      id: 1,
      title: 'Decentralized Identity System',
      description: 'A blockchain-based identity management solution for secure and verifiable digital credentials.',
      image: '/WECTITLE.png', // Placeholder
    },
    {
      id: 2,
      title: 'AI-Driven Smart Contract Auditor',
      description: 'Leveraging machine learning to identify vulnerabilities in smart contracts before deployment.',
      image: '/WECTITLE.png', // Placeholder
    },
    {
      id: 3,
      title: 'Web3 Marketplace for Creators',
      description: 'An NFT-powered marketplace enabling artists to monetize their work directly with fans.',
      image: '/WECTITLE.png', // Placeholder
    },
  ];

  return (
    <section id="project-showcase" className="project-showcase-section">
      <div className="project-showcase-container">
        <h2>Project Showcase</h2>
        <div className="project-showcase-line"></div>
        <div className="project-showcase-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="project-button">View Project</button>
              </div>
            </div>
          ))}
        </div>
        <button className="all-projects-button" onClick={onViewMoreClick}>
          View More
        </button>
      </div>
    </section>
  );
};

export default ProjectShowcase;