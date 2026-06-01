import React from 'react';
import '../App.css';

const ProgramPartners = () => {
  const partners = [
    { name: 'Superteam Indo', logo: '/Superteam Indo.png' },
    { name: 'UPbit', logo: '/UPbit_Logo.png' },
    { name: 'SCC', logo: '/SCC.png' },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>Our Program Partners</h2>
        <div className="partners-title-line"></div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramPartners;