import React from 'react';
import './AllProjects.css';

const AllProjects = ({ onBack }) => {
  const projects = [
    {
      id: 1,
      title: 'Decentralized Identity System',
      description: 'A blockchain-based identity management solution for secure and verifiable digital credentials.',
      image: '/WECTITLE.png',
    },
    {
      id: 2,
      title: 'AI-Driven Smart Contract Auditor',
      description: 'Leveraging machine learning to identify vulnerabilities in smart contracts before deployment.',
      image: '/WECTITLE.png',
    },
    {
      id: 3,
      title: 'Web3 Marketplace for Creators',
      description: 'An NFT-powered marketplace enabling artists to monetize their work directly with fans.',
      image: '/WECTITLE.png',
    },
    {
      id: 4,
      title: 'DAO Governance Toolkit',
      description: 'A suite of tools for decentralized organizations to manage voting and treasury.',
      image: '/WECTITLE.png',
    },
    {
      id: 5,
      title: 'Cross-chain Bridge Protocol',
      description: 'Securely moving assets between different blockchain networks.',
      image: '/WECTITLE.png',
    },
    {
      id: 6,
      title: 'Zero Knowledge Proof Library',
      description: 'Tools for implementing privacy-preserving proofs in decentralized applications.',
      image: '/WECTITLE.png',
    },
  ];

  return (
    <div className="all-projects-page">
      <header className="all-projects-header">
        <button className="back-button" onClick={onBack}>&larr; Back to Home</button>
        <h1>Our Projects</h1>
        <div className="all-projects-line"></div>
      </header>

      <div className="all-projects-container">
        <div className="all-projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="all-projects-card">
              <div className="all-projects-image-container">
                <img src={project.image} alt={project.title} className="all-projects-image" />
              </div>
              <div className="all-projects-info">
                <h3 className="all-projects-title">{project.title}</h3>
                <p className="all-projects-description">{project.description}</p>
                <button className="all-projects-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;